# Deployment

## Local Production Validation
Run in sequence:

```bash
npm install
npm run lint
npm run build
npm run start
```

## Environment and Secrets
- Keep secrets in environment variables only.
- Never commit `.env*` files.
- Rotate exposed tokens immediately.

## Tracking and Conversion Events
Expected CTA event names:

- `view_resume`
- `view_projects`
- `contact_whatsapp`

Events should include conversion metadata and be validated in GA4 realtime before marking as key events.

## Pre-Deploy Checklist
- Build without errors.
- No critical warnings.
- Locale routes functional.
- Theme switching intact.
- `/projects` and `/system` validated.
- Tracking tags present in rendered layout.

## Known Operational Note
If Vercel CLI fails due invalid token, regenerate token and retry deployment with updated environment.
