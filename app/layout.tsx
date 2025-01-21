import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SessionProvider } from "@/components/providers/SessionProvider";
import Script from "next/script";

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
      <head>
        <Script
          id="google-tag"
          src="https://www.googletagmanager.com/gtag/js?id=GTM-K3C8K9SL"
          strategy="afterInteractive"
        />
        <Script id="google-tag-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-K3C8K9SL');
          `}
        </Script>
      </head>
      <body className={poppins.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K3C8K9SL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
