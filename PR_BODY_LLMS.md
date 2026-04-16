## Summary
- add dynamic `/llms.txt` and `/llms-full.txt` routes for AI-friendly docs ingestion
- generate both files directly from `src/content/docs/**` during build time
- expose a compact index in `llms.txt` and the full normalized docs corpus in `llms-full.txt`
- keep the implementation inside Astro so these files stay in sync with future docs changes automatically

## Validation
- npm run build
- verified `dist/llms.txt`
- verified `dist/llms-full.txt`

## Notes
- these are generated as `text/plain` routes, not manual files in `public/`
- this PR does not include `robots.txt` or sitemap changes
