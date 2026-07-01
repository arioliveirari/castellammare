import { useTranslations } from 'next-intl';
import { Instagram, Mail, MapPin } from 'lucide-react';

import { site, whatsappLink } from '@/lib/site';
import { WhatsappIcon } from '@/components/icons/whatsapp';

const NAV = ['about', 'gallery', 'tour', 'reviews', 'faq', 'contact'] as const;

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-deep text-cream">
      <div className="container-editorial grid gap-10 py-14 md:grid-cols-3">
        <div className="space-y-3">
          <p className="font-serif text-2xl">
            Santa Lucia <span className="text-terracotta-soft">Tour</span>
          </p>
          <p className="max-w-xs text-sm text-cream/70">{t('footer.tagline')}</p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href={whatsappLink(site.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex size-9 items-center justify-center rounded-full border border-cream/20 transition-colors hover:bg-cream/10"
            >
              <WhatsappIcon className="size-4" />
            </a>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-9 items-center justify-center rounded-full border border-cream/20 transition-colors hover:bg-cream/10"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="flex size-9 items-center justify-center rounded-full border border-cream/20 transition-colors hover:bg-cream/10"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        <nav className="grid grid-cols-2 gap-2 text-sm md:justify-self-center">
          {NAV.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className="text-cream/70 transition-colors hover:text-cream"
            >
              {t(`nav.${s}`)}
            </a>
          ))}
        </nav>

        <div className="space-y-3 text-sm text-cream/80 md:justify-self-end">
          <a
            href={site.maps.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 hover:text-cream"
          >
            <MapPin className="mt-0.5 size-4 shrink-0 text-terracotta-soft" />
            <span>{t('contact.info.location')}</span>
          </a>
          {site.phones.map((p) => (
            <a
              key={p.number}
              href={whatsappLink(p.number)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cream"
            >
              <WhatsappIcon className="size-4 shrink-0 text-terracotta-soft" />
              <span>
                {p.display} · {p.label}
              </span>
            </a>
          ))}
          <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-cream">
            <Mail className="size-4 shrink-0 text-terracotta-soft" />
            <span>{site.email}</span>
          </a>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-editorial flex flex-col items-center justify-between gap-2 py-5 text-xs text-cream/50 sm:flex-row">
          <span>
            © {year} Santa Lucia Tour — {t('footer.rights')}
          </span>
          <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-cream/80">
            {site.instagram.handle}
          </a>
        </div>
      </div>
    </footer>
  );
}
