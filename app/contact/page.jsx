'use client';
import styles from './page.module.scss';
import Image from 'next/image';

export default function ContactPage(){
  return (
    <main className={styles.main}>
      <h1>Contact</h1>
      <p>Écrivez-nous pour vos projets de mosaïque.</p>

      <form className={styles.form} onSubmit={(e)=>e.preventDefault()}>
        <label>Nom<input type="text" name="name" required/></label>
        <label>Email<input type="email" name="email" required/></label>
        <label>Message<textarea name="message" rows={6} required/></label>
        <button type="submit">
          <Image src="/icons/mail.svg" alt="" width={20} height={20}/> Envoyer
        </button>
      </form>
    </main>
  );
}
