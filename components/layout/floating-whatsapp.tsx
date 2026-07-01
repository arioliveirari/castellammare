'use client';

import { useTranslations } from 'next-intl';

import { site, whatsappLink } from '@/lib/site';
import { WhatsappIcon } from '@/components/icons/whatsapp';

export function FloatingWhatsapp() {
  const t = useTranslations('whatsapp');

  return (
    <a
      href={whatsappLink(site.whatsapp)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('label')}
      className="group fixed bottom-5 right-5 z-40 flex h-14 items-center justify-center rounded-full bg-[#25D366] px-3.5 text-white shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105 hover:px-5 md:bottom-7 md:right-7"
    >
      <WhatsappIcon className="size-7 shrink-0" />
      <span className="ml-0 hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:ml-3 group-hover:max-w-[220px] group-hover:opacity-100 md:inline">
        {t('label')}
      </span>
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
    </a>
  );
}
