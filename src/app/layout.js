import localFont from "next/font/local";
import { Bricolage_Grotesque } from "next/font/google";
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
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
