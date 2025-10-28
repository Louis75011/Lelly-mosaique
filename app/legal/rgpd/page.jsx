// app\legal\rgpd\page.jsx
export const metadata = { title: 'RGPD — Lelly Mosaïque' };
import { ShieldCheck } from "lucide-react";
// 'use client';

export default function RGPD() {
  return (
    <section className="section">
      <div className="container">

        <section className="hero">
          <div className="container">
            <div className="title" style={{ color: '#fff' }}>
              <ShieldCheck className="icon" aria-hidden width={36} height={36} />
              <h1>RGPD</h1>
              <p className="subtitle">Informations obligatoires (art. 12 à 14 RGPD)</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container card">
            <h2>Identité et contact</h2>
            <dl>
              <dt>Responsable</dt><dd><a href="mailto:louis.rouanet@gallia-os.com">Louis Rouanet</a> pour Arx Systema</dd>
              <dt>Artiste</dt><dd>Nelly Charamnac</dd>
              <dt>Courriel</dt>
              <dd></dd>
            </dl>

            <h2>Catégories de données</h2>
            <ul><li>Identité et contact fournis par l’expéditeur de l’e-mail.</li><li>Données techniques minimales.</li></ul>

            <h2>Base légale</h2>
            <ul>
              <li>Mesures précontractuelles et intérêt légitime pour les échanges.</li>
              <li>Consentement pour toute opération non essentielle (newsletter, cookies optionnels).</li>
            </ul>

            <h2>Destinataires</h2>
            <p>Le responsable du site et l’artiste, strict besoin d’en connaître. Pas de revente.</p>

            <h2>Provenance</h2>
            <p>Données fournies directement par vous. Aucune collecte auprès de tiers.</p>

            <h2>Durées</h2>
            <p>Limitées à la finalité poursuivie et à la défense des droits en cas de contentieux.</p>

            <h2>Droits</h2>
            <p>Accès, rectification, effacement, limitation, opposition, portabilité. CNIL : cnil.fr.</p>

            <p className="text-muted">Dernière mise à jour : 27/10/2025.</p>
            <button className="btn" data-open-cookie-panel>Gérer mes cookies</button>
          </div>

        </section>
      </div>
    </section>
  );
}
