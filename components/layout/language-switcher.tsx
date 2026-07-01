'use client';

import { useLocale } from 'next-intl';
import { useTransition } from 'react';

import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';

const LABELS: Record<string, string> = { es: 'ES', en: 'EN', it: 'IT' };

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const change = (next: string) => {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div
      className={cn(
        'flex items-center gap-1 text-sm font-medium',
        isPending && 'opacity-60',
        className,
      )}
    >
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="mx-1 text-current/30">/</span>}
          <button
            type="button"
            onClick={() => change(l)}
            aria-current={l === locale}
            className={cn(
              'cursor-pointer tracking-wide transition-opacity hover:opacity-100',
              l === locale ? 'opacity-100' : 'opacity-50',
            )}
          >
            {LABELS[l]}
          </button>
        </span>
      ))}
    </div>
  );
}
