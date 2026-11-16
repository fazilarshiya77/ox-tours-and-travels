export interface NavLinkItem {
  name: string;
  path: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Our Fleet', path: '/fleet' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];
