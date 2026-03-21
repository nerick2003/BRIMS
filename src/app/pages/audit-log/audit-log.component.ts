import { Component, OnInit, computed, signal, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuditLogService, AuditLogEntry } from '../../services/audit-log.service';

type AuditLogViewEntry = AuditLogEntry & {
  formattedDate: string;
  categoryLabel: string;
  userDisplay: string;
  detailsDisplay: string;
  categoryLower: string;
  searchBlob: string;
};

@Component({
  selector: 'app-audit-log',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './audit-log.component.html',
  styleUrls: ['./audit-log.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuditLogComponent implements OnInit {
  logs = signal<AuditLogViewEntry[]>([]);
  categoryFilter = signal<string>('');
  searchText = signal<string>('');
  isMobileView = signal<boolean>(typeof window !== 'undefined' ? window.innerWidth <= 640 : false);

  filteredLogs = computed(() => {
    let list = this.logs();
    const cat = this.categoryFilter().toLowerCase();
    const search = this.searchText().trim().toLowerCase();
    if (cat) {
      list = list.filter((e) => e.categoryLower === cat);
    }
    if (search) {
      list = list.filter((e) => e.searchBlob.includes(search));
    }
    return list;
  });

  categories: { value: string; label: string }[] = [
    { value: '', label: 'All categories' },
    { value: 'auth', label: 'Auth' },
    { value: 'resident', label: 'Resident' },
    { value: 'household', label: 'Household' },
    { value: 'user', label: 'User' },
    { value: 'request', label: 'Request' },
    { value: 'system', label: 'System' },
  ];

  constructor(private audit: AuditLogService) {}

  ngOnInit(): void {
    this.logs.set(this.audit.getLogs().map((entry) => this.toViewEntry(entry)));
  }

  onCategoryChange(value: string): void {
    this.categoryFilter.set(value);
  }

  onSearchInput(value: string): void {
    this.searchText.set(value);
  }

  @HostListener('window:resize')
  onResize(): void {
    const next = typeof window !== 'undefined' ? window.innerWidth <= 640 : false;
    if (this.isMobileView() !== next) {
      this.isMobileView.set(next);
    }
  }

  private formatDate(iso: string): string {
    const d = new Date(iso);
    return d.toLocaleString(undefined, {
      dateStyle: 'short',
      timeStyle: 'short',
    });
  }

  private getCategoryLabel(category: string): string {
    const c = this.categories.find((x) => x.value === category);
    return c ? c.label : category;
  }

  private toViewEntry(entry: AuditLogEntry): AuditLogViewEntry {
    const userDisplay = entry.userName || entry.userEmail || '—';
    const detailsDisplay = entry.details || entry.entityName || '—';
    return {
      ...entry,
      formattedDate: this.formatDate(entry.timestamp),
      categoryLabel: this.getCategoryLabel(entry.category),
      userDisplay,
      detailsDisplay,
      categoryLower: entry.category.toLowerCase(),
      searchBlob: `${entry.action} ${entry.userName ?? ''} ${entry.userEmail ?? ''} ${entry.details ?? ''} ${entry.entityName ?? ''}`
        .toLowerCase()
        .trim(),
    };
  }
}
