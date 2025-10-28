export const metadata = { title: 'Politique de confidentialité — Lelly Mosaïque' };
import { Lock } from "lucide-react";

export default function Confidentialite() {
  return (
    <section className="section legal-section">
  <div className="container">
      <section className="hero">
        <div className="container">
          <div className="title">
             <Lock className="icon" aria-hidden width={36} height={36} />
            <h1>Politique de confidentialité</h1>
            <p className="subtitle">Protection des données des visiteurs et contacts</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card">
          <h2>Responsable du traitement</h2>
          <p>Site vitrine « Lelly Mosaïque ». Responsable de traitement : Louis Rouanet.
            Artiste présentée : Nelly Charamnac.
          </p>

          <h2>Données traitées</h2>
          <ul>
            <li>Données de contact envoyées via votre client e-mail (nom, adresse e-mail, contenu du message).</li>
            <li>Données techniques minimales (journaux serveur anonymisés, sécurité/anti-abus).</li>
          </ul>

          <h2>Finalités et bases légales</h2>
          <ul>
            <li>Répondre à vos demandes d’information — exécution de mesures précontractuelles.</li>
            <li>Sécuriser et maintenir le site — intérêt légitime.</li>
            <li>Newsletter (si mise en place) — consentement explicite.</li>
          </ul>

          <h2>Hébergement et sous-traitants</h2>
          <p>
            Hébergement statique (Cloudflare Pages/Vercel ou équivalent) et CDN. E-mails transitant par votre
            fournisseur. Outils d’audience sans cookie possibles (mode cookieless).
          </p>

          <h2>Transferts hors UE</h2>
          <p>Le cas échéant, encadrés par clauses contractuelles types de la Commission européenne.</p>

          <h2>Durées de conservation</h2>
          <ul>
            <li>Courriels : durée nécessaire au suivi, puis archivage limité.</li>
            <li>Journaux techniques : rotation courte (sécurité/diagnostic).</li>
          </ul>

          <h2>Vos droits</h2>
          <p>
            Accès, rectification, effacement, limitation, opposition, portabilité. Exercice professionnel :
            <a href="mailto:louis.rouanet@gallia-os.com"> louis.rouanet@gallia-os.com</a>. Réclamation : CNIL (cnil.fr).
          </p>

          <h2>Sécurité</h2>
          <p>HTTPS, accès restreints aux environnements, minimisation des données, pas de profilage.</p>

          <p className="text-muted">Dernière mise à jour : 27/10/2025.</p>
        <button className="btn" data-open-cookie-panel>Gérer mes cookies</button>
        </div>
      </section>
  </div>
</section>
  );
}
