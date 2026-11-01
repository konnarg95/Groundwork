CampaignIQ v20 — Property feedback hub

- Buyer name is required on new public QR feedback submissions. Existing anonymous responses remain and display as Unnamed buyer.
- Buyer names are stored in ciq_open_home_responses.buyer_name (migration applied to linked Supabase project).
- QR campaigns are grouped by normalised address with collapsible property and session sections. Existing QR URLs and responses are retained.
- Recent responses are collapsed within their session, with buyer name and price visible on expansion. The API currently returns the 4 most recent responses per session; this is not a full historical response viewer.
- Buyer names are personal data; ensure your privacy policy, collection notice, retention and access controls are appropriate before production use.
- Deploy all project files, preserving api/openhome structure.
