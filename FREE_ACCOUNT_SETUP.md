# CampaignIQ v14 — Free account proof of concept

1. Deploy all files to GitHub/Vercel, preserving api/billing and api/openhome.
2. Set `CAMPAIGNIQ_POC_FREE_ACCESS=true` in Vercel Production environment variables (optional: v14 defaults to enabled until explicitly set to `false`). Redeploy.
3. Sign up with email/password on CampaignIQ. If Supabase email confirmation is enabled, confirm via email and then log in.
4. After login, billing status endpoint returns `poc_free` for verified signed-in accounts and unlocks the full workspace in the UI. Use My profile to access cloud account controls.
5. Open-home QR still requires `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, and `SUPABASE_PUBLISHABLE_KEY` or `SUPABASE_ANON_KEY` in Vercel; it uses authenticated server-side owner checks.
6. To restore Stripe membership gating later, set `CAMPAIGNIQ_POC_FREE_ACCESS=false` and redeploy.

SECURITY: Free access does not mean anonymous access. The server checks the Supabase access token before returning entitlement. The browser dashboard and locally stored data are not a full server-side paywall. Future paid-only APIs must enforce subscription entitlements on the server. Keep service-role keys exclusively in Vercel secrets.

The early-access demo is still separate and read-only. No credit card or Stripe configuration required for free accounts.
