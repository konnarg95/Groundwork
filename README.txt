GROUNDWORK — PROPERTY DATA INTEGRATION READY

Upload all files and the complete api/property/ folder to the ROOT of your existing GitHub repository. Keep the folder structure exactly as shown. Vercel should deploy the serverless functions automatically.

This version does NOT connect to Domain or retrieve real property data. The search interface and server-side endpoints are prepared for an approved provider. The Try fictional demo button loads fictional sample attributes only after confirmation. Manual entry and Supabase cloud accounts remain.

After deployment, visit https://groundwork-zeta-ashen.vercel.app/api/property/status and confirm liveData:false. Then try the address lookup and demo button.

Read PROVIDER_INTEGRATION.md before activating real property data. Never add API secrets to index.html or GitHub.
\nDESIGN UPDATE: Homepage rebranded PropIQ, redesigned to match supplied reference. Existing browser storage keys remain unchanged to preserve data. Property figures in hero are illustrative, not live.\n
PROP IQ PUBLIC HOMEPAGE UPDATE
- Public homepage opens first; professional workspace opens on user action.
- Existing application, account, valuation, local storage and API endpoint files retained.
- Homeowner, investor and agent cards open the appropriate experience.
- Homepage example valuation is illustrative only, not live data.
- No new property-data licensing or API access is implied.

UPDATE: Refined mobile homepage and added agent dashboard. Dashboard derives figures from current local user data, with illustrative demo records explicitly labelled. No live Domain feed. Existing cloud, endpoints and browser storage retained.

V3: Compact mobile agent header with navigation drawer; property overview with clearly illustrative photo; full comparable labels; latest individual buyer feedback. Existing data storage keys and API routes retained.

V4: Agent-only Buyer-Adjusted Price Intelligence and printable Seller Price Alignment Report. Separate buyer signals from comparable valuations; manual agent recommendation, distinct buyer reference aggregation, no automated price claims. Browser localStorage persists review in existing snapshot.

V5: Price alignment chart, explainable scenario suggestion (75% comps / 25% distinct buyer signal, capped +/-5%), collapsible buyer evidence, and seller report visual. Suggestions are drafts, not automatic valuations.


VERSION 6 — INDEPENDENT PROPIQ PROPOSED PRICE GUIDE
- Read-only model guide shown on Agent > Price Intelligence and Seller report.
- Minimum three weighted adjusted comparable sales.
- Uses comparable-sales estimate; adds distinct buyer expectation signal when at least two buyers have expectations, and offer signal only when both expectation and offer groups have at least two buyers.
- 100% comps with insufficient buyer evidence; 80/20 comps/expectations or 70/20/10 comps/expectations/offers with sufficient evidence.
- Buyer price signals are capped at +/-10% of comparable estimate; range uses adjusted comparable spread bounded at 2.5%-6.5%.
- Does NOT use asking price or agent recommendation as model inputs. No AI or live sales integration claimed.
- Demo data must be replaced and inputs verified before sending to a seller.
