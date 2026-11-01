# Groundwork property data integration — implementation contract

## Current state
The `/api/property/search` endpoint accepts a search query and returns `awaiting_provider` with **zero real results**. `/api/property/demo` returns a clearly fictional example; `/api/property/status` reports the connection state. The browser calls only Groundwork server endpoints, never a third-party property API. Supabase cloud saving and the existing valuation calculator are preserved.

## When a provider grants access
1. Confirm production API products, pricing, rate limits, permitted fields, and **licence to show data to public homeowners, save it, and create derivative reports**.
2. Add credentials to Vercel **server-side environment variables**. Never commit secrets, tokens or service-role keys to GitHub or browser code.
3. Implement a provider adapter on the server. Do not assume Domain Listing Management Sandbox grants property data access.
4. Normalize returned records to `{id, address, source, verified, isDemo:false, attributes:{landAreaSqm,dwellingAreaSqm,bedrooms,bathrooms,parking}, salesHistory:[], comparables:[]}`. Include field-level provenance, timestamps, licensing restrictions and null for unavailable fields in a production adapter.
5. Make `/api/property/search` return `{status:'connected',provider:'provider_name',results:[...]}` only after a real provider request succeeds. Validate and bound all input; set request timeouts, apply quotas/rate limiting and safe error handling. Protect any expensive lookup from public abuse.
6. Build separate authenticated detail/sales endpoints only when licensed. Never invent historical sale prices or imply user-supplied comparable sales are provider verified.
7. Test with authorised real addresses, check privacy/licensing, monitor costs and failures, then enable in production.

## Smoke tests after deployment
- `/api/property/status` reports `liveData:false`.
- `/api/property/search?q=Aspley` reports `awaiting_provider`, empty results.
- `/api/property/demo` returns a fictional record.
- Homeowner manual entry, agent/investor workflows and Supabase cloud saving remain functional.


CampaignIQ v8: agent-only interface; existing local storage keys and Sales Data Hub records preserved for migration compatibility. Seller price reports remain available as agent-generated documents.
