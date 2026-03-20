import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DataService, Resident } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-residents-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './residents-list.component.html',
  styleUrls: ['./residents-list.component.scss'],
})
export class ResidentsListComponent implements OnDestroy {
  constructor(public data: DataService, public auth: AuthService) {}
  
  search = '';
  gender = '';
  age = '';
  purok = '';

  /** Track selected resident IDs for bulk actions. */
  private selectedResidentIds = new Set<string>();

  get filteredResidents() {
    // Start from active (non-archived) residents only
    let result = [...this.data.getActiveResidents()];

    // Filter by search (name or residentId)
    if (this.search) {
      const searchLower = this.search.toLowerCase();
      result = result.filter(r =>
        r.name.toLowerCase().includes(searchLower) ||
        r.residentId.toLowerCase().includes(searchLower)
      );
    }

    // Filter by gender
    if (this.gender) {
      result = result.filter(r => r.gender === this.gender);
    }

    // Filter by age range
    if (this.age) {
      if (this.age === '0-17') {
        result = result.filter(r => r.age >= 0 && r.age <= 17);
      } else if (this.age === '18-59') {
        result = result.filter(r => r.age >= 18 && r.age <= 59);
      } else if (this.age === '60+') {
        result = result.filter(r => r.age >= 60);
      }
    }

    // Filter by purok
    if (this.purok) {
      result = result.filter(r => r.purok === this.purok);
    }

    return result;
  }

  /** Only admins can archive residents. */
  get canArchiveResidents(): boolean {
    return this.auth.currentUser?.role === 'admin';
  }

  get selectedCount(): number {
    return this.selectedResidentIds.size;
  }

  /** Controls visibility of the animated bulk actions bar. */
  isBulkActionsBarClosing = false;
  private bulkBarCloseTimeout: ReturnType<typeof setTimeout> | null = null;

  private readonly bulkArchiveFabHideClass = 'bulk-archive-active';

  get showBulkActionsBar(): boolean {
    return this.selectedCount > 0 || this.isBulkActionsBarClosing;
  }

  ngOnDestroy(): void {
    // Ensure we don't leave the FAB hidden after leaving the page.
    if (typeof document !== 'undefined') {
      document.body.classList.remove(this.bulkArchiveFabHideClass);
    }
  }

  get allSelected(): boolean {
    const current = this.filteredResidents;
    return current.length > 0 && current.every(r => this.selectedResidentIds.has(r.id));
  }

  get someSelected(): boolean {
    const current = this.filteredResidents;
    const selectedOnPage = current.filter(r => this.selectedResidentIds.has(r.id)).length;
    return selectedOnPage > 0 && !this.allSelected;
  }

  isSelected(resident: Resident): boolean {
    return this.selectedResidentIds.has(resident.id);
  }

  onToggleSelectAll(checked: boolean): void {
    if (!this.canArchiveResidents) return;
    if (checked) {
      this.filteredResidents.forEach(r => this.selectedResidentIds.add(r.id));
    } else {
      this.filteredResidents.forEach(r => this.selectedResidentIds.delete(r.id));
    }
    this.handleBulkBarSelectionChanged();
  }

  onResidentSelectionChange(resident: Resident, checked: boolean): void {
    if (!this.canArchiveResidents) return;
    if (checked) {
      this.selectedResidentIds.add(resident.id);
    } else {
      this.selectedResidentIds.delete(resident.id);
    }
    this.handleBulkBarSelectionChanged();
  }

  private clearSelection(): void {
    this.selectedResidentIds.clear();
    this.handleBulkBarSelectionChanged();
  }

  private syncBulkArchiveFabVisibility(): void {
    if (typeof document === 'undefined' || !document.body) return;
    document.body.classList.toggle(this.bulkArchiveFabHideClass, this.showBulkActionsBar);
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

  async archiveResident(resident: Resident): Promise<void> {
    if (!this.canArchiveResidents) return;
    const result = await Swal.fire({
      title: 'Archive resident?',
      text: `Archive resident "${resident.name}" (${resident.residentId})? They will move to Archives and be hidden from the main list.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, archive',
      cancelButtonText: 'Cancel',
    });
    if (!result.isConfirmed) return;
    this.data.archiveResident(resident.id, 'Archived by admin from Residents list');
    await Swal.fire({
      title: 'Archived',
      text: 'The resident has been moved to Archives.',
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
    });
  }

  async archiveSelectedResidents(): Promise<void> {
    if (!this.canArchiveResidents || this.selectedResidentIds.size === 0) return;

    const count = this.selectedResidentIds.size;
    const result = await Swal.fire({
      title: 'Archive selected residents?',
      text: `Archive ${count} selected resident(s)? They will move to Archives and be hidden from the main list.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, archive',
      cancelButtonText: 'Cancel',
    });
    if (!result.isConfirmed) return;

    const toArchive = this.filteredResidents.filter(r => this.selectedResidentIds.has(r.id));
    toArchive.forEach(r =>
      this.data.archiveResident(r.id, 'Archived by admin from Residents list (bulk action)')
    );
    this.clearSelection();

    await Swal.fire({
      title: 'Archived',
      text: `${count} resident(s) have been moved to Archives.`,
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
    });
  }
}
