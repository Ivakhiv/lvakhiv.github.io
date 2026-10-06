# Bohdan Ivakhiv — personal website

A responsive, static professional profile built with semantic HTML, CSS, and a small JavaScript footer enhancement. No build step, package dependencies, backend, or external fonts.

## Local preview

From the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open the local server in your browser. Anchor navigation and content work without JavaScript.

## Deploy on GitHub Pages

1. Push these files to `main`.
2. In **Settings → Pages**, select **Deploy from a branch**.
3. Choose **main** and **/ (root)**, then save.
4. Use the published URL shown by GitHub; deployment may take a few minutes.

All asset URLs are relative, so the site works at a domain root or a repository subpath. No custom workflow is required.

## Complete the profile before sharing

Career facts have not been fabricated. Replace the clearly marked placeholders in `index.html` with approved information:

- Executive summary, achievement metrics, employers, dates, and role outcomes.
- Selected program names, scope, and verified results.
- PMP issuer/date/verification and any additional certifications. PMP appears because it was requested; confirm its details before publication.
- Confirm the suggested expertise areas.
- Replace the inactive LinkedIn placeholder with an `<a>` pointing to the real profile. Add a real contact email as a `mailto:` link.
- Add a CV PDF under `assets/` and replace the inactive CV placeholder with an `<a href="assets/bohdan-ivakhiv-cv.pdf" download>` element. Remove its “Coming soon” label.
- Add `og:url` and an absolute `og:image` URL once the public domain and social image are confirmed. Update the description if needed.
- Replace `assets/favicon.svg` if a different brand icon is desired.

Placeholder buttons are intentionally inactive and do not link to unrelated profiles or nonexistent files.

## Files

- `index.html`: profile content, navigation, SEO and Open Graph metadata.
- `styles.css`: responsive layout, neutral palette, subtle animation, reduced-motion support.
- `script.js`: current copyright year.
- `assets/favicon.svg`: initials-based favicon placeholder.
