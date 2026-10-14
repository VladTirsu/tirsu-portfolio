import '@fontsource-variable/inter';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/700.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile, projects, skills, cv, copy, heroMedia, portfolioStats } from './content.js';
import { attachHeroVideo } from './hero-video.js';
import { sitePath, routePath } from './routing.js';
import { legalPages, legalUpdated } from './legal.js';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

const t = copy.en;
const href = (path) => sitePath(path, import.meta.env.BASE_URL);
const notices = legalPages(profile);
const main = document.querySelector('#main');
const header = document.querySelector('#header');
const footer = document.querySelector('#footer');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let animationContext;
let transition;
let renderVersion = 0;
let cleanupHeroVideo = () => {};

const escape = (value) => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const lines = (value) => escape(value).replaceAll('\n', '<br>');
const arrow = (direction = 'right') => {
  const path = direction === 'left' ? 'M20 12H4m7-7-7 7 7 7' : direction === 'diagonal' ? 'M5 19 19 5M5 5h14v14' : 'M4 12h16m-7-7 7 7-7 7';
  return `<span class="arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="${path}" /></svg></span>`;
};
const link = (path, label, className = 'text-link', direction = 'right') => `<a class="${className}" href="${escape(href(path))}">${direction === 'left' ? `${arrow(direction)} ${escape(label)}` : `${escape(label)} ${arrow(direction)}`}</a>`;

function placeholder(label, className = '', extra = '') {
  return `<div class="artwork-placeholder ${className}" ${extra}><span class="placeholder-label">${escape(label)}</span></div>`;
}

function portrait(className) {
  return `<img class="profile-portrait ${className}" src="${escape(profile.portrait)}" alt="Portrait of ${escape(profile.name)}" width="1500" height="1500" decoding="async">`;
}

function artworkImage(image, { className, sizes, lead = false, alt } = {}) {
  const asset = typeof image === 'string' ? { src: image } : image;
  const sources = asset.sources?.map((source) => `${escape(href(source.src))} ${source.width}w`).join(', ');
  return `<img class="${className}" src="${escape(href(asset.src))}"${sources ? ` srcset="${sources}" sizes="${sizes}"` : ''}${asset.width ? ` width="${asset.width}" height="${asset.height}"` : ''} alt="${escape(asset.alt || alt)}" loading="${lead ? 'eager' : 'lazy'}"${lead ? ' fetchpriority="high"' : ''} decoding="async">`;
}

function media(project, index, className = '') {
  const image = project.images[index];
  return image
    ? artworkImage(image, { className: `artwork-image ${className}`, sizes: index === 0 || image?.wide ? '(max-width: 760px) calc(100vw - 48px), (max-width: 1860px) 86vw, 1600px' : '(max-width: 760px) calc((100vw - 64px) / 2), (max-width: 1860px) calc((86vw - 24px) / 2), 788px', lead: index === 0, alt: `${project.title} — artwork ${index + 1}` })
    : placeholder(`*Artwork ${String(index + 1).padStart(2, '0')}*`, className);
}

function projectCard(project) {
  const coverImage = project.images[project.coverImageIndex ?? 0];
  const cover = coverImage
    ? artworkImage(coverImage, { className: 'card-media', sizes: '(max-width: 420px) calc(100vw - 48px), (max-width: 760px) calc((100vw - 66px) / 2), (max-width: 1860px) calc((86vw - 32px) / 2), 784px', alt: project.title })
    : placeholder(project.cover, 'card-media');
  return `<a class="project-card" data-project="${escape(project.id)}" href="${href(`/projects/${project.id}`)}" data-reveal>
    <div class="card-frame">${cover}<span class="card-open" aria-hidden="true">${arrow('diagonal')}</span></div>
    <div class="card-caption"><div><p class="eyebrow muted"><span class="caption-number">${project.number}</span><span aria-hidden="true"> / </span>${escape(project.category)}</p><h3>${escape(project.title)}</h3></div>${arrow()}</div>
  </a>`;
}

function skillsSection({ dark = false, heading = true } = {}) {
  return `<section class="section skills-section ${dark ? 'section-dark' : 'section-light'}">
    <div class="container">
      ${heading ? `<div class="section-heading" data-reveal><div><p class="eyebrow">The toolkit</p><h2>Tools & skills.</h2></div></div>` : ''}
      <ul class="skills-list" aria-label="Tools and skills" data-reveal>${skills.map((skill) => `<li class="skill-tag">${escape(skill)}</li>`).join('')}</ul>
    </div>
  </section>`;
}

