import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Just Bukhara | Top Bakery & Restaurant in Magam, Kashmir",
  description: "Premium Restaurant, Bakery, and Confectionery located in Magam. Serving Tandoori Chicken, Cakes, Sweets, and Kashmiri delights. The top bakery in Magam and surrounding districts.",
  keywords: [
    "magam top bakery",
    "magam bakery",
    "bakery kashmir",
    "makhma",
    "mazhama",
    "srinagar",
    "all district bakery kashmir",
    "kashmir bakery",
    "restaurant",
    "hotels",
    "food",
    "cakes",
    "Just Bukhara"
  ],
  verification: {
    google: "ELMsLQ4pq017MzZKfdo8IDZchw9_4eegcxxPssji7Xw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#f9f8f6] text-foreground font-sans antialiased selection:bg-[#4a3022] selection:text-white">
        <CartProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
