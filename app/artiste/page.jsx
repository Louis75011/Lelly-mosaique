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
          <section className="section">
            <article className="card legal-card">

              <h2>Parcours</h2>
              <p>
                Initiée à la mosaïque dès 1980, Nelly Charamnac fait de la patience son alliée, composant des œuvres où l’agencement minutieux des tesselles révèle une recherche constante des matériaux authentiques, de la lumière, et du mouvement. Son univers artistique se distingue par la valorisation du rythme des motifs et l’équilibre subtil des couleurs, conférant à chaque création une énergie poétique unique.
              </p>

              <h3>Enseignement</h3>
              <p>
                Diplômée de l’ADAC, Nelly s’appuie sur une expertise technique solide pour animer cours et ateliers de mosaïque à Paris. Elle privilégie l’exigence et l’indépendance créative, des valeurs transmises avec passion à des apprenants venus autant des milieux amateurs que professionnels. Sa pédagogie, ouverte aux traditions — romaines, byzantines — ainsi qu’aux approches contemporaines, favorise l’exploration et l’innovation.
              </p>

              <h3>Repères professionnels</h3>
              <ul className={styles.facts}>
                <li>
                  <strong>Activité de mosaïste indépendante</strong> : Immatriculée en tant qu’artisane culturelle (APE 8552Z) du <time dateTime="2011-06-16">16/06/2011</time> au <time dateTime="2020-05-04">04/05/2020</time>.
                  <Link href="https://entreprises.lefigaro.fr/madame-nelly-lelly-75/entreprise-533017778" target="_blank" rel="noopener">
                    Fiche publique
                  </Link>.
                </li>
                <li>
                  <strong>Transmission reconnue</strong> : L’impact de son enseignement se mesure à travers des parcours d’anciens élèves, devenus artistes ou enseignants à leur tour, et les témoignages de professionnels mentionnant sa formation et ses stages à Paris.
                </li>
              </ul>

              <h3>Rayonnement et engagement</h3>
              <p>
                Depuis plus de trois décennies, Nelly contribue activement au rayonnement de la mosaïque en France. Son atelier est mentionné dans des annuaires spécialisés et elle figure dans diverses biographies d’artistes, reflet d’une reconnaissance pérenne dans le champ des arts décoratifs. Son expertise est saluée lors de festivals, rencontres mosaïques et collaborations, confirmant son rôle dans la transmission et le renouveau du métier.
              </p>

              <h3>Expositions et collaborations</h3>
              <p>
                Forte de nombreuses expositions et projets collectifs, elle partage régulièrement ses expériences lors d’événements dédiés, riches en échanges et en découvertes. Cette implication favorise la vitalité du secteur mosaïste et atteste d'un engagement continu en faveur de l’art et de sa diffusion.
              </p>
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
          <section className={`section ${styles.retention}`}>
  <article className="container">
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
