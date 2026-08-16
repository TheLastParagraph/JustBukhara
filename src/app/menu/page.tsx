"use client";

import Link from "next/link";
import { useMemo, useRef, useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Plus, Search } from "lucide-react";
import { categories, products, Product } from "@/lib/data";
import { categories, products, Product } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import FadeUp from "@/components/FadeUp";

function ProductCard({ product }: { product: Product }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -7;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 7;

    cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "rotateX(0) rotateY(0)";
  };

  return (
    <div className="h-full [perspective:1000px]">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 [transform-style:preserve-3d] hover:shadow-xl"
        style={{ transition: "transform 0.2s ease-out, box-shadow 0.3s ease" }}
      >
        <Link
          href={`/product/${product.id}`}
          className="flex h-56 items-center justify-center bg-gradient-to-br from-[#fae8e3] to-[#e8dcd6] text-[4rem] font-black text-[#b95649]/65 transition-transform duration-500 group-hover:scale-105"
        >
          {product.emoji}
        </Link>
        <div className="relative z-10 flex flex-grow flex-col bg-white p-6">
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-black text-[#1a1a1a]">{product.name}</h3>
              <p className="mt-1 text-xs font-bold text-[#C37A65]">{product.badge}</p>
            </div>
            <span className="shrink-0 rounded-full bg-[#f9f8f6] px-3 py-1 text-xs font-black text-[#C37A65]">
              {product.category}
            </span>
          </div>
          <p className="mb-6 flex-grow text-sm leading-relaxed text-[#1a1a1a]/60">{product.desc}</p>
          <div className="mt-auto flex items-center justify-between gap-4">
            <span className="text-lg font-bold text-[#C37A65]">{product.displayPrice}</span>
            <button
              type="button"
              onClick={() => addToCart(product)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C37A65]/10 text-[#C37A65] transition-all duration-300 group-hover:bg-[#C37A65] group-hover:text-white"
              aria-label={`Add ${product.name} to cart`}
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MenuPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center font-bold text-[#1a1a1a]/50">Loading menu...</div>}>
      <MenuContent />
    </Suspense>
  );
}

function MenuContent() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const q = searchParams.get("search");
    if (q !== null) setSearchTerm(q);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = category === "All" || product.category === category;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const min = minPrice ? parseInt(minPrice, 10) : 0;
      const max = maxPrice ? parseInt(maxPrice, 10) : Infinity;
      const matchesPrice = product.price >= min && product.price <= max;
      return matchesCategory && matchesSearch && matchesPrice;
    });
  }, [category, maxPrice, minPrice, searchTerm]);

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#f9f8f6] pb-20">
      <div
        className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-b-[40px] bg-cover bg-center pb-24 pt-48 text-center"
        style={{ backgroundImage: "url('/Hero.png')" }}
      >
        <div className="absolute inset-0 bg-[#8f453b]/35" />
        <FadeUp className="relative z-10 max-w-2xl px-6">
          <h1 className="mb-6 text-4xl font-black text-white md:text-5xl lg:text-6xl">
            Explore Our Menu
          </h1>
          <p className="text-lg font-light leading-relaxed text-white/90">
            Restaurant dishes, custom cakes, bakery products, sweets, coffee, and Kashmiri favorites from Just Bukhara.
          </p>
        </FadeUp>
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-10">
        <FadeUp className="mb-4 rounded-3xl bg-white p-6 shadow-sm">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="flex w-full gap-2 overflow-x-auto pb-2 lg:w-auto lg:pb-0">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`whitespace-nowrap rounded-full border px-6 py-2.5 text-sm font-medium transition-colors ${
                    category === item
                      ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
                      : "border-[#1a1a1a]/10 bg-white text-[#1a1a1a]/60 hover:bg-[#1a1a1a]/5"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex w-full flex-col gap-4 lg:w-auto sm:flex-row">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#1a1a1a]/40" />
                <input
                  type="text"
                  placeholder="Search menu..."
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  className="w-full rounded-full bg-[#f9f8f6] py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-[#C37A65]/30"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min ₹"
                  value={minPrice}
                  onChange={(event) => setMinPrice(event.target.value)}
                  className="w-24 rounded-full bg-[#f9f8f6] px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#C37A65]/30"
                />
                <span className="text-[#1a1a1a]/40">-</span>
                <input
                  type="number"
                  placeholder="Max ₹"
                  value={maxPrice}
                  onChange={(event) => setMaxPrice(event.target.value)}
                  className="w-24 rounded-full bg-[#f9f8f6] px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#C37A65]/30"
                />
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp>
          <p className="mb-12 text-sm text-[#1a1a1a]/55">
            Prices shown are starting estimates. Final availability, delivery, and total are confirmed on WhatsApp checkout.
          </p>
        </FadeUp>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product, index) => (
              <FadeUp key={product.id} delay={(index % 4) * 100}>
                <ProductCard product={product} />
              </FadeUp>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-[#1a1a1a]/5 bg-white py-20 text-center">
            <h3 className="mb-2 text-2xl font-black text-[#1a1a1a]">No items found</h3>
            <p className="text-[#1a1a1a]/50">Try adjusting your search or price filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
