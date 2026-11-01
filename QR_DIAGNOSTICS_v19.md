# CampaignIQ v19 — QR diagnostics

## What changed
- Logs database HTTP status, error code, database message, route, Supabase project hostname, credential format and decoded JWT role.
- Never logs API keys, bearer tokens, personal data, addresses or buyer feedback.
- QR campaign creation errors now provide actionable messages and non-secret credential role metadata.
- No database migrations or access-policy changes. Existing dashboard and other features retained.

## Deployment and test
1. Upload all extracted files to the GitHub repository root, retaining api/openhome folder structure.
2. Deploy production on Vercel.
3. Sign in, attempt to create a QR campaign.
4. In Vercel Logs find `[CampaignIQ QR]` and inspect `credential.jwtRole`, `credential.keyType`, `code`, `dbMessage`. Do not share secret values.
5. For legacy JWT key, `jwtRole` must be `service_role`; if `anon` or `authenticated`, replace the Vercel service-role variable with the correct legacy service_role key from the same Supabase project and redeploy.

Security: Do not grant anon/authenticated direct table access to work around the failure.
