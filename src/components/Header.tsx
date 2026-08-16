"use client";

import Link from "next/link";
import { Menu, Search, ShoppingCart, Sparkles, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { cartCount } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
          <button onClick={() => setIsMobileMenuOpen(true)} className={`grid h-8 w-8 place-items-center rounded-full backdrop-blur-md ring-1 sm:hidden ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'} ${isLightBackground ? 'bg-black/5 ring-black/10 text-[#1a1a1a]' : 'bg-white/18 ring-white/25 text-white'}`} aria-label="Menu">
            <Menu className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm transition-opacity duration-300 sm:hidden ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setIsMobileMenuOpen(false)} />
      <div className={`fixed right-0 top-0 bottom-0 z-[101] w-64 bg-[#f9f8f6] p-8 shadow-2xl transition-transform duration-300 sm:hidden flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between mb-8 text-[#1a1a1a]">
          <span className="text-xl font-black">Menu</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="rounded-full bg-black/5 p-2" aria-label="Close menu">
            <X className="h-4 w-4" />
          </button>
        </div>
        <nav className="flex flex-col gap-5 text-[#1a1a1a]">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`text-lg font-bold transition-colors ${pathname === "/" ? "text-[#C37A65]" : "hover:text-[#C37A65]"}`}>Home</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={`text-lg font-bold transition-colors ${pathname === "/about" ? "text-[#C37A65]" : "hover:text-[#C37A65]"}`}>About us</Link>
          <Link href="/menu" onClick={() => setIsMobileMenuOpen(false)} className={`text-lg font-bold transition-colors ${pathname === "/menu" ? "text-[#C37A65]" : "hover:text-[#C37A65]"}`}>Menu</Link>
          <Link href="/cart" onClick={() => setIsMobileMenuOpen(false)} className={`text-lg font-bold transition-colors ${pathname === "/cart" || pathname === "/checkout" ? "text-[#C37A65]" : "hover:text-[#C37A65]"}`}>Cart</Link>
          <a href="tel:+919597710592" className="text-lg font-bold transition-colors hover:text-[#C37A65]">Order</a>
        </nav>
        
        <form onSubmit={(e) => { handleSearch(e); setIsMobileMenuOpen(false); }} className="mt-8 relative">
           <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#1a1a1a]/40" />
           <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full bg-white py-2.5 pl-10 pr-4 text-sm outline-none ring-1 ring-black/5 focus:ring-2 focus:ring-[#C37A65]/30 text-[#1a1a1a]"
            />
        </form>
      </div>
    </header>
  );
}
