import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodeFormat, Result } from '@zxing/library';
import { DataService } from '../../services/data.service';

interface ParsedQrPayload {
  type?: string;
  id?: string;
  residentId?: string;
}

@Component({
  selector: 'app-qr-scanner',
  standalone: true,
  imports: [CommonModule, RouterLink, ZXingScannerModule],
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss'],
})
export class QrScannerComponent implements OnInit, OnDestroy {
  scannerEnabled = false;
  hasPermission = false;
  availableDevices: MediaDeviceInfo[] = [];
  selectedDevice: MediaDeviceInfo | undefined = undefined;
  scanResult: string | null = null;
  scanResultUrl: string | null = null;
  scanError: string | null = null;
  scanResultLabel: string | null = null;
  isNavigating = false;
  pendingRoute: (string | number)[] | null = null;
  allowedFormats = [BarcodeFormat.QR_CODE];
  torchEnabled = false;
  torchAvailable = false;
  /** Prevents duplicate scanSuccess events from processing the same code repeatedly. */
  private scanLocked = false;
  private lastScannedCode: string | null = null;

  constructor(
    private router: Router,
    private data: DataService,
  ) {}

  ngOnInit() {
    this.requestCameraPermission();
  }

  ngOnDestroy() {
    this.scannerEnabled = false;
  }

