// app/galerie/page.jsx
'use client';

import { useEffect, useMemo, useState } from 'react';
import { Images, X } from 'lucide-react';
import styles from './page.module.scss';

import divers from '../data/galery-Divers.json';
import escalier from '../data/galery-Escalier.json';
import mural from '../data/galery-Mural.json';
import plafond from '../data/galery-Plafond.json';
import salleDeBain from '../data/galery-Salle-de-bain.json';
import sol from '../data/galery-Sol.json';
import table from '../data/galery-Table.json';
import tableau from '../data/galery-Tableau.json';
import tombe from '../data/galery-Tombe.json';

const CATS = ['Divers', 'Escalier', 'Mural', 'Plafond', 'Salle de bain', 'Sol', 'Table', 'Tableaux', 'Tombe'];
const DATA_BY_CAT = { Divers: divers, Escalier: escalier, Mural: mural, Plafond: plafond, 'Salle de bain': salleDeBain, Sol: sol, Table: table, Tableaux: tableau, Tombe: tombe };

const normSrc = (s) => (s || '').replace(/^\/public(?=\/)/, '');

export default function GaleriePage() {
  const [cat, setCat] = useState('Mural');
  const [preview, setPreview] = useState(null);

  // Liste flat normalisée
  const flat = useMemo(() => {
    const src = DATA_BY_CAT[cat] || [];
    return src.map((it, i) => ({
      key: it.id ?? `${cat}-${i}`,
      src: normSrc(it.image),
      title: (it.title || '').trim(),
      region: it.region || '',
      support: it.support || ''
    }));
  }, [cat]);

  // Regroupement par titres
  const groups = useMemo(() => {
    const res = [];
    let current = null;
    for (const it of flat) {
      if (it.title) { current = { heading: it.title, items: [] }; res.push(current); }
      if (!current) { current = { heading: null, items: [] }; res.push(current); }
      current.items.push(it);
    }
    return res;
  }, [flat]);

  // Fermeture clavier lightbox
  useEffect(() => {
    if (!preview) return;
    const onKey = (e) => { if (['Escape', 'Enter', ' '].includes(e.key)) setPreview(null); };
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

      <p className={styles.note}>
        Le cœur de l’œuvre prend place ici. De nouvelles réalisations seront ajoutées à l'avenir.
      </p>

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



            {groups.map((g, idx) => (
              <section key={`g-${idx}`} className={styles.project}>
                {g.heading ? <h3 className={styles.projectTitle}>{g.heading}</h3> : null}
                <div className={styles.grid} aria-live="polite">
                  {g.items.map((it) => (
                    <figure key={it.key} className={styles.card}>
                      <button
                        type="button"
                        className={styles.zoomBtn}
                        aria-label="Agrandir l’image"
                        onClick={() => setPreview({ src: it.src, alt: it.title || `Image ${it.key}` })}
                        title="Agrandir"
                      >
                        <img
                          src={it.src}
                          alt={it.title || `Image ${it.key}`}
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
