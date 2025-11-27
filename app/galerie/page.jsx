// app/galerie/page.jsx
'use client';

import { useEffect, useMemo, useState } from 'react';
import { Images, X, ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';
import styles from './page.module.scss';

const CATS = [
  'Vue d’ensemble',
  'Divers',
  'Balcon',
  'Escalier',
  'Mural',
  'Piscine',
  'Plafond',
  'Salle de bain',
  'Sol',
  'Table',
  'Tableaux',
  'Tombe'
];

const MIN_ZOOM = 1;
const MAX_ZOOM = 2.5;
const ZOOM_STEP = 0.25;

export default function GaleriePage() {
  const [cat, setCat] = useState('Piscine');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  // preview = { index: number, zoom: number } | null
  const [preview, setPreview] = useState(null);

  // Chargement des données
  useEffect(() => {
    let abort = false;
    setLoading(true);

    const url =
      cat === 'Vue d’ensemble'
        ? '/api/gallery'
        : `/api/gallery?cat=${encodeURIComponent(cat)}`;

    fetch(url, { cache: 'no-store' })
      .then((r) => r.json())
      .then((d) => {
        if (abort) return;

        if (cat === 'Vue d’ensemble') {
          // Fusionne Vue d’ensemblees les catégories, sans doublons d'image
          const allArrays = Object.values(d.byCategory || {});
          const merged = [];
          const seen = new Set();
          for (const arr of allArrays) {
            for (const it of arr) {
              const key = it.image || it.id;
              if (!seen.has(key)) {
                seen.add(key);
                merged.push(it);
              }
            }
          }
          setItems(merged);
        } else {
          setItems(d.items || []);
        }
      })
      .finally(() => {
        if (!abort) setLoading(false);
      });

    return () => {
      abort = true;
    };
  }, [cat]);

  // Fermer la preview lorsqu'on change d'onglet (sécurité)
  useEffect(() => {
    setPreview(null);
  }, [cat]);

  // Groupes: pour "Vue d’ensemble" => une seule grande grille
  const groups = useMemo(() => {
    if (!items.length) return [];
    if (cat === 'Vue d’ensemble') {
      return [{ heading: null, items }];
    }

    const res = [];
    let current = null;
    for (const it of items) {
      const hasTitle = (it.title || '').trim().length > 0;
      if (hasTitle) {
        current = { heading: it.title, items: [] };
        res.push(current);
      }
      if (!current) {
        current = { heading: null, items: [] };
        res.push(current);
      }
      current.items.push(it);
    }
    return res;
  }, [items, cat]);

  // Ouverture de la lightbox sur un index
  const openPreview = (id) => {
    const index = items.findIndex((it) => it.id === id);
    if (index === -1) return;
    setPreview({ index, zoom: 1 });
  };

  const closePreview = () => setPreview(null);

  const goPrev = () => {
    setPreview((p) => {
      if (!p || !items.length) return p;
      const prevIndex = (p.index - 1 + items.length) % items.length;
      return { index: prevIndex, zoom: 1 };
    });
  };

  const goNext = () => {
    setPreview((p) => {
      if (!p || !items.length) return p;
      const nextIndex = (p.index + 1) % items.length;
      return { index: nextIndex, zoom: 1 };
    });
  };

  const zoomIn = () => {
    setPreview((p) => {
      if (!p) return p;
      const next = Math.min(MAX_ZOOM, (p.zoom ?? 1) + ZOOM_STEP);
      return { ...p, zoom: next };
    });
  };

  const zoomOut = () => {
    setPreview((p) => {
      if (!p) return p;
      const next = Math.max(MIN_ZOOM, (p.zoom ?? 1) - ZOOM_STEP);
      return { ...p, zoom: next };
    });
  };

  const resetZoom = () => {
    setPreview((p) => (p ? { ...p, zoom: 1 } : p));
  };

  // Gestion clavier pour la lightbox
  useEffect(() => {
    if (!preview) return;

    const onKey = (e) => {
      if (e.key === 'Escape') {
        closePreview();
      } else if (e.key === 'ArrowLeft') {
        goPrev();
      } else if (e.key === 'ArrowRight') {
        goNext();
      } else if (e.key === 'ArrowUp' || e.key === '+') {
        zoomIn();
      } else if (e.key === 'ArrowDown' || e.key === '-') {
        zoomOut();
      } else if (e.key === '0') {
        resetZoom();
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [preview, items.length]);

  const currentItem =
    preview && items[preview.index] ? items[preview.index] : null;
  const currentZoom = preview?.zoom ?? 1;

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      zoomIn();
    } else if (e.deltaY > 0) {
      zoomOut();
    }
  };

  return (
    <>
      <section className="section">
        <div className="container">
          <section className="hero">
            <div className="container">
              <div className="title">
                <Images className="icon" aria-hidden width={36} height={36} />
                <h1>Galerie</h1>
                <p className="subtitle">Albums photo &amp; bibliothèque</p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className={styles.note}>
            Le cœur de l’œuvre prend place ici. De nouvelles réalisations seront
            ajoutées au fil du temps.
          </p>
          <p className={styles.note}>
            L’onglet <b>« Vue d’ensemble »</b> rassemble toutes les mosaïques en un seul
            album, tandis que les autres catégories présentent chaque série comme un
            chapitre distinct. <b>En ouvrant une photo</b>, vous pouvez passer à la suivante
            ou à la précédente grâce aux flèches gauche et droite, puis ajuster le
            zoom avec la molette de la souris, les flèches haut et bas ou les touches
            « + » et « – ». La touche « 0 » ramène l’image à sa taille normale.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <main className={styles.main}>
            <p className={styles.systemeOnglet}>
              Sélectionnez une catégorie ci-dessous pour parcourir les mosaïques
              correspondantes :
            </p>

            <nav
              className={styles.tabs}
              role="tablist"
              aria-label="Catégories"
            >
              {CATS.map((c) => {
                const active = c === cat;
                return (
                  <button
                    key={c}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    className={active ? styles.active : ''}
                    onClick={() => setCat(c)}
                  >
                    {c}
                  </button>
                );
              })}
            </nav>

            {loading ? <p>Chargement…</p> : null}

            {!loading &&
              groups.map((g, idx) => (
                <section key={`g-${idx}`} className={styles.project}>
                  {g.heading ? (
                    <h3 className={styles.projectTitle}>{g.heading}</h3>
                  ) : null}
                  <div className={styles.grid} aria-live="polite">
                    {g.items.map((it) => (
                      <figure key={it.id} className={styles.card}>
                        <button
                          type="button"
                          className={styles.zoomBtn}
                          aria-label="Agrandir l’image"
                          onClick={() => openPreview(it.id)}
                          title="Agrandir"
                        >
                          <img
                            src={it.image}
                            alt={it.title || `Image ${it.id}`}
                            loading="eager"
                            fetchPriority="high"
                            decoding="sync"
                          />
                        </button>
                        <figcaption className={styles.meta}>
                          {it.region && <span>{it.region}</span>}
                          {it.region && it.support ? ' — ' : ''}
                          {it.support && <span>{it.support}</span>}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              ))}
          </main>
        </div>
      </section>

      {preview && currentItem && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          onClick={closePreview}
        >
          <div
            className={styles.lightInner}
            onClick={(e) => e.stopPropagation()}
            onWheel={handleWheel}
          >
            <button
              type="button"
              className={styles.close}
              aria-label="Fermer"
              onClick={closePreview}
            >
              <X width={22} height={22} />
            </button>

            <div className={styles.lightToolbar}>
              <button
                type="button"
                onClick={zoomOut}
                disabled={currentZoom <= MIN_ZOOM}
                aria-label="Zoom arrière"
              >
                <Minus width={18} height={18} />
              </button>
              <button
                type="button"
                onClick={resetZoom}
                aria-label="Revenir à 100 %"
              >
                100%
              </button>
              <button
                type="button"
                onClick={zoomIn}
                disabled={currentZoom >= MAX_ZOOM}
                aria-label="Zoom avant"
              >
                <Plus width={18} height={18} />
              </button>
            </div>

            <button
              type="button"
              className={styles.navPrev}
              onClick={goPrev}
              aria-label="Image précédente"
            >
              <ChevronLeft width={24} height={24} />
            </button>

            <figure className={styles.lightFigure}>
              <img
                src={currentItem.image}
                alt={currentItem.title || `Image ${currentItem.id}`}
                className={styles.lightImage}
                style={{ transform: `scale(${currentZoom})` }}
              />
              {currentItem.title && (
                <figcaption className={styles.lightCaption}>
                  {currentItem.title}
                </figcaption>
              )}
            </figure>

            <button
              type="button"
              className={styles.navNext}
              onClick={goNext}
              aria-label="Image suivante"
            >
              <ChevronRight width={24} height={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
