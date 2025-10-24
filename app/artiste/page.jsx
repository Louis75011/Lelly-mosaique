import Image from 'next/image';
import styles from './page.module.scss';
import { brand } from '../lib/paths';
export const metadata = { title: "L’Artiste — Lelly Mosaïque" };
export default function PageArtiste(){
  return (<main>
    <header className={styles.header}>
      <Image src={brand('lelly-artiste.jpg')} alt="Portrait" fill className={styles.banner} priority/>
      <h1>L’Artiste</h1>
    </header>
    <section className="section"><div className="container card">
      <h2>Parcours</h2><p>Nelly Charamnac, mosaïste depuis 1980. Travail patient des tesselles, matières naturelles, lumière et mouvement.</p>
    </div></section>
  </main>);
}
