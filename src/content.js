// Keep content separate from rendering. Additional languages can use this shape.
// Contact URLs stay empty until Vlad supplies them; never invent contact details.
export const profile = {
  name: 'Vlad Tirsu',
  firstName: 'Vlad',
  lastName: 'Tirsu',
  specialty: 'Automotive CGI & 3D art',
  behance: 'https://www.behance.net/vlad_t18',
  email: '',
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
  '*3D software*',
  '*Rendering engine*',
  '*Compositing tool*',
  '*Image editing*',
  '*Animation tool*',
  '*Additional skill*',
];

export const cv = {
  summary: '*Professional summary — your background, focus, and the kind of work you do.*',
  experience: [
    { period: '*Dates*', title: '*Role / position*', place: '*Company / studio*', description: '*Responsibilities and selected achievements.*' },
    { period: '*Dates*', title: '*Role / position*', place: '*Company / studio*', description: '*Responsibilities and selected achievements.*' },
  ],
  education: [
    { period: '*Dates*', title: '*Degree / qualification*', place: '*Institution*', description: '*Field of study and relevant details.*' },
  ],
  languages: '*Languages and proficiency levels*',
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
      body: 'I’m Vlad Tirsu. My creative work centres on cars, automotive CGI, and 3D visualization. This is a space for the projects, ideas, and experiments behind my work.',
    },
    works: { title: 'Selected works', all: 'All projects', indexTitle: 'The works.', description: 'A collection of car-focused artworks and creative explorations.' },
    about: { title: 'Behind the work.', label: 'About me', biography: '*Biography — your story, creative approach, and what drives your work.*' },
    cv: { title: 'The CV.', label: 'Background & experience', experience: 'Experience', education: 'Education', skills: 'Tools & skills', languages: 'Languages' },
    contact: { title: 'Let’s talk.', label: 'Contact', introduction: 'Have a project in mind, a collaboration to discuss, or a question about the work? Choose a way to get in touch.' },
    footer: { title: 'Let’s make\nsomething move.', action: 'Get in touch' },
    project: { back: 'All works', client: 'Client', role: 'Role', software: 'Software', year: 'Year', next: 'Next project', backBottom: 'Back to projects' },
  },
};
