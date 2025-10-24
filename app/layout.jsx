import './globals.scss';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import CookieBanner from './components/CookieBanner';
import { seoBase } from './lib/seo';

export const metadata = seoBase();

export default function RootLayout({ children }) {
  return (
    <html lang="fr"><body>
      <aside className="sidebar"><Sidebar/></aside>
      <div className="main">
        <Navbar/>{children}<CookieBanner/>
        <footer className="section"><div className="container text-muted">
          © 2025 Nelly Charamnac — Site réalisé par Louis Rouanet. France.
        </div></footer>
      </div>
    </body></html>
  );
}
