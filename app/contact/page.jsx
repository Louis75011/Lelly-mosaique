// app\contact\page.jsx
'use client';
import { Mail, MapPin } from "lucide-react";
import styles from './page.module.scss';
import { ShieldCheck } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <header className="hero">
        <div className="container title" style={{ color: '#fff' }}>
          <Mail className="icon" aria-hidden width={36} height={36} />
          <h1>Contact</h1>
          <p className="subtitle">Entrons en conversation</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div className="card elevated">
              <h2 className={styles.boxTitle}>Envoyez un courriel</h2>
              <p className={styles.boxLead}>N’hésitez pas à nous contacter pour toute question ou projet de mosaïque (automatisation des courriels à venir).</p>

              <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.row}>
                  <div>
                    <label>Nom complet</label>
                    <input name="name" placeholder="Votre nom" required />
                  </div>
                  <div>
                    <label>Adresse email</label>
                    <input type="email" name="email" placeholder="votre@email.com" required />
                  </div>
                </div>
                <div>
                  <label>Sujet</label>
                  <input name="subject" placeholder="Objet de votre message" />
                </div>
                <div>
                  <label>Message</label>
                  <textarea name="message" rows={6} placeholder="Écrivez votre message ici..." required />
                </div>
                <a href="mailto:charammac.lelly@gmail.com" className="btn">
                  <button type="submit" className="btn">
                    <Mail width={18} height={18} />
                    Envoyer le message
                  </button>
                </a>
              </form>
            </div>

            <div className={styles.rightCol}>
              <div className="card">
                <h2 className={styles.boxTitle}>Coordonnées</h2>
                <p className={styles.muted}>Pour toute demande d’information, n’hésitez pas à écrire. Réponse sous brefs délais.</p>
                <ul className={styles.infoList}>
                  <li>
                    <span className={styles.ico}><Mail width={18} height={18} /></span>
                    <span><strong>Email</strong><br /><a href="mailto:charammac.lelly@gmail.com">charammac.lelly@gmail.com</a></span>
                  </li>
                  <li>
                    <span className={styles.ico}><MapPin width={18} height={18} /></span>
                    <span><strong>Localisation</strong><br />France</span>
                  </li>
                </ul>
              </div>

              <div className={`${styles.highlight} card`}>
                <h3>L’Art de la tesselle</h3>
                <p>Chaque œuvre est le fruit d’un travail minutieux et passionné. Nous perpétuons une tradition artistique vivante en y apportant notre touche originale.</p>
                <hr />
                <div className={styles.badgeRow}>
                  <div className={styles.badge}>
                    <strong>Depuis 1980</strong>
                    <span>Plus de 40 ans d’expérience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
