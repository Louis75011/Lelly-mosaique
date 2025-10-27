'use client';
import { useEffect, useState } from 'react';
import { hasChoice, setConsent } from './consent';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => { setShow(!hasChoice()); }, []);
  if (!show) return null;

  return (
    <div className="cookie-banner">
      <span>Ce site utilise un cookie technique pour mémoriser vos préférences. Cookies non essentiels désactivés par défaut.</span>
      <div className="actions">
        <button className="btn" onClick={() => { setConsent({preferences:true, analyses:false, marketing:false}); setShow(false); }}>
          J’accepte l’essentiel
        </button>
        <button className="btn secondary" data-open-cookie-panel onClick={() => setShow(false)}>Choisir</button>
        <button className="btn ghost" onClick={() => { setConsent({preferences:false, analyses:false, marketing:false}); setShow(false); }}>
          Tout refuser
        </button>
      </div>
    </div>
  );
}
