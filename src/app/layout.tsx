import type { Metadata } from "next";
import { Figtree, Nunito, Urbanist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";

interface LayoutProps {
  children: Readonly<React.ReactNode>;
}

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-figtree",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-urbanist",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Fametonic - Turn Social Media Into a Profitable Career",
  description:
    "Discover your way to success with Fametonic. Start growing your influence with viral TikTok and Reels creation, AI-powered content tools, and expert-led courses for aspiring influencers.",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${figtree.variable} ${urbanist.variable} ${nunito.variable} antialiased font-figtree`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
