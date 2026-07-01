/**
 * Central site configuration: contact data, external links, endpoints.
 * Update these with the client's real values.
 */
export const site = {
  name: 'Santa Lucia Tour',
  url: 'https://santaluciatour.it',
  phones: [
    { label: 'Antonino', number: '393890475539', display: '+39 389 047 5539' },
    { label: 'Bruno', number: '393892926143', display: '+39 389 292 6143' },
  ],
  // Primary WhatsApp used by the header / floating button
  whatsapp: '393890475539',
  instagram: {
    handle: '@s._lucia_pescaturismo',
    url: 'https://www.instagram.com/s._lucia_pescaturismo',
  },
  // TODO: confirm real client email (previous mailto pointed to a personal address)
  email: 's.luciapescaturismo@gmail.com',
  maps: {
    link: 'https://www.google.com/maps/place/S.Lucia+Pescaturismo/@38.0304622,12.8811713,20.39z/data=!4m6!3m5!1s0x131983ff1d90a561:0x2e482072b1fed751!8m2!3d38.0301991!4d12.8812804!16s%2Fg%2F11vwx3y151',
    embed:
      'https://www.google.com/maps?q=S.Lucia+Pescaturismo+Castellammare+del+Golfo&output=embed',
  },
  formcarryEndpoint: 'https://formcarry.com/s/0APAe0Ciky8',
} as const;

export function whatsappLink(number: string, text?: string) {
  const base = `https://wa.me/${number}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
