import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DataService, CertificateRequest, Resident } from '../../services/data.service';
import { QrCodeService } from '../../services/qr-code.service';
import { CertificateGeneratorService } from '../../services/certificate-generator.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-request-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.scss'],
})
export class RequestDetailComponent implements OnInit {
  readonly rejectReasonMaxLength = 300;
  request: CertificateRequest | undefined;
  requester: Resident | undefined;
  qrCodeDataUrl: string | null = null;
  showQRCode = false;
  showRejectModal = false;
  rejectReasonInput = '';
  rejectReasonError = '';
  isUpdating = false;
  backRoute: string[] = ['..'];
  backText = 'Back to Requests';

  @ViewChild('certificateRef') certificateRef?: ElementRef<HTMLDivElement>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private data: DataService,
    private qrCodeService: QrCodeService,
    private certificateGenerator: CertificateGeneratorService,
    private auth: AuthService,
  ) {
    // Initialize on first load
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.request = this.data.getRequestById(id);
      if (this.request) {
        this.loadRequester();
      }
    }
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      const isArchiveDetailRoute = this.router.url.includes('/archives/requests/');
      if (isArchiveDetailRoute) {
        this.backRoute = ['/admin/archives'];
        this.backText = 'Back to Archives';
        return;
      }

      const source = queryParams.get('from');
      if (source === 'archives') {
        this.backRoute = ['/admin/archives'];
        this.backText = 'Back to Archives';
        return;
      }

      this.backRoute = ['..'];
      this.backText = 'Back to Requests';
    });

    // Handle route changes
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.request = this.data.getRequestById(id);
        if (this.request) {
          this.loadRequester();
          this.generateQRCode();
        } else {
          this.requester = undefined;
        }
      } else {
        this.request = undefined;
        this.requester = undefined;
        this.qrCodeDataUrl = null;
      }
    });
  }

  generateQRCode(): void {
    if (this.request?.id) {
      try {
        this.qrCodeDataUrl = this.qrCodeService.generateRequestQRCode(this.request.id);
      } catch (error) {
        // QR code service handles error notification
        this.qrCodeDataUrl = null;
      }
    }
  }

  toggleQRCode(): void {
    this.showQRCode = !this.showQRCode;
    if (this.showQRCode && !this.qrCodeDataUrl && this.request?.id) {
      this.generateQRCode();
    }
  }

  downloadQRCode(): void {
    if (!this.qrCodeDataUrl) return;
    
    const link = document.createElement('a');
    link.href = this.qrCodeDataUrl;
    link.download = `request-${this.request?.id || 'qr'}-code.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  private loadRequester(): void {
    if (this.request?.residentId) {
      this.requester = this.data.getResidentByResidentId(this.request.residentId);
    } else {
      this.requester = undefined;
    }
  }

  approveRequest(): void {
    if (!this.request || this.isUpdating) return;
    this.isUpdating = true;
    const id = this.request.id;
    const user = this.auth.currentUser;
    const now = new Date().toISOString();
    const updates: Partial<CertificateRequest> = {
      status: 'Approved',
      approvedById: user?.id ?? null,
      approvedByName: user?.name ?? null,
      approvedAt: now,
      rejectedById: null,
      rejectedByName: null,
      rejectedAt: null,
      rejectedReason: null,
    };
    this.data.updateRequest(id, updates);
    this.request = { ...this.request, ...updates };
    this.isUpdating = false;
  }

  openRejectModal(): void {
    if (!this.request || this.isUpdating) return;
    this.showRejectModal = true;
    this.rejectReasonInput = '';
    this.rejectReasonError = '';
  }

  closeRejectModal(): void {
    if (this.isUpdating) return;
    this.showRejectModal = false;
    this.rejectReasonInput = '';
    this.rejectReasonError = '';
  }

  submitRejectRequest(): void {
    if (!this.request || this.isUpdating) return;
    const reason = this.rejectReasonInput.trim();
    if (!reason) {
      this.rejectReasonError = 'Please provide a rejection reason.';
      return;
    }
    this.isUpdating = true;
    const id = this.request.id;
    const user = this.auth.currentUser;
    const now = new Date().toISOString();
    const updates: Partial<CertificateRequest> = {
      status: 'Rejected',
      rejectedById: user?.id ?? null,
      rejectedByName: user?.name ?? null,
      rejectedAt: now,
      rejectedReason: reason,
      approvedById: null,
      approvedByName: null,
      approvedAt: null,
    };
    this.data.updateRequest(id, updates);
    this.request = { ...this.request, ...updates };
    this.isUpdating = false;
    this.closeRejectModal();
  }

  onRejectReasonChange(value: string): void {
    this.rejectReasonInput = value;
    if (this.rejectReasonError && value.trim()) {
      this.rejectReasonError = '';
    }
  }

  canDownload(): boolean {
    return this.request?.status === 'Approved';
  }

  async downloadCertificate(format: 'pdf' | 'png'): Promise<void> {
    if (!this.canDownload()) return;
    const ref = this.certificateRef?.nativeElement;
    if (!ref) return;
    const fileName = `certificate-${this.request?.id || 'barangay'}`;
    if (format === 'pdf') {
      this.certificateGenerator.exportPdfText(
        {
          requestType: this.request?.type,
          purpose: this.request?.purpose,
          dateIssued: this.request?.date,
          controlNo: this.request?.id,
          person: {
            name: this.requester?.name,
            civilStatus: this.requester?.civilStatus,
            purok: this.requester?.purok,
            address: this.requester?.address,
          },
        },
        fileName,
      );
      return;
    }

    await this.certificateGenerator.export(ref, fileName, format);
  }
}
