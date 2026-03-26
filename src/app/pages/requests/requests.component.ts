import { Component, OnDestroy } from '@angular/core';
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

      .requests-page {
        margin-top: -20px;
      }

      @media (max-width: 640px) {
        .requests-page {
          margin-top: -10px;
        }
      }

      .table {
        margin-top: 1rem;
      }

      .table th:last-child {
        text-align: center;
        white-space: nowrap;
      }

      .actions-cell {
        text-align: center;
        white-space: nowrap;
      }

      .actions-cell__buttons {
        display: flex;
        align-items: center;
        justify-content: center;
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
        bottom: 28px;
        display: flex;
        justify-content: center;
        pointer-events: none;
        z-index: 1000;
        animation: bulkBarPopIn 180ms cubic-bezier(0.16, 1, 0.3, 1);
        animation-fill-mode: both;

        /* Reserve horizontal space on the right for the floating Add FAB.
           Needed not just on mobile; otherwise fixed center button can overlap it
           on tablet/desktop widths. */
        @media (max-width: 1280px) {
          padding-left: 0;
          padding-right: 0;
          box-sizing: border-box;
        }

        @media (max-width: 640px) {
          bottom: 20px;
          padding-left: 0;
          padding-right: 0;
          box-sizing: border-box;
        }
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
        position: relative;
        overflow: hidden;
        isolation: isolate;
        transition: transform 0.18s cubic-bezier(0.22, 1, 0.36, 1),
          box-shadow 0.24s cubic-bezier(0.22, 1, 0.36, 1),
          filter 0.2s ease;

        &::after {
          content: '';
          position: absolute;
          top: -120%;
          left: -35%;
          width: 40%;
          height: 320%;
          background: linear-gradient(
            115deg,
            transparent 0%,
            rgba(255, 255, 255, 0.06) 35%,
            rgba(255, 255, 255, 0.42) 50%,
            rgba(255, 255, 255, 0.06) 65%,
            transparent 100%
          );
          transform: translateX(-220%) rotate(18deg);
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
          z-index: 0;
        }

        @media (max-width: 640px) {
          min-width: 0;
          width: 100%;
          max-width: min(560px, calc(100vw - 32px));
          padding: 0.85rem 16px;
          box-sizing: border-box;
        }
      }

      .bulk-actions-bar .bulk-actions-btn:hover {
        background: linear-gradient(135deg, #1d4ed8, #1e40af);
        transform: translateY(-2px);
        box-shadow: 0 12px 28px rgba(15, 23, 42, 0.3);
        filter: saturate(1.06);

        &::after {
          transform: translateX(360%) rotate(18deg);
        }
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

      /* Mobile cards (Option A) */
      .requests-page .requests-mobile-list {
        display: none;
      }

      @media (max-width: 640px) {
        .requests-page .requests-table-wrap {
          display: none;
        }

        .requests-page .requests-mobile-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 1rem;
          padding-bottom: 110px;
        }

        .requests-page .mobile-select-all {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 6px;
        }

        .requests-page .requests-mobile-card {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow);
          padding: 14px;
        }

        .requests-page .requests-mobile-card__top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }

        .requests-page .requests-mobile-card__checkbox {
          margin-top: 3px;
          flex-shrink: 0;
        }

        .requests-page .requests-mobile-card__titles {
          min-width: 0;
          flex: 1;
        }

        .requests-page .requests-mobile-card__primary {
          font-weight: 800;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .requests-page .requests-mobile-card__secondary {
          margin-top: 4px;
        }

        .requests-page .requests-mobile-card__fields {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px 12px;
          margin-top: 12px;
        }

        .requests-page .mobile-kv {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          min-width: 0;
        }

        .requests-page .mobile-kv__k {
          color: var(--color-text-muted);
          font-size: 0.8125rem;
          flex-shrink: 0;
        }

        .requests-page .mobile-kv__v {
          color: var(--color-text);
          font-weight: 600;
          text-align: left;
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .requests-page .mobile-kv:first-child {
          grid-column: 1 / -1;
        }

        .requests-page .requests-mobile-card__actions {
          margin-top: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .requests-page .requests-mobile-card__actions .btn.btn--sm {
          width: min(100%, 320px);
          min-width: 0;
          justify-content: center;
        }

        .requests-page .mobile-empty {
          text-align: center;
          padding: 1.5rem 1rem;
          color: var(--color-text-muted);
        }
      }
    `,
  ],
})
export class RequestsComponent implements OnDestroy {
  /** Track selected request IDs for bulk actions (admin only). */
  private selectedRequestIds = new Set<string>();

  private readonly bulkArchiveFabHideClass = 'bulk-archive-active';

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

  ngOnDestroy(): void {
    if (typeof document !== 'undefined' && document.body) {
      document.body.classList.remove(this.bulkArchiveFabHideClass);
    }
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

