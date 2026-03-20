import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DataService, Household } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { LoadingStateComponent } from '../../shared/loading-state.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-households',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LoadingStateComponent],
  templateUrl: './households.component.html',
  styleUrls: ['./households.component.scss'],
})
export class HouseholdsComponent implements OnInit, OnDestroy {
  constructor(public data: DataService) {}
  
  search = '';
  purok = '';
  isLoading = true;
  hasError = false;
  errorMessage = '';
  private subscription?: Subscription;
  private loadingTimeout?: ReturnType<typeof setTimeout>;

  /** Track selected household IDs for bulk actions. */
  private selectedHouseholdIds = new Set<string>();

  ngOnInit() {
    // Check if data is already loaded
    if (this.data.households.length > 0) {
      this.isLoading = false;
    }

    // Set a timeout to detect if data loading takes too long or fails
    this.loadingTimeout = setTimeout(() => {
      if (this.isLoading && this.data.households.length === 0) {
        this.hasError = true;
        this.errorMessage = 'Unable to load households data. Please check your connection and try again.';
        this.isLoading = false;
      }
    }, 10000); // 10 second timeout

    // Subscribe to households data to detect when it's loaded
    this.subscription = this.data.householdsObservable.subscribe({
      next: (households) => {
        if (this.loadingTimeout) {
          clearTimeout(this.loadingTimeout);
        }
        if (households.length > 0 || this.data.households.length > 0) {
          // Small delay to show loading state (makes it feel more responsive)
          setTimeout(() => {
            this.isLoading = false;
            this.hasError = false;
          }, 300);
        }
      },
      error: (error) => {
        if (this.loadingTimeout) {
          clearTimeout(this.loadingTimeout);
        }
        this.hasError = true;
        this.isLoading = false;
        this.errorMessage = error?.message || 'An error occurred while loading households. Please try again later.';
        console.error('Error loading households:', error);
      }
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    if (this.loadingTimeout) {
      clearTimeout(this.loadingTimeout);
    }

    if (typeof document !== 'undefined') {
      document.body.classList.remove(this.bulkArchiveFabHideClass);
    }
  }

  retryLoad(): void {
    this.hasError = false;
    this.errorMessage = '';
    this.isLoading = true;
    // Trigger a reload by checking the data service again
    // The subscription will handle the update
    setTimeout(() => {
      if (this.data.households.length === 0) {
        this.hasError = true;
        this.errorMessage = 'Unable to load households data. Please refresh the page.';
        this.isLoading = false;
      }
    }, 5000);
  }

  get filteredHouseholds(): Household[] {
    // Only show active (non-archived) households in the main list
    let result = [...this.data.getActiveHouseholds()];
    
    if (this.search) {
      const searchLower = this.search.toLowerCase();
      result = result.filter(h =>
        h.householdId.toLowerCase().includes(searchLower) ||
        h.address.toLowerCase().includes(searchLower) ||
        this.getHeadOfHousehold(h).toLowerCase().includes(searchLower)
      );
    }
    
    if (this.purok) {
      result = result.filter(h => h.purok === this.purok);
    }
    
    return result;
  }

  get selectedCount(): number {
    return this.selectedHouseholdIds.size;
  }

  /** Controls visibility of the animated bulk actions bar. */
  isBulkActionsBarClosing = false;
  private bulkBarCloseTimeout: ReturnType<typeof setTimeout> | null = null;

  private readonly bulkArchiveFabHideClass = 'bulk-archive-active';

  get showBulkActionsBar(): boolean {
    return this.selectedCount > 0 || this.isBulkActionsBarClosing;
  }

  get allSelected(): boolean {
    const current = this.filteredHouseholds;
    return current.length > 0 && current.every(h => this.selectedHouseholdIds.has(h.id));
  }

  get someSelected(): boolean {
    const current = this.filteredHouseholds;
    const selectedOnPage = current.filter(h => this.selectedHouseholdIds.has(h.id)).length;
    return selectedOnPage > 0 && !this.allSelected;
  }

  isSelected(household: Household): boolean {
    return this.selectedHouseholdIds.has(household.id);
  }

  onToggleSelectAll(checked: boolean): void {
    if (checked) {
      this.filteredHouseholds.forEach(h => this.selectedHouseholdIds.add(h.id));
    } else {
      this.filteredHouseholdIdsClear();
    }
    this.handleBulkBarSelectionChanged();
  }

  onHouseholdSelectionChange(household: Household, checked: boolean): void {
    if (checked) {
      this.selectedHouseholdIds.add(household.id);
    } else {
      this.selectedHouseholdIds.delete(household.id);
    }
    this.handleBulkBarSelectionChanged();
  }

  private filteredHouseholdIdsClear(): void {
    this.filteredHouseholds.forEach(h => this.selectedHouseholdIds.delete(h.id));
  }

  private clearSelection(): void {
    this.selectedHouseholdIds.clear();
    this.handleBulkBarSelectionChanged();
  }

  private handleBulkBarSelectionChanged(): void {
    if (this.selectedCount > 0) {
      if (this.bulkBarCloseTimeout) {
        clearTimeout(this.bulkBarCloseTimeout);
        this.bulkBarCloseTimeout = null;
      }
      this.isBulkActionsBarClosing = false;
      this.syncBulkArchiveFabVisibility();
      return;
    }

    if (this.isBulkActionsBarClosing || this.bulkBarCloseTimeout) {
      return;
    }

    this.isBulkActionsBarClosing = true;
    this.syncBulkArchiveFabVisibility();
    this.bulkBarCloseTimeout = setTimeout(() => {
      this.isBulkActionsBarClosing = false;
      this.bulkBarCloseTimeout = null;
      this.syncBulkArchiveFabVisibility();
    }, 180);
  }

  private syncBulkArchiveFabVisibility(): void {
    if (typeof document === 'undefined' || !document.body) return;
    document.body.classList.toggle(this.bulkArchiveFabHideClass, this.showBulkActionsBar);
  }

  async archiveSelectedHouseholds(): Promise<void> {
    if (this.selectedHouseholdIds.size === 0) return;
    const count = this.selectedHouseholdIds.size;
    const result = await Swal.fire({
      title: 'Archive selected households?',
      text: `Archive ${count} selected household(s)? They will move to Archives and be hidden from the main list.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, archive',
      cancelButtonText: 'Cancel',
    });
    if (!result.isConfirmed) return;

    const toArchive = this.filteredHouseholds.filter(h => this.selectedHouseholdIds.has(h.id));
    toArchive.forEach(h => this.data.updateHousehold(h.id, { archived: true, archivedAt: new Date().toISOString() }));
    this.clearSelection();
  }

  getHeadOfHousehold(household: Household): string {
    const head = household.members.find(m => m.relationship === 'Head');
    return head ? head.name : household.members[0]?.name || 'N/A';
  }
}