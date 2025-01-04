import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { SessionProvider } from '@/components/providers/SessionProvider';


const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pilar Benitez | Programa Autocuidarte',
  description: 'Autocuidarte, Sin dietas ultra-rígidas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <SessionProvider>
          {children}
        </SessionProvider>
        </body>
    </html>
  );
}