// app\contact\page.jsx
'use client';
import { Mail, MapPin } from "lucide-react";
import styles from './page.module.scss';

export default function ContactPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <section className="hero">
            <div className="container">
              <div className="title">
                <Mail className="icon" aria-hidden width={36} height={36} />
                <h1>Contact</h1>
                <p className="subtitle">Entrons en conversation</p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div className="card elevated">
              <h2 className={styles.boxTitle}>Envoyez un courriel</h2>
              <p className={styles.boxLead}>N’hésitez pas à nous contacter pour toute question ou projet de mosaïque (automatisation de l'envoie des courriels à venir).</p>

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
                    <span><strong>Email</strong><br /><a href="mailto:charammac.lelly@gmail.com">charammac.lelly@gmail.com</a><br /><a href="mailto:louis.rouanet@gallia-os.com">louis.rouanet@gallia-os.com</a></span>
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
      {/* BREVO
      // async function handleSubmit(e) {
//     e.preventDefault();
//     const fd = new FormData(e.currentTarget);
//     const payload = {
//       name: fd.get('name')?.toString().trim(),
//       email: fd.get('email')?.toString().trim(),
//       subject: fd.get('subject')?.toString().trim(),
//       message: fd.get('message')?.toString().trim(),
//       company: fd.get('company')?.toString().trim(), // honeypot
//     };
//     if (payload.company) return; // bot

//     const btn = e.currentTarget.querySelector('button[type="submit"]');
//     btn.disabled = true;

//     try {
//       console.log('POST /api/contact', payload);
//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'content-type':'application/json' },
//         body: JSON.stringify(payload),
//       });
//       const data = await res.json();
//       console.log('Response', res.status, data);
//       if (!res.ok || !data.ok) throw new Error(data.error || 'Erreur');
//       alert('Message envoyé.');
//       e.currentTarget.reset();
//     } catch (err) {
//       console.error(err);
//       alert("Échec de l’envoi.");
//     } finally {
//       btn.disabled = false;
//     }
//   }
//   <section className="section">
//         <div className="container">
//           <div className="grid-2">
//             <div className="card elevated">
//               <h2 className={styles.boxTitle}>Envoyez un courriel</h2>
//               <p className={styles.boxLead}>
//                 N’hésitez pas à nous contacter pour toute question ou projet de mosaïque.
//               </p>

//               <form className={styles.form} onSubmit={handleSubmit}>
//                 <input type="text" name="company" tabIndex={-1} autoComplete="off"
//                   style={{position:'absolute',left:'-9999px'}} aria-hidden />

//                 <div className={styles.row}>
//                   <div>
//                     <label>Nom complet</label>
//                     <input name="name" placeholder="Votre nom" required />
//                   </div>
//                   <div>
//                     <label>Adresse email</label>
//                     <input type="email" name="email" placeholder="votre@email.com" required />
//                   </div>
//                 </div>
//                 <div>
//                   <label>Sujet</label>
//                   <input name="subject" placeholder="Objet de votre message" />
//                 </div>
//                 <div>
//                   <label>Message</label>
//                   <textarea name="message" rows={6} placeholder="Écrivez votre message ici..." required />
//                 </div>

//                 <button type="submit" className="btn">
//                   <Mail width={18} height={18} />
//                   Envoyer le message
//                 </button>
//               </form>
//             </div>
      */}
    </>
  );
}
