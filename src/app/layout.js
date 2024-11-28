// layout.js
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link"; // Importa o Link do Next.js
import styles from './page.module.css'; // Importa o CSS do page.js
import Head from 'next/head'; // Importa o Head do Next.js

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
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <header className={styles.header}>
          <Link href="/" passHref>
            <h1 style={{ fontFamily: 'Lemon, sans-serif', marginRight: '15px', cursor: 'pointer' }} className={styles.logo}>PerCurso</h1>
          </Link>
          <nav className={styles.nav}>
            <Link href="/recursos">VER RECURSOS</Link>
            <Link href="/percursos">VER PERCURSOS</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
