import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { DataService } from '../../services/data.service';
import { AlertService } from '../../services/alert.service';
import { Subscription } from 'rxjs';
import jsPDF from 'jspdf';
import Swal from 'sweetalert2';

type ReportPeriod = 'all' | 'last_15_days' | 'this_month' | 'this_semester' | 'this_year';
type ReportFormat = 'pdf' | 'excel';

interface PdfStatCard {
  label: string;
  value: string | number;
}

interface PdfTableColumn {
  header: string;
  width: number;
  align?: 'left' | 'right' | 'center';
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, BaseChartDirective, FormsModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit, OnDestroy {
  activeTab: string = 'residents';
  reportPeriod: ReportPeriod = 'all';
  reportFormat: ReportFormat = 'pdf';

  private subscriptions = new Subscription();

  private readonly pdfLayout = {
    marginX: 14,
    marginTop: 14,
    marginBottom: 18,
    pageFooterY: 285,
    contentBottom: 272,
  };

  private readonly pdfColors = {
    primary: [37, 99, 235] as [number, number, number],
    primaryDark: [30, 64, 175] as [number, number, number],
    success: [22, 163, 74] as [number, number, number],
    warning: [217, 119, 6] as [number, number, number],
    info: [2, 132, 199] as [number, number, number],
    danger: [220, 38, 38] as [number, number, number],
    text: [15, 23, 42] as [number, number, number],
    muted: [100, 116, 139] as [number, number, number],
    border: [226, 232, 240] as [number, number, number],
    headerBg: [241, 245, 249] as [number, number, number],
    rowAlt: [248, 250, 252] as [number, number, number],
    white: [255, 255, 255] as [number, number, number],
  };

  // Chart data objects are kept as fields so they
  // don't get recreated on every change detection cycle.
  public residentPurokBarData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [],
  };

