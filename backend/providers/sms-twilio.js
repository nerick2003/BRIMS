/** Production SMS via Twilio. */

let twilioClient = null;

function getTwilioClient() {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_FROM_NUMBER;

  if (!accountSid || !authToken || !fromNumber) {
    throw new Error(
      'Missing Twilio configuration. Set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER, or SMS_PROVIDER=demo.',
    );
  }

  if (!twilioClient) {
    twilioClient = require('twilio')(accountSid, authToken);
  }
  return { client: twilioClient, fromNumber };
}

function createSmsTwilioProvider() {
  return {
    name: 'twilio',
    async send({ to, message }) {
      const { client, fromNumber } = getTwilioClient();
      const twilioMessage = await client.messages.create({
        body: message,
        to,
        from: fromNumber,
      });
      return { providerId: twilioMessage.sid };
    },
  };
}

module.exports = { createSmsTwilioProvider };
