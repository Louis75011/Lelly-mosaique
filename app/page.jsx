// app\page.jsx
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import StatBadge from './components/StatBadge';
import quotes from './data/quotes.json';
// import heroData from './data/hero.json';    // ❌ à retirer
import piscineGallery from './data/galery-Piscine.json'; // ✅ nouveau
import styles from './page.module.scss';

export default function HomePage() {
  const q = quotes[0];

  // on réutilise les mêmes visuels que pour l’onglet Piscine // galery-Piscine.json -> champ "image"
  const images = piscineGallery
    .filter(x => x.image)          // sécurité
    .map(x => x.image);            // => /images/hero/...

  return (
    <section className="section legal-section">
      <div className="container">
        <main>
          <section className={styles.hero}>
            <Hero
              images={images}
              title="Lelly Mosaïque"
              subtitle="Bibliothèque artistique et patrimoine mosaïste"
              ctas={[
                { label: "Découvrir l'artiste", href: "/artiste" },
                { label: "Explorer la galerie", href: "/galerie", variant: 'secondary' }
              ]}
            />
          </section>

          <section className="section container">
            <div className="grid-3">
              <FeatureCard icon="/icons/mosaic.svg" title="L’Artiste" text="Parcours et technique." href="/artiste" />
              <FeatureCard icon="/icons/gallery.svg" title="Galerie" text="Albums par catégories." href="/galerie" />
              <FeatureCard icon="/icons/mail.svg" title="Contact" text="Écrire à l’artiste." href="/contact" />
            </div>
          </section>

          <section className={`section ${styles.quote}`}>
            <div className="container">
              <blockquote>
                « {q.text} »<br />
                <span className="text-muted">— {q.author}</span>
              </blockquote>
              <StatBadge label="Depuis" value="1980" note="+ de 40 ans d’expérience" />
            </div>
          </section>
        </main>
      </div>
    </section>
  );
}
