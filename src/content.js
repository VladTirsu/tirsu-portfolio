// Keep content separate from rendering. Additional languages can use this shape.
// Contact URLs stay empty until Vlad supplies them; never invent contact details.
export const profile = {
  name: 'Vlad Tîrșu',
  firstName: 'Vlad',
  lastName: 'Tîrșu',
  specialty: 'Graphic design, 3D & visual storytelling',
  behance: 'https://www.behance.net/vlad_t18',
  email: 'vladtirsu1803@gmail.com',
  phone: '+43 664 146 9222',
  phoneHref: 'tel:+436641469222',
  location: 'Moldova & Austria',
  instagram: 'https://www.instagram.com/vlad.t18/',
};

// Add your own video under public/videos/ and set its path here when ready.
// An optional poster is used when motion is reduced or video playback is unavailable.
export const heroMedia = {
  video: '',
  poster: '',
  overlayOpacity: 0.62,
};

export const portfolioStats = [
  { value: '5', label: 'Years of experience' },
  { value: '10+', label: 'Projects' },
];

export const projects = [1, 2, 3, 4].map((number) => ({
  id: `project-${number}`,
  number: String(number).padStart(2, '0'),
  title: `Project ${number}`,
  cover: `*Project ${number} cover*`,
  category: '*Project category*',
  year: '*Year*',
  client: '*Client / personal work*',
  role: '*Your role*',
  software: '*Software used*',
  description: '*Project description — the idea, the process, and your contribution.*',
  // Replace each null with a local /artworks/... image path when available.
  images: [null, null, null],
}));

export const skills = [
  'Blender',
  'Cinema 4D',
  'Maya',
  'Adobe Creative Suite',
  'Photoshop',
  'Figma',
  'Illustrator',
  'InDesign',
  'Microsoft tools',
  '3D design',
  'Substance 3D Painter',
  'CGI & rendering',
  'Video editing',
  'Premiere Pro',
  'After Effects',
  'Media Encoder',
  'DaVinci Resolve',
  'Photography',
  'Graphic & product design',
  'UX/UI & web design',
  'HTML',
  'JS',
  'CSS',
  'Arduino',
  'Kotlin',
  'Python',
  'C#',
];