function experienceRows(rows) {
  return `<div class="cv-rows">${rows.map((entry) => `<article class="cv-row" data-reveal>
    <p class="eyebrow accent">${escape(entry.period)}</p><div><h3>${escape(entry.title)}</h3>${entry.description ? `<p class="cv-detail">${escape(entry.description)}</p>` : ''}</div><p class="cv-place"><span>${escape(entry.place)}</span>${entry.location ? `<span class="cv-location">${escape(entry.location)}</span>` : ''}</p>
  </article>`).join('')}</div>`;
}

function stats() {
  return `<dl class="portfolio-stats">${portfolioStats.map((stat) => `<div><dt class="eyebrow muted">${escape(stat.label)}</dt><dd>${escape(stat.value)}</dd></div>`).join('')}</dl>`;
}

function heroBackground() {
  const opacity = Number.isFinite(heroMedia.overlayOpacity) ? Math.max(0, Math.min(1, heroMedia.overlayOpacity)) : 0.62;
  return `<div class="hero-backdrop" aria-hidden="true">
    ${heroMedia.poster ? `<img class="hero-poster" src="${escape(href(heroMedia.poster))}" alt="">` : ''}
    ${heroMedia.video ? `<video class="hero-video" data-src="${escape(href(heroMedia.video))}" muted loop playsinline preload="none" tabindex="-1"></video>` : ''}
    <div class="hero-shade" style="opacity: ${opacity}"></div>
    ${heroMedia.poster ? '' : '<span class="hero-media-placeholder">*Background video*</span>'}
  </div>`;
}

function homePage() {
  return `<section class="hero section-dark">
    ${heroBackground()}
    <div class="container hero-container">
      <div class="hero-top"><p class="eyebrow muted hero-enter">Design / Motion / Digital</p></div>
      <div class="hero-grid">
        <div class="hero-name"><p class="eyebrow accent hero-enter">${t.hero.eyebrow}</p><h1 aria-label="${escape(profile.name)}"><span class="name-line"><span class="name-outline hero-title">${escape(profile.firstName)}</span></span><span class="name-line"><span class="hero-title">${escape(profile.lastName)}<span class="accent">.</span></span></span></h1></div>
      </div>
      <ul class="hero-disciplines hero-enter">${t.hero.disciplines.map((discipline) => `<li>${escape(discipline)}</li>`).join('')}</ul>
      <div class="hero-bottom"><div class="hero-actions hero-enter">${link('/works', t.hero.workLink, 'button button-accent')}${link('/about', t.hero.aboutLink, 'button button-outline')}</div><p class="hero-introduction hero-enter">${escape(t.hero.introduction)}</p></div>
      <div class="hero-footer"><a class="scroll-cue eyebrow" href="#introduction">Scroll to explore <span aria-hidden="true">↓</span></a>${heroMedia.video ? '<button class="video-toggle" type="button" aria-label="Pause background video" hidden>Pause video</button>' : ''}</div>
    </div>
  </section>
  <section id="introduction" class="section section-white intro-section">
    <div class="container intro-grid"><div data-reveal><p class="eyebrow muted">${t.introduction.label}</p><h2>${lines(t.introduction.title)}</h2></div><div class="intro-copy" data-reveal><p>${t.introduction.body}</p>${stats()}${link('/about', 'Behind the work')}</div></div>
  </section>
  <section class="section section-light">
    <div class="container"><div class="section-heading" data-reveal><div><p class="eyebrow muted">01 — Portfolio</p><h2>${t.works.title}<span class="accent-dot">.</span></h2></div>${link('/works', t.works.all)}</div><div class="project-grid">${projects.map(projectCard).join('')}</div></div>
  </section>
  <section class="section section-dark cv-teaser"><div class="container"><div class="section-heading" data-reveal><div><p class="eyebrow accent">02 — Background</p><h2>The work behind<br>the artworks.</h2></div>${link('/cv', 'Explore my CV', 'button button-outline')}</div><div class="cv-teaser-line" data-reveal><span>Experience</span><span>Education</span><span>Skills & tools</span>${arrow('diagonal')}</div></div></section>
  ${skillsSection()}`;
}

function pageHeading(label, title, description = '', className = '') {
  return `<section class="page-heading section-dark ${className}"><div class="container"><p class="eyebrow accent" data-reveal>${escape(label)}</p><h1 data-reveal>${escape(title)}</h1>${description ? `<p class="page-description" data-reveal>${escape(description)}</p>` : ''}</div></section>`;
}

