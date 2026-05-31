// Central site configuration — edit author info, nav, and metadata here.

export interface NavLink {
  title: string;
  url: string;
}

export interface SocialLink {
  label: string;
  /** Font-Awesome-style icon class is avoided; we use inline labels for now. */
  url: string;
}

export const site = {
  title: 'Jingxuan Tu',
  titleSeparator: '-',
  description: "Jingxuan Tu's personal web page",
  url: 'https://jtu1008.github.io',
  locale: 'en-US',
};

export const author = {
  name: 'Jingxuan Tu',
  nameZh: '屠竞轩',
  avatar: '/assets/images/avator.jpeg',
  bio: 'Ph.D Student @ Brandeis in Computational Linguistics',
  location: 'Waltham, MA',
  email: 'jxtu@brandeis.edu',
};

// Top masthead navigation (mirrors the old _data/navigation.yml).
export const nav: NavLink[] = [
  { title: 'Home', url: '/' },
  { title: 'Research', url: '/research/' },
  { title: 'Publications', url: '/pub/' },
  { title: 'Service', url: '/service/' },
];

// Sidebar profile links. Email is always shown; add more as desired.
export const social: SocialLink[] = [
  { label: 'Email', url: 'mailto:jxtu@brandeis.edu' },
];
