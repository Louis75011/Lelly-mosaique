'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.scss'; // veillez à la casse exacte du fichier

const NAV = [
  { href: '/', label: 'Accueil' },
  { href: '/artiste', label: 'Présentation' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/contact', label: 'Contact' },
];

const LEGAL = [
  { href: '/legal/rgpd', label: 'RGPD' },
  { href: '/legal/cookies', label: 'Cookies' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  // verrouille le scroll quand le menu mobile est ouvert
  useEffect(() => {
    const el = document.documentElement;
    el.style.overflow = open ? 'hidden' : '';
    return () => { el.style.overflow = ''; };
  }, [open]);

  return (
    <div className={`wrap ${styles.wrap}`} data-open={open}>
      {/* Desktop : colonne gauche complète */}
      <div className={styles.desktopOnly}>
        <div className={styles.brand}>
          <img src="/icons/mosaic.svg" alt="" width="20" height="20" />
          <div>
            <div className={styles.brandTitle}>Lelly Mosaïque</div>
            <div className={styles.brandSub}>L’art de la mosaïque</div>
          </div>
        </div>

        <nav className={`nav ${styles.nav}`}>
          {NAV.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              aria-current={isActive(i.href) ? 'page' : undefined}
              className={`${styles.link} ${isActive(i.href) ? styles.active : ''}`}
            >
              {i.label}
            </Link>
          ))}
        </nav>
        <hr />
        <div className={`sep ${styles.sep}`} />

        <div className={styles.note}>
          <h4>À venir prochainement</h4>
          <ul>
            <li>↪︎ Connexion</li>
            <li>↪︎ Panneau Admin</li>
          </ul>
        </div>

        <div className={`sep ${styles.sep}`} />

        <nav className={`nav ${styles.navSmall}`}>
          {LEGAL.map((i) => (
            <Link key={i.href} href={i.href} className={styles.linkSmall}>
              {i.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Tablette/Mobile : barre basse fixe */}
      <div className={styles.bottomBar} aria-hidden="false">
        <div className={styles.bottomInner}>
          <div className={styles.brandInline}>
            <img src="/icons/mosaic.svg" alt="" width="18" height="18" />
            <div>
              <div className={styles.brandTitleSmall}>Lelly Mosaïque</div>
              <div className={styles.brandSubSmall}>L’art de la mosaïque</div>
            </div>
          </div>

          <button
            type="button"
            className={styles.toggle}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            ☰ Menu
          </button>
        </div>
      </div>

      {/* Menu plein écran : rendu conditionnel */}
      {open && (
        <div className={styles.mobileMenu} role="dialog" aria-modal="true">
          <button
            type="button"
            className={styles.backdrop}
            aria-label="Fermer le menu"
            onClick={() => setOpen(false)}
          />
          <div className={styles.menuContent}>
            <nav className={styles.navMobile} onClick={() => setOpen(false)}>
              {NAV.map((i) => (
                <Link key={i.href} href={i.href} className={styles.navMobileLink}>
                  {i.label}
                </Link>
              ))}
              <hr className={styles.hr} />
              {LEGAL.map((i) => (
                <Link key={i.href} href={i.href} className={styles.legalLink}>
                  {i.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              className={styles.close}
              aria-label="Fermer le menu"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
