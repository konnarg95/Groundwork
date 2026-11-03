# CampaignIQ v24 — Price-only open-home QR
Buyer form now asks one required question: estimated property value in AUD. No name, comments or feature ratings. Property-specific QR links and existing agent response grouping remain. Existing historical responses remain intact.

**API compatibility:** The existing serverless `/api/openhome/public` endpoint must accept an anonymous `buyer_name` and an empty `ratings` object. The supplied v23 ZIP did not include serverless `api/` source files, so the endpoint could not be audited or modified here. Test one real QR submission after deploying. Do not overwrite or delete existing backend functions when uploading this frontend-only update.

Future valuation engine: keep buyer price opinions separate from offers, completed sales, attendance and agent guide; don't treat them as equivalent evidence.
