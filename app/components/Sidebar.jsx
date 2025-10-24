import Link from 'next/link';
import styles from './Sidebar.module.scss';
import Image from 'next/image';
import { brand } from '@/app/lib/paths';
export default function Sidebar(){
  return (<div>
    <div className={styles.logo}>
      <Image src={brand('lelly-signature.png')} alt="Signature" width={160} height={40}/>
      <div>Lelly Mosaïque</div>
    </div>
    <nav className={styles.nav}>
      <Link href="/">Accueil</Link>
      <Link href="/artiste">Présentation</Link>
      <Link href="/galerie">Galerie</Link>
      <Link href="/contact">Contact</Link>
      <div className={styles.small}><Link href="/legal/rgpd">RGPD</Link><br/><Link href="/legal/cookies">Cookies</Link></div>
    </nav>
  </div>);
}
