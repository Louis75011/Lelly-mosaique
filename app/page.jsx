import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import StatBadge from './components/StatBadge';
import quotes from './data/quotes.json';
import heroData from './data/hero.json';
import styles from './page.module.scss';

export default function HomePage(){
  const q = quotes[0];
  const images = heroData.map(x => x.cover); // => /images/hero/...

  return (
    <main>
      <section className={styles.hero}>
      <Hero
        images={images}
        title="Nelly Mosaïque"
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
          <blockquote>« {q.text} »<br/><span className="text-muted">— {q.author}</span></blockquote>
          <StatBadge label="Depuis" value="1980" note="40+ ans d’expérience"/>
        </div>
      </section>
    </main>
  );
}
