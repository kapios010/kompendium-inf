import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookIcon } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
  return {
    links: [
      {
        text: "Strona Główna",
        url: '/',
      },
      {
        text: 'Kompendium',
        url: '/kompendium/teoria'
      },
      {
        text: 'Blog',
        url: '/blog'
      }
    ],
    githubUrl: 'https://github.com/kapios010/kompendium-inf',
    nav: {
      title: 'Kompendium Inf*',
    }
  };
}
