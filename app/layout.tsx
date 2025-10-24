import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Vanessa Machado Portfolio',
  description: 'Portafolio profesional de Vanessa Machado',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
