import {
  EmailService
} from "./chunk-ZHZA6TMO.js";
import "./chunk-37FGLYSD.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-PCIERS7P.js";
import "./chunk-E73EYYCC.js";
import {
  AuthService,
  NotificationService
} from "./chunk-2RJNPIJT.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-TUEAJAVR.js";
import "./chunk-TWWAJFRB.js";

// src/app/pages/admin-email-broadcast/admin-email-broadcast.component.ts
var AdminEmailBroadcastComponent = class _AdminEmailBroadcastComponent {
  constructor(emailService, notifications, auth) {
    this.emailService = emailService;
    this.notifications = notifications;
    this.auth = auth;
    this.email = "";
    this.subject = "";
    this.message = "";
    this.isSending = false;
  }
  notifySelf(input) {
    const userId = this.auth.currentUser?.id;
    if (!userId) {
      return;
    }
    this.notifications.notifySessionUser(userId, input);
  }
  send() {
    const trimmedEmail = this.email.trim();
    const trimmedSubject = this.subject.trim();
    const trimmedMessage = this.message.trim();
    if (!trimmedEmail || !trimmedSubject || !trimmedMessage) {
      this.notifySelf({
        type: "warning",
        message: "Please enter email, subject, and message.",
        title: "Missing information"
      });
      return;
    }
    this.isSending = true;
    this.emailService.sendEmail({
      to: trimmedEmail,
      subject: trimmedSubject,
      message: trimmedMessage
    }).subscribe({
      next: (res) => {
        if (res.success) {
          this.notifySelf({
            type: "success",
            message: "Email sent successfully.",
            title: "Email Notification"
          });
          this.email = "";
          this.subject = "";
          this.message = "";
        } else {
          this.notifySelf({
            type: "error",
            message: res.error || "Failed to send email.",
            title: "Email Error"
          });
        }
      },
      error: (err) => {
      },
      complete: () => {
        this.isSending = false;
      }
    });
  }
  static {
    this.\u0275fac = function AdminEmailBroadcastComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminEmailBroadcastComponent)(\u0275\u0275directiveInject(EmailService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminEmailBroadcastComponent, selectors: [["app-admin-email-broadcast"]], decls: 20, vars: 8, consts: [[1, "email-broadcast"], [1, "email-broadcast__title"], [1, "email-broadcast__subtitle"], [1, "email-broadcast__form", 3, "ngSubmit"], [1, "form-field"], ["for", "email", 1, "form-label"], ["id", "email", "name", "email", "type", "email", "placeholder", "resident@example.com", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], ["for", "subject", 1, "form-label"], ["id", "subject", "name", "subject", "type", "text", "placeholder", "Subject line", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], ["for", "message", 1, "form-label"], ["id", "message", "name", "message", "rows", "5", "placeholder", "Type your email message here...", 1, "form-textarea", 3, "ngModelChange", "ngModel", "disabled"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"]], template: function AdminEmailBroadcastComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2, "Email Notifications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 2);
        \u0275\u0275text(4, " Send a one-time email notification to a resident. For demo purposes, this sends directly to an email address. In production, you might select residents from the database instead. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "form", 3);
        \u0275\u0275listener("ngSubmit", function AdminEmailBroadcastComponent_Template_form_ngSubmit_5_listener() {
          return ctx.send();
        });
        \u0275\u0275elementStart(6, "div", 4)(7, "label", 5);
        \u0275\u0275text(8, "Recipient email address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function AdminEmailBroadcastComponent_Template_input_ngModelChange_9_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 4)(11, "label", 7);
        \u0275\u0275text(12, "Subject");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function AdminEmailBroadcastComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.subject, $event) || (ctx.subject = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 4)(15, "label", 9);
        \u0275\u0275text(16, "Message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "textarea", 10);
        \u0275\u0275twoWayListener("ngModelChange", function AdminEmailBroadcastComponent_Template_textarea_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.message, $event) || (ctx.message = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275property("disabled", ctx.isSending);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.subject);
        \u0275\u0275property("disabled", ctx.isSending);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.message);
        \u0275\u0275property("disabled", ctx.isSending);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.isSending);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isSending ? "Sending\u2026" : "Send Email", " ");
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n.email-broadcast[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 1.5rem 1.25rem;\n}\n.email-broadcast__title[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.email-broadcast__subtitle[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem;\n  color: var(--color-text-muted);\n  font-size: 0.95rem;\n}\n.email-broadcast__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--color-text);\n}\n.form-input[_ngcontent-%COMP%], \n.form-textarea[_ngcontent-%COMP%] {\n  border-radius: var(--radius);\n  border: 1px solid var(--color-border);\n  padding: 0.5rem 0.75rem;\n  font-size: 0.95rem;\n  background-color: var(--color-bg);\n  color: var(--color-text);\n}\n.form-input[_ngcontent-%COMP%]:focus, \n.form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-primary);\n  box-shadow: 0 0 0 1px var(--color-primary-soft);\n}\n.form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.6rem 1.25rem;\n  border-radius: 999px;\n  border: none;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.95rem;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n  color: white;\n}\n.btn--primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n/*# sourceMappingURL=admin-email-broadcast.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminEmailBroadcastComponent, [{
    type: Component,
    args: [{ selector: "app-admin-email-broadcast", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="email-broadcast">\r
  <h1 class="email-broadcast__title">Email Notifications</h1>\r
  <p class="email-broadcast__subtitle">\r
    Send a one-time email notification to a resident. For demo purposes, this sends directly to an\r
    email address. In production, you might select residents from the database instead.\r
  </p>\r
\r
  <form class="email-broadcast__form" (ngSubmit)="send()">\r
    <div class="form-field">\r
      <label class="form-label" for="email">Recipient email address</label>\r
      <input\r
        id="email"\r
        name="email"\r
        class="form-input"\r
        type="email"\r
        [(ngModel)]="email"\r
        placeholder="resident@example.com"\r
        [disabled]="isSending"\r
      />\r
    </div>\r
\r
    <div class="form-field">\r
      <label class="form-label" for="subject">Subject</label>\r
      <input\r
        id="subject"\r
        name="subject"\r
        class="form-input"\r
        type="text"\r
        [(ngModel)]="subject"\r
        placeholder="Subject line"\r
        [disabled]="isSending"\r
      />\r
    </div>\r
\r
    <div class="form-field">\r
      <label class="form-label" for="message">Message</label>\r
      <textarea\r
        id="message"\r
        name="message"\r
        class="form-textarea"\r
        rows="5"\r
        [(ngModel)]="message"\r
        placeholder="Type your email message here..."\r
        [disabled]="isSending"\r
      ></textarea>\r
    </div>\r
\r
    <button class="btn btn--primary" type="submit" [disabled]="isSending">\r
      {{ isSending ? 'Sending\u2026' : 'Send Email' }}\r
    </button>\r
  </form>\r
</div>\r
\r
`, styles: ["/* src/app/pages/admin-email-broadcast/admin-email-broadcast.component.scss */\n.email-broadcast {\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 1.5rem 1.25rem;\n}\n.email-broadcast__title {\n  margin: 0 0 0.5rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.email-broadcast__subtitle {\n  margin: 0 0 1.5rem;\n  color: var(--color-text-muted);\n  font-size: 0.95rem;\n}\n.email-broadcast__form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.form-label {\n  font-weight: 500;\n  color: var(--color-text);\n}\n.form-input,\n.form-textarea {\n  border-radius: var(--radius);\n  border: 1px solid var(--color-border);\n  padding: 0.5rem 0.75rem;\n  font-size: 0.95rem;\n  background-color: var(--color-bg);\n  color: var(--color-text);\n}\n.form-input:focus,\n.form-textarea:focus {\n  outline: none;\n  border-color: var(--color-primary);\n  box-shadow: 0 0 0 1px var(--color-primary-soft);\n}\n.form-textarea {\n  resize: vertical;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.6rem 1.25rem;\n  border-radius: 999px;\n  border: none;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.95rem;\n}\n.btn--primary {\n  background-color: var(--color-primary);\n  color: white;\n}\n.btn--primary:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n/*# sourceMappingURL=admin-email-broadcast.component.css.map */\n"] }]
  }], () => [{ type: EmailService }, { type: NotificationService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminEmailBroadcastComponent, { className: "AdminEmailBroadcastComponent", filePath: "src/app/pages/admin-email-broadcast/admin-email-broadcast.component.ts", lineNumber: 15 });
})();
export {
  AdminEmailBroadcastComponent
};
//# sourceMappingURL=chunk-OBU5JOFU.js.map
