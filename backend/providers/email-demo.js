/** Demo email: logs to console, never calls Resend/SMTP. */

function createEmailDemoProvider() {
  return {
    name: 'demo',
    async send({ to, subject, message, attachmentName }) {
      const from =
        process.env.RESEND_FROM ||
        process.env.EMAIL_FROM ||
        process.env.SMTP_USER ||
        'BRIMMS <demo@localhost>';
      const providerId = `demo-email-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      console.log('[EMAIL DEMO] Would send email (provider: demo)');
      console.log(`  From:    ${from}`);
      console.log(`  To:      ${to}`);
      console.log(`  Subject: ${subject}`);
      console.log(`  Body:    ${message}`);
      if (attachmentName) {
        console.log(`  Attachment: ${attachmentName}`);
      }
      return { messageId: providerId, demo: true };
    },
  };
}

module.exports = { createEmailDemoProvider };
