import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link"; // Importa o Link do Next.js

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "PerCurso",
  description: "Encontre o seu Percurso",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #EDF6FF' }}>
          <h1>PerCurso</h1>
          <nav>
            <Link href="/recursos" style={{ marginRight: '15px' }}>Recursos</Link>
            <Link href="/percursos">Percursos</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
