import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Classes',
      links: [
        {
          text: 'All Classes',
          href: getPermalink('/classes'),
        },
        {
          text: 'Apex Dance Company',
          href: getPermalink('/classes#ADC'),
        },
        {
          text: 'Honors Ensemble',
          href: getPermalink('/classes#Honors'),
        },
        {
          text: 'Dance 1 & 2',
          href: getPermalink('/classes#Dance1'),
        },
      ],
    },
    {
      text: 'Resources',
      links: [
        {
          text: '2023-2024 Schedule',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Dance Handbook',
          href: getPermalink('/handbook'),
        },
        {
          text: 'ADC Syllabus',
          href: getPermalink('/syllabus'),
        },
      ],
    },
    {
      text: 'Announcements',
      links: [
        {
          text: 'All Posts',
          href: getBlogPermalink(),
        },
        {
          text: 'Events',
          href: getPermalink('events', 'category'),
        },
        {
          text: 'Guest Artists',
          href: getPermalink('guest-artists', 'tag'),
        },
      ],
    },
    {
      text: 'Boosters',
      href: getPermalink('/boosters'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Classes',
      links: [
        { text: 'All Classes', href: '/classes' },
        { text: 'Apex Dance Company', href: '/classes#ADC' },
        { text: 'Honors Ensemble', href: '/classes#Honors' },
        { text: 'Dance 1 & 2', href: 'classes#Dance1' },
      ],
    },
    {
      title: 'Key Resources',
      links: [
        { text: 'Dance Handbook', href: '#' },
        { text: 'Schedule', href: '#' },
      ],
    },
    {
      title: 'AHS Dance Program',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Announcements', href: '/blog' },
        { text: 'Boosters', href: '/boosters' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Instagram', text: 'Instagram', href: 'https://www.instagram.com/apexhsdanceprogram/' },
    { ariaLabel: 'Facebook', text: 'Facebook', href: 'https://www.facebook.com/apexhsdance/' },
    { ariaLabel: 'RSS', text: 'RSS', href: getAsset('/rss.xml') },
    { ariaLabel: 'WCPSS', text: 'Wake County Public Schools', href: 'https://www.wcpss.net/' },
  ],
  footNote: `
    Website by <a class="text-blue-600 underline text-muted" href="https://bjernigan.com/"> B Jernigan</a>
  `,
};
