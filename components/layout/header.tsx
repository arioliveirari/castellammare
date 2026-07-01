'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, Phone } from 'lucide-react';

import { cn } from '@/lib/utils';
import { site, whatsappLink } from '@/lib/site';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { LanguageSwitcher } from './language-switcher';

const SECTIONS = ['about', 'gallery', 'tour', 'reviews', 'faq', 'contact'] as const;

function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}

function useActiveSection() {
  const [active, setActive] = useState<string>('home');
  useEffect(() => {
    const ids = ['home', ...SECTIONS];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return active;
}

export function Header() {
  const t = useTranslations('nav');
  const scrolled = useScrolled();
  const active = useActiveSection();

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-cream/85 text-foreground shadow-[0_1px_0_0_var(--border)] backdrop-blur-md'
          : 'bg-transparent text-cream',
      )}
    >
      <div className="container-editorial flex h-16 items-center justify-between md:h-20">
        <a
          href="#home"
          className="font-serif text-lg font-semibold tracking-tight md:text-xl"
        >
          Santa Lucia
          <span className={cn('ml-1.5 font-sans text-xs font-normal uppercase tracking-[0.2em]', scrolled ? 'text-accent' : 'text-cream/70')}>
            Tour
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {SECTIONS.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className={cn(
                'relative text-sm font-medium transition-opacity hover:opacity-100',
                active === s ? 'opacity-100' : 'opacity-70',
              )}
            >
              {t(s)}
              <span
                className={cn(
                  'absolute -bottom-1.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-accent transition-transform duration-300',
                  active === s && 'scale-x-100',
                )}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher className="hidden sm:flex" />
          <Button
            asChild
            variant="accent"
            size="sm"
            className="hidden rounded-full sm:inline-flex"
          >
            <a href={whatsappLink(site.whatsapp)} target="_blank" rel="noopener noreferrer">
              <Phone className="size-4" />
              {t('book')}
            </a>
          </Button>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu" className={scrolled ? '' : 'text-cream hover:bg-white/10 hover:text-cream'}>
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="text-foreground">
              <SheetTitle className="font-serif text-2xl">
                Santa Lucia <span className="text-accent">Tour</span>
              </SheetTitle>
              <nav className="flex flex-col gap-1">
                {SECTIONS.map((s) => (
                  <SheetClose asChild key={s}>
                    <a
                      href={`#${s}`}
                      className="rounded-md px-2 py-3 text-lg font-medium transition-colors hover:bg-secondary"
                    >
                      {t(s)}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-4">
                <LanguageSwitcher />
                <Button asChild variant="accent" className="rounded-full">
                  <a href={whatsappLink(site.whatsapp)} target="_blank" rel="noopener noreferrer">
                    <Phone className="size-4" />
                    {t('book')}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
