# CampaignIQ v10 — Billing setup (required before taking payments)

1. Create a Stripe account, use **test mode**, and create a recurring AUD monthly product/price. Record the `price_...` ID (not the dollar amount).
2. In Vercel project Settings → Environment Variables set `STRIPE_SECRET_KEY` (test key first), `STRIPE_PRICE_ID`, `STRIPE_WEBHOOK_SECRET`, `SUPABASE_SERVICE_ROLE_KEY`, `SUPABASE_URL=https://jduqrldjrgbivvrwlxtp.supabase.co`, `SUPABASE_ANON_KEY` (existing publishable key), `APP_ORIGIN=https://groundwork-zeta-ashen.vercel.app`, `STRIPE_TRIAL_DAYS=14`. Never put secrets in GitHub or HTML.
3. Run `BILLING_SETUP.sql` in the Supabase SQL editor. The billing table is private and accessed only through server-side service-role requests.
4. In Stripe test mode, add webhook destination `https://groundwork-zeta-ashen.vercel.app/api/billing/webhook`, listening to `checkout.session.completed`, `customer.subscription.created`, `customer.subscription.updated`, and `customer.subscription.deleted`. Use its signing secret as `STRIPE_WEBHOOK_SECRET`.
5. Redeploy Vercel. Test with Stripe test cards: signup, checkout, trialing status, return to workspace, billing portal, cancellation, expiry, and unauthenticated requests.
6. Only after testing, switch to live Stripe keys and live recurring price and webhook. Publish exact monthly price, tax, cancellation and trial terms before accepting real payments.

SECURITY LIMITATION: v10 gates the visible dashboard and billing API using authenticated status. The existing workspace is still a static browser app; data in localStorage/IndexedDB and direct client-side Supabase cloud snapshots are not secured by a subscription entitlement. This is NOT a complete production-grade paywall. Before launching publicly, move premium data operations to protected server APIs, enforce entitlements and per-user access with RLS, and audit all routes. Also test webhook replay/idempotency and Stripe event ordering under production conditions.

No trial begins and no charges occur until Stripe is configured and the user completes Stripe Checkout. Trial requires a payment method.
