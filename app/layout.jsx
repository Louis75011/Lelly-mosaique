// app/layout.jsx
import "./globals.scss";
import { Inter, Crimson_Text } from "next/font/google";
import Sidebar from "./components/Sidebar";
import CookieBanner from "./components/CookieBanner";   // +++
import CookiePanel from "./components/CookiePanel";     // +++

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const crimson = Crimson_Text({ subsets: ["latin"], weight: ["400","600","700"], variable: "--font-serif" });

export const metadata = {
  title: "Lelly Mosaïque",
  description: "L'art de la tesselle — créations et restaurations.",
  icons: {
    icon: "/icons/mosaic_opus.svg", // favicon principal
    shortcut: "/icons/mosaic_opus.svg",
    apple: "/icons/mosaic_opus.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${crimson.variable} app-body`}>
        <div className="shell">
          <aside className="sidebar">
            <Sidebar />
          </aside>
          <main className="content">{children}</main>
        </div>

        <footer className="site-footer">
          <div className="container">
            © 2025 Charammac Lelly, France — Site réalisé par M. Rouanet de Arx Systema
          {" · "}&nbsp;
<button className="btn" data-open-cookie-panel>Gérer mes cookies</button>
          </div>
        </footer>

        {/* Consentement – toujours à la fin du body */}
        <CookieBanner />
        <CookiePanel />
      </body>
    </html>
  );
}
