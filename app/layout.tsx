import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Baroque Works - The Secret Criminal Organization",
    template: "%s | Baroque Works",
  },
  description:
    "Explore the agents of Baroque Works and the Straw Hat Pirates from the world of One Piece.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="scroll-smooth">
      <body
        className={`${cinzel.variable} ${inter.variable} font-body bg-baroque-black antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-baroque-gold focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-baroque-black"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
