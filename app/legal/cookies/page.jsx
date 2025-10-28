export const metadata = { title: 'Politique cookies — Lelly Mosaïque' };
import { Cookie } from "lucide-react";

export default function Cookies() {
  return (
        <section className="section legal-section">
  <div className="container">

      <section className="hero">
        <div className="container">
          <div className="title">
             <Cookie className="icon" aria-hidden width={36} height={36} />
            <h1>Politique cookies</h1>
            <p className="subtitle">Traceurs et mesure d’audience</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card">
          <h2>Essentiels</h2>
          <p>Un cookie technique mémorise vos choix de consentement. Il est indispensable au panneau de préférences.</p>

          <h2>Mesure d’audience</h2>
          <p>Nous privilégions des solutions sans cookie (mode « cookieless », exemptées de consentement par la CNIL).
             Tout outil posant un cookie ne sera activé qu’avec votre accord (« Analyses »).</p>

          <h2>Marketing</h2>
          <p>Aucun ciblage publicitaire par défaut. L’activation, si elle survient, restera optionnelle.</p>

          <h2>Durées</h2>
          <ul><li>Consentement : 6–12 mois selon navigateur.</li></ul>

          <h2>Gérer vos préférences</h2>
          <button className="btn" data-open-cookie-panel>Gérer mes cookies</button>

          <p className="text-muted">Dernière mise à jour : 27/10/2025.</p>
        </div>
      </section>
      </div>
</section>
  );
}
