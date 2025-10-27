# 🟩 Lelly Mosaïque  
**Site vitrine de l’artiste Nelly Charamnac** — Réalisé avec **Next.js (App Router)** et **SCSS modules**, en JavaScript pur.

---

## 📖 Présentation

> « L’art de la mosaïque — créations et restaurations »

Ce site a pour vocation de présenter le travail de Nelly Charamnac, mosaïste active depuis 1980 :  
une galerie d’albums illustrés, une page de contact, et des sections légales conformes RGPD.  
L’ensemble privilégie la sobriété technique (JS only) et la lisibilité du code pour faciliter la maintenance.

---

## 🧱 Structure du projet

app/
├─ artiste/ → Page de présentation (portrait, parcours, chaîne vidéo)
├─ galerie/ → Albums photo (catégories et filtres dynamiques)
├─ contact/ → Formulaire + coordonnées
├─ legal/ → RGPD, Cookies, Confidentialité
├─ components/ → Sidebar, CookieBanner, CookiePanel, Hero, etc.
└─ layout.jsx → Structure principale (Sidebar + Footer)
public/
├─ images/
│ ├─ hero/ → Carrousel principal (a01img...)
│ ├─ gallery/ → Albums (/Catégorie/slug/cover.jpg, 01.jpg, 02.jpg, …)
│ └─ branding/ → Identité visuelle (lelly-mosaique-video.jpg, icônes…)
└─ icons/ → mosaic_opus.svg (favicon du site)

yaml
Copier le code

---

## 🧩 Technologies principales

- **Next.js 14+** — App Router, composants serveur/clients  
- **SCSS modules** — Thème sobre, responsive, palette naturelle  
- **Lucide Icons** — Pictogrammes SVG intégrés  
- **LocalStorage / RGPD** — Gestion des préférences cookies (sans tracking)  
- **Cloudflare Pages** — Hébergement statique et CI/CD

---

## ⚙️ Installation locale

```bash
npm install
npm run dev
Le site sera accessible sur http://localhost:3000

🚀 Préproduction
Déploiement automatique prévu sur Cloudflare Pages via next-on-pages.

Branche : main
Dossier de sortie : .vercel/output/static (ou selon configuration Cloudflare)

📸 Crédits & mentions
Artiste : Nelly Charamnac

Conception & développement : Louis Rouanet — Arx Systema

© 2025 Lelly Mosaïque — France

“Chaque œuvre est le fruit d’un travail minutieux et passionné.”