/**
 * Resolves SMS/email provider from environment.
 * Migrate by changing SMS_PROVIDER / EMAIL_PROVIDER (and provider credentials) in .env only.
 */

function parseTruthy(value) {
  return ['1', 'true', 'yes'].includes(String(value || '').trim().toLowerCase());
}

const SMS_PROVIDERS = ['demo', 'twilio'];
const EMAIL_PROVIDERS = ['demo', 'resend', 'smtp', 'auto'];

function resolveSmsProviderName() {
  const explicit = String(process.env.SMS_PROVIDER || '').trim().toLowerCase();
  if (explicit) {
    if (!SMS_PROVIDERS.includes(explicit)) {
      throw new Error(`Invalid SMS_PROVIDER "${explicit}". Use: ${SMS_PROVIDERS.join(', ')}`);
    }
    return explicit;
  }
  if (parseTruthy(process.env.SMS_DEMO_MODE)) {
    return 'demo';
  }
  return 'twilio';
}

function resolveEmailProviderName() {
  const explicit = String(process.env.EMAIL_PROVIDER || '').trim().toLowerCase();
  if (explicit) {
    if (!EMAIL_PROVIDERS.includes(explicit)) {
      throw new Error(`Invalid EMAIL_PROVIDER "${explicit}". Use: ${EMAIL_PROVIDERS.join(', ')}`);
    }
    if (explicit === 'auto') {
      if (process.env.RESEND_API_KEY) return 'resend';
      if (process.env.SMTP_HOST) return 'smtp';
      return 'none';
    }
    return explicit;
  }
  if (parseTruthy(process.env.EMAIL_DEMO_MODE)) {
    return 'demo';
  }
  if (process.env.RESEND_API_KEY) return 'resend';
  if (process.env.SMTP_HOST) return 'smtp';
  return 'none';
}

function getProviderConfig() {
  const smsProvider = resolveSmsProviderName();
  const emailProvider = resolveEmailProviderName();

  return {
    sms: {
      provider: smsProvider,
      configured: smsProvider === 'demo' || hasTwilioConfig(),
      demo: smsProvider === 'demo',
    },
    email: {
      provider: emailProvider,
      configured: emailProvider === 'demo' || emailProvider === 'resend' || emailProvider === 'smtp',
      demo: emailProvider === 'demo',
    },
  };
}

function hasTwilioConfig() {
  return Boolean(
    process.env.TWILIO_ACCOUNT_SID &&
      process.env.TWILIO_AUTH_TOKEN &&
      process.env.TWILIO_FROM_NUMBER,
  );
}

function logProviderSummary(config) {
  console.log(`SMS provider:   ${config.sms.provider}${config.sms.demo ? ' (console only)' : ''}`);
  console.log(`Email provider: ${config.email.provider}${config.email.demo ? ' (console only)' : ''}`);
  if (config.sms.provider === 'twilio' && !config.sms.configured) {
    console.warn('SMS: Twilio credentials missing. Set TWILIO_* or SMS_PROVIDER=demo.');
  }
  if (config.email.provider === 'none') {
    console.warn('Email: not configured. Set EMAIL_PROVIDER=demo, RESEND_API_KEY, or SMTP_*.');
  }
}

module.exports = {
  SMS_PROVIDERS,
  EMAIL_PROVIDERS,
  getProviderConfig,
  logProviderSummary,
  parseTruthy,
};
