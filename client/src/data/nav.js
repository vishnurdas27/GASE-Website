// Everything the header menus and footer need, kept in one place.

export const site = {
  phone: '+91 98115 85877',
  phoneHref: 'tel:+919811585877',
  email: 'info@gase.global',
  tagline: 'Building a Better Future Through Excellence',
  industry: 'International Trade & Development',
  founded: '2014'
};

export const services = [
  {
    to: '/assessments',
    title: 'Assessments & Ratings',
    desc: 'Evidence-based maturity assessments across every function.',
    icon: ['M9 11l3 3 8-8', 'M21 12a9 9 0 1 1-6-8.5']
  },
  {
    to: '/benchmarking',
    title: 'Benchmarking',
    desc: 'Compare performance against sector leaders and best practice.',
    icon: ['M3 3v18h18', 'M7 14l3-4 3 3 5-7']
  },
  {
    to: '/recognition',
    title: 'Recognition & Awards',
    desc: 'Award journeys that celebrate and accelerate excellence.',
    icon: ['M12 15a4 4 0 0 0 4-4V4H8v7a4 4 0 0 0 4 4Z', 'M8 4H5v3a3 3 0 0 0 3 3M16 4h3v3a3 3 0 0 1-3 3M12 15v4M9 21h6']
  },
  {
    to: '/advisory',
    title: 'Advisory & Consulting',
    desc: 'Turn diagnostics into strategy, deployment and outcomes.',
    icon: ['M12 20a8 8 0 1 0-8-8', 'M12 12l4-2M12 12v5']
  },
  {
    to: '/capability',
    title: 'Capability Building & DOJO',
    desc: 'Training and DOJO to embed excellence into operations.',
    icon: ['M4 19V5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z', 'M9 13h6M9 17h6']
  }
];

// Any of these should light up the Services menu item
export const servicePaths = ['/services', ...services.map((s) => s.to)];

export const valueChainGroups = [
  { title: 'Strategy & Direction', items: ['Strategy', 'Leadership', 'Innovation'] },
  { title: 'Operations & Delivery', items: ['Operations', 'Supply Chain', 'Quality', 'Customer Experience'] },
  { title: 'Digital & Sustainability', items: ['Digital Transformation', 'ESG'] },
  { title: 'Risk & Enablers', items: ['Risk', 'Human Resources', 'Finance', 'Governance'] }
];

export const industryGroups = [
  { title: 'Industrial', items: ['Manufacturing', 'Energy', 'Infrastructure', 'Logistics'] },
  { title: 'Services', items: ['IT & Services', 'Healthcare', 'Retail', 'Hospitality', 'BFSI'] },
  { title: 'Public & Social', items: ['Government & PSUs', 'Education', 'NGOs', 'Agriculture', 'Startups'] }
];

export const aboutLinks = [
  { to: '/about#who', label: 'Who We Are' },
  { to: '/about#journey', label: 'Our Journey' },
  { to: '/about#why', label: 'Why GASE' },
  { to: '/about#values', label: 'Our Values' }
];

export const slug = (s) => s.toLowerCase().replace(/[^a-z]+/g, '-');