// Professional content from Vlad's supplied CV and subsequent work details.
// The original PDF, street address, birth date, and demographic fields are not published.
export const cv = {
  summary: 'Five years of professional experience across graphic and product design, 3D visualization, motion, and video production. Proficient in Blender, Cinema 4D, Maya, and the Adobe Creative Suite, with a focus on creating clear visual communication and carefully executed content for brands, products, and digital experiences.',
  experience: [
    {
      period: '2024 — Present',
      title: 'Graphic & product designer',
      place: 'Level Auto Rental',
      location: 'Chișinău, Moldova',
      description: 'Responsible for the design of vehicle wraps and branding graphics, branded merchandise, products, business cards, and social media content. Developed visual materials for the company’s brand identity across vehicle applications, printed collateral, and digital communications.',
    },
    {
      period: '2024 — Present',
      title: 'Graphic designer & audiovisual content creator',
      place: 'Feeling Coffee',
      location: 'Chișinău, Moldova',
      description: 'Developed menus, social media graphics, advertising materials, and uniform designs for a coffee shop chain in Moldova. Produced promotional video content through videography and cinematography, supporting brand communications across digital channels and physical locations.',
    },
    {
      period: 'Jan 2023 — Dec 2024',
      title: 'Graphic designer',
      place: 'Software Mind',
      location: 'Chișinău, Moldova',
      description: 'Developed brand identities through logo design and detailed style guides. Designed brochures, infographics, and digital banners to support marketing campaigns and strengthen brand communication.',
    },
    {
      period: 'Jun 2021 — Sep 2026',
      title: 'Multidisciplinary designer & videographer',
      place: 'Andrew Rayel',
      location: 'Chișinău, Moldova',
      description: 'Graphic and product design, 3D motion design, VJ loops production, merchandise design, video editing, videography, UX/UI, and website design.',
    },
  ],
  education: [
    {
      period: 'Sep 2025 — Present',
      title: 'Creative Computing',
      place: 'USTP — University of Applied Sciences St. Pölten',
      location: 'St. Pölten, Austria',
      description: 'Bachelor of Science in Engineering (BSc), in progress.',
    },
    {
      period: 'Sep 2021 — May 2025',
      title: 'High school',
      place: 'Liceul Teoretic „Vasle Alecsandri”',
      location: 'Chișinău, Moldova',
      description: '',
    },
  ],
  awards: [
    {
      period: 'Mar 2023',
      title: 'National Graphic Design Competition',
      place: 'Tekwill',
      description: 'Finalist.',
    },
  ],
  languages: [
    { name: 'Romanian', level: 'Native' },
    { name: 'English', level: 'C1' },
    { name: 'German', level: 'B2' },
    { name: 'Russian', level: 'A2' },
    { name: 'Spanish', level: 'A1' },
  ],
  approach: [
    {
      title: 'Working with people',
      description: 'Clear communication, active listening, patience through revisions, flexibility, and collaboration. I present my ideas confidently, welcome constructive feedback, and respect different perspectives.',
    },
    {
      title: 'Keeping work organized',
      description: 'Planning projects from concept to completion, setting clear goals, coordinating resources, and managing multiple tasks with attention to detail. I look for ways to improve workflows and solve problems efficiently.',
    },
  ],
  interests: ['Electronics', 'Reading', 'Cooking', 'Hiking'],
  drivingLicence: 'Category B',
};

export const copy = {
  en: {
    nav: { home: 'Home', works: 'Works', about: 'About', cv: 'CV', contact: 'Contact' },
    hero: {
      eyebrow: 'Multidisciplinary designer',
      introduction: 'Ideas shaped through design, motion, and visual storytelling.',
      disciplines: ['Graphic design', '3D & CGI', 'Motion', 'Video', 'Digital experiences'],
      workLink: 'Explore works',
      aboutLink: 'About me',
    },
    introduction: {
      label: 'The practice',
      title: 'Creative thinking.\nConsidered execution.',
      body: 'Five years of professional experience across graphic and product design, 3D visualization, motion, and video production. Each project brings together a clear visual direction and careful execution, creating work for brands, products, and digital experiences.',
    },
    works: { title: 'Selected works', all: 'All projects', indexTitle: 'The works.', description: 'A selection of projects across graphic design, 3D visualization, motion, video, and digital experiences.' },
    about: {
      title: 'Behind the work.',
      label: 'About the practice',
      heading: 'A multidisciplinary practice.\nFive years in the making.',
      body: 'Professional work spanning brand identities, product visuals, 3D imagery, motion design, and audiovisual production. More than ten projects have brought creative ideas into focus across digital channels and physical applications, with attention to both visual quality and the needs of each brief.',
      biography: 'Alongside professional practice, ongoing studies in Creative Computing at USTP in St. Pölten connect design with technical development.',
    },
    cv: { title: 'The CV.', label: 'Background & experience', experience: 'Experience', education: 'Education', awards: 'Recognition', skills: 'Tools & skills', languages: 'Languages', approach: 'How I work', interests: 'Beyond the work', drivingLicence: 'Driving licence', languageNote: 'CEFR levels for additional languages' },
    contact: { title: 'Let’s talk.', label: 'Contact', introduction: 'Have a project in mind, a collaboration to discuss, or a question about the work? Choose a way to get in touch.' },
    footer: { title: 'Let’s work\ntogether.', action: 'Contact Me' },
    project: { back: 'All works', client: 'Client', role: 'Role', software: 'Software', year: 'Year', next: 'Next project', backBottom: 'Back to projects' },
  },
};
