import { ArrowBigRightDash, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { cn } from 'fumadocs-ui/utils/cn';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-5xl font-bold mb-4">Twoje Kompendium Maturalne z Informatyki</h1>
      <p>
        Darmowe, kompletne&#42;, open-source.
      </p>
      <Link href={'/kompendium/teoria'} className={cn(buttonVariants({variant:'secondary', size: 'icon'}), 'w-96 mt-6 flex gap-2 self-center')}>
        Zacznij przeglądać <ArrowBigRightDash/>
      </Link>
    </div>
    
  );
}
