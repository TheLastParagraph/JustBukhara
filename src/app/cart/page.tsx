"use client";

import Link from "next/link";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import FadeUp from "@/components/FadeUp";

export default function CartPage() {
  const { cart, cartTotal, removeFromCart, updateQuantity } = useCart();
  const router = useRouter();

  if (cart.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fbfaf7] px-6 pb-20 pt-36">
        <FadeUp className="w-full max-w-lg rounded-lg bg-white p-10 text-center shadow-sm ring-1 ring-black/5">
          <ShoppingBag className="mx-auto mb-6 h-16 w-16 text-black/20" />
          <h1 className="text-3xl font-black">Your cart is empty</h1>
          <p className="mt-4 text-sm leading-6 text-black/58">
            Add restaurant food, cakes, bakery items, sweets, or Kashmiri products before checkout.
          </p>
          <Link
            href="/menu"
            className="mt-8 inline-flex rounded-full bg-black px-7 py-3 text-sm font-bold text-white"
          >
            Shop Menu
          </Link>
        </FadeUp>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fbfaf7] px-6 pb-20 pt-36 sm:px-10 lg:px-20 xl:px-28">
      <FadeUp>
        <Link href="/menu" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-black/55 hover:text-black">
          <ArrowLeft className="h-4 w-4" />
          Continue Shopping
        </Link>
      </FadeUp>

      <FadeUp delay={100} className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold text-[#b95649]">Just Bukhara</p>
          <h1 className="text-5xl font-black leading-none">Your Cart</h1>
        </div>
        <p className="max-w-md text-sm leading-6 text-black/55">
          Delivery and final availability are confirmed on WhatsApp after checkout.
        </p>
      </FadeUp>

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="grid gap-4">
          {cart.map((item, i) => (
            <FadeUp key={item.product.id} delay={200 + (i * 100)}>
              <article className="grid gap-5 rounded-lg bg-white p-5 shadow-sm ring-1 ring-black/5 sm:grid-cols-[96px_1fr_auto] sm:items-center">
                <div className="grid h-24 w-24 place-items-center rounded-lg bg-gradient-to-br from-[#c66e60] to-[#eed8cf] text-3xl font-black text-white/70">
                  {item.product.emoji}
                </div>
                <div>
                  <h2 className="text-xl font-black">{item.product.name}</h2>
                  <p className="mt-1 text-sm font-bold text-[#b95649]">{item.product.displayPrice}</p>
                  <p className="mt-2 text-sm text-black/55">{item.product.desc}</p>
                </div>
                <div className="flex items-center justify-between gap-4 sm:justify-end">
                  <div className="flex items-center rounded-full bg-[#f0efeb] p-1">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="grid h-9 w-9 place-items-center rounded-full hover:bg-white"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-9 text-center text-sm font-black">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="grid h-9 w-9 place-items-center rounded-full hover:bg-white"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="w-20 text-right text-lg font-black">₹{item.product.price * item.quantity}</p>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.product.id)}
                    className="grid h-9 w-9 place-items-center rounded-full text-black/40 hover:bg-red-50 hover:text-red-600"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={300}>
          <aside className="h-max rounded-lg bg-white p-6 shadow-sm ring-1 ring-black/5 lg:sticky lg:top-8">
          <h2 className="text-2xl font-black">Order Summary</h2>
          <div className="mt-6 space-y-4 border-b border-black/10 pb-6 text-sm">
            <div className="flex justify-between">
              <span className="text-black/55">Subtotal estimate</span>
              <span className="font-black">₹{cartTotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-black/55">Delivery</span>
              <span className="font-bold text-green-700">Confirmed on WhatsApp</span>
            </div>
          </div>
          <div className="mt-6 flex items-end justify-between">
            <span className="font-black">Estimated total</span>
            <span className="text-3xl font-black text-[#b95649]">₹{cartTotal}</span>
          </div>
          <button
            type="button"
            onClick={() => router.push("/checkout")}
            className="mt-7 w-full rounded-full bg-black px-6 py-4 text-sm font-bold text-white transition hover:bg-[#2b241f]"
          >
            Proceed to Checkout
          </button>
        </aside>
        </FadeUp>
      </div>
    </div>
  );
}
