# GOONZ website

A responsive four-page company website for GOONZ, an Auckland-based consultancy serving private investors and property owners globally.

## Status

Design preview only. Website hosting has not been enabled. Do not publish without the owner's explicit confirmation.

Pages: Home, About, Services and Contact. Services: development project consultancy, cost management, interior design and design/project integration. Public phone: +64 22 191 0077.

The architectural SVG is an original concept illustration, not a completed GOONZ project. Service descriptions are draft marketing copy for owner review; no projects, qualifications, client endorsements or performance statistics are invented.

## Local preview

Requires Node.js 22 or newer. No package installation required.

```sh
npm run check
npm run build
npm run preview
```

Open http://127.0.0.1:4173. The build output is `dist/`. Edit the root HTML files and files under `assets/`, then rebuild.

## Contact

Telephone links are functional. Until a domain email is provisioned, the enquiry form copies a draft to the clipboard and explicitly does not send or store messages. Once the email is ready, set `data-email` on the contact form, change the submit label to “Prepare email”, update the notice and explanatory text. The JavaScript then opens the visitor's email app with a prefilled message. This is not server-side form delivery; the visitor must send the email themselves.

## Publication after owner approval

1. Approve the design and service copy. Confirm the business domain and email.
2. Remove the design-preview banner and `noindex,nofollow` metadata from all four HTML pages. Change `robots.txt` to `User-agent: *` and `Allow: /`.
3. Add canonical URLs, social sharing image metadata and a sitemap for the final hostname.
4. Build and verify navigation, telephone links, contact flow and mobile layout.
5. Deploy `dist/` to a static host, or configure a GitHub Pages workflow at that time. No deployment workflow is included, to prevent an accidental launch.
6. Configure the custom domain on the selected host and add only its supplied DNS records. Preserve the email provider's MX/TXT records. Enable and verify HTTPS.

Website hosting and business email are separate services; they may share the same domain. GitHub repository visibility is separate from website publication.

## Design and privacy

Forest green, warm stone and muted sage; Manrope and DM Sans with system fallbacks. Google Fonts is the only external page dependency. For fully self-hosted fonts, replace the CSS import with locally licensed font files. No analytics, tracking scripts, external form service or cookies are configured.

Copyright GOONZ. No open-source licence is granted by this repository.
