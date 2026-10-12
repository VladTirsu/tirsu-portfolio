# Vlad Tîrșu — Portfolio

A responsive automotive art portfolio built with Vite, JavaScript, CSS, and GSAP. It includes Home, Works, About, CV, Contact, and four dedicated project pages. The CV, skills, biography, email, and phone are populated from Vlad's supplied CV. Missing artwork, project details, and social profiles remain explicitly labelled text placeholders.

## Development

Use Node.js 22.12 or newer. From the existing checkout:

```sh
cd /workspace/tirsu-portfolio
npm ci
npm run dev -- --port 5173 --strictPort
```

The development server defaults to port 5173. No API keys, backend, database, or environment variables are needed. Fonts are installed and served locally, so the site does not require an external font service.

## Production

```sh
npm run build
npm run preview -- --port 4173 --strictPort
```

Deploy `dist/` to a static host. Routes use the browser History API, so the host must serve `index.html` for non-file paths such as `/cv` and `/projects/project-1`. `public/_redirects` includes that fallback for hosts supporting the Netlify-style redirects format. Other hosts need an equivalent SPA fallback. GitHub Pages needs additional routing configuration and is not supported out of the box.

## Update the content

Edit `src/content.js`:

- `profile`: name, specialty, location, email, phone, Behance, Instagram, and LinkedIn. Empty contact fields render as non-clickable placeholders. Add only public contact details you want displayed.
- `projects`: project titles, descriptions, credits, year, and images. Put image files under `public/artworks/` and replace null entries with paths such as `/artworks/project-1-01.webp`. The first image is also the overview cover. Use artwork you have permission to publish.
- `skills` and `cv`: tools, experience, education, recognition, summary, language levels, working approach, interests, and driving licence. CV content lives on `/cv`; there is no download control. It reflects the supplied CV, including the current degree marked as in progress. The original PDF, street address, date of birth, and demographic fields are not served by the website.
- `copy.en`: English interface copy. Add equivalent language objects for German, Russian, and Romanian when ready. Language switching is not implemented yet.

The logo and hero/portrait media currently use text placeholders. Their render locations are in `src/main.js`. Typography, colours, spacing, and interactions are in `src/style.css`.

## Behaviour to check

- All header links, four project cards, next-project links, and back links navigate correctly; direct route loads and browser back/forward work.
- Project covers enlarge inside their frames on hover. Skills invert from light to dark. Interactive links have visible keyboard focus.
- The CV is a page, and there is no menu control or CV download.
- Desktop, tablet, and narrow mobile layouts have no horizontal overflow.
- Reduced-motion preferences disable entrance/transition motion and artwork scaling.
- Email and phone open the mail and telephone handlers. Behance opens the supplied portfolio. Instagram and LinkedIn remain placeholders until configured.

The visual implementation is original, informed by the supplied reference screenshots. It contains none of the reference site's code, branding, or artwork. Inter and IBM Plex Mono are supplied by Fontsource and distributed under the SIL Open Font License; their license files are included in `public/font-licenses/` and copied into the production build.
