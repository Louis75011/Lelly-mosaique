// app/artiste/page.jsx
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';
import { brand } from '../lib/paths';

export const metadata = { title: "L’Artiste — Lelly Mosaïque" };

export default function PageArtiste() {
  return (
    <section className="section art-section">
      <div className="container">
        <main>
          {/* Bandeau visuel */}
          <header className={styles.header}>
            <Image src={brand('lelly-artiste.jpg')} alt="Portrait" fill className={styles.banner} priority />
            <h1>L’Artiste</h1>
          </header>

          {/* Bloc biographie */}
          {/* Bloc biographie */}
          <section className="container">
            <article className="card legal-card">

              <h2>Parcours</h2>
              <h3>Biographie et style</h3>
              <p>
                Active depuis 1980, Nelly Charamnac se distingue par une maîtrise
                exceptionnelle du travail des tesselles, ces morceaux de pierres,
                céramiques ou verres assemblés avec patience et précision.
              </p>
              <p>
                Son art met à l&apos;honneur les matières naturelles, la lumière et
                le mouvement, conférant à ses œuvres une dimension vivante, poétique
                et rythmique, souvent admirée pour sa sensibilité à l&apos;équilibre
                des couleurs et à la dynamique du motif.
              </p>
              <p>
                Ainsi, madame allie un savoir-faire traditionnel et une recherche
                plastique, apportant à la mosaïque une profondeur et une authenticité
                reconnues dans la profession.
              </p>

              <h3>Engagement artistique et pédagogique</h3>
              <p>
                Maître mosaïste formée à l&apos;ADAC, elle dispense des cours et
                stages de mosaïque à Paris, transmettant, non sans pédagogie, une
                rigueur technique et un esprit de liberté créative appréciés par ses
                élèves, dont plusieurs sont aujourd&apos;hui eux-mêmes artistes
                professionnels.
              </p>
              <p>
                Son enseignement inclut aussi bien la mosaïque romaine, byzantine,
                que contemporaine, ce qui témoigne d&apos;une polyvalence et d&apos;une
                ouverture à la fois à la tradition et à l&apos;innovation.
              </p>

              <h3>Reconnaissance et rayonnement</h3>
              <p>
                Son nom est associé depuis plus de trente ans à l&apos;excellence
                mosaïste française, son atelier étant référencé dans plusieurs
                annuaires d&apos;artistes spécialisés. Son renom s&apos;étend ainsi
                aux annuaires professionnels, témoignage d&apos;une carrière solide,
                estimée tant par la critique que par ses pairs.
              </p>
              <p>
                La mosaïste apparaît dans les biographies d&apos;artistes confirmés
                (cf. Claire Guérin, ancienne élève, aujourd&apos;hui professeure à
                Paris) et dans les classements professionnels, reflet d&apos;un
                rayonnement durable.
              </p>

              <h3>Expositions et collaborations</h3>
              <p>
                Elle a collaboré à de nombreux projets artistiques et expositions,
                partageant ses savoirs lors de rencontres mosaïques, festivals et
                ateliers ponctuels, et contribuant ainsi à l&apos;essor du renouveau
                mosaïque en France.
              </p>

              <Link href="https://entreprises.lefigaro.fr/madame-nelly-lelly-75/entreprise-533017778" target="_blank" rel="noopener">
                Fiche publique
              </Link>.
            </article>
          </section>

          {/* Chaîne vidéo */}
          <section className="container">
            <article className="card legal-card">
              <h2>Vidéos</h2>
              <p>
                Découvrir son regard et sa méthode : démonstrations, projets et archives
                sont partagés sur sa chaîne.
              </p>

              <div className={styles.videoGrid}>
                <aside className={styles.videoAside}>
                  <h3>Chaîne Dailymotion</h3>
                  <p><b>@LELLYM — publications et playlists.</b></p>
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
          <section className={`container ${styles.retention}`}>
            <article className="container">
              <h2>À retenir</h2>
              <ul className={styles.bullets}>
                <li>
                  Plus de quarante ans de pratique mosaïste, fondée sur une maîtrise
                  remarquable des tesselles et un goût affirmé pour les matières naturelles.
                </li>
                <li>
                  Un style reconnu : œuvres lumineuses, poétiques et rythmées, où
                  l’équilibre des couleurs et le mouvement du motif occupent une place centrale.
                </li>
                <li>
                  Maître mosaïste formée à l’ADAC : enseignement exigeant, mêlant tradition
                  romaine et byzantine à des approches contemporaines, avec plusieurs élèves
                  devenus artistes à leur tour.
                </li>
                <li>
                  Une figure établie du milieu mosaïste français : atelier référencé dans
                  les annuaires spécialisés et présence dans des biographies d’artistes confirmés.
                </li>
                <li>
                  Participation régulière à expositions, festivals et collaborations,
                  contribuant activement au renouveau de la mosaïque en France.
                </li>
              </ul>
            </article>
          </section>

        </main>
      </div>
    </section>
  );
}
