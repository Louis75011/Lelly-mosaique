// app/api/gallery/route.js
export const runtime = 'nodejs';

import divers from '../../data/galery-Divers.json';
import escalier from '../../data/galery-Escalier.json';
import mural from '../../data/galery-Mural.json';
import plafond from '../../data/galery-Plafond.json';
import salleDeBain from '../../data/galery-Salle-de-bain.json';
import sol from '../../data/galery-Sol.json';
import table from '../../data/galery-Table.json';
import tableau from '../../data/galery-Tableau.json';
import tombe from '../../data/galery-Tombe.json';
import piscine from '../../data/galery-Piscine.json';
import balcon from '../../data/galery-Balcon.json';

const CATS = [
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

const DATA_BY_CAT = {
  Divers: divers,
  Balcon: balcon,
  Escalier: escalier,
  Mural: mural,
  Piscine: piscine,
  Plafond: plafond,
  'Salle de bain': salleDeBain,
  Sol: sol,
  Table: table,
  Tableaux: tableau,
  Tombe: tombe
};

const normalize = (arr, category) =>
  (arr || []).map((it, i) => ({
    id: it.id ?? `${category}-${i}`,
    category,
    image: String(it.image || '').replace(/^\/public(?=\/)/, ''),
    title: it.title || '',
    description: it.description || '',
    support: it.support || '',
    region: it.region || ''
  }));

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get('cat');

  if (cat && DATA_BY_CAT[cat]) {
    return new Response(
      JSON.stringify({ category: cat, items: normalize(DATA_BY_CAT[cat], cat) }),
      { headers: { 'content-type': 'application/json' } }
    );
  }

  const byCategory = Object.fromEntries(
    CATS.map(c => [c, normalize(DATA_BY_CAT[c], c)])
  );
  const counts = Object.fromEntries(CATS.map(c => [c, byCategory[c].length]));

  return new Response(JSON.stringify({ categories: CATS, counts, byCategory }), {
    headers: { 'content-type': 'application/json' }
  });
}
