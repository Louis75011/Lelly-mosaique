// app/galerie/page.jsx
'use client';

import { useMemo, useState } from 'react';
import { Images } from 'lucide-react';
import styles from './page.module.scss';
// Import statique d’un JSON par catégorie
import divers from '../data/galery-Divers.json';
import escalier from '../data/galery-Escalier.json';
import mural from '../data/galery-Mural.json';
import plafond from '../data/galery-Plafond.json';
import salleDeBain from '../data/galery-Salle-de-bain.json';
import sol from '../data/galery-Sol.json';
import table from '../data/galery-Table.json';
import tableau from '../data/galery-Tableau.json';
import tombe from '../data/galery-Tombe.json';

const CATS = ['Divers','Escalier','Mural','Plafond','Salle-de-bain','Sol','Table','Tableaux','Tombe'];

// Table de correspondance catégorie -> dataset
const DATA_BY_CAT = {
  Divers: divers,
  Escalier: escalier,
  Mural: mural,
  Plafond: plafond,
  'Salle-de-bain': salleDeBain, // string
  Sol: sol,
  Table: table,
  Tableaux: tableau, // mapping explicite vers galery-Tableau.json
  Tombe: tombe
};

// Normalise un chemin JSON potentiellement préfixé par /public
const normSrc = (s) => (s || '').replace(/^\/public(?=\/)/, '');

export default function GaleriePage() {
  const [cat, setCat] = useState('Mural');

  const list = useMemo(() => {
    const arr = DATA_BY_CAT[cat] || []; // sécurité minimale et clés stables
    return arr.map((it, i) => ({
      key: it.id ?? `${cat}-${i}`,
      id: it.id ?? i,
      src: normSrc(it.image),
      title: it.title || '',
      desc: it.description || '',
      support: it.support || '',
      region: it.region || ''
    }));
  }, [cat]);

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
          <main className={styles.main}>
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

            <section className={styles.grid} aria-live="polite">
              {list.map((it) => (
                <figure key={it.key} className={styles.card}>
                  <img
                    src={it.src}
                    alt={it.title || `Image ${it.id}`}
                    loading="lazy"
                    decoding="async"
                  />
                  {(it.title || it.region || it.support) && (
                    <figcaption>
                      {it.title && <strong>{it.title}</strong>}
                      <div className={styles.meta}>
                        {it.region ? it.region : null}
                        {it.region && it.support ? ' — ' : ''}
                        {it.support ? it.support : null}
                      </div>
                    </figcaption>
                  )}
                </figure>
              ))}
            </section>
          </main>

          <p className={styles.note}>
            Le cœur de l’œuvre prendra place ici. La mise en ligne complète est en préparation.
          </p>
        </div>
      </section>
    </>
  );
}
