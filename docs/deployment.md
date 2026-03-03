# Deployment

## Local Validation
```bash
npm install
npm run lint
npm run type-check
npm run build
npm run start
```

## CI Validation
The CI workflow runs:
- `npm install`
- `npm run lint`
- `npm run type-check`
- `npm run build`

## Safety Rules
- Do not commit `.env*`
- Keep tracking tags active in production layout
- Validate `/`, `/projects`, `/system`, PT/EN, and dark/light before release
