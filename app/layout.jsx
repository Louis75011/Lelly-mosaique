// app\layout.jsx
import "./globals.scss";
import { Inter, Crimson_Text } from "next/font/google";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const crimson = Crimson_Text({ subsets: ["latin"], weight: ["400","600","700"], variable: "--font-serif" });

export const metadata = {
  title: "Lelly Mosaïque",
  description: "L'art de la mosaïque — créations et restaurations."
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${crimson.variable} app-body`}>
        <div className="shell">
          <aside className="sidebar" data-open={undefined /* sera géré à l’intérieur via DOM bubbling si besoin */}>
  <Sidebar />
</aside>
          <main className="content">{children}</main>
        </div>

        <footer className="site-footer">
          <div className="container">
            © 2025 Nelly Charammac, France
            — Site réalisé par Louis Rouanet de Arx Systema.
          </div>
        </footer>
      </body>
    </html>
  );
}
