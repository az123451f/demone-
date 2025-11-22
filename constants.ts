import { NavItem, ArchiveItem } from './types';

export const BRAND_NAME = "DEMONE.DIST";
export const BRAND_TAGLINE = "DEFINING THE STANDARD";

export const SOCIAL_LINKS = {
  INSTAGRAM: "https://www.instagram.com/demone.dist?igsh=N3h4bmIwc3ZleDcw&utm_source=qr",
  TIKTOK: "https://www.tiktok.com/@demone.dist?_r=1&_t=ZS-91b5K6graBM",
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'MANIFESTO', href: '#about' },
  { label: 'VISUALS', href: '#gallery' },
  { label: 'ACCESS', href: '#newsletter' },
];

export const ARCHIVE_ITEMS: ArchiveItem[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
    alt: 'Model in dark urban wear',
    title: 'Shadow Protocol',
    season: 'S/S 2024'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1000&auto=format&fit=crop',
    alt: 'Abstract fabric texture',
    title: 'Void Texture',
    season: 'F/W 2023'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
    alt: 'Silhouette fashion shot',
    title: 'Noir Series',
    season: 'S/S 2023'
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1000&auto=format&fit=crop',
    alt: 'Industrial background fashion',
    title: 'Concrete Jungle',
    season: 'F/W 2022'
  }
];