// app/galerie/page.jsx
'use client';

import { useEffect, useMemo, useState } from 'react';
import { Images, X } from 'lucide-react';
import styles from './page.module.scss';

const CATS = ['Divers', 'Escalier', 'Mural', 'Plafond', 'Salle de bain', 'Sol', 'Table', 'Tableaux', 'Tombe'];

export default function GaleriePage() {
  const [cat, setCat] = useState('Mural');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    let abort = false;
    setLoading(true);
    fetch(`/api/gallery?cat=${encodeURIComponent(cat)}`, { cache: 'no-store' })
      .then(r => r.json())
      .then(d => { if (!abort) setItems(d.items || []); })
      .finally(() => { if (!abort) setLoading(false); });
    return () => { abort = true; };
  }, [cat]);

  // Groupes: chaque item avec title non vide ouvre un nouveau bloc
  const groups = useMemo(() => {
    const res = []; let current = null;
    for (const it of items) {
      const hasTitle = (it.title || '').trim().length > 0;
      if (hasTitle) { current = { heading: it.title, items: [] }; res.push(current); }
      if (!current) { current = { heading: null, items: [] }; res.push(current); }
      current.items.push(it);
    }
    return res;
  }, [items]);

  useEffect(() => {
    if (!preview) return;
    const onKey = e => { if (['Escape', 'Enter', ' '].includes(e.key)) setPreview(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [preview]);

  return (
    <>
      <section className="section">
        <div className="container">
          <section className="hero">
            <div className="container">
              <div className="title">
                <Images className="icon" aria-hidden width={36} height={36} />
                <h1>Galerie</h1>
                <p className="subtitle">Albums photo &amp; bibliothèque</p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className={styles.note}>
            Le cœur de l’œuvre prend place ici. De nouvelles réalisations seront ajoutées au fil du temps.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <main className={styles.main}>
            <p className={styles.systemeOnglet}>
              Sélectionnez une catégorie ci-dessous pour parcourir les mosaïques correspondantes :
            </p>

            <nav className={styles.tabs} role="tablist" aria-label="Catégories">
              {CATS.map((c) => {
                const active = c === cat;
                return (
                  <button
                    key={c}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    className={active ? styles.active : ''}
                    onClick={() => setCat(c)}
                  >
                    {c}
                  </button>
                );
              })}
            </nav>

            {loading ? <p>Chargement…</p> : null}

            {!loading && groups.map((g, idx) => (
              <section key={`g-${idx}`} className={styles.project}>
                {g.heading ? <h3 className={styles.projectTitle}>{g.heading}</h3> : null}
                <div className={styles.grid} aria-live="polite">
                  {g.items.map((it) => (
                    <figure key={it.id} className={styles.card}>
                      <button
                        type="button"
                        className={styles.zoomBtn}
                        aria-label="Agrandir l’image"
                        onClick={() => setPreview({ src: it.image, alt: it.title || `Image ${it.id}` })}
                        title="Agrandir"
                      >
                        <img
                          src={it.image}
                          alt={it.title || `Image ${it.id}`}
                          loading="eager"
                          fetchPriority="high"
                          decoding="sync"
                        />
                      </button>
                      <figcaption className={styles.meta}>
                        {it.region && <span>{it.region}</span>}
                        {it.region && it.support ? ' — ' : ''}
                        {it.support && <span>{it.support}</span>}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            ))}
          </main>
        </div>
      </section>

      {preview && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" onClick={() => setPreview(null)}>
          <button type="button" className={styles.close} aria-label="Fermer" onClick={() => setPreview(null)}>
            <X width={22} height={22} />
          </button>
          <img src={preview.src} alt={preview.alt} className={styles.lightImage} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
