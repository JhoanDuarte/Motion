import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';

const sans = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: "Motion",
  description: "Sitio web para un concesionario",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
