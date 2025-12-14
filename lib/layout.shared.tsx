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
    githubUrl: 'https://github.com/KompendiumInfDev/kompendium-inf',
    nav: {
      title: (
        <span className='text-xl'>
        <span className='font-black italic text-fd-primary mr-0.5'>$</span>
        Kompendium
        <span className='font-black italic text-fd-primary'>Inf;</span>
        </span>
      ),
    }
  };
}
