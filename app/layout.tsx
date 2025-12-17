import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import 'katex/dist/katex.css';
import { IBM_Plex_Sans, Inter, JetBrains_Mono } from 'next/font/google';
import SearchDialog from '@/components/search';
import { Banner } from 'fumadocs-ui/components/banner';
import { Body } from './layout.client';
import { twMerge } from 'tailwind-merge';

const IBMPlex = IBM_Plex_Sans({
  variable: '--font-sans',
  subsets: ['latin', 'latin-ext'],
});

const JBMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin', 'latin-ext'],
})

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${IBMPlex.variable} ${JBMono.variable}`} suppressHydrationWarning>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <Body>
        <RootProvider
          search={{
            SearchDialog,
          }}
        >
          {children}
          </RootProvider>
      </Body>
    </html>
  );
}
