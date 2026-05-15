import {
  require_html2canvas
} from "./chunk-DBGBYJNX.js";
import {
  E
} from "./chunk-3BQBTUJM.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-TUEAJAVR.js";
import {
  __async,
  __toESM
} from "./chunk-TWWAJFRB.js";

// src/app/services/certificate-generator.service.ts
var import_html2canvas = __toESM(require_html2canvas());
var CertificateGeneratorService = class _CertificateGeneratorService {
  /**
   * Capture a DOM element and export it as a print-ready certificate
   * in either PDF or PNG format.
   */
  export(element, fileName, format = "pdf", textPayload) {
    return __async(this, null, function* () {
      if (format === "pdf" && textPayload) {
        this.exportPdfText(textPayload, fileName);
        return;
      }
      if (!element)
        return;
      const canvas = yield (0, import_html2canvas.default)(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false
      });
      const dataUrl = canvas.toDataURL("image/png");
      if (format === "png") {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `${fileName}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
      }
      const pdf = new E("portrait", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgProps = pdf.getImageProperties(dataUrl);
      const imgRatio = imgProps.width / imgProps.height;
      const pageRatio = pageWidth / pageHeight;
      let renderWidth = pageWidth;
      let renderHeight = pageHeight;
      if (imgRatio > pageRatio) {
        renderHeight = pageHeight;
        renderWidth = imgRatio * renderHeight;
      } else if (imgRatio < pageRatio) {
        renderWidth = pageWidth;
        renderHeight = renderWidth / imgRatio;
      }
      const offsetX = (pageWidth - renderWidth) / 2;
      const offsetY = (pageHeight - renderHeight) / 2;
      pdf.addImage(dataUrl, "PNG", offsetX, offsetY, renderWidth, renderHeight);
      pdf.save(`${fileName}.pdf`);
    });
  }
  exportPdfText(payload, fileName) {
    const doc = new E("portrait", "mm", "a4");
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const marginX = 16;
    const contentWidth = pageWidth - marginX * 2;
    doc.setDrawColor(40);
    let y = 22;
    const barangayName = payload.barangayName ?? "Barangay Name";
    const municipality = payload.municipality ?? "Municipality of Villanueva";
    const province = payload.province ?? "Province of Misamis Oriental";
    doc.setFont("times", "normal");
    doc.setFontSize(11);
    doc.text("Republic of the Philippines", pageWidth / 2, y, { align: "center" });
    y += 5;
    doc.text(province, pageWidth / 2, y, { align: "center" });
    y += 5;
    doc.text(municipality, pageWidth / 2, y, { align: "center" });
    y += 5;
    doc.text(barangayName, pageWidth / 2, y, { align: "center" });
    y += 5;
    doc.setLineWidth(0.3);
    doc.line(marginX, y, pageWidth - marginX, y);
    y += 6;
    doc.setFont("times", "bold");
    doc.text("OFFICE OF THE PUNONG BARANGAY", pageWidth / 2, y, { align: "center" });
    y += 14;
    const title = (payload.requestType ?? "CERTIFICATE").toUpperCase();
    doc.setFontSize(18);
    doc.text(title, pageWidth / 2, y, { align: "center" });
    y += 12;
    doc.setFont("times", "bold");
    doc.setFontSize(12);
    doc.text("TO WHOM IT MAY CONCERN:", marginX, y);
    y += 10;
    const personName = payload.person?.name?.trim() || "____________________";
    const civilStatus = payload.person?.civilStatus?.trim() || "single/married";
    const address = payload.person?.address?.trim() || `Purok ${payload.person?.purok?.trim() || "___"}, ${barangayName}, ${municipality}, ${province}`;
    const purpose = payload.purpose?.trim() || "____________________";
    const dateIssued = payload.dateIssued?.trim() || "______________";
    const controlNo = payload.controlNo?.trim() || "________";
    doc.setFont("times", "normal");
    doc.setFontSize(12);
    const lineHeight = 7;
    y = this.renderSegmentedParagraph(doc, marginX, y, contentWidth, lineHeight, [
      { text: "This is to certify that " },
      { text: personName.toUpperCase(), bold: true },
      { text: ", of legal age, " },
      { text: civilStatus },
      { text: ", and a resident of " },
      { text: address.toUpperCase(), bold: true },
      { text: ", is a bona fide resident of this barangay." }
    ]) + 8;
    y = this.renderSegmentedParagraph(doc, marginX, y, contentWidth, lineHeight, [
      {
        text: "This certification is being issued upon the request of the above-named person for the purpose of "
      },
      { text: purpose.toUpperCase(), bold: true },
      { text: "." }
    ]) + 8;
    const paragraph3 = `Issued this ${dateIssued} at ${barangayName}, ${municipality}, ${province}, Philippines.`;
    const lines3 = doc.splitTextToSize(paragraph3, contentWidth);
    doc.text(lines3, marginX, y);
    y += lines3.length * lineHeight + 8;
    const footerTop = Math.max(y, pageHeight - 60);
    doc.setFontSize(11);
    doc.setFont("times", "normal");
    doc.text("Control No.:", marginX, footerTop);
    doc.setFont("times", "bold");
    doc.text(controlNo, marginX + 28, footerTop);
    const sigX = pageWidth - marginX;
    const sigLineWidth = 60;
    const sigY = footerTop + 18;
    doc.setLineWidth(0.4);
    doc.line(sigX - sigLineWidth, sigY, sigX, sigY);
    doc.setFont("times", "bold");
    doc.text("Punong Barangay", sigX - sigLineWidth / 2, sigY + 6, { align: "center" });
    doc.save(`${fileName}.pdf`);
  }
  renderSegmentedParagraph(doc, marginX, startY, contentWidth, lineHeight, segments) {
    let y = startY;
    let x = marginX;
    const maxX = marginX + contentWidth;
    const tokens = [];
    segments.forEach((segment) => {
      const text = segment.text ?? "";
      const bold = !!segment.bold;
      const parts = text.split(/(\s+)/);
      parts.forEach((part) => {
        if (!part)
          return;
        tokens.push({ word: part, bold });
      });
    });
    tokens.forEach((token, index) => {
      if (!token.word)
        return;
      if (token.bold) {
        doc.setFont("times", "bold");
      } else {
        doc.setFont("times", "normal");
      }
      const width = doc.getTextWidth(token.word);
      if (x + width > maxX && index !== 0) {
        y += lineHeight;
        x = marginX;
      }
      doc.text(token.word, x, y);
      x += width;
    });
    return y;
  }
  static {
    this.\u0275fac = function CertificateGeneratorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CertificateGeneratorService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CertificateGeneratorService, factory: _CertificateGeneratorService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CertificateGeneratorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  CertificateGeneratorService
};
//# sourceMappingURL=chunk-A5BCMD2O.js.map
