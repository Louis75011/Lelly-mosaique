// app/galerie/page.jsx
'use client';
import { useMemo, useState } from 'react';
import { Images } from 'lucide-react';
import styles from './page.module.scss';
import albums from '../data/gallery.json';

const CATS = ['Divers', 'Escalier', 'Mural', 'Plafond', 'Salle-de-bain', 'Sol', 'Table', 'Tableaux', 'Tombe'];

export default function GaleriePage() {
  const [cat, setCat] = useState('Mural');
  const list = useMemo(() => albums.filter(a => a.album?.category === cat), [cat]);

  return (
    <>
      {/* Hero identique à Contact */}
      <header className="hero">
        <div className="container title" style={{ color: '#fff' }}>
          <Images className="icon" aria-hidden width={36} height={36} />
          <h1>Galerie</h1>
          <p className="subtitle">Albums photo & bibliothèque</p>
        </div>
      </header>

      <section className="section legal-section">
        <div className="container">
          <main className={styles.main}>
            <nav className={styles.tabs}>
              {CATS.map(c => (
                <button
                  key={c}
                  className={c === cat ? styles.active : ''}
                  onClick={() => setCat(c)}
                >
                  {c}
                </button>
              ))}
            </nav>

            <section className={styles.grid}>
              {list.map(item => (
                <article key={item.id} className={styles.card}>
                  <img src={item.cover} alt={item.title || item.id} />
                  <h3>{item.title}</h3>
                  <p>{item.album?.category} — {item.album?.slug}</p>
                </article>
              ))}
            </section>
          </main>
        </div>
        <p>Le cœur de son œuvre prendra place ici. La mise en ligne complète de cette section est en préparation.</p>
      </section>
    </>
  );
}
