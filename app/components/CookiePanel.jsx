'use client';
import { useEffect, useState } from 'react';
import { getConsent, setConsent } from './consent';

export default function CookiePanel() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState({ preferences:true, analyses:false, marketing:false });

  useEffect(() => {
    const current = getConsent();
    if (current) setPrefs(current.choices);
    const handler = () => setOpen(true);
    const click = (e) => { if (e.target.closest('[data-open-cookie-panel]')) setOpen(true); };
    document.addEventListener('click', click);
    document.addEventListener('lm:show-cookie-panel', handler);
    return () => { document.removeEventListener('click', click); document.removeEventListener('lm:show-cookie-panel', handler); };
  }, []);

  if (!open) return null;

  return (
    <div className="cookie-modal" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
      <div className="cookie-card">
        <h2 id="cookie-title">Préférences cookies</h2>
        <p>Choisissez les catégories autorisées.</p>

        <label className="cookie-row">
          <input type="checkbox" checked={prefs.preferences} onChange={e=>setPrefs(p=>({...p,preferences:e.target.checked}))}/>
          <div><strong>Préférences</strong><br/>Sauvegarde de réglages d’affichage, langue, etc.</div>
        </label>

        <label className="cookie-row">
          <input type="checkbox" checked={prefs.analyses} onChange={e=>setPrefs(p=>({...p,analyses:e.target.checked}))}/>
          <div><strong>Analyses</strong><br/>Statistiques anonymes (activées uniquement avec votre accord).</div>
        </label>

        <label className="cookie-row">
          <input type="checkbox" checked={prefs.marketing} onChange={e=>setPrefs(p=>({...p,marketing:e.target.checked}))}/>
          <div><strong>Marketing</strong><br/>Ciblage et partage avec des tiers (désactivé par défaut).</div>
        </label>

        <div className="cookie-actions">
          <button className="btn ghost" onClick={()=>{ setPrefs({preferences:false, analyses:false, marketing:false}); setConsent({preferences:false, analyses:false, marketing:false}); setOpen(false); }}>
            Tout refuser
          </button>
          <button className="btn secondary" onClick={()=>setOpen(false)}>Annuler</button>
          <button className="btn" onClick={()=>{ setConsent(prefs); setOpen(false); }}>
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
}
