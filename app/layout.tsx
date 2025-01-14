import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SessionProvider } from "@/components/providers/SessionProvider";

const poppins = Poppins({
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pilar Benitez | Programa Autocuidarte",
  description: "Autocuidarte, Sin dietas ultra-rígidas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