function worksPage() {
  return `${pageHeading('Portfolio / 01—04', t.works.indexTitle, t.works.description)}<section class="section section-light"><div class="container"><div class="index-bar" data-reveal><p class="eyebrow">Selected projects</p><p class="eyebrow muted">04 projects</p></div><div class="project-grid">${projects.map(projectCard).join('')}</div></div></section>`;
}

function aboutPage() {
  return `${pageHeading(t.about.label, t.about.title)}<section class="section section-white"><div class="container about-grid"><div data-reveal>${portrait('about-portrait')}</div><div class="about-copy" data-reveal><p class="eyebrow muted">Design / Motion / Digital</p><h2>${lines(t.about.heading)}</h2><p>${escape(t.about.body)}</p>${stats()}<p>${escape(t.about.biography)}</p><div class="inline-actions">${link('/cv', 'View my CV', 'button button-dark')}${link('/contact', 'Get in touch')}</div></div></div></section>${skillsSection()}`;
}

function cvPage() {
  return `${pageHeading(t.cv.label, t.cv.title, profile.specialty)}<section class="section section-white"><div class="container cv-introduction" data-reveal><div class="cv-profile"><p class="eyebrow muted">Profile</p>${portrait('cv-portrait')}</div><div class="cv-profile-copy"><h2>${escape(profile.name)}</h2><p class="cv-summary">${escape(cv.summary)}</p><div class="cv-contact"><span class="eyebrow muted">${escape(profile.location)}</span><a href="mailto:${escape(profile.email)}">${escape(profile.email)}</a><a href="${escape(profile.phoneHref)}">${escape(profile.phone)}</a></div></div></div></section>
  <section class="section section-dark"><div class="container"><div class="section-heading" data-reveal><div><p class="eyebrow accent">01 — Professional background</p><h2>${t.cv.experience}<span class="accent">.</span></h2></div></div>${experienceRows(cv.experience)}</div></section>
  <section class="section section-light"><div class="container"><div class="section-heading" data-reveal><div><p class="eyebrow muted">02 — Learning</p><h2>${t.cv.education}.</h2></div></div>${experienceRows(cv.education)}</div></section>
  <section class="section section-white"><div class="container"><div class="section-heading" data-reveal><div><p class="eyebrow muted">03 — Recognition</p><h2>${t.cv.awards}.</h2></div></div>${experienceRows(cv.awards)}</div></section>
  ${skillsSection()}<section class="section section-white"><div class="container languages-section"><div data-reveal><p class="eyebrow muted">Communication</p><h2>${t.cv.languages}.</h2></div><div data-reveal><dl class="language-list">${cv.languages.map((language) => `<div><dt>${escape(language.name)}</dt><dd class="eyebrow">${escape(language.level)}</dd></div>`).join('')}</dl><p class="language-note eyebrow muted">${t.cv.languageNote}</p></div></div></section>
  <section class="section section-dark"><div class="container"><div class="section-heading" data-reveal><div><p class="eyebrow accent">The approach</p><h2>${t.cv.approach}.</h2></div></div><div class="approach-grid">${cv.approach.map((item) => `<article data-reveal><h3>${escape(item.title)}</h3><p>${escape(item.description)}</p></article>`).join('')}</div></div></section>
  <section class="section section-light"><div class="container cv-interests" data-reveal><div><p class="eyebrow muted">${t.cv.interests}</p><ul class="interests-list">${cv.interests.map((interest) => `<li>${escape(interest)}</li>`).join('')}</ul></div><p class="eyebrow muted">${t.cv.drivingLicence}<span class="licence-value">${escape(cv.drivingLicence)}</span></p></div></section>`;
}

function contactRows() {
  const channels = [
    { name: 'Email', url: profile.email ? `mailto:${profile.email}` : '', value: profile.email || '*Email address*' },
    ...(profile.phone ? [{ name: 'Phone', url: profile.phoneHref, value: profile.phone }] : []),
    { name: 'Behance', url: profile.behance, value: 'vlad_t18' },
    { name: 'Instagram', url: profile.instagram, value: profile.instagram ? '@vlad.t18' : '*Instagram profile*' },
  ];
  return `<div class="contact-list">${channels.map(({ name, url, value }) => {
    const body = `<span class="eyebrow contact-label">${name}</span><span class="contact-value">${escape(value)}</span>${url ? arrow('diagonal') : '<span class="contact-pending eyebrow">To be added</span>'}`;
    return url ? `<a class="contact-row" href="${escape(url)}" ${/^(mailto:|tel:)/.test(url) ? '' : 'target="_blank" rel="noopener noreferrer"'} data-reveal>${body}</a>` : `<div class="contact-row contact-placeholder" data-reveal>${body}</div>`;
  }).join('')}</div>`;
}

