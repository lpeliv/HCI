import type { Metadata } from "next";
import {
  Roboto,
  Roboto_Condensed,
  Playfair_Display,
} from "next/font/google";
import clsx from "clsx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const roboto_condensed = Roboto_Condensed({
  weight: ["300", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});
const playfairDisplay = Playfair_Display({
  weight: ["400", "800"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    template: "GameDev | %s",
    default: "GameDev",
  },
  description: "GameDev page",
};

const pages: Record<string, `/${string}`> = {
  home: "/",
  showcase: "/showcase",
  blog: "/blog?_page=1&_limit=10",
  about: "/about",
  games: "/games",
  contact: "/contact",
  signin: "/cms/products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      <body
        className={clsx(
          "flex flex-col min-h-screen",
          roboto.variable,
          roboto_condensed.variable,
          playfairDisplay.variable
        )}
      >
        <Navbar />
        <main className="flex-grow bg-blue-800">{children}</main>
        <Footer />

      </body>
    </html>
  );
}