export type BookStatus = 'reading' | 'read' | 'queued';

export interface Book {
  /** Primary title shown in bold. English-original → English title; Chinese-original → Chinese title. */
  title: string;
  /** Secondary title shown under the primary (used for the English title of Chinese-original books). */
  titleAlt?: string;
  author: string;
  /** Local cover path (preferred), e.g. '/assets/books/foo.jpg'. */
  cover?: string;
  /** Fallback: ISBN-13 (no dashes) → cover from Open Library, only used if `cover` is unset. */
  isbn?: string;
  /** Optional one-line thought — keep it short and tasteful. */
  note?: string;
  status?: BookStatus;
  /** Month read/logged, as 'YYYY-MM'. The month is mapped to its quarter for grouping.
   *  Leave unset for `reading` (→ "Currently reading") and `queued` (→ "Up next"). */
  date?: string;
  /** Optional outbound link (publisher, Goodreads, etc.). */
  link?: string;
}

// Covers are self-hosted in /public/assets/books/. Display rule:
//  - Non-Chinese original (English/Japanese/Swedish…) → English title + English-edition cover.
//  - Chinese original → Chinese title (primary) + English title (titleAlt) + Chinese/edition cover.
export const books: Book[] = [
  // ── Currently reading ───────────────────────────────────────────────
  {
    title: 'Being Mortal', // Medicine and What Matters in the End — English original
    author: 'Atul Gawande',
    cover: '/assets/books/being-mortal.jpg',
    status: 'reading',
  },
  {
    title: 'Steve Jobs', // English original
    author: 'Walter Isaacson',
    cover: '/assets/books/steve-jobs.jpg',
    status: 'reading',
  },

  // ── Q3 2026 ─────────────────────────────────────────────────────────
  {
    title: 'Misogyny', // 厌女 — Japanese original (Japanese-edition cover)
    author: 'Chizuko Ueno',
    cover: '/assets/books/misogyny.jpg',
    status: 'read',
    date: '2026-07',
  },

  // ── Q2 2026 ─────────────────────────────────────────────────────────
  {
    title: 'Anxious People', // 焦虑的人 — Swedish original
    author: 'Fredrik Backman',
    cover: '/assets/books/anxious-people.jpg',
    status: 'read',
    date: '2026-06',
  },
  {
    title: 'Attached: The New Science of Adult Attachment', // 亲密关系与情感依赖 — English original
    author: 'Amir Levine & Rachel S. F. Heller',
    cover: '/assets/books/attached.jpg',
    status: 'read',
    date: '2026-05',
  },
  {
    title: '格外的活法', // Chinese-language original (吉井忍 — Japanese author, writes in Chinese)
    titleAlt: 'A Different Way of Living', // gloss — no official English title; adjust if you prefer
    author: '吉井忍 (Yoshii Shinobu)',
    cover: '/assets/books/gewai-de-huofa.jpg',
    status: 'read',
    date: '2026-05',
  },
  {
    title: '女性主义', // Chinese original
    titleAlt: 'Feminism',
    author: '李银河 (Li Yinhe)',
    cover: '/assets/books/feminism.jpg',
    status: 'read',
    date: '2026-05',
  },
  {
    title: 'Lean In', // 向前一步 — English original
    author: 'Sheryl Sandberg',
    cover: '/assets/books/lean-in.jpg',
    status: 'read',
    date: '2026-05',
  },
  {
    title: 'Thinking, Fast and Slow', // 思考快与慢 — English original
    author: 'Daniel Kahneman',
    cover: '/assets/books/thinking-fast-and-slow.jpg',
    status: 'read',
    date: '2026-05',
  },

  // ── Q1 2026 ─────────────────────────────────────────────────────────
  {
    title: 'The Psychology of Money', // 金钱心理学 — English original
    author: 'Morgan Housel',
    cover: '/assets/books/psychology-of-money.jpg',
    status: 'read',
    date: '2026-02',
  },
  {
    title: '乡土中国', // Chinese original
    titleAlt: 'From the Soil: The Foundations of Chinese Society',
    author: 'Fei Xiaotong (费孝通)',
    cover: '/assets/books/from-the-soil.jpg', // "From the Soil" UC Press English-edition cover (user's pick)
    status: 'read',
    date: '2026-02',
  },
  {
    title: 'The Miracle of the Namiya General Store', // 解忧杂货店 — Japanese original
    author: 'Keigo Higashino',
    cover: '/assets/books/namiya-general-store.jpg',
    status: 'read',
    date: '2026-02',
  },
  {
    title: '一只特立独行的猪', // Chinese original (essays)
    titleAlt: 'A Maverick Pig', // gloss — no canonical English title; confirm if you prefer another
    author: 'Wang Xiaobo (王小波)',
    cover: '/assets/books/maverick-pig.jpg',
    status: 'read',
    date: '2026-02',
  },

  // ── Q4 2025 ─────────────────────────────────────────────────────────
  {
    title: 'The Murder of Roger Ackroyd', // 罗杰疑案 — English original
    author: 'Agatha Christie',
    cover: '/assets/books/roger-ackroyd.jpg',
    status: 'read',
    date: '2025-11',
  },
  {
    title: 'Influence: The Psychology of Persuasion', // 影响力 — English original
    author: 'Robert B. Cialdini',
    cover: '/assets/books/influence.jpg',
    status: 'read',
    date: '2025-11',
  },
];
