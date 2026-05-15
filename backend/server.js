// BRIMMS notification backend (SMS + email)
// Provider selection is env-only — see backend/.env.example and backend/MIGRATION.md

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const { getProviderConfig, logProviderSummary } = require('./config/providers');
const { createSmsProvider, createEmailProvider } = require('./providers');

dotenv.config();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 50 * 1024 * 1024 },
});

const app = express();

const PORT = process.env.PORT || 4000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:4200';
const API_AUTH_TOKEN = process.env.API_AUTH_TOKEN || null;

const BODY_LIMIT_MB = Number(process.env.BODY_LIMIT_MB) || 200;
const BODY_LIMIT_BYTES = BODY_LIMIT_MB * 1024 * 1024;

let providerConfig;
let smsProvider;
let emailProvider;

try {
  providerConfig = getProviderConfig();
  smsProvider = createSmsProvider();
  emailProvider = createEmailProvider();
} catch (err) {
  console.error('Provider configuration error:', err.message);
  process.exit(1);
}

app.use(bodyParser.json({ limit: BODY_LIMIT_BYTES }));
app.use(bodyParser.urlencoded({ limit: BODY_LIMIT_BYTES, extended: true }));
app.use(cors({ origin: CORS_ORIGIN }));

function requireApiAuth(req, res, next) {
  if (!API_AUTH_TOKEN) {
    return next();
  }
  const header = req.headers['authorization'] || '';
  const [scheme, token] = header.split(' ');
  if (scheme === 'Bearer' && token === API_AUTH_TOKEN) {
    return next();
  }
  return res.status(401).json({ success: false, error: 'Unauthorized' });
}

const notifications = [];

function recordNotification({ type, recipient, message, status, error }) {
  const entry = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    type,
    recipient,
    message,
    status,
    error: error || null,
    createdAt: new Date().toISOString(),
  };
  notifications.unshift(entry);
  if (notifications.length > 200) {
    notifications.pop();
  }
  return entry;
}

function emailNotConfiguredResponse(res) {
  return res.status(503).json({
    success: false,
    error:
      'Email not configured. Set EMAIL_PROVIDER=demo (local), resend + RESEND_API_KEY, or smtp + SMTP_*.',
  });
}

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    service: 'brimms-backend',
    time: new Date().toISOString(),
    providers: {
      sms: {
        provider: providerConfig.sms.provider,
        demo: providerConfig.sms.demo,
        configured: providerConfig.sms.configured,
      },
      email: {
        provider: providerConfig.email.provider,
        demo: providerConfig.email.demo,
        configured: providerConfig.email.configured,
      },
    },
  });
});

app.post('/api/notifications/sms', requireApiAuth, async (req, res) => {
  const { to, message } = req.body || {};
  if (!to || !message) {
    return res.status(400).json({ error: 'Missing required fields: to, message' });
  }

  try {
    const { providerId } = await smsProvider.send({ to, message });
    const record = recordNotification({
      type: 'sms',
      recipient: to,
      message,
      status: 'sent',
    });
    res.status(201).json({ success: true, notification: record, providerId });
  } catch (err) {
    console.error('Error sending SMS:', err);
    const record = recordNotification({
      type: 'sms',
      recipient: to,
      message,
      status: 'failed',
      error: err.message || 'Unknown error',
    });
    res.status(500).json({ success: false, error: 'Failed to send SMS', notification: record });
  }
});

app.post('/api/notifications/email', requireApiAuth, async (req, res) => {
  const { to, subject, message, attachmentName, attachmentContent, attachmentMimeType } =
    req.body || {};

  if (!to || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields: to, subject, message' });
  }
  if (!emailProvider) {
    return emailNotConfiguredResponse(res);
  }

  try {
    const info = await emailProvider.send({
      to,
      subject,
      message,
      attachmentName,
      attachmentContent,
      attachmentMimeType,
    });
    const record = recordNotification({
      type: 'email',
      recipient: to,
      message: `${subject}: ${message.slice(0, 120)}${message.length > 120 ? '…' : ''}`,
      status: 'sent',
    });
    res.status(201).json({
      success: true,
      notification: record,
      providerId: info.messageId,
    });
  } catch (err) {
    console.error('Error sending email:', err);
    const record = recordNotification({
      type: 'email',
      recipient: to,
      message: `${subject || ''}: ${message || ''}`,
      status: 'failed',
      error: err.message || 'Unknown error',
    });
    res.status(500).json({ success: false, error: 'Failed to send email', notification: record });
  }
});

