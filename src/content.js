import portrait from '../photos/cvphoto.jpg';
import { projectNumbers } from './routing.js';

// Keep content separate from rendering. Additional languages can use this shape.
// Contact URLs stay empty until Vlad supplies them; never invent contact details.
export const profile = {
  name: 'Vlad Tîrșu',
  firstName: 'Vlad',
  lastName: 'Tîrșu',
  portrait,
  specialty: '',
  behance: 'https://www.behance.net/vlad_t18',
  email: 'vladtirsu1803@gmail.com',
  phone: '+43 664 146 9222',
  phoneHref: 'tel:+436641469222',
  location: 'Moldova & Austria',
  residence: 'Sankt Pölten, Austria',
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

export const projects = projectNumbers.map((number) => ({
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

Object.assign(projects[0], {
  title: 'Porsche 911 GT3 Photoshoot',
  coverImageIndex: 3,
  category: 'Automotive photography',
  year: '2024',
  client: 'Personal work',
  role: 'Photographer',
  software: 'Lightroom & Photoshop',
  description: 'A personal shoot at a Porsche dealership in Chișinău, Moldova. I wanted to capture what caught my eye about this blue 911 GT3: the rear wing, the shape of the body, and the smaller details you notice when you get closer. The series moves from the rear and front bodywork to the wheels, badges, and the view from the driver’s seat. I edited the photos in Lightroom and Photoshop, keeping the blue paint and the contrast between the car and the showroom at the heart of the set.',
  images: [
    { name: 'rear', width: 2000, height: 1125, alt: 'Blue Porsche 911 GT3 from the rear, with its wing and taillights inside the Chișinău showroom', caption: 'The rear view' },
    { name: 'wheel', width: 2000, height: 1334, alt: 'Rear wheel and blue bodywork of the Porsche 911 GT3 beside the showroom windows', caption: 'Wheel & bodywork' },
    { name: 'front', width: 2000, height: 1334, alt: 'Front three-quarter detail of the blue Porsche 911 GT3 in the showroom', caption: 'Up front' },
    { name: 'crest', wide: true, width: 2000, height: 1334, alt: 'Porsche crest on the blue bonnet of the 911 GT3', caption: 'The Porsche crest' },
    { name: 'cockpit', width: 2000, height: 1334, alt: 'Porsche 911 GT3 cockpit with the steering wheel, instruments, and centre console', caption: 'The driver’s seat' },
    { name: 'dashboard', width: 2000, height: 1125, alt: 'Porsche 911 GT3 dashboard with the rev counter and GT3 instrument display', caption: 'Behind the wheel' },
    { name: 'wheel-detail', wide: true, width: 2000, height: 1334, alt: 'Close-up of the Porsche GT3 alloy wheel, brake disc, and Porsche centre cap', caption: 'A closer look' },
  ].map(({ name, ...image }) => ({
    ...image,
    src: `/artworks/porsche-gt3/${name}-2000.webp`,
    sources: [640, 1200, 2000].map((width) => ({ src: `/artworks/porsche-gt3/${name}-${width}.webp`, width })),
  })),
});

Object.assign(projects[1], {
  title: 'Visual Identity for a Car Rental Company',
  category: 'Brand design & visual communication',
  client: 'Level Auto Rental',
  role: 'Brand & automotive livery designer',
  software: 'Illustrator, Photoshop, Blender & Adobe Substance',
  year: '2026',
  layout: 'brand-story',
  coverImageIndex: 0,
  description: 'A visual world for Level Auto Rental, bringing together vehicle graphics, event materials and printed details. A consistent use of dark tones, confident typography and the Level monogram connects the brand across every application.',
  story: [
    { label: '01 — On the road', title: 'A presence in motion.', body: 'For Level Auto Rental, I designed visual materials that bring the company’s identity into everyday spaces. The vehicle livery pairs a bold gold wordmark with a repeating monogram pattern, giving the car a distinctive presence while following the lines of its bodywork.' },
    { label: '02 — Beyond the vehicle', title: 'One brand. Every touchpoint.', body: 'The same visual language continues through the event stand, business cards and outdoor flags. I adapted the graphics to different scales and formats, from a small printed card to a full event setup, keeping the company’s name and identity clear throughout.' },
  ],
  images: [
    { name: 'design-cls', width: 2000, height: 1500, alt: 'Black Mercedes CLS with gold Level Auto Rental branding and monogram livery', caption: 'Mercedes CLS — livery concept' },
    { name: 'car-livery', width: 2000, height: 2667, alt: 'Level Auto Rental gold vehicle graphics applied to a black Mercedes outdoors', caption: 'The livery on the road' },
    { name: 'stand', width: 2000, height: 2667, alt: 'Level Auto Rental branded event canopy, backdrop and display table', caption: 'The brand in a physical space' },
    { name: 'laptop', width: 2000, height: 1333, alt: 'Vehicle illustrations in Adobe Illustrator on a laptop screen', caption: 'From the design process' },
    { name: 'business-card', width: 2000, height: 1333, alt: 'Dark Level Auto Rental business card with the Level monogram', caption: 'Business card design' },
    { name: 'merch', wide: true, width: 2000, height: 1500, alt: 'Black T-shirt with the Level Auto Rental logo printed on the back', caption: 'Branded merchandise' },
    { name: 'flags', wide: true, width: 2000, height: 1333, alt: 'Three black and white Level Auto Rental flags with the Drive Your Level slogan', caption: 'Outdoor flags — Drive Your Level' },
  ].map(({ name, ...image }) => ({
    ...image,
    src: `/artworks/level-auto/${name}-2000.webp`,
    sources: [640, 1200, 2000].map((width) => ({ src: `/artworks/level-auto/${name}-${width}.webp`, width })),
  })),
});

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
    { name: 'Russian', level: 'B1' },
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
      title: 'Creative thinking.\nMade with care.',
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
    contact: { title: 'Let’s talk.', label: 'Contact', introduction: 'Have an employment opportunity in mind or a question about my work? Choose a way to get in touch.' },
    footer: { title: 'Let’s\ncollaborate.', action: 'Contact Me' },
    project: { back: 'All works', client: 'Client', role: 'Role', software: 'Software', year: 'Year', next: 'Next project', backBottom: 'Back to projects' },
  },
};
