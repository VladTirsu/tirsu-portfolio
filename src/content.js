// Keep content separate from rendering. Additional languages can use this shape.
// Contact URLs stay empty until Vlad supplies them; never invent contact details.
export const profile = {
  name: 'Vlad Tîrșu',
  firstName: 'Vlad',
  lastName: 'Tîrșu',
  specialty: 'Automotive CGI & 3D art',
  behance: 'https://www.behance.net/vlad_t18',
  email: 'vladtirsu1803@gmail.com',
  phone: '+43 664 146 9222',
  phoneHref: 'tel:+436641469222',
  location: 'Moldova & Austria',
  instagram: '',
  linkedin: '',
};

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
  'Microsoft tools',
  '3D design',
  'CGI & rendering',
  'Video editing',
  'Photography',
  'Graphic & product design',
  'UX/UI & web design',
];

// Professional content from Vlad's supplied CV and subsequent work details.
// The original PDF, street address, birth date, and demographic fields are not published.
export const cv = {
  summary: 'With seven years of creative experience, including five years of professional work, I specialize in 3D design, CGI, and rendering. I work with Blender, Cinema 4D, Maya, and the Adobe Creative Suite, alongside video editing and photography, to create high-quality visuals and immersive rendered content.',
  experience: [
    {
      period: '2024 — Present',
      title: 'Graphic & product designer',
      place: 'Level Auto Rental',
      description: 'Responsible for the design of vehicle wraps and branding graphics, branded merchandise, products, business cards, and social media content. Developed visual materials for the company’s brand identity across vehicle applications, printed collateral, and digital communications.',
    },
    {
      period: '2024 — Present',
      title: 'Graphic designer & audiovisual content creator',
      place: 'Feeling Coffee',
      location: 'Moldova',
      description: 'Developed menus, social media graphics, advertising materials, and uniform designs for a coffee shop chain in Moldova. Produced promotional video content through videography and cinematography, supporting brand communications across digital channels and physical locations.',
    },
    {
      period: 'Jan 2023 — Dec 2024',
      title: 'Graphic designer',
      place: 'Software Mind',
      location: 'Chișinău, Moldova',
      description: '',
    },
    {
      period: 'Jun 2021 — Sep 2024',
      title: 'Multidisciplinary designer & videographer',
      place: 'Andrew Rayel',
      location: 'Chișinău, Moldova',
      description: 'Graphic and product design, 3D motion design, merchandise design, video editing, videography, UX/UI, and website design.',
    },
    {
  period: '2024 — Present',
  title: 'Graphic & product designer',
  place: 'Level Auto Rental',
  location: 'Chișinău, Moldova',
  description:
    'Responsible for the design of vehicle wraps and branding graphics, branded merchandise, products, business cards, and social media content. Developed visual materials for the company’s brand identity across vehicle applications, printed collateral, and digital communications.',
  },
  {
  period: '2024 — Present',
  title: 'Graphic designer & audiovisual content creator',
  place: 'Feeling Coffee',
  location: 'Chișinău, Moldova',
  description:
    'Developed menus, social media graphics, advertising materials, and uniform designs for a coffee shop chain in Moldova. Produced promotional video content through videography and cinematography, supporting brand communications across digital channels and physical locations.',
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
      eyebrow: 'Automotive CGI & 3D art',
      introduction: 'Car-focused artworks.\nA different perspective on form, light, and motion.',
      workLink: 'Explore works',
      aboutLink: 'About me',
    },
    introduction: {
      label: 'The artist',
      title: 'A fascination with cars.\nAn eye for the details.',
      body: 'I’m Vlad Tîrșu. My creative work centres on cars, automotive CGI, and 3D visualization. This is a space for the projects, ideas, and experiments behind my work.',
    },
    works: { title: 'Selected works', all: 'All projects', indexTitle: 'The works.', description: 'A collection of car-focused artworks and creative explorations.' },
    about: { title: 'Behind the work.', label: 'About me', biography: 'My background spans graphic and product design, 3D motion, video, photography, and UX/UI. I’m currently studying Creative Computing at USTP in St. Pölten, building on professional work with Andrew Rayel and Software Mind.' },
    cv: { title: 'The CV.', label: 'Background & experience', experience: 'Experience', education: 'Education', awards: 'Recognition', skills: 'Tools & skills', languages: 'Languages', approach: 'How I work', interests: 'Beyond the work', drivingLicence: 'Driving licence', languageNote: 'CEFR levels for English, German, and Russian' },
    contact: { title: 'Let’s talk.', label: 'Contact', introduction: 'Have a project in mind, a collaboration to discuss, or a question about the work? Choose a way to get in touch.' },
    footer: { title: 'Let’s make\nsomething move.', action: 'Get in touch' },
    project: { back: 'All works', client: 'Client', role: 'Role', software: 'Software', year: 'Year', next: 'Next project', backBottom: 'Back to projects' },
  },
};