function maybeMulterBulk(req, res, next) {
  if (req.is('multipart/form-data')) {
    return upload.single('attachment')(req, res, next);
  }
  next();
}

app.post('/api/notifications/email/bulk', requireApiAuth, maybeMulterBulk, async (req, res) => {
  let recipients;
  let subject;
  let message;
  let attachmentName;
  let attachmentContent;
  let attachmentMimeType;

  if (req.file) {
    recipients =
      typeof req.body.recipients === 'string' ? JSON.parse(req.body.recipients) : req.body.recipients;
    subject = req.body.subject;
    message = req.body.message;
    attachmentName = req.file.originalname || 'attachment';
    attachmentContent = req.file.buffer;
    attachmentMimeType = req.file.mimetype;
  } else {
    const body = req.body || {};
    recipients = body.recipients;
    subject = body.subject;
    message = body.message;
    attachmentName = body.attachmentName;
    attachmentContent = body.attachmentContent;
    attachmentMimeType = body.attachmentMimeType;
  }

  if (!Array.isArray(recipients) || recipients.length === 0 || !subject || !message) {
    return res
      .status(400)
      .json({ error: 'Missing required fields: recipients (array), subject, message' });
  }
  if (!emailProvider) {
    return emailNotConfiguredResponse(res);
  }

  try {
    const results = [];
    const attachmentBuffer =
      attachmentContent instanceof Buffer
        ? attachmentContent
        : attachmentContent
          ? Buffer.from(attachmentContent, 'base64')
          : null;

    for (const to of recipients) {
      try {
        const info = await emailProvider.send({
          to,
          subject,
          message,
          attachmentName,
          attachmentContent: attachmentBuffer,
          attachmentMimeType,
        });
        const record = recordNotification({
          type: 'email',
          recipient: to,
          message: `${subject}: ${message.slice(0, 120)}${message.length > 120 ? '…' : ''}`,
          status: 'sent',
        });
        results.push({ to, success: true, providerId: info.messageId, notificationId: record.id });
      } catch (innerErr) {
        console.error('Error sending bulk email to', to, innerErr);
        const record = recordNotification({
          type: 'email',
          recipient: to,
          message: `${subject}: ${message.slice(0, 120)}${message.length > 120 ? '…' : ''}`,
          status: 'failed',
          error: innerErr.message || 'Unknown error',
        });
        results.push({ to, success: false, error: innerErr.message, notificationId: record.id });
      }
    }

    res.status(201).json({ success: true, results });
  } catch (err) {
    console.error('Bulk email general error:', err);
    res.status(500).json({ success: false, error: 'Failed to send bulk email' });
  }
});

app.post('/api/notifications/sms/bulk', requireApiAuth, async (req, res) => {
  const { recipients, message } = req.body || {};
  if (!Array.isArray(recipients) || recipients.length === 0 || !message) {
    return res.status(400).json({ error: 'Missing required fields: recipients (array), message' });
  }

  try {
    const results = [];
    for (const to of recipients) {
      try {
        const { providerId } = await smsProvider.send({ to, message });
        const record = recordNotification({
          type: 'sms',
          recipient: to,
          message,
          status: 'sent',
        });
        results.push({ to, success: true, providerId, notificationId: record.id });
      } catch (innerErr) {
        console.error('Error sending bulk SMS to', to, innerErr);
        const record = recordNotification({
          type: 'sms',
          recipient: to,
          message,
          status: 'failed',
          error: innerErr.message || 'Unknown error',
        });
        results.push({ to, success: false, error: innerErr.message, notificationId: record.id });
      }
    }
    res.status(201).json({ success: true, results });
  } catch (err) {
    console.error('Bulk SMS general error:', err);
    res.status(500).json({ success: false, error: 'Failed to send bulk SMS' });
  }
});

app.get('/api/notifications', requireApiAuth, (req, res) => {
  res.json({ success: true, notifications });
});

app.use((err, req, res, next) => {
  if (err.type === 'entity.too.large' || err.status === 413 || err.statusCode === 413) {
    return res.status(413).json({ success: false, error: 'Request entity too large' });
  }
  next(err);
});

app.listen(PORT, () => {
  console.log(`BRIMMS backend listening on http://localhost:${PORT}`);
  console.log(`Body limit: ${BODY_LIMIT_MB}MB`);
  logProviderSummary(providerConfig);
});
