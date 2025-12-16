'use client';

import { useEffect } from 'react';

const BOOQABLE_SRC =
  'https://bef77c48-8715-4e04-b53b-bb330e7b5c1c.assets.booqable.com/v2/booqable.js';

export default function BooqableLoader() {
  useEffect(() => {
    // Nettoyage si la page est revisitée en SPA (évite “ça marche qu’après refresh” / doubles widgets)
    document.getElementById('booqable-launcher')?.remove();
    document.getElementById('booqable-sidebar')?.remove();

    // Force un “re-run” du script quand on arrive sur /reservation
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${BOOQABLE_SRC}"]`);
    if (existing) existing.remove();

    const s = document.createElement('script');
    s.src = BOOQABLE_SRC;
    s.async = true;
    s.dataset.booqable = 'true';
    document.body.appendChild(s);
  }, []);

  return null;
}
