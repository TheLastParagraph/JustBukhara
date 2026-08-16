"use client";

import Link from "next/link";
import { Menu, Search, ShoppingCart, Sparkles } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { cartCount } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  
  const isLightBackground = pathname === "/cart" || pathname === "/checkout" || pathname?.startsWith("/product");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/menu?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="pointer-events-none absolute left-0 right-0 top-0 z-50 px-8 py-8 sm:px-12 lg:px-16 xl:px-20">
      <div className={`pointer-events-auto flex w-full items-center justify-between ${isLightBackground ? 'text-[#1a1a1a]' : 'text-white'}`}>
        <nav className={`hidden items-center gap-1 rounded-full p-1 text-[10px] font-bold backdrop-blur-md ring-1 sm:flex ${isLightBackground ? 'bg-black/5 ring-black/10' : 'bg-white/18 ring-white/25'}`}>
          <Link
            href="/"
            className={`rounded-full px-4 py-2 ${pathname === "/" ? (isLightBackground ? "bg-[#1a1a1a] text-white" : "bg-white text-[#11100d]") : (isLightBackground ? "text-[#1a1a1a]/85" : "text-white/85")}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`rounded-full px-3 py-2 ${pathname === "/about" ? (isLightBackground ? "bg-[#1a1a1a] text-white" : "bg-white text-[#11100d]") : (isLightBackground ? "text-[#1a1a1a]/85" : "text-white/85")}`}
          >
            About us
          </Link>
          <Link
            href="/menu"
            className={`rounded-full px-3 py-2 ${pathname === "/menu" ? (isLightBackground ? "bg-[#1a1a1a] text-white" : "bg-white text-[#11100d]") : (isLightBackground ? "text-[#1a1a1a]/85" : "text-white/85")}`}
          >
            Menu
          </Link>
          <Link
            href="/cart"
            className={`rounded-full px-3 py-2 ${pathname === "/cart" || pathname === "/checkout" ? (isLightBackground ? "bg-[#1a1a1a] text-white" : "bg-white text-[#11100d]") : (isLightBackground ? "text-[#1a1a1a]/85" : "text-white/85")}`}
          >
            Cart
          </Link>
          <a href="tel:+919597710592" className={`rounded-full px-3 py-2 ${isLightBackground ? "text-[#1a1a1a]/85" : "text-white/85"}`}>
            Order
          </a>
        </nav>

        <Link href="/" className="text-2xl font-black tracking-normal">
          Just Bukhara
        </Link>

        <div className="flex items-center gap-2">
          <form onSubmit={handleSearch} className={`hidden items-center gap-2 rounded-full px-4 py-2 text-[10px] font-semibold backdrop-blur-md ring-1 sm:flex ${isLightBackground ? 'bg-black/5 text-[#1a1a1a]/80 ring-black/10' : 'bg-white/18 text-white/80 ring-white/25'}`}>
            <Search className="h-3.5 w-3.5" />
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-16 bg-transparent outline-none transition-all placeholder:text-inherit/60 focus:w-32"
            />
          </form>
          <button className={`grid h-8 w-8 place-items-center rounded-full backdrop-blur-md ring-1 ${isLightBackground ? 'bg-black/5 ring-black/10 text-[#1a1a1a]' : 'bg-white/18 ring-white/25 text-white'}`} aria-label="Highlights">
            <Sparkles className="h-3.5 w-3.5" />
          </button>
          <Link className={`relative grid h-8 w-8 place-items-center rounded-full backdrop-blur-md ring-1 ${isLightBackground ? 'bg-black/5 ring-black/10 text-[#1a1a1a]' : 'bg-white/18 ring-white/25 text-white'}`} href="/cart" aria-label="View cart">
            <ShoppingCart className="h-3.5 w-3.5" />
            {cartCount > 0 && (
              <span className={`absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full px-1 text-[9px] font-black ${isLightBackground ? 'bg-[#C37A65] text-white' : 'bg-black text-white'}`}>
                {cartCount}
              </span>
            )}
          </Link>
          <button className={`grid h-8 w-8 place-items-center rounded-full backdrop-blur-md ring-1 sm:hidden ${isLightBackground ? 'bg-black/5 ring-black/10 text-[#1a1a1a]' : 'bg-white/18 ring-white/25 text-white'}`} aria-label="Menu">
            <Menu className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
