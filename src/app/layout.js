import localFont from "next/font/local";
import { Bricolage_Grotesque } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const avenir = localFont({
  src: [
    {
      path: "../../public/fonts/Avenir-Regular.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Avenir-Heavy.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-avenir",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "IDEL - Framing the Future",
  description: "A window into the world of IDEL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${avenir.variable} ${bricolage.variable}`}>
      <head>
        {/* Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-765886881"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-765886881');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P4WWPJ5K');
          `}
        </Script>
      </head>

      <body>
        {/* GTM Noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P4WWPJ5K"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}