  public ageGroupLineData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [],
  };

  public householdPurokBarData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [],
  };

  public requestTypeBarData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [],
  };

  constructor(
    public data: DataService,
    private alerts: AlertService,
  ) {}

  ngOnInit(): void {
    // Initial build in case data is already loaded
    this.updateResidentCharts();
    this.updateHouseholdCharts();
    this.updateRequestCharts();

    // Rebuild chart data only when underlying data actually changes
    this.subscriptions.add(
      this.data.residentsObservable.subscribe(() => {
        this.updateResidentCharts();
      }),
    );

    this.subscriptions.add(
      this.data.householdsObservable.subscribe(() => {
        this.updateHouseholdCharts();
      }),
    );

    this.subscriptions.add(
      this.data.requestsObservable.subscribe(() => {
        this.updateRequestCharts();
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  // Shared chart options
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 12,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: '#4b5563',
          maxRotation: 45,
          minRotation: 0,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(148, 163, 184, 0.25)',
        },
        ticks: {
          precision: 0,
        },
      },
    },
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 12,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: '#4b5563',
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(148, 163, 184, 0.25)',
        },
        ticks: {
          precision: 0,
        },
      },
    },
  };

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  // Resident Statistics
  getResidentStats() {
    // Only include active (non-archived) residents in reports
    const residents = this.data.getActiveResidents();
    const total = residents.length;
    const male = residents.filter(r => r.gender === 'Male').length;
    const female = residents.filter(r => r.gender === 'Female').length;
    const senior = residents.filter(r => r.age >= 60).length;
    const adult = residents.filter(r => r.age >= 18 && r.age < 60).length;
    const minor = residents.filter(r => r.age < 18).length;

    // Purok distribution
    const purokCounts: { [key: string]: number } = {};
    residents.forEach(r => {
      purokCounts[r.purok] = (purokCounts[r.purok] || 0) + 1;
    });

    return {
      total,
      male,
      female,
      senior,
      adult,
      minor,
      purokCounts
    };
  }

  getResidentPuroks() {
    const stats = this.getResidentStats();
    return Object.keys(stats.purokCounts).map(purok => ({
      name: purok,
      count: stats.purokCounts[purok],
      percentage: (stats.purokCounts[purok] / stats.total * 100).toFixed(1)
    }));
  }

  // Household Statistics
  getHouseholdStats() {
    // Only include active (non-archived) households in reports
    const households = this.data.getActiveHouseholds();
    const total = households.length;
    const totalMembers = households.reduce((sum, h) => sum + h.members.length, 0);
    const avgMembers = total > 0 ? (totalMembers / total).toFixed(1) : 0;

    // Purok distribution
    const purokCounts: { [key: string]: number } = {};
    households.forEach(h => {
      purokCounts[h.purok] = (purokCounts[h.purok] || 0) + 1;
    });

    return {
      total,
      totalMembers,
      avgMembers,
      purokCounts
    };
  }

  getHouseholdPuroks() {
    const stats = this.getHouseholdStats();
    return Object.keys(stats.purokCounts).map(purok => ({
      name: purok,
      count: stats.purokCounts[purok],
      percentage: (stats.purokCounts[purok] / stats.total * 100).toFixed(1)
    }));
  }

  // Certificate Request Statistics
  getRequestStats() {
    // Only include active (non-archived) requests in reports,
    // filtered by the selected reporting period.
    const requests = this.getRequestsForReports();
    const total = requests.length;
    const approved = requests.filter(r => r.status === 'Approved').length;
    const pending = requests.filter(r => r.status === 'Pending').length;
    const forReview = requests.filter(r => r.status === 'For Review').length;

    // Type distribution
    const typeCounts: { [key: string]: number } = {};
    requests.forEach(r => {
      typeCounts[r.type] = (typeCounts[r.type] || 0) + 1;
    });

    return {
      total,
      approved,
      pending,
      forReview,
      typeCounts
    };
  }

  getRequestTypes() {
    const stats = this.getRequestStats();
    return Object.keys(stats.typeCounts).map(type => ({
      name: type,
      count: stats.typeCounts[type],
      percentage: (stats.typeCounts[type] / stats.total * 100).toFixed(1)
    }));
  }

  // Build / refresh chart data for residents tab
  private updateResidentCharts(): void {
    const puroks = this.getResidentPuroks();
    this.residentPurokBarData = {
      labels: puroks.map(p => p.name),
      datasets: [
        {
          data: puroks.map(p => p.count),
          label: 'Residents',
          backgroundColor: '#3b82f6',
          borderRadius: 6,
        },
      ],
    };

    const stats = this.getResidentStats();
    const labels = ['Minors (<18)', 'Adults (18-59)', 'Senior Citizens (60+)'];
    const values = [stats.minor, stats.adult, stats.senior];

    this.ageGroupLineData = {
      labels,
      datasets: [
        {
          data: values,
          label: 'Age Groups',
          fill: false,
          tension: 0.3,
          borderColor: '#6366f1',
          backgroundColor: '#6366f1',
          pointBackgroundColor: '#ffffff',
          pointBorderColor: '#6366f1',
          pointRadius: 4,
        },
      ],
    };
  }

  // Build / refresh chart data for households tab
  private updateHouseholdCharts(): void {
    const puroks = this.getHouseholdPuroks();
    this.householdPurokBarData = {
      labels: puroks.map(p => p.name),
      datasets: [
        {
          data: puroks.map(p => p.count),
          label: 'Households',
          backgroundColor: '#22c55e',
          borderRadius: 6,
        },
      ],
    };
  }

  // Build / refresh chart data for requests tab
  private updateRequestCharts(): void {
    const types = this.getRequestTypes();
    this.requestTypeBarData = {
      labels: types.map(t => t.name),
      datasets: [
        {
          data: types.map(t => t.count),
          label: 'Requests',
          backgroundColor: '#f97316',
          borderRadius: 6,
        },
      ],
    };
  }

  // Date + period helpers for request-based reports
  private parseDate(value: string | undefined): Date | null {
    if (!value) return null;
    const d = new Date(value);
    return isNaN(d.getTime()) ? null : d;
  }

  /** Human-readable date for PDF and on-screen consistency. */
  private formatDateForExport(value: string | Date | undefined): string {
    const d =
      value instanceof Date
        ? value
        : this.parseDate(typeof value === 'string' ? value : undefined);
    if (!d) {
      return typeof value === 'string' ? value : '';
    }
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  }

  /**
   * ISO date prefixed with tab so Excel treats the cell as text (avoids #####).
   */
  private formatDateForCsv(value: string | Date | undefined): string {
    const d =
      value instanceof Date
        ? value
        : this.parseDate(typeof value === 'string' ? value : undefined);
    if (!d) {
      const fallback = typeof value === 'string' ? value : '';
      return fallback ? `\t${fallback}` : '';
    }
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `\t${y}-${m}-${day}`;
  }

  getRequestsForReports() {
    const all = this.data.getActiveRequests();
    if (this.reportPeriod === 'all') {
      return all;
    }

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const todayMidnight = new Date(currentYear, currentMonth, today.getDate());
    const dayMs = 24 * 60 * 60 * 1000;

    return all.filter(req => {
      const parsed = this.parseDate(req.date);
      if (!parsed) return false;
      const d = new Date(parsed.getFullYear(), parsed.getMonth(), parsed.getDate());

      switch (this.reportPeriod) {
        case 'last_15_days': {
          const threshold = new Date(todayMidnight.getTime() - 14 * dayMs);
          return d >= threshold && d <= todayMidnight;
        }
        case 'this_month':
          return d.getFullYear() === currentYear && d.getMonth() === currentMonth;
        case 'this_semester': {
          const semesterStartMonth = currentMonth < 6 ? 0 : 6;
          const semesterEndMonth = currentMonth < 6 ? 5 : 11;
          return (
            d.getFullYear() === currentYear &&
            d.getMonth() >= semesterStartMonth &&
            d.getMonth() <= semesterEndMonth
          );
        }
        case 'this_year':
          return d.getFullYear() === currentYear;
        default:
          return true;
      }
    });
  }

  onReportPeriodChange() {
    this.updateRequestCharts();
  }

  private getPeriodLabel(): string {
    switch (this.reportPeriod) {
      case 'last_15_days':
        return 'last_15_days';
      case 'this_month':
        return 'this_month';
      case 'this_semester':
        return 'this_semester';
      case 'this_year':
        return 'this_year';
      default:
        return 'all';
    }
  }

  private getReadablePeriodLabel(): string {
    switch (this.reportPeriod) {
      case 'last_15_days':
        return 'Last 15 days';
      case 'this_month':
        return 'This month';
      case 'this_semester':
        return 'This semester';
      case 'this_year':
        return 'This year';
      default:
        return 'All time';
    }
  }

  async exportReports(): Promise<void> {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      const result = await Swal.fire<{
        period: ReportPeriod;
        format: ReportFormat;
      }>({
        title: 'Export reports',
        html: `
          <div class="form-group" style="text-align:left;margin-top:8px;">
            <label for="swal-report-period">Report period</label>
            <select id="swal-report-period" class="form-control">
              <option value="all"${this.reportPeriod === 'all' ? ' selected' : ''}>All</option>
              <option value="last_15_days"${this.reportPeriod === 'last_15_days' ? ' selected' : ''}>Last 15 days</option>
              <option value="this_month"${this.reportPeriod === 'this_month' ? ' selected' : ''}>This month</option>
              <option value="this_semester"${this.reportPeriod === 'this_semester' ? ' selected' : ''}>This semester</option>
              <option value="this_year"${this.reportPeriod === 'this_year' ? ' selected' : ''}>This year</option>
            </select>
          </div>
          <div class="form-group" style="text-align:left;margin-top:10px;">
            <label>Format</label>
            <div style="display:flex;gap:0.75rem;margin-top:6px;">
              <label style="display:flex;align-items:center;gap:6px;font-size:0.9rem;">
                <input type="radio" name="swal-report-format" value="pdf" ${this.reportFormat === 'pdf' ? 'checked' : ''}/>
                <span>PDF</span>
              </label>
              <label style="display:flex;align-items:center;gap:6px;font-size:0.9rem;">
                <input type="radio" name="swal-report-format" value="excel" ${this.reportFormat === 'excel' ? 'checked' : ''}/>
                <span>Excel (CSV)</span>
              </label>
            </div>
          </div>
        `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Export',
        cancelButtonText: 'Cancel',
        icon: 'question',
        preConfirm: () => {
          const periodSelect = document.getElementById(
            'swal-report-period',
          ) as HTMLSelectElement | null;
          const checkedFormat = document.querySelector(
            'input[name="swal-report-format"]:checked',
          ) as HTMLInputElement | null;

          if (!periodSelect || !checkedFormat) {
            Swal.showValidationMessage('Please choose period and format.');
            return;
          }

          return {
            period: periodSelect.value as ReportPeriod,
            format: checkedFormat.value as ReportFormat,
          };
        },
      });

      if (result.isConfirmed && result.value) {
        this.reportPeriod = result.value.period;
        this.reportFormat = result.value.format;

        // Rebuild charts that depend on the period
        this.updateRequestCharts();

        if (this.reportFormat === 'pdf') {
          this.exportPdf();
        } else {
          this.exportCsv();
        }
      }

      return;
    }

    const result = await Swal.fire<{
      period: ReportPeriod;
      format: ReportFormat;
    }>({
      title: 'Export reports',
      html: `
        <div class="form-group" style="text-align:left;margin-top:8px;">
          <label for="swal-report-period">Report period</label>
          <select id="swal-report-period" class="form-control">
            <option value="all"${this.reportPeriod === 'all' ? ' selected' : ''}>All</option>
            <option value="last_15_days"${this.reportPeriod === 'last_15_days' ? ' selected' : ''}>Last 15 days</option>
            <option value="this_month"${this.reportPeriod === 'this_month' ? ' selected' : ''}>This month</option>
            <option value="this_semester"${this.reportPeriod === 'this_semester' ? ' selected' : ''}>This semester</option>
            <option value="this_year"${this.reportPeriod === 'this_year' ? ' selected' : ''}>This year</option>
          </select>
        </div>
        <div class="form-group" style="text-align:left;margin-top:10px;">
          <label>Format</label>
          <div style="display:flex;gap:0.75rem;margin-top:6px;">
            <label style="display:flex;align-items:center;gap:6px;font-size:0.9rem;">
              <input type="radio" name="swal-report-format" value="pdf" ${this.reportFormat === 'pdf' ? 'checked' : ''}/>
              <span>PDF</span>
            </label>
            <label style="display:flex;align-items:center;gap:6px;font-size:0.9rem;">
              <input type="radio" name="swal-report-format" value="excel" ${this.reportFormat === 'excel' ? 'checked' : ''}/>
              <span>Excel (CSV)</span>
            </label>
          </div>
        </div>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Export',
      cancelButtonText: 'Cancel',
      icon: 'question',
      preConfirm: () => {
        const periodSelect = document.getElementById(
          'swal-report-period',
        ) as HTMLSelectElement | null;
        const checkedFormat = document.querySelector(
          'input[name="swal-report-format"]:checked',
        ) as HTMLInputElement | null;

        if (!periodSelect || !checkedFormat) {
          Swal.showValidationMessage('Please choose period and format.');
          return;
        }

        return {
          period: periodSelect.value as ReportPeriod,
          format: checkedFormat.value as ReportFormat,
        };
      },
    });

    if (result.isConfirmed && result.value) {
      this.reportPeriod = result.value.period;
      this.reportFormat = result.value.format;

      // Rebuild charts that depend on the period
      this.updateRequestCharts();

      if (this.reportFormat === 'pdf') {
        this.exportPdf();
      } else {
        this.exportCsv();
      }
    }
  }

  private exportPdf(): void {
    const label = this.getPeriodLabel();
    const periodLabel = this.getReadablePeriodLabel();
    const generatedOn = this.formatDateForExport(new Date());
    const residentStats = this.getResidentStats();
    const householdStats = this.getHouseholdStats();
    const demographicPuroks = this.getDemographicPuroks();
    const requestStats = this.getRequestStats();
    const requests = this.getRequestsForReports();

    const doc = new jsPDF('portrait', 'mm', 'a4');
    let y = this.pdfDrawCoverHeader(doc, periodLabel, generatedOn);

    y = this.pdfDrawSection(
      doc,
      y,
      'Resident Statistics',
      'Active residents registered in the barangay',
    );
    y = this.pdfDrawStatCards(doc, y, [
      { label: 'Total Residents', value: residentStats.total },
      { label: 'Male', value: residentStats.male },
      { label: 'Female', value: residentStats.female },
      { label: 'Seniors (60+)', value: residentStats.senior },
    ]);
    y = this.pdfDrawStatCards(doc, y, [
      { label: 'Minors (<18)', value: residentStats.minor },
      { label: 'Adults (18-59)', value: residentStats.adult },
    ], 2);
    y = this.pdfDrawDataTable(
      doc,
      y,
      [
        { header: 'Purok', width: 90 },
        { header: 'Residents', width: 40, align: 'right' },
        { header: 'Share', width: 52, align: 'right' },
      ],
      this.getResidentPuroks().map(p => [p.name, String(p.count), `${p.percentage}%`]),
    );

    y = this.pdfDrawSection(
      doc,
      y,
      'Household Statistics',
      'Active households and membership summary',
    );
    y = this.pdfDrawStatCards(doc, y, [
      { label: 'Total Households', value: householdStats.total },
      { label: 'Total Members', value: householdStats.totalMembers },
      { label: 'Avg Members / HH', value: householdStats.avgMembers },
    ], 3);
    y = this.pdfDrawDataTable(
      doc,
      y,
      [
        { header: 'Purok', width: 90 },
        { header: 'Households', width: 40, align: 'right' },
        { header: 'Share', width: 52, align: 'right' },
      ],
      this.getHouseholdPuroks().map(p => [p.name, String(p.count), `${p.percentage}%`]),
    );

    y = this.pdfDrawSection(
      doc,
      y,
      'Demographics Overview',
      'Residents and households combined by purok',
    );
    y = this.pdfDrawDataTable(
      doc,
      y,
      [
        { header: 'Purok', width: 52 },
        { header: 'Residents', width: 32, align: 'right' },
        { header: 'Households', width: 36, align: 'right' },
        { header: 'Avg / HH', width: 62, align: 'right' },
      ],
      demographicPuroks.map(p => [
        p.name,
        String(p.residents),
        String(p.households),
        String(p.avgMembers),
      ]),
    );

    y = this.pdfDrawSection(
      doc,
      y,
      'Certificate Requests',
      'Requests included for the selected reporting period',
    );
    y = this.pdfDrawStatCards(doc, y, [
      { label: 'Total Requests', value: requestStats.total },
      { label: 'Approved', value: requestStats.approved },
      { label: 'Pending', value: requestStats.pending },
      { label: 'For Review', value: requestStats.forReview },
    ]);
    this.pdfDrawRequestsTable(doc, y, requests);

    this.pdfAddFooters(doc, periodLabel);
    doc.save(`BRIMS_reports_${label}.pdf`);
  }

  private pdfPageWidth(doc: jsPDF): number {
    return doc.internal.pageSize.getWidth();
  }

  private pdfPageHeight(doc: jsPDF): number {
    return doc.internal.pageSize.getHeight();
  }

  private pdfContentWidth(doc: jsPDF): number {
    return this.pdfPageWidth(doc) - this.pdfLayout.marginX * 2;
  }

  private pdfEnsureSpace(
    doc: jsPDF,
    y: number,
    needed: number,
  ): { y: number; newPage: boolean } {
    if (y + needed <= this.pdfLayout.contentBottom) {
      return { y, newPage: false };
    }
    doc.addPage();
    return { y: this.pdfDrawPageBand(doc), newPage: true };
  }

  private pdfDrawPageBand(doc: jsPDF): number {
    const w = this.pdfPageWidth(doc);
    const [r, g, b] = this.pdfColors.primary;
    doc.setFillColor(r, g, b);
    doc.rect(0, 0, w, 10, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(255, 255, 255);
    doc.text('BRIMS Barangay Reports', this.pdfLayout.marginX, 6.5);
    doc.setTextColor(...this.pdfColors.text);
    return 16;
  }

  private pdfDrawCoverHeader(doc: jsPDF, periodLabel: string, generatedOn: string): number {
    const w = this.pdfPageWidth(doc);
    const [r, g, b] = this.pdfColors.primary;
    const [rd, gd, bd] = this.pdfColors.primaryDark;

    doc.setFillColor(rd, gd, bd);
    doc.rect(0, 0, w, 38, 'F');
    doc.setFillColor(r, g, b);
    doc.rect(0, 32, w, 6, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.text('BRIMS', this.pdfLayout.marginX, 16);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text('Barangay Information Management System', this.pdfLayout.marginX, 22);
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.text('Barangay Reports', this.pdfLayout.marginX, 29);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    const metaX = w - this.pdfLayout.marginX;
    doc.text('Reporting period', metaX, 14, { align: 'right' });
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(periodLabel, metaX, 19, { align: 'right' });
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text('Generated on', metaX, 26, { align: 'right' });
    doc.text(generatedOn, metaX, 31, { align: 'right' });

    const boxY = 44;
    const boxH = 14;
    doc.setDrawColor(...this.pdfColors.border);
    doc.setFillColor(...this.pdfColors.headerBg);
    doc.roundedRect(this.pdfLayout.marginX, boxY, this.pdfContentWidth(doc), boxH, 2, 2, 'FD');

    doc.setTextColor(...this.pdfColors.muted);
    doc.setFontSize(8);
    doc.text('CONFIDENTIAL · For official barangay use only', this.pdfLayout.marginX + 4, boxY + 5);
    doc.setTextColor(...this.pdfColors.text);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text(
      'This document summarizes resident, household, and certificate request data from BRIMS.',
      this.pdfLayout.marginX + 4,
      boxY + 10,
    );

    return boxY + boxH + 8;
  }

  private pdfDrawSection(doc: jsPDF, y: number, title: string, subtitle?: string): number {
    y = this.pdfEnsureSpace(doc, y, subtitle ? 22 : 16).y;
    y += 4;

    const [r, g, b] = this.pdfColors.primary;
    doc.setFillColor(r, g, b);
    doc.rect(this.pdfLayout.marginX, y - 2, 3, 8, 'F');

    doc.setTextColor(...this.pdfColors.text);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.text(title, this.pdfLayout.marginX + 6, y + 4);

    if (subtitle) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(...this.pdfColors.muted);
      doc.text(subtitle, this.pdfLayout.marginX + 6, y + 10);
      y += 14;
    } else {
      y += 10;
    }

    return y;
  }

  private pdfDrawStatCards(
    doc: jsPDF,
    y: number,
    cards: PdfStatCard[],
    columns = 4,
  ): number {
    const gap = 3;
    const count = Math.min(columns, cards.length);
    const cardW = (this.pdfContentWidth(doc) - gap * (count - 1)) / count;
    const cardH = 16;
    const rows = Math.ceil(cards.length / count);
    const blockH = rows * cardH + (rows - 1) * gap + 4;

    y = this.pdfEnsureSpace(doc, y, blockH).y;

    cards.forEach((card, index) => {
      const col = index % count;
      const row = Math.floor(index / count);
      const x = this.pdfLayout.marginX + col * (cardW + gap);
      const cardY = y + row * (cardH + gap);

      doc.setDrawColor(...this.pdfColors.border);
      doc.setFillColor(...this.pdfColors.white);
      doc.roundedRect(x, cardY, cardW, cardH, 2, 2, 'FD');

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(...this.pdfColors.muted);
      doc.text(card.label, x + 4, cardY + 6);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(...this.pdfColors.primary);
      doc.text(String(card.value), x + 4, cardY + 13);
    });

    return y + blockH;
  }

  private pdfDrawDataTable(
    doc: jsPDF,
    y: number,
    columns: PdfTableColumn[],
    rows: string[][],
  ): number {
    const rowH = 7;
    const headerH = 8;
    const tableW = columns.reduce((sum, col) => sum + col.width, 0);
    const colXs = columns.reduce<number[]>((acc, col, i) => {
      acc.push(i === 0 ? this.pdfLayout.marginX : acc[i - 1] + columns[i - 1].width);
      return acc;
    }, []);

    const drawHeader = (startY: number): number => {
      const [r, g, b] = this.pdfColors.primary;
      doc.setFillColor(r, g, b);
      doc.rect(this.pdfLayout.marginX, startY, tableW, headerH, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(255, 255, 255);

      columns.forEach((col, i) => {
        const textX =
          col.align === 'right'
            ? colXs[i] + col.width - 3
            : col.align === 'center'
              ? colXs[i] + col.width / 2
              : colXs[i] + 3;
        doc.text(col.header, textX, startY + 5.5, {
          align: col.align === 'right' ? 'right' : col.align === 'center' ? 'center' : 'left',
        });
      });

      return startY + headerH;
    };

    if (rows.length === 0) {
      y = this.pdfEnsureSpace(doc, y, headerH + rowH + 4).y;
      y = drawHeader(y);
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(9);
      doc.setTextColor(...this.pdfColors.muted);
      doc.text('No data available for this section.', this.pdfLayout.marginX + 3, y + 5);
      return y + rowH + 4;
    }

    y = this.pdfEnsureSpace(doc, y, headerH + rowH + 2).y;
    y = drawHeader(y);

    rows.forEach((row, rowIndex) => {
      const space = this.pdfEnsureSpace(doc, y, rowH + 2);
      y = space.y;
      if (space.newPage) {
        y = drawHeader(y);
      }

      if (rowIndex % 2 === 1) {
        doc.setFillColor(...this.pdfColors.rowAlt);
        doc.rect(this.pdfLayout.marginX, y, tableW, rowH, 'F');
      }

      doc.setDrawColor(...this.pdfColors.border);
      doc.setLineWidth(0.1);
      doc.line(this.pdfLayout.marginX, y + rowH, this.pdfLayout.marginX + tableW, y + rowH);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(...this.pdfColors.text);

      row.forEach((cell, i) => {
        const col = columns[i];
        const textX =
          col.align === 'right'
            ? colXs[i] + col.width - 3
            : col.align === 'center'
              ? colXs[i] + col.width / 2
              : colXs[i] + 3;
        const clipped =
          cell.length > 42 && col.align !== 'right' ? `${cell.slice(0, 39)}…` : cell;
        doc.text(clipped, textX, y + 5, {
          align: col.align === 'right' ? 'right' : col.align === 'center' ? 'center' : 'left',
        });
      });

      y += rowH;
    });

    return y + 4;
  }

  private pdfDrawStatusBadge(doc: jsPDF, x: number, y: number, status: string): void {
    const colorMap: Record<string, [number, number, number]> = {
      Approved: this.pdfColors.success,
      Pending: this.pdfColors.warning,
      'For Review': this.pdfColors.info,
      Rejected: this.pdfColors.danger,
    };
    const fill = colorMap[status] ?? this.pdfColors.muted;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    const padX = 2.5;
    const badgeW = doc.getTextWidth(status) + padX * 2;
    const badgeH = 4.5;

    doc.setFillColor(...fill);
    doc.roundedRect(x, y - 3.2, badgeW, badgeH, 1, 1, 'F');
    doc.setTextColor(255, 255, 255);
    doc.text(status, x + padX, y);
    doc.setTextColor(...this.pdfColors.text);
  }

  private pdfDrawRequestsTable(
    doc: jsPDF,
    y: number,
    requests: ReturnType<ReportsComponent['getRequestsForReports']>,
  ): void {
    const columns: PdfTableColumn[] = [
      { header: 'Date', width: 28 },
      { header: 'Type', width: 44 },
      { header: 'Purpose', width: 78 },
      { header: 'Status', width: 32, align: 'center' },
    ];
    const tableW = columns.reduce((sum, c) => sum + c.width, 0);
    const colXs = columns.reduce<number[]>((acc, col, i) => {
      acc.push(i === 0 ? this.pdfLayout.marginX : acc[i - 1] + columns[i - 1].width);
      return acc;
    }, []);
    const headerH = 8;
    const baseRowH = 7;

    const drawHeader = (startY: number): number => {
      doc.setFillColor(...this.pdfColors.primary);
      doc.rect(this.pdfLayout.marginX, startY, tableW, headerH, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(255, 255, 255);
      columns.forEach((col, i) => {
        const textX = colXs[i] + (col.align === 'center' ? col.width / 2 : 3);
        doc.text(col.header, textX, startY + 5.5, {
          align: col.align === 'center' ? 'center' : 'left',
        });
      });
      return startY + headerH;
    };

    if (requests.length === 0) {
      y = this.pdfEnsureSpace(doc, y, headerH + baseRowH + 4).y;
      drawHeader(y);
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(9);
      doc.setTextColor(...this.pdfColors.muted);
      doc.text('No certificate requests for this period.', this.pdfLayout.marginX + 3, y + headerH + 5);
      return;
    }

    y = this.pdfEnsureSpace(doc, y, headerH + baseRowH + 2).y;
    y = drawHeader(y);

    requests.forEach((req, rowIndex) => {
      const purpose = req.purpose || '—';
      const purposeLines = doc.splitTextToSize(purpose, columns[2].width - 4);
      const rowH = Math.max(baseRowH, purposeLines.length * 4.2 + 2.5);

      const space = this.pdfEnsureSpace(doc, y, rowH + 2);
      y = space.y;
      if (space.newPage) {
        y = drawHeader(y);
      }

      if (rowIndex % 2 === 1) {
        doc.setFillColor(...this.pdfColors.rowAlt);
        doc.rect(this.pdfLayout.marginX, y, tableW, rowH, 'F');
      }

      doc.setDrawColor(...this.pdfColors.border);
      doc.setLineWidth(0.1);
      doc.line(this.pdfLayout.marginX, y + rowH, this.pdfLayout.marginX + tableW, y + rowH);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(...this.pdfColors.text);
      doc.text(this.formatDateForExport(req.date), colXs[0] + 3, y + 5);
      doc.text(req.type || '—', colXs[1] + 3, y + 5);
      doc.text(purposeLines, colXs[2] + 3, y + 5);

      if (req.status) {
        this.pdfDrawStatusBadge(doc, colXs[3] + 4, y + 5.2, req.status);
      }

      y += rowH;
    });
  }

  private pdfAddFooters(doc: jsPDF, periodLabel: string): void {
    const total = doc.getNumberOfPages();
    const w = this.pdfPageWidth(doc);
    const h = this.pdfPageHeight(doc);

    for (let page = 1; page <= total; page++) {
      doc.setPage(page);
      doc.setDrawColor(...this.pdfColors.border);
      doc.setLineWidth(0.2);
      doc.line(this.pdfLayout.marginX, h - 14, w - this.pdfLayout.marginX, h - 14);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(...this.pdfColors.muted);
      doc.text(`BRIMS Barangay Reports · ${periodLabel}`, this.pdfLayout.marginX, h - 9);
      doc.text(`Page ${page} of ${total}`, w - this.pdfLayout.marginX, h - 9, { align: 'right' });
    }
  }

  private csvRow(...cols: (string | number)[]): string {
    return cols
      .map(col => {
        const value = String(col ?? '');
        if (/[",\n]/.test(value)) {
          return `"${value.replace(/"/g, '""')}"`;
        }
        return value;
      })
      .join(',');
  }

  private exportCsv(): void {
    const label = this.getPeriodLabel();
    const residentStats = this.getResidentStats();
    const householdStats = this.getHouseholdStats();
    const demographicPuroks = this.getDemographicPuroks();
    const requestStats = this.getRequestStats();
    const requests = this.getRequestsForReports();

    const lines: string[] = [];

    // Header
    lines.push(this.csvRow('BRIMS Barangay Reports'));
    lines.push(this.csvRow(`Reporting period: ${this.getReadablePeriodLabel()}`));
    lines.push(this.csvRow(`Generated on: ${this.formatDateForExport(new Date())}`));
    lines.push('');

    // Resident statistics
    lines.push(this.csvRow('Resident Statistics'));
    lines.push(this.csvRow('Total residents', residentStats.total));
    lines.push(this.csvRow('Male', residentStats.male));
    lines.push(this.csvRow('Female', residentStats.female));
    lines.push(this.csvRow('Minors (<18)', residentStats.minor));
    lines.push(this.csvRow('Adults (18-59)', residentStats.adult));
    lines.push(this.csvRow('Seniors (60+)', residentStats.senior));
    lines.push('');

    lines.push(this.csvRow('Purok', 'Residents', 'Percentage'));
    this.getResidentPuroks().forEach(p => {
      lines.push(this.csvRow(p.name, p.count, `${p.percentage}%`));
    });
    lines.push('');

    // Household statistics
    lines.push(this.csvRow('Household Statistics'));
    lines.push(this.csvRow('Total households', householdStats.total));
    lines.push(this.csvRow('Total members', householdStats.totalMembers));
    lines.push(this.csvRow('Average members/household', householdStats.avgMembers));
    lines.push('');

    lines.push(this.csvRow('Purok', 'Households', 'Percentage'));
    this.getHouseholdPuroks().forEach(p => {
      lines.push(this.csvRow(p.name, p.count, `${p.percentage}%`));
    });
    lines.push('');

    // Demographics
    lines.push(this.csvRow('Demographics Overview'));
    lines.push(this.csvRow('Purok', 'Residents', 'Households', 'Avg members/HH'));
    demographicPuroks.forEach(p => {
      lines.push(this.csvRow(p.name, p.residents, p.households, p.avgMembers));
    });
    lines.push('');

    // Certificate requests
    lines.push(this.csvRow('Certificate Requests'));
    lines.push(
      this.csvRow(
        'Total',
        requestStats.total,
        'Approved',
        requestStats.approved,
        'Pending',
        requestStats.pending,
        'For Review',
        requestStats.forReview,
      ),
    );
    lines.push('');

    lines.push(this.csvRow('Date', 'Type', 'Purpose', 'Status'));
    requests.forEach(req => {
      lines.push(
        this.csvRow(
          this.formatDateForCsv(req.date),
          req.type || '',
          req.purpose || '',
          req.status || '',
        ),
      );
    });

    const csvContent = `\uFEFF${lines.join('\r\n')}`;
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `BRIMS_reports_${label}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  getDemographicPuroks() {
    const residentStats = this.getResidentStats();
    const householdStats = this.getHouseholdStats();
    const puroks = new Set([...Object.keys(residentStats.purokCounts), ...Object.keys(householdStats.purokCounts)]);
    
    return Array.from(puroks).map(purok => ({
      name: purok,
      residents: residentStats.purokCounts[purok] || 0,
      households: householdStats.purokCounts[purok] || 0,
      avgMembers: householdStats.purokCounts[purok] 
        ? ((residentStats.purokCounts[purok] || 0) / householdStats.purokCounts[purok]).toFixed(1)
        : '-'
    }));
  }
}