function contactPage() {
  return `${pageHeading(t.contact.label, t.contact.title, t.contact.introduction)}<section class="section section-white"><div class="container">${contactRows()}<p class="contact-note eyebrow muted" data-reveal>Find the current portfolio on Behance.</p></div></section>`;
}

function projectPage(project) {
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return `<section class="project-heading section-dark"><div class="container"><div data-reveal>${link('/works', t.project.back, 'back-link text-link', 'left')}</div><p class="eyebrow accent project-type" data-reveal>${escape(project.category)}</p><h1 data-reveal>${escape(project.title)}<span class="accent">.</span></h1><dl class="project-metadata" data-reveal>${[['client', project.client], ['role', project.role], ['software', project.software], ['year', project.year]].map(([label, value]) => `<div><dt class="eyebrow muted">${t.project[label]}</dt><dd>${escape(value)}</dd></div>`).join('')}</dl></div></section>
  <section class="project-gallery-section section-dark"><div class="container"><div class="project-gallery" data-project="${escape(project.id)}">${project.images.map((image, index) => `<figure${index === 0 || image?.wide ? ' class="gallery-lead"' : ''} data-reveal>${media(project, index)}<figcaption class="eyebrow muted">${String(index + 1).padStart(2, '0')} / ${escape(image?.caption || project.title)}</figcaption></figure>`).join('')}</div><div class="project-story" data-reveal><p class="eyebrow accent">Behind the artwork</p><p>${escape(project.description)}</p></div><div class="back-to-projects" data-reveal>${link('/works', t.project.backBottom, 'text-link', 'left')}</div></div></section>
  <a class="next-project section-dark" href="${href(`/projects/${next.id}`)}"><div class="container"><div><p class="eyebrow accent">${t.project.next} / ${next.number}</p><h2>${escape(next.title)}.</h2></div>${arrow()}</div></a>`;
}

function notFoundPage() {
  return `${pageHeading('404 / Page not found', 'Wrong turn.', 'This page doesn’t exist. Let’s get you back to the work.')}<section class="section section-light"><div class="container">${link('/works', 'Explore works', 'button button-dark')}</div></section>`;
}

function legalPage(path) {
  const notice = notices[path];
  return `${pageHeading(notice.label, notice.title, '', 'legal-heading')}<section class="section section-white"><div class="container legal-content"><p class="eyebrow muted">Updated ${escape(legalUpdated)}</p>${notice.sections.map((section, index) => `<section aria-labelledby="legal-section-${index}"><h2 id="legal-section-${index}">${escape(section.title)}</h2>${section.paragraphs.map((paragraph) => `<p>${escape(paragraph)}</p>`).join('')}${section.links ? `<ul class="legal-links">${section.links.map((item) => `<li><a href="${escape(href(item.href))}">${escape(item.label)}</a></li>`).join('')}</ul>` : ''}</section>`).join('')}</div></section>`;
}

function renderHeader(path) {
  const current = path.startsWith('/projects/') ? '/works' : path;
  header.innerHTML = `<div class="header-inner"><a class="brand-link" href="${href('/')}" aria-label="${escape(profile.name)} — home">Creative Portfolio</a><nav aria-label="Main navigation">${Object.entries(t.nav).map(([key, label]) => {
    const path = key === 'home' ? '/' : `/${key}`;
    return `<a class="nav-link" href="${href(path)}" ${current === path ? 'aria-current="page"' : ''}>${label}</a>`;
  }).join('')}</nav></div>`;
}

