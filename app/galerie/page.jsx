'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Images, X, ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';
import styles from './page.module.scss';

const ALL_CAT = "Vue d’ensemble";
const DEFAULT_CAT = 'Piscine';

const CATS = [
  ALL_CAT,
  'Piscine',
  'Divers',
  'Balcon',
  'Escalier',
  'Mural',
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
  const [cat, setCat] = useState(DEFAULT_CAT);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  // preview = { index, zoom, offsetX, offsetY }
  const [preview, setPreview] = useState(null);

  // état de drag (pour le pan à la souris)
  const dragRef = useRef({
    dragging: false,
    startX: 0,
    startY: 0,
    baseX: 0,
    baseY: 0
  });

  // Chargement des données
  useEffect(() => {
    let abort = false;
    setLoading(true);

    const url =
      cat === ALL_CAT
        ? '/api/gallery'
        : `/api/gallery?cat=${encodeURIComponent(cat)}`;

    fetch(url, { cache: 'no-store' })
      .then((r) => r.json())
      .then((d) => {
        if (abort) return;

        if (cat === ALL_CAT) {
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

  // Fermer la preview lorsqu'on change d'onglet
  useEffect(() => {
    setPreview(null);
  }, [cat]);

  // Groupes: pour "Vue d’ensemble" => une seule grande grille
  const groups = useMemo(() => {
    if (!items.length) return [];
    if (cat === ALL_CAT) {
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

  // Ouverture de la lightbox
  const openPreview = (id) => {
    const index = items.findIndex((it) => it.id === id);
    if (index === -1) return;
    setPreview({ index, zoom: 1, offsetX: 0, offsetY: 0 });
  };

  const closePreview = () => setPreview(null);

  const goPrev = () => {
    setPreview((p) => {
      if (!p || !items.length) return p;
      const prevIndex = (p.index - 1 + items.length) % items.length;
      return { index: prevIndex, zoom: 1, offsetX: 0, offsetY: 0 };
    });
  };

  const goNext = () => {
    setPreview((p) => {
      if (!p || !items.length) return p;
      const nextIndex = (p.index + 1) % items.length;
      return { index: nextIndex, zoom: 1, offsetX: 0, offsetY: 0 };
    });
  };

  const zoomIn = () =>
    setPreview((p) => {
      if (!p) return p;
      const next = Math.min(MAX_ZOOM, (p.zoom ?? 1) + ZOOM_STEP);
      return next <= 1
        ? { ...p, zoom: 1, offsetX: 0, offsetY: 0 }
        : { ...p, zoom: next };
    });

  const zoomOut = () =>
    setPreview((p) => {
      if (!p) return p;
      const next = Math.max(MIN_ZOOM, (p.zoom ?? 1) - ZOOM_STEP);
      return next <= 1
        ? { ...p, zoom: 1, offsetX: 0, offsetY: 0 }
        : { ...p, zoom: next };
    });

  const resetZoom = () =>
    setPreview((p) => (p ? { ...p, zoom: 1, offsetX: 0, offsetY: 0 } : p));

  const setOffset = (dx, dy) =>
    setPreview((p) => {
      if (!p) return p;
      if ((p.zoom ?? 1) <= 1) {
        return { ...p, offsetX: 0, offsetY: 0 };
      }
      return {
        ...p,
        offsetX: dx,
        offsetY: dy
      };
    });

  // Gestion du drag souris pour le pan
  const handlePointerDown = (e) => {
    if (!preview || preview.zoom <= 1) return;
    e.preventDefault();
    dragRef.current = {
      dragging: true,
      startX: e.clientX,
      startY: e.clientY,
      baseX: preview.offsetX || 0,
      baseY: preview.offsetY || 0
    };
  };

  const handlePointerMove = (e) => {
    if (!dragRef.current.dragging) return;
    e.preventDefault();
    const { startX, startY, baseX, baseY } = dragRef.current;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    setOffset(baseX + dx, baseY + dy);
  };

  const stopDragging = () => {
    if (!dragRef.current.dragging) return;
    dragRef.current.dragging = false;
  };

  // Clavier : navigation + zoom
  useEffect(() => {
    if (!preview) return;

    const onKey = (e) => {
      const relevantKeys = [
        'Escape',
        'ArrowLeft',
        'ArrowRight',
        'ArrowUp',
        'ArrowDown',
        '+',
        '-',
        '=',
        '0',
        'NumpadAdd',
        'NumpadSubtract',
        'Numpad0',
        'Digit0'
      ];
      if (!relevantKeys.includes(e.key) && !relevantKeys.includes(e.code)) {
        return;
      }

      e.preventDefault();

      if (e.key === 'Escape') {
        closePreview();
      } else if (e.key === 'ArrowLeft') {
        goPrev();
      } else if (e.key === 'ArrowRight') {
        goNext();
      } else if (e.key === 'ArrowUp' || e.key === '+' || e.key === '=' || e.key === 'NumpadAdd') {
        zoomIn();
      } else if (e.key === 'ArrowDown' || e.key === '-' || e.key === 'NumpadSubtract') {
        zoomOut();
      } else if (e.key === '0' || e.key === 'Numpad0' || e.key === 'Digit0') {
        resetZoom();
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [preview, items.length]);

  // Molette : zoom
  const handleWheel = (e) => {
    if (!preview) return;
    e.preventDefault();
    if (e.deltaY < 0) {
      zoomIn();
    } else if (e.deltaY > 0) {
      zoomOut();
    }
  };

  const currentItem =
    preview && items[preview.index] ? items[preview.index] : null;
  const currentZoom = preview?.zoom ?? 1;
  const offsetX = preview?.offsetX ?? 0;
  const offsetY = preview?.offsetY ?? 0;

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
            L’onglet <b>« {ALL_CAT} »</b> rassemble toutes les mosaïques en une seule
            vue, tandis que les autres catégories représentent chaque ensemble
            comme un album autonome. En ouvrant une photo, vous pouvez passer
            d’une image à l’autre avec les flèches gauche et droite ou les
            zones cliquables de part et d’autre. La molette de la souris, les
            flèches haut et bas ainsi que les touches « + » et « – » permettent
            d’ajuster le zoom ; un clic maintenu et déplacé autorise ensuite la
            promenade dans l’image, et la touche « 0 » ramène la vue à son
            cadrage d’origine.
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
            onPointerMove={handlePointerMove}
            onPointerUp={stopDragging}
            onPointerLeave={stopDragging}
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
                style={{
                  transform: `translate(${offsetX}px, ${offsetY}px) scale(${currentZoom})`
                }}
                onPointerDown={handlePointerDown}
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
