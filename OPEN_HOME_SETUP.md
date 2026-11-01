# CampaignIQ v13 — Open-home QR setup

The buyer form is public at `/feedback.html?c=<campaign UUID>`. The agent generates a QR link from **Agent Dashboard → Open-home QR**. Buyer submissions go to Supabase via Vercel serverless functions; they do not require buyer sign-in. Agent link creation and response viewing require a signed-in agent.

## Required configuration

1. In your Supabase SQL editor, run the statements in `OPEN_HOME_SCHEMA.sql` (review them first). This creates **new tables only** and does not modify existing campaign data.
2. In Vercel project Settings → Environment Variables add `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY` (your existing public key, or `SUPABASE_ANON_KEY`) and `SUPABASE_SERVICE_ROLE_KEY` (secret server-side only). Redeploy. **Never place the service-role key in index.html, GitHub, or a browser.**
3. Sign into CampaignIQ, open **Open-home QR**, create a link, scan it on a different phone, submit ratings and a price, then tap **Refresh links & responses** in the agent dashboard.
4. Public preview mode is read-only and does not create QR links. The buyer form supports `?preview=1` for a non-saving preview.

## Safety and limitations

- This is an early-access implementation, not production hardened. Public submission endpoints require rate limiting/CAPTCHA, abuse monitoring and a privacy policy before high-volume public launch.
- Feedback is anonymous; no names, phone numbers or emails are requested. Free-text may still contain personal information: agents must review and avoid sharing it without permission.
- Public links are unguessable UUIDs but anyone with the link can submit. Submissions are not verified buyers and must not be treated as offers or independently verified price evidence.
- QR code rendering loads the pinned qrcodejs library from a third-party CDN; the form URL is rendered locally in the browser. The link can also be copied if QR rendering is unavailable.
- Buyer feedback is stored separately from the legacy local feedback array. Connecting verified responses into valuation models is a later step and should require data-quality review.
- Existing imported Pricefinder data remains in the original browser storage.
