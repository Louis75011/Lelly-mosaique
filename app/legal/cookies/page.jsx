// app/legal/cookies/page.jsx
export const metadata = { title: 'Cookies — Lelly Mosaïque' };

export default function Cookies() {
  return (
    <main className="legal">
      <section className="hero">
        <div className="container">
          <div className="title">
            <h1>Cookies</h1>
            <p className="subtitle">Informations sur les traceurs utilisés</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card">
          <h2>Ce que nous utilisons</h2>
          <ul>
            <li>Cookie de consentement uniquement, mémorisant votre choix.</li>
            <li>Aucune mesure d’audience par défaut. Aucun cookie publicitaire.</li>
          </ul>

          <h2>Finalité</h2>
          <p>Assurer le fonctionnement basique du site et respecter votre préférence de consentement.</p>

          <h2>Durées de conservation</h2>
          <ul>
            <li>Consentement: 6 à 12 mois selon le navigateur.</li>
          </ul>

          <h2>Gérer vos cookies</h2>
          <p>
            Vous pouvez supprimer ou bloquer les cookies via les réglages de votre navigateur. Le site reste accessible.
          </p>

          <p className="text-muted">Dernière mise à jour: 27/10/2025.</p>
        </div>
      </section>
    </main>
  );
}
