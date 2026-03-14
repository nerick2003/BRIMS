import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService, CertificateRequest } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './requests.component.html',
  styles: [
    `
      .muted {
        color: var(--color-text-muted);
      }

      .table {
        margin-top: 1rem;
      }

      .table th:last-child {
        text-align: left;
        white-space: nowrap;
      }

      .actions-cell {
        text-align: left;
        white-space: nowrap;
      }

      .actions-cell__buttons {
        display: inline-flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.5rem;
      }

      /* Avoid double horizontal scrollbars on mobile for this page */
      .requests-page .table-wrap {
        overflow-x: auto;
        margin: 0;
        padding: 0;
      }

      .bulk-actions-bar {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 1.5rem;
        display: flex;
        justify-content: center;
        pointer-events: none;
        z-index: 1000;
        animation: bulkBarPopIn 180ms cubic-bezier(0.16, 1, 0.3, 1);
        animation-fill-mode: both;
      }

      .bulk-actions-bar .bulk-actions-btn {
        pointer-events: auto;
        min-width: 260px;
        padding: 0.85rem 1.75rem;
        font-weight: 600;
        border-radius: 999px;
        box-shadow: 0 10px 25px rgba(15, 23, 42, 0.25);
        border: none;
        background: linear-gradient(135deg, #2563eb, #1d4ed8);
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .bulk-actions-bar .bulk-actions-btn:hover {
        background: linear-gradient(135deg, #1d4ed8, #1e40af);
        transform: translateY(-1px);
      }

      .bulk-actions-bar .bulk-actions-btn:active {
        transform: translateY(0);
        box-shadow: 0 6px 16px rgba(15, 23, 42, 0.25);
      }

      .bulk-actions-bar.bulk-actions-bar--closing {
        animation: bulkBarPopOut 160ms cubic-bezier(0.4, 0, 1, 1) forwards;
      }

      @keyframes bulkBarPopIn {
        from {
          opacity: 0;
          transform: translateY(24px) scale(0.9);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes bulkBarPopOut {
        from {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        to {
          opacity: 0;
          transform: translateY(16px) scale(0.9);
        }
      }
    `,
  ],
})
export class RequestsComponent {
  /** Track selected request IDs for bulk actions (admin only). */
  private selectedRequestIds = new Set<string>();

  constructor(public data: DataService, public auth: AuthService) {}

  // Only show active (non-archived) requests in the main list
  get requests(): CertificateRequest[] {
    return this.data.getActiveRequests();
  }

  get isAdmin(): boolean {
    return this.auth.currentUser?.role === 'admin';
  }

  get selectedCount(): number {
    return this.selectedRequestIds.size;
  }

  /** Controls visibility of the animated bulk actions bar. */
  isBulkActionsBarClosing = false;
  private bulkBarCloseTimeout: ReturnType<typeof setTimeout> | null = null;

  get showBulkActionsBar(): boolean {
    return this.selectedCount > 0 || this.isBulkActionsBarClosing;
  }

  get allSelected(): boolean {
    const current = this.requests;
    return current.length > 0 && current.every((r) => this.selectedRequestIds.has(r.id));
  }

  get someSelected(): boolean {
    const current = this.requests;
    const selectedOnPage = current.filter((r) => this.selectedRequestIds.has(r.id)).length;
    return selectedOnPage > 0 && !this.allSelected;
  }

  isSelected(request: CertificateRequest): boolean {
    return this.selectedRequestIds.has(request.id);
  }

  onRequestSelectionChange(request: CertificateRequest, checked: boolean): void {
    if (!this.isAdmin) return;
    if (checked) {
      this.selectedRequestIds.add(request.id);
    } else {
      this.selectedRequestIds.delete(request.id);
    }
    this.handleBulkBarSelectionChanged();
  }

  onToggleSelectAll(checked: boolean): void {
    if (!this.isAdmin) return;
    if (checked) {
      this.requests.forEach((r) => this.selectedRequestIds.add(r.id));
    } else {
      this.requests.forEach((r) => this.selectedRequestIds.delete(r.id));
    }
    this.handleBulkBarSelectionChanged();
  }

  clearSelection(): void {
    this.selectedRequestIds.clear();
    this.handleBulkBarSelectionChanged();
  }

  private handleBulkBarSelectionChanged(): void {
    if (this.selectedCount > 0) {
      if (this.bulkBarCloseTimeout) {
        clearTimeout(this.bulkBarCloseTimeout);
        this.bulkBarCloseTimeout = null;
      }
      this.isBulkActionsBarClosing = false;
      return;
    }

    if (this.isBulkActionsBarClosing || this.bulkBarCloseTimeout) {
      return;
    }

    this.isBulkActionsBarClosing = true;
    this.bulkBarCloseTimeout = setTimeout(() => {
      this.isBulkActionsBarClosing = false;
      this.bulkBarCloseTimeout = null;
    }, 180);
  }

  async archiveRequest(request: CertificateRequest): Promise<void> {
    if (!this.isAdmin) return;
    // Prefer archiving once a request is in a final state
    if (request.status !== 'Approved' && request.status !== 'Rejected') {
      const result = await Swal.fire({
        title: 'Archive request?',
        text: 'This request is not yet Approved or Rejected. Archive anyway?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, archive',
        cancelButtonText: 'Cancel',
      });
      if (!result.isConfirmed) return;
    } else {
      const result = await Swal.fire({
        title: 'Archive request?',
        text: `Archive request "${request.type}" (${request.status})? It will move to Archives and be hidden from the main list.`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, archive',
        cancelButtonText: 'Cancel',
      });
      if (!result.isConfirmed) return;
    }
    this.data.archiveRequest(request.id);
    this.selectedRequestIds.delete(request.id);
    await Swal.fire({
      title: 'Archived',
      text: 'The request has been moved to Archives.',
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
    });
  }

  async archiveSelected(): Promise<void> {
    if (!this.isAdmin || this.selectedRequestIds.size === 0) return;

    const count = this.selectedRequestIds.size;
    const result = await Swal.fire({
      title: 'Archive selected requests?',
      text: `Archive ${count} selected request(s)? They will move to Archives and be hidden from the main list.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, archive',
      cancelButtonText: 'Cancel',
    });
    if (!result.isConfirmed) return;

    const toArchive = this.requests.filter((r) => this.selectedRequestIds.has(r.id));
    toArchive.forEach((r) => this.data.archiveRequest(r.id));
    this.clearSelection();

    await Swal.fire({
      title: 'Archived',
      text: `${count} request(s) have been moved to Archives.`,
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
    });
  }
}

