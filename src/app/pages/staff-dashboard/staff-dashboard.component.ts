import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService, CertificateRequest } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-staff-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.scss'],
})
export class StaffDashboardComponent {
  constructor(
    public data: DataService,
    public auth: AuthService,
  ) {}
  
  stats = this.data.getStats();
  
  get recentRequests(): CertificateRequest[] {
    const sorted = [...this.data.getActiveRequests()].sort((a, b) => {
      // Admin dashboard: strictly newest first
      if (this.auth.currentUser?.role === 'admin') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      // Staff: prioritize actionable statuses, then newest
      const statusPriority: Record<CertificateRequest['status'], number> = {
        'For Review': 3,
        Pending: 2,
        Approved: 1,
        Rejected: 0,
      };
      const priorityDiff = statusPriority[b.status] - statusPriority[a.status];
      if (priorityDiff !== 0) return priorityDiff;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return sorted.slice(0, 6);
  }
}
