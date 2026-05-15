/** Production email via SMTP (Nodemailer). */

const nodemailer = require('nodemailer');

let emailTransporter = null;

function getEmailTransporter() {
  if (emailTransporter) return emailTransporter;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      'Missing SMTP configuration. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, or EMAIL_PROVIDER=resend|demo.',
    );
  }

  emailTransporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  return emailTransporter;
}

function createEmailSmtpProvider() {
  return {
    name: 'smtp',
    async send({ from, to, subject, message, attachmentName, attachmentContent, attachmentMimeType }) {
      const fromAddr = from || process.env.EMAIL_FROM || process.env.SMTP_USER;
      const transporter = getEmailTransporter();
      const mailOptions = {
        from: fromAddr,
        to,
        subject,
        text: message,
      };
      if (attachmentName && attachmentContent) {
        mailOptions.attachments = [
          {
            filename: attachmentName,
            content: Buffer.isBuffer(attachmentContent)
              ? attachmentContent
              : Buffer.from(attachmentContent, 'base64'),
            contentType: attachmentMimeType || undefined,
          },
        ];
      }
      const info = await transporter.sendMail(mailOptions);
      return { messageId: info.messageId };
    },
  };
}

module.exports = { createEmailSmtpProvider };
