// app/legal/rgpd/page.jsx
export const metadata = { title: 'RGPD — Lelly Mosaïque' };

export default function RGPD() {
  return (
    <main className="legal">
      <section className="hero">
        <div className="container">
          <div className="title">
            <h1>RGPD</h1>
            <p className="subtitle">Politique de protection des données</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card">
          <h2>Responsable du traitement</h2>
          <dl>
            <dt>Responsable</dt>
            <dd>Louis Rouanet</dd>
            <dt>Artiste présentée</dt>
            <dd>Nelly Charamnac</dd>
            <dt>Contact</dt>
            <dd>
              <a href="mailto:louis.rouanet@gallia-os.com">louis.rouanet@gallia-os.com</a>
            </dd>
          </dl>

          <h2>Finalités et bases légales</h2>
          <ul>
            <li>Présentation d’œuvres et informations publiques — intérêt légitime.</li>
            <li>Échanges par courrier électronique — exécution de mesures précontractuelles et intérêt légitime.</li>
          </ul>

          <h2>Données traitées</h2>
          <ul>
            <li>Nom, adresse e-mail, contenu libre de votre message (via votre client mail).</li>
          </ul>

          <h2>Destinataires</h2>
          <p>Le responsable du site et l’artiste, pour la gestion des échanges.</p>

          <h2>Hébergement</h2>
          <p>Préproduction: Cloudflare Pages. Production: selon environnement actif au moment de la consultation.</p>

          <h2>Durées de conservation</h2>
          <ul>
            <li>Courriels: durée nécessaire au traitement puis archivage limité au suivi des échanges.</li>
          </ul>

          <h2>Vos droits</h2>
          <ul>
            <li>Accès, rectification, effacement, limitation, opposition, portabilité.</li>
            <li>Exercer vos droits: <a href="mailto:louis.rouanet@gallia-os.com">louis.rouanet@gallia-os.com</a>.</li>
            <li>Pour Arx Systema.</li>
            <li>Réclamation: CNIL (cnil.fr).</li>
          </ul>

          <p className="text-muted">Dernière mise à jour: 27/10/2025.</p>
        </div>
      </section>
    </main>
  );
}
