/** Demo SMS: logs to console, never calls Twilio. */

function createSmsDemoProvider() {
  return {
    name: 'demo',
    async send({ to, message }) {
      const from = process.env.TWILIO_FROM_NUMBER || '+DEMO';
      const providerId = `demo-sms-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      console.log('[SMS DEMO] Would send SMS (provider: demo)');
      console.log(`  From: ${from}`);
      console.log(`  To:   ${to}`);
      console.log(`  Body: ${message}`);
      return { providerId, demo: true };
    },
  };
}

module.exports = { createSmsDemoProvider };