function renderFooter(path) {
  footer.innerHTML = `<div class="container"><div class="footer-cta" data-reveal><h2>${lines(t.footer.title)}</h2>${path === '/contact' ? link(profile.behance, 'View Behance', 'button button-accent', 'diagonal') : link('/contact', t.footer.action, 'button button-accent')}</div><div class="footer-bottom"><div class="footer-links"><a href="${profile.behance}" target="_blank" rel="noopener noreferrer" class="eyebrow footer-social">Behance ${arrow('diagonal')}</a><a href="${href('/cv')}" class="eyebrow footer-social">CV ${arrow('diagonal')}</a><a href="${href('/impressum')}" class="eyebrow footer-social" ${path === '/impressum' ? 'aria-current="page"' : ''}>Impressum</a><a href="${href('/privacy')}" class="eyebrow footer-social" ${path === '/privacy' ? 'aria-current="page"' : ''}>Privacy</a></div><div class="footer-meta"><p class="eyebrow footer-credit">© ${new Date().getFullYear()} ${escape(profile.name)}</p><a href="#main" class="back-top eyebrow">Back to top ↑</a></div></div></div>`;
}

function animatePage() {
  if (reducedMotion.matches) return;
  animationContext = gsap.context(() => {
    const titles = main.querySelectorAll('.hero-title');
    if (titles.length) {
      gsap.from(titles, { yPercent: 110, duration: 1.15, stagger: 0.13, ease: 'power4.out' });
      gsap.from(main.querySelectorAll('.hero-enter'), { opacity: 0, y: 18, duration: 0.7, stagger: 0.065, delay: 0.15, ease: 'power2.out' });
    }
    document.querySelectorAll('[data-reveal]').forEach((element) => {
      gsap.from(element, { y: 24, opacity: 0, duration: 0.65, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 94%', once: true } });
    });
  });
}

function currentPath() {
  return routePath(window.location.pathname, import.meta.env.BASE_URL) ?? '/404';
}

function render({ moveFocus = false, resetScroll = false } = {}) {
  const version = ++renderVersion;
  cleanupHeroVideo();
  cleanupHeroVideo = () => {};
  animationContext?.revert();
  animationContext = undefined;
  gsap.set(main, { clearProps: 'opacity,transform' });
  const path = currentPath();
  document.documentElement.dataset.page = path;
  let page;
  let title;
  const pages = {
    '/': [homePage, 'Design, 3D & Motion'],
    '/works': [worksPage, 'Works'],
    '/about': [aboutPage, 'About'],
    '/cv': [cvPage, 'CV'],
    '/contact': [contactPage, 'Contact'],
    '/impressum': [() => legalPage('/impressum'), 'Impressum'],
    '/privacy': [() => legalPage('/privacy'), 'Privacy'],
  };
  if (pages[path]) {
    [page, title] = pages[path];
  } else {
    const project = projects.find((item) => path === `/projects/${item.id}`);
    page = project ? () => projectPage(project) : notFoundPage;
    title = project ? project.title : 'Page not found';
  }
  main.innerHTML = page();
  renderHeader(path);
  renderFooter(path);
  document.title = `${title} — ${profile.name}`;
  if (resetScroll) window.scrollTo({ top: 0, behavior: 'instant' });
  if (moveFocus) main.focus({ preventScroll: true });
  requestAnimationFrame(() => {
    if (version !== renderVersion) return;
    cleanupHeroVideo = attachHeroVideo(main, reducedMotion);
    animatePage();
    if (window.location.hash) {
      const target = document.getElementById(window.location.hash.slice(1));
      target?.scrollIntoView({ behavior: 'instant' });
    }
  });
}

function navigate(url) {
  transition?.kill();
  const complete = () => {
    window.history.pushState({}, '', `${url.pathname}${url.search}${url.hash}`);
    render({ moveFocus: true, resetScroll: true });
  };
  if (reducedMotion.matches) complete();
  else transition = gsap.to(main, { opacity: 0, y: -8, duration: 0.16, ease: 'power1.in', onComplete: complete });
}

document.addEventListener('click', (event) => {
  const anchor = event.target.closest('a');
  if (!anchor || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || anchor.target === '_blank' || anchor.hasAttribute('download')) return;
  const url = new URL(anchor.href, window.location.origin);
  if (url.origin !== window.location.origin) return;
  if (routePath(url.pathname, import.meta.env.BASE_URL) === null) return;
  if (url.pathname === window.location.pathname && url.hash) {
    const target = document.getElementById(url.hash.slice(1));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth' });
      target.focus({ preventScroll: true });
    }
    return;
  }
  event.preventDefault();
  if (url.pathname === window.location.pathname && !url.hash) {
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    return;
  }
  navigate(url);
});

window.addEventListener('popstate', () => {
  transition?.kill();
  render({ moveFocus: true });
});
reducedMotion.addEventListener('change', () => {
  transition?.kill();
  render();
});

render();
