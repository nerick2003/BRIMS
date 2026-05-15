const { getProviderConfig } = require('../config/providers');
const { createSmsDemoProvider } = require('./sms-demo');
const { createSmsTwilioProvider } = require('./sms-twilio');
const { createEmailDemoProvider } = require('./email-demo');
const { createEmailResendProvider } = require('./email-resend');
const { createEmailSmtpProvider } = require('./email-smtp');

function createSmsProvider() {
  const { sms } = getProviderConfig();
  switch (sms.provider) {
    case 'demo':
      return createSmsDemoProvider();
    case 'twilio':
      return createSmsTwilioProvider();
    default:
      throw new Error(`Unsupported SMS provider: ${sms.provider}`);
  }
}

function createEmailProvider() {
  const { email } = getProviderConfig();
  switch (email.provider) {
    case 'demo':
      return createEmailDemoProvider();
    case 'resend':
      return createEmailResendProvider();
    case 'smtp':
      return createEmailSmtpProvider();
    case 'none':
      return null;
    default:
      throw new Error(`Unsupported email provider: ${email.provider}`);
  }
}

module.exports = {
  createSmsProvider,
  createEmailProvider,
  getProviderConfig,
};
