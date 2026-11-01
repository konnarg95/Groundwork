Groundwork — Vercel deployment package

This is the existing standalone MVP configured for static hosting.
It currently stores data locally in the browser; it is NOT connected to Supabase.

To deploy:
1. Extract the ZIP to a folder.
2. Upload this folder to a GitHub repository.
3. In Vercel choose Add New > Project and import the repository.
4. Select Framework Preset: Other. Build Command: none. Output Directory: leave blank (root).
5. Deploy.

Next development phase: add Supabase authentication and database persistence.
Never put Supabase service_role or secret keys in frontend files.
