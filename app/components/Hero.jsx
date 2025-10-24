'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.scss';
export default function Hero({ images = [], title, subtitle, ctas = [] }) {
  const [i, setI] = useState(0);
  useEffect(() => { const id = setInterval(() => setI(p => (p + 1) % images.length), 3500); return () => clearInterval(id); }, [images.length]);
  return (<div className={styles.carousel}>
    {images.map((src, idx) => (<div key={src} className={`${styles.slide} ${idx === i ? styles.active : ''}`}><Image src={src} alt='hero' fill priority className={styles.bg} /></div>))}
    <div className={styles.inner}><h1>{title}</h1><p>{subtitle}</p>
      <div className={styles.ctas}>{ctas.map(c => (<a key={c.href} href={c.href} className={`btn ${c.variant === 'secondary' ? 'secondary' : ''}`}>{c.label}</a>))}</div>
    </div>
  </div>);
}
