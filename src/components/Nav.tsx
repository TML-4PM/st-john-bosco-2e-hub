'use client';
import { useState } from 'react';

const links = [
  { href: '#why', label: 'Why Now' },
  { href: '#model', label: 'The Hub' },
  { href: '#journeys', label: 'Journeys' },
  { href: '#services', label: 'Services' },
  { href: '#fte', label: 'Team' },
  { href: '#economics', label: 'Economics' },
  { href: '#relationship', label: 'Our Place' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-[#1B2A4A] text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-bold text-lg tracking-tight">
          St John Bosco <span className="text-[#D4A017]">2e Hub</span>
        </a>
        <button
          className="md:hidden p-2 rounded"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1" />
          <span className="block w-6 h-0.5 bg-white mb-1" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-[#D4A017] transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <ul className="md:hidden bg-[#1B2A4A] px-4 pb-4 flex flex-col gap-3 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="hover:text-[#D4A017]">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
