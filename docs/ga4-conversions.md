# GA4 conversion setup for landing CTA clicks

This project sends the following CTA click events from the new landing pages:

- `view_resume`
- `view_projects`
- `contact_whatsapp`

Each event is sent with:

- `event_category: "conversion"`
- `event_label: <trackingContext>` (for example `landing_root`, `landing_pt`, `landing_en`)
- `value: 1`

## Where events are fired

- `components/ActionButtons.tsx`
- Analytics helper: `lib/analytics.ts` (`trackCTA`)

## Configure as conversions (Key events) in GA4

1. Open GA4 Admin.
2. Go to **Data display > Events**.
3. Wait until events appear at least once in GA4 Realtime/Events.
4. Find and enable **Mark as key event** for:
   - `view_resume`
   - `view_projects`
   - `contact_whatsapp`

Optional filtering per locale/context can be done by using the `event_label` parameter.

## Validation checklist

1. Open site and click each CTA on `/`, `/pt-BR`, and `/en`.
2. Verify events in GA4 Realtime.
3. Confirm each event is marked as key event.
4. Check key event counts after 24h in GA4 reports.
