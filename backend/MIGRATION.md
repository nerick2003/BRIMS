# Notification providers — demo → production

The Angular app does **not** change when you switch providers. Only `backend/.env` (or Railway/Render env vars) and a backend restart are required.

## Local demo (no Twilio, no SMTP/Resend)

```env
SMS_PROVIDER=demo
EMAIL_PROVIDER=demo
```

Restart: `npm start`. SMS/email are logged in the backend console; the UI still shows success.

## Production SMS (Twilio)

```env
SMS_PROVIDER=twilio
TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...
TWILIO_FROM_NUMBER=+1...
```

Remove or set `SMS_DEMO_MODE=false`. Do not use `SMS_PROVIDER=demo` in production.

## Production email (Resend)

```env
EMAIL_PROVIDER=resend
RESEND_API_KEY=re_...
RESEND_FROM="BRIMMS <no-reply@yourdomain.com>"
```

## Production email (SMTP)

```env
EMAIL_PROVIDER=smtp
SMTP_HOST=...
SMTP_PORT=587
SMTP_USER=...
SMTP_PASS=...
EMAIL_FROM="BRIMMS <no-reply@your-domain.com>"
```

## Auto email provider

```env
EMAIL_PROVIDER=auto
```

Uses Resend when `RESEND_API_KEY` is set, otherwise SMTP when `SMTP_HOST` is set.

## Frontend

| Environment | `assets/config.json` `apiBaseUrl` |
|-------------|-----------------------------------|
| Local `ng serve` | `http://localhost:4000` (or use existing localhost override in `ApiConfigService`) |
| Firebase / production | `https://your-backend.up.railway.app` |

Set `CORS_ORIGIN` on the backend to your hosted frontend URL.

## Verify

```http
GET /api/health
```

Response includes active providers:

```json
{
  "providers": {
    "sms": { "provider": "demo", "demo": true, "configured": true },
    "email": { "provider": "resend", "demo": false, "configured": true }
  }
}
```

## Checklist

- [ ] Set `SMS_PROVIDER` and `EMAIL_PROVIDER`
- [ ] Add provider credentials (Twilio / Resend / SMTP)
- [ ] Set `CORS_ORIGIN` to frontend origin
- [ ] Set `API_AUTH_TOKEN` in production
- [ ] Restart backend
- [ ] Confirm `/api/health` shows expected providers
