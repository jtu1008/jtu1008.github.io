// Central site configuration — edit author info, nav, and metadata here.

export interface NavLink {
  title: string;
  url: string;
}

export type SocialIcon = 'email' | 'scholar' | 'linkedin' | 'github' | 'twitter';

export interface SocialLink {
  label: string;
  url: string;
  icon: SocialIcon;
}

export const site = {
  title: 'Jingxuan Tu',
  titleSeparator: '-',
  description:
    'Jingxuan Tu — Applied Scientist at CodaMetrix building LLM and agentic systems for medical coding; Ph.D. in Computational Linguistics from Brandeis.',
  url: 'https://jingxuantu.com',
  locale: 'en-US',
};

export const author = {
  name: 'Jingxuan Tu',
  nameZh: '屠竞轩',
  avatar: '/assets/images/avator.jpeg',
  bio: 'Applied Scientist III @ CodaMetrix · AI for medical coding',
  location: 'Boston, MA',
  email: 'tujingxuan1994@gmail.com',
};

// Top masthead navigation (mirrors the old _data/navigation.yml).
export const nav: NavLink[] = [
  { title: 'Home', url: '/' },
  { title: 'Research', url: '/research/' },
  { title: 'Publications', url: '/pub/' },
  { title: 'Service', url: '/service/' },
  { title: 'Reading', url: '/reading/' },
  // { title: 'Blog', url: '/blog/' }, // re-enable when the blog is ready to launch
];

// Sidebar profile links. Email is always shown; add more as desired.
export const social: SocialLink[] = [
  { label: 'Email', url: 'mailto:tujingxuan1994@gmail.com', icon: 'email' },
  {
    label: 'Google Scholar',
    url: 'https://scholar.google.com/citations?user=eFA-RpAAAAAJ',
    icon: 'scholar',
  },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/jingxuantu/', icon: 'linkedin' },
  // Add when ready:
  // { label: 'GitHub', url: 'https://github.com/<handle>', icon: 'github' },
  // { label: 'X', url: 'https://x.com/<handle>', icon: 'twitter' },
];
