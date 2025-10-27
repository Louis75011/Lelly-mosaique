// app/artiste/page.jsx
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';
import { brand } from '../lib/paths';

export const metadata = { title: "L’Artiste — Lelly Mosaïque" };

export default function PageArtiste() {
  return (
    <section className="section legal-section">
      <div className="container">
        <main>
          {/* Bandeau visuel */}
          <header className={styles.header}>
            <Image src={brand('lelly-artiste.jpg')} alt="Portrait" fill className={styles.banner} priority />
            <h1>L’Artiste</h1>
          </header>

          {/* Bloc biographie */}
          <section className="section">
            <article className="card legal-card">
              <h2>Parcours</h2>
              <p>
                Nelly Charamnac, mosaïste depuis 1980, pratique un art de patience :
                tesselles, matières naturelles, jeux de lumière et sens du mouvement structurent ses œuvres.
              </p>

              <h3>Enseignement</h3>
              <p>
                Maître mosaïste formée à l’ADAC, elle a transmis son savoir-faire à Paris
                (mosaïque romaine, byzantine et contemporaine), dans un esprit d’exigence
                technique et de liberté créative.
              </p>

              <h3>Repères professionnels</h3>
              <ul className={styles.facts}>
                <li>
                  <strong>Entreprise individuelle</strong> : CHARAMNAC Nelly — APE 8552Z « enseignement culturel ».
                  Immatriculation le <time dateTime="2011-06-16">16/06/2011</time>, radiation le
                  <time dateTime="2020-05-04"> 04/05/2020</time>.{" "}
                  <Link href="https://entreprises.lefigaro.fr/madame-nelly-lelly-75/entreprise-533017778" target="_blank" rel="noopener">
                    Fiche publique
                  </Link>.
                </li>
                <li>
                  <strong>Transmission</strong> : des élèves et collègues citent sa formation ADAC et ses cours de mosaïque à Paris.
                </li>
              </ul>
            </article>
          </section>

          {/* Chaîne vidéo */}
          <section className="section">
            <article className="card legal-card">
              <h2>Vidéos</h2>
              <p>
                Découvrir son regard et sa méthode : démonstrations, projets et archives
                sont partagés sur sa chaîne.
              </p>

              <div className={styles.videoGrid}>
                <aside className={styles.videoAside}>
                  <h3>Chaîne Dailymotion</h3>
                  <p>@LELLYM — publications et playlists.</p>
                  <p>
                    <Link className="btn" href="https://www.dailymotion.com/LELLYM" target="_blank" rel="noopener">
                      Ouvrir la chaîne
                    </Link>
                  </p>
                </aside>

                {/* Intégration représentation des vidéos */}
                <div className={styles.player} aria-label="Aperçu vidéo">
                  <Image
                    src={brand('lelly-mosaique-video-v0.jpg')}
                    alt="Aperçu vidéo — Lelly Mosaïque"
                    fill
                    className={styles.thumb}
                    priority={false}
                  />
                </div>
              </div>
            </article>
          </section>

          {/* Encadré synthèse */}
          <section className="section">
            <article className="card legal-card">
              <h2>À retenir</h2>
              <ul className={styles.bullets}>
                <li>Alliance du savoir-faire traditionnel et d’une recherche plastique exigeante.</li>
                <li>Transmission active : cours et stages, rayonnement durable à Paris.</li>
                <li>Parcours professionnel référencé et consultable dans les registres publics.</li>
              </ul>
            </article>
          </section>
        </main>
      </div>
    </section>
  );
}
