'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.scss';

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

  useEffect(() => {
    const el = document.documentElement;
    el.style.overflow = open ? 'hidden' : '';
    return () => { el.style.overflow = ''; };
  }, [open]);

  return (
    <div className={`wrap ${styles.wrap}`} data-open={open}>
      {/* --- Desktop layout (colonne gauche) --- */}
      <div className={styles.desktopOnly}>
        <div className={styles.inner}>
          {/* Bloc haut : marque + nav principale */}
          <div>
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
          </div>

          {/* Bloc milieu : admin */}
          <div className={styles.note}>
            <h4>À venir prochainement</h4>
            <ul>
              <li>↪︎ Connexion</li>
              <li>↪︎ Panneau Admin</li>
            </ul>
          </div>

          {/* Bloc bas : liens légaux */}
          <nav className={`nav ${styles.navSmall}`}>
            {LEGAL.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                aria-current={isActive(i.href) ? 'page' : undefined}
                className={`${styles.linkSmall} ${isActive(i.href) ? styles.active : ''}`}
              >
                {i.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* --- Barre basse mobile/tablette --- */}
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

      {/* --- Menu plein écran mobile --- */}
      {open && (
        <div className={styles.mobileMenu} role="dialog" aria-modal="true">
          <button
            type="button"
            className={styles.backdrop}
            onClick={() => setOpen(false)}
            aria-label="Fermer"
          />
          <div className={styles.menuContent}>
            <nav className={styles.navMobile} onClick={() => setOpen(false)}>
              {NAV.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  aria-current={isActive(i.href) ? 'page' : undefined}
                  className={`${styles.navMobileLink} ${isActive(i.href) ? styles.active : ''}`}
                >
                  {i.label}
                </Link>
              ))}
              <hr className={styles.hr} />
              {LEGAL.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  aria-current={isActive(i.href) ? 'page' : undefined}
                  className={`${styles.legalLink} ${isActive(i.href) ? styles.active : ''}`}
                >
                  {i.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              className={styles.close}
              onClick={() => setOpen(false)}
              aria-label="Fermer le menu"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
