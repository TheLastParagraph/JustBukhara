"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react";
import { Product } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import FadeUp from "@/components/FadeUp";

export default function ProductClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div className="min-h-screen bg-[#fbfaf7] px-6 pb-20 pt-36 sm:px-10 lg:px-20 xl:px-28">
      <FadeUp>
        <Link href="/menu" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-black/55 hover:text-black">
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>
      </FadeUp>

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <FadeUp delay={100} className="grid aspect-square place-items-center rounded-lg bg-gradient-to-br from-[#c66e60] to-[#eed8cf] p-8 text-white">
          <div className="text-[7rem] font-black leading-none text-white/60 sm:text-[11rem]">
            {product.emoji}
          </div>
        </FadeUp>

        <FadeUp delay={200}>
          <span className="inline-flex rounded-full bg-[#f0efeb] px-4 py-2 text-xs font-black text-[#b95649]">
            {product.badge}
          </span>
          <h1 className="mt-5 text-5xl font-black leading-none sm:text-6xl">{product.name}</h1>
          <p className="mt-4 text-2xl font-black text-[#b95649]">{product.displayPrice}</p>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-black/62">{product.longDesc}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center rounded-full bg-white p-1 shadow-sm ring-1 ring-black/5">
              <button
                type="button"
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                className="grid h-11 w-11 place-items-center rounded-full hover:bg-[#f0efeb]"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-12 text-center text-sm font-black">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((current) => current + 1)}
                className="grid h-11 w-11 place-items-center rounded-full hover:bg-[#f0efeb]"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              className="inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-bold text-white transition hover:bg-[#2b241f]"
            >
              <ShoppingCart className="h-5 w-5" />
              {added ? "Added" : "Add to Cart"}
            </button>
          </div>

          <p className="mt-6 text-sm leading-6 text-black/50">
            Exact availability, portion size, customization, delivery, and final price are confirmed on WhatsApp checkout.
          </p>
        </FadeUp>
      </div>
    </div>
  );
}
