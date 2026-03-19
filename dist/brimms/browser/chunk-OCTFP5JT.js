import {
  BarcodeFormat_default,
  EncodeHintType_default,
  QRCodeWriter_default
} from "./chunk-R4NIWQA2.js";
import {
  NotificationService
} from "./chunk-EXP2T67A.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-MXCAMUXG.js";

// src/app/services/qr-code.service.ts
var QrCodeService = class _QrCodeService {
  constructor() {
    this.notificationService = inject(NotificationService);
    this.writer = new QRCodeWriter_default();
  }
  /**
   * Generate QR code as data URL (for use in img src)
   */
  generateQRCodeDataURL(data, size = 256) {
    try {
      const hints = /* @__PURE__ */ new Map();
      hints.set(EncodeHintType_default.MARGIN, 2);
      const bitMatrix = this.writer.encode(data, BarcodeFormat_default.QR_CODE, size, size, hints);
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        throw new Error("Could not get canvas context");
      }
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, size, size);
      ctx.fillStyle = "#000000";
      const cellSize = size / bitMatrix.getWidth();
      for (let x = 0; x < bitMatrix.getWidth(); x++) {
        for (let y = 0; y < bitMatrix.getHeight(); y++) {
          if (bitMatrix.get(x, y)) {
            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
          }
        }
      }
      return canvas.toDataURL("image/png");
    } catch (error) {
      const errorMessage = error?.message || "Unknown error";
      this.notificationService.error(`Failed to generate QR code. ${errorMessage}`, "QR Code Error");
      console.error("Error generating QR code:", error);
      throw error;
    }
  }
  /**
   * Generate QR code for a resident
   */
  generateResidentQRCode(residentId) {
    const data = JSON.stringify({
      type: "resident",
      id: residentId,
      residentId
    });
    return this.generateQRCodeDataURL(data);
  }
  /**
   * Generate QR code for a request
   */
  generateRequestQRCode(requestId) {
    const data = JSON.stringify({
      type: "request",
      id: requestId
    });
    return this.generateQRCodeDataURL(data);
  }
  /**
   * Generate QR code for a certificate
   */
  generateCertificateQRCode(certificateId) {
    const data = JSON.stringify({
      type: "certificate",
      id: certificateId
    });
    return this.generateQRCodeDataURL(data);
  }
  static {
    this.\u0275fac = function QrCodeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QrCodeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QrCodeService, factory: _QrCodeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QrCodeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  QrCodeService
};
//# sourceMappingURL=chunk-OCTFP5JT.js.map
