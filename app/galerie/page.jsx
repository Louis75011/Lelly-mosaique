'use client';
import { useMemo, useState } from 'react';
import styles from './page.module.scss';
import albums from '../data/gallery.json';

const CATS = ['Divers','Escalier','Mural','Plafond','Salle-de-bain','Sol','Table','Tableaux','Tombe'];

export default function GaleriePage(){
  const [cat,setCat] = useState('Mural');
  const list = useMemo(()=> albums.filter(a=>a.album?.category===cat),[cat]);

  return (
    <main className={styles.main}>
      <nav className={styles.tabs}>
        {CATS.map(c => (
          <button
            key={c}
            className={c===cat ? styles.active : ''}
            onClick={()=>setCat(c)}
          >{c}</button>
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
  );
}
