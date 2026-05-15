/** Production email via Resend API. */

async function sendViaResend({
  from,
  to,
  subject,
  text,
  attachmentName,
  attachmentContent,
  attachmentMimeType,
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not set. Set EMAIL_PROVIDER=smtp or EMAIL_PROVIDER=demo.');
  }

  const fromAddr =
    from || process.env.RESEND_FROM || process.env.EMAIL_FROM || 'BRIMMS <onboarding@resend.dev>';
  const payload = {
    from: fromAddr,
    to: Array.isArray(to) ? to : [to],
    subject,
    text,
  };

  if (attachmentName && attachmentContent) {
    const content = Buffer.isBuffer(attachmentContent)
      ? attachmentContent.toString('base64')
      : attachmentContent;
    payload.attachments = [{ filename: attachmentName, content }];
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000);

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    signal: controller.signal,
  }).finally(() => clearTimeout(timeoutId));

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || data.error || `Resend API error: ${res.status}`);
  }
  return { messageId: data.id };
}

function createEmailResendProvider() {
  return {
    name: 'resend',
    async send({ from, to, subject, message, attachmentName, attachmentContent, attachmentMimeType }) {
      return sendViaResend({
        from,
        to,
        subject,
        text: message,
        attachmentName,
        attachmentContent,
        attachmentMimeType,
      });
    },
  };
}

module.exports = { createEmailResendProvider };
