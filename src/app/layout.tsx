import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'St John Bosco 2e Learning & Family Hub',
  description:
    "Southern Sydney's first Catholic K\u20136 learning and family hub purpose-built for twice-exceptional and high-potential neurodiverse children and their families.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
