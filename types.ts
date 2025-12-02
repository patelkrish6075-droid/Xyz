import { ReactNode } from 'react';

export type PageId = 'home' | 'menu' | 'about' | 'catering' | 'contact';

export interface MenuItemDetails {
  name: string;
  price: string;
  desc: string;
  featured: boolean;
  image?: string;
}

export interface MenuCategory {
  category: string;
  description: string;
  items: MenuItemDetails[];
}

export interface TestimonialData {
  name: string;
  source: string;
  text: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
}

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}