import type { ReactNode } from 'react';

// A root layout is required by Next.js. The actual <html>/<body> live in
// app/[locale]/layout.tsx so the lang attribute can follow the active locale.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
