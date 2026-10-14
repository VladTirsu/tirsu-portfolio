# Vlad Tîrșu — Portfolio

A responsive multidisciplinary portfolio built with Vite, JavaScript, CSS, and GSAP, covering graphic and product design, 3D visualization, motion, video, and digital experiences. It includes Home, Works, About, CV, Contact, and four dedicated project pages. Professional details reflect Vlad's CV and subsequent updates. Missing artwork and project details remain explicitly labelled text placeholders.

## Development

Use Node.js 22.12 or newer. From the existing checkout:

```sh
cd tirsu-portfolio
npm ci
npm run dev -- --port 5173 --strictPort
```

The development server defaults to port 5173. No API keys, backend, database, or environment variables are needed. Fonts are installed and served locally, so the site does not require an external font service.

## Production

```sh
npm run build
npm run preview -- --port 4173 --strictPort
```

Deploy `dist/` to a static host. The build creates an `index.html` in each page and project directory, so direct links and refreshes work on GitHub Pages. It also creates a `404.html` for unknown routes. `public/_redirects` supplies the SPA fallback for hosts supporting the Netlify-style redirects format.

### GitHub Pages

In the repository's **Settings → Pages**, select **GitHub Actions** as the source and set the custom domain to `tirsu.net`. `.github/workflows/deploy.yml` tests, builds, and publishes the site whenever `main` receives a push. It can also run manually from the Actions tab. Production uses `/` as its base, so page links and assets load directly from `https://tirsu.net/`.

To test the production build locally:

```sh
npm test
npm run build
npm run check:build
npm run preview -- --port 4173 --strictPort
```

Open `http://localhost:4173/`. Test direct links to `/about/`, `/cv/`, and `/projects/project-1/`, as well as navigation and browser back/forward. Public media paths such as `/videos/hero.mp4` and `/artworks/project-1-01.webp` load from the domain root. GitHub Actions deployments use the custom domain setting in GitHub; a `CNAME` file is not required for this workflow.

Add new page paths in `src/routing.js` alongside their renderer in `src/main.js`. Project numbers in `src/routing.js` feed both the content and the generated project directories. Push future updates to `main` to publish them.

## Update the content

Edit `src/content.js`:

- `profile`: name, specialty, professional location, residence for legal disclosures, email, phone, Behance, Instagram, and portrait. The portrait imports `photos/cvphoto.jpg` and appears on About and CV; Vite includes it in the production build. Vlad confirmed he took the portrait himself. Add only public contact details you want displayed.
- `heroMedia`: the video fills the entire opening hero behind its text, with a black overlay. Put your video under `public/videos/`, then set `video` to a path such as `/videos/hero.mp4`. Keep it empty until a real file exists. Set an optional `poster` image for reduced-motion and playback fallback. `overlayOpacity` controls the black overlay (default 0.62). The current empty source renders a text placeholder and requests no missing video file.
- `portfolioStats`: the supplied five years of experience and 10+ projects, displayed on Home and About.
- `projects`: project titles, descriptions, credits, year, and images. Put image files under `public/artworks/` and replace null entries with paths such as `/artworks/project-1-01.webp`. The first image is also the overview cover. Use artwork you have permission to publish.
- `skills` and `cv`: tools, experience, education, recognition, summary, language levels, working approach, interests, and driving licence. CV content lives on `/cv`; there is no download control. It reflects the supplied CV, including the current degree marked as in progress. The original PDF, street address, date of birth, and demographic fields are not served by the website.
- `copy.en`: English interface copy. Add equivalent language objects for German, Russian, and Romanian when ready. Language switching is not implemented yet.

The header uses a Creative Portfolio wordmark. The About and CV pages display the supplied portrait; video media currently uses a text placeholder. Their render locations are in `src/main.js`. Decorative video playback is managed in `src/hero-video.js`. Typography, colours, spacing, and interactions are in `src/style.css`.

## Legal notices

`src/legal.js` contains the Impressum and privacy notice, linked from every footer. They describe a personal portfolio for potential employers, its owner in Sankt Pölten, GitHub Pages hosting, Gmail correspondence, retention criteria and data-subject rights. Update these statements and the notice date when actual practices change, particularly before adding paid services, analytics, forms, embeds or new providers. The disclosures address the identified gaps; they are not a legal certification or a trademark clearance for the domain.

Vite preserves dependency copyright and licence comments in the production JavaScript. Font licence files remain in `public/font-licenses/`.

## Behaviour to check

- All header links, four project cards, next-project links, and back links navigate correctly; direct route loads and browser back/forward work.
- Project covers enlarge inside their frames on hover. Skills invert from light to dark. Interactive links have visible keyboard focus.
- The CV is a page, and there is no menu control or CV download.
- Desktop, tablet, and narrow mobile layouts have no horizontal overflow.
- Reduced-motion preferences disable entrance/transition motion and artwork scaling.
- When a video is configured, it plays muted and inline, with a pause/play control. Playback pauses when the hero leaves the viewport, the tab is hidden, or the route changes. Reduced-motion visitors see the poster or text placeholder, with no automatic video request or playback.
- Tools & Skills has no CV link; CV remains accessible through navigation and the other relevant sections.
- Email and phone open the mail and telephone handlers. Behance and Instagram open the supplied profiles.

The visual implementation is original, informed by the supplied reference screenshots. It contains none of the reference site's code, branding, or artwork. Inter and IBM Plex Mono are supplied by Fontsource and distributed under the SIL Open Font License; their license files are included in `public/font-licenses/` and copied into the production build.
