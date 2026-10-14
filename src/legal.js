export function legalPages(profile) {
  const email = { label: profile.email, href: `mailto:${profile.email}` };
  const githubPrivacy = { label: 'GitHub Privacy Statement', href: 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement' };
  const googlePrivacy = { label: 'Google Privacy Policy', href: 'https://policies.google.com/privacy?hl=en' };

  return {
    '/impressum': {
      title: 'Impressum',
      label: 'Legal notice / Offenlegung',
      sections: [
        {
          title: 'Website owner / Medieninhaber',
          paragraphs: [profile.name, profile.residence],
          links: [email],
        },
        {
          title: 'Purpose / Ausrichtung',
          paragraphs: ['Personal portfolio presenting design work, professional experience and skills, intended for potential employers and professional contacts.', 'Persönliches Portfolio zur Präsentation von Designarbeiten, Berufserfahrung und Fähigkeiten für potenzielle Arbeitgeber und berufliche Kontakte.'],
        },
        {
          title: 'Photography',
          paragraphs: [`The portrait photograph was taken by ${profile.name}.`],
        },
        {
          title: 'Fonts and software',
          paragraphs: ['This website uses Inter and IBM Plex Mono under the SIL Open Font License, and GSAP under its Standard License. The font licence texts are available below; the animation library’s notices are preserved in the published JavaScript.'],
          links: [
            { label: 'Inter licence', href: '/font-licenses/inter-OFL.txt' },
            { label: 'IBM Plex Mono licence', href: '/font-licenses/ibm-plex-mono-OFL.txt' },
            { label: 'GSAP Standard License', href: 'https://gsap.com/community/standard-license/' },
          ],
        },
      ],
    },
    '/privacy': {
      title: 'Privacy',
      label: 'Privacy notice / Datenschutz',
      sections: [
        {
          title: 'Who is responsible',
          paragraphs: [`${profile.name}, ${profile.residence}, is responsible for the personal-data processing described here in connection with this portfolio and direct professional correspondence. You can use the email below for privacy questions or requests.`],
          links: [email],
        },
        {
          title: 'Visiting this website',
          paragraphs: ['This portfolio is hosted on GitHub Pages. Your browser sends technical information needed to request and deliver pages and assets. GitHub states that it logs and stores visitors’ IP addresses for security purposes, including for visitors without a GitHub account.', 'Making the portfolio available and protecting it against abuse serve legitimate interests under Article 6(1)(f) GDPR. GitHub describes its own processing purposes, legal bases, security practices and retention criteria in its privacy statement. I do not operate a separate visitor analytics or access-log database.'],
          links: [githubPrivacy],
        },
        {
          title: 'Email and telephone contact',
          paragraphs: ['If you contact me, I process the name, contact details, message content and any attachments or other information you choose to provide, to respond and discuss professional or employment opportunities. Providing this information is voluntary; without a way to reach you, I may be unable to respond.', 'The legal basis is my legitimate interest in handling professional correspondence under Article 6(1)(f) GDPR. Communications are kept only as long as necessary to handle the enquiry or maintain the related professional contact. They are deleted when no longer needed, unless a legal obligation or the establishment, exercise or defence of legal claims requires further retention.', 'Email is handled through Gmail, so Google also processes messages as the email provider. Telephone communications involve the relevant telecommunications providers. Their processing is subject to their respective privacy notices.'],
          links: [googlePrivacy],
        },
        {
          title: 'Providers and international processing',
          paragraphs: ['GitHub provides website hosting and Google provides email delivery and storage. These services may process data outside the European Economic Area, including in the United States. GitHub describes reliance on the EU–US Data Privacy Framework and standard contractual clauses as applicable; Google describes its international-transfer safeguards in its privacy policy. Details and information about those safeguards are available in the linked notices.'],
          links: [githubPrivacy, googlePrivacy],
        },
        {
          title: 'Cookies, fonts and external links',
          paragraphs: ['The website does not implement analytics, advertising trackers, cookies, browser-storage identifiers or embedded social-media widgets. Fonts and the portrait are served with the website. There is no contact form or newsletter signup.', 'Behance and Instagram are ordinary external links. Visiting those services is your choice, and their privacy policies apply after you follow a link.'],
        },
        {
          title: 'Your rights',
          paragraphs: ['Subject to the conditions in the GDPR, you may request access to your personal data, rectification, erasure, restriction of processing and, where applicable, data portability. You may object, on grounds relating to your particular situation, to processing based on legitimate interests. Contact me using the email above to exercise your rights.', 'You may lodge a complaint with a competent supervisory authority, including the Austrian Data Protection Authority (Datenschutzbehörde). This website does not use automated decision-making or profiling.'],
          links: [{ label: 'Austrian Data Protection Authority', href: 'https://dsb.gv.at/' }],
        },
      ],
    },
  };
}

export const legalUpdated = '14 October 2026';