  async requestCameraPermission() {
    const strategies: MediaStreamConstraints[] = [
      { video: true },
      { video: { facingMode: 'user' } },
      { video: { facingMode: 'environment' } },
      { video: { width: { ideal: 1280 }, height: { ideal: 720 } } },
    ];

    for (const constraints of strategies) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        stream.getTracks().forEach(track => track.stop());
        this.hasPermission = true;
        this.scannerEnabled = true;
        this.scanError = null;
        return;
      } catch (error: unknown) {
        const errorName = (error as { name?: string })?.name || '';
        if (errorName === 'NotAllowedError' || errorName === 'PermissionDeniedError') {
          this.hasPermission = false;
          this.scanError = 'Camera permission denied. Please enable camera access in your browser settings.';
          return;
        }
        if (errorName === 'NotFoundError' || errorName === 'DevicesNotFoundError') {
          continue;
        }
        if (errorName === 'NotReadableError' || errorName === 'TrackStartError') {
          this.hasPermission = false;
          this.scanError = 'Camera is already in use by another application.';
          return;
        }
      }
    }

    this.hasPermission = false;
    this.scanError = this.scanError || 'No camera found. Try closing other apps using the camera, or use Chrome settings (chrome://settings/content/camera) to select your webcam.';
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices.filter(d => d.kind === 'videoinput');
    const label = (d: MediaDeviceInfo) => (d.label || '').toLowerCase();
    const backCamera = this.availableDevices.find(d =>
      label(d).includes('back') || label(d).includes('rear') || label(d).includes('environment')
    );
    this.selectedDevice = backCamera || this.availableDevices[0] || undefined;
  }

  onDeviceSelectChange(deviceId: string) {
    this.selectedDevice = this.availableDevices.find(device => device.deviceId === deviceId) || undefined;
  }

  onScanSuccess(result: Result | string): void {
    const text = typeof result === 'string' ? result : result.getText();
    const trimmed = text?.trim();
    if (!trimmed) {
      return;
    }

    // ZXing fires scanSuccess continuously while the code is in frame.
    if (this.scanLocked) {
      if (trimmed === this.lastScannedCode) {
        return;
      }
    }

    this.scanLocked = true;
    this.lastScannedCode = trimmed;
    this.scannerEnabled = false;
    this.scanResult = trimmed;
    this.scanError = null;
    this.scanResultLabel = null;
    this.pendingRoute = null;
    this.processScannedCode(trimmed);
  }

  onScanError(_error?: unknown): void {
    if (this.hasPermission && !this.scanError) {
      this.scanError = 'An error occurred while scanning. Please try again.';
    }
  }

  onTorchCompatible(isCompatible: boolean): void {
    this.torchAvailable = isCompatible;
  }

  toggleTorch(): void {
    this.torchEnabled = !this.torchEnabled;
  }

  openPendingRoute(): void {
    if (!this.pendingRoute) {
      return;
    }
    this.openRouteInNewTab(this.pendingRoute);
  }

  private getRouteBase(): string {
    return this.router.url.startsWith('/admin') ? '/admin' : '/staff';
  }

  private parseQrPayload(code: string): ParsedQrPayload | null {
    const normalized = code.replace(/^\uFEFF/, '').trim();
    try {
      const parsed = JSON.parse(normalized) as ParsedQrPayload;
      return parsed && typeof parsed === 'object' ? parsed : null;
    } catch {
      return null;
    }
  }

  private openRouteInNewTab(commands: (string | number)[]): boolean {
    this.isNavigating = true;
    this.pendingRoute = null;
    this.scanError = null;

    if (typeof window === 'undefined') {
      void this.router.navigate(commands);
      this.isNavigating = false;
      this.scanResultLabel = 'Record opened.';
      return true;
    }

    const urlTree = this.router.createUrlTree(commands);
    const path = this.router.serializeUrl(urlTree);
    const absoluteUrl = `${window.location.origin}${path}`;
    const newTab = window.open(absoluteUrl, '_blank', 'noopener,noreferrer');

    this.isNavigating = false;

    if (!newTab) {
      this.scanError = 'Could not open a new tab. Allow pop-ups for this site, or use the button below.';
      this.pendingRoute = commands;
      return false;
    }

    this.scanResultLabel = 'Opened in a new tab. You can scan another code here.';
    return true;
  }

  private openExternalUrlInNewTab(url: string): boolean {
    if (typeof window === 'undefined') {
      return false;
    }

    const newTab = window.open(url, '_blank', 'noopener,noreferrer');
    if (!newTab) {
      this.scanError = 'Could not open a new tab. Allow pop-ups or use Open link below.';
      return false;
    }

    this.scanResultLabel = 'Opened in a new tab.';
    return true;
  }

  private openResident(base: string, residentKey: string): void {
    const resident =
      this.data.getResidentById(residentKey) ||
      this.data.getResidentByResidentId(residentKey);
    const routeId = resident?.id ?? residentKey;
    this.scanResultLabel = resident
      ? `Opening profile for ${resident.name} in a new tab…`
      : 'Opening resident profile in a new tab…';
    this.openRouteInNewTab([base, 'residents', routeId]);
  }

  private openRequest(base: string, requestId: string): void {
    const normalizedId = requestId.replace(/^(REQ-|req-)/i, '');
    const request = this.data.getRequestById(normalizedId);
    const routeId = request?.id ?? normalizedId;
    this.scanResultLabel = request
      ? `Opening request ${request.id} in a new tab…`
      : 'Opening request in a new tab…';
    this.openRouteInNewTab([base, 'requests', routeId]);
  }

  processScannedCode(code: string): void {
    try {
      this.scanResultUrl = null;
      const parsed = this.parseQrPayload(code);
      const base = this.getRouteBase();

      if (parsed?.type === 'resident') {
        const residentKey = parsed.id || parsed.residentId;
        if (residentKey) {
          this.openResident(base, String(residentKey));
        } else {
          this.scanError = 'Invalid resident QR code (missing ID).';
        }
        return;
      }

      if (parsed?.type === 'request' && parsed.id) {
        this.openRequest(base, String(parsed.id));
        return;
      }

      if (parsed?.type === 'certificate' && parsed.id) {
        this.openRequest(base, String(parsed.id));
        return;
      }

      if (parsed?.type) {
        this.scanError = `Unsupported QR code type: ${parsed.type}`;
        return;
      }

      const trimmedCode = code.trim();

      let urlToOpen: string | null = null;
      if (/^https?:\/\/\S+/i.test(trimmedCode)) {
        urlToOpen = trimmedCode;
      } else if (
        /^www\.\S+/i.test(trimmedCode) ||
        /^[a-z0-9.-]+\.[a-z]{2,}(\S*)?$/i.test(trimmedCode)
      ) {
        urlToOpen = `https://${trimmedCode}`;
      }

      if (urlToOpen) {
        this.scanResultUrl = urlToOpen;
        this.openExternalUrlInNewTab(urlToOpen);
        return;
      }

      if (/^(REQ-|req-)/i.test(trimmedCode)) {
        this.openRequest(base, trimmedCode);
        return;
      }

      const residentFromId =
        this.data.getResidentById(trimmedCode) || this.data.getResidentByResidentId(trimmedCode);
      if (residentFromId) {
        this.openResident(base, residentFromId.id);
        return;
      }

      // Resident ID from QR when data is still loading (detail page resolves once data arrives).
      if (/^[a-z0-9_-]+$/i.test(trimmedCode)) {
        this.openResident(base, trimmedCode);
        return;
      }

      this.scanError = `Unrecognized QR code format: ${code}`;
    } catch {
      this.scanError = 'Error processing QR code. Please try scanning again.';
    }
  }

  resetScanner(): void {
    this.scanLocked = false;
    this.lastScannedCode = null;
    this.scanResult = null;
    this.scanResultUrl = null;
    this.scanError = null;
    this.scanResultLabel = null;
    this.isNavigating = false;
    this.pendingRoute = null;
    this.scannerEnabled = true;
  }

  retryPermission(): void {
    void this.requestCameraPermission();
  }
}
