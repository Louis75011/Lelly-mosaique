import "./globals.scss";
import { Inter, Crimson_Text } from "next/font/google";
import Sidebar from "./components/Sidebar";
import CookieBanner from "./components/CookieBanner";
import CookiePanel from "./components/CookiePanel";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
});

export const metadata = {
  title: "Lelly Mosaïque",
  description: "L'art de la tesselle — créations et restaurations.",
  icons: {
    icon: "/icons/mosaic_opus.svg",
    shortcut: "/icons/mosaic_opus.svg",
    apple: "/icons/mosaic_opus.svg",
  },
  openGraph: {
    title: "Lelly Mosaïque",
    description: "L'art de la tesselle — créations et restaurations.",
    // vous pouvez ajouter url si le domaine est fixé
    // url: "https://www.lelly-mosaique.fr",
    images: [
      {
        url: "/images/hero/h01img4637.jpg",
        width: 1200,
        height: 630,
        alt: "Mosaïque de Lelly Mosaïque en en-tête du site",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lelly Mosaïque",
    description: "L'art de la tesselle — créations et restaurations.",
    images: ["/images/hero/h01img4637.jpg"],
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
            © 2025 Charammac Lelly, France — Site réalisé par M. Rouanet de Arx
            Systema{" · "}&nbsp;
            <button className="btn" data-open-cookie-panel>
              Gérer mes cookies
            </button>
          </div>
        </footer>

        <CookieBanner />
        <CookiePanel />
      </body>
    </html>
  );
}
