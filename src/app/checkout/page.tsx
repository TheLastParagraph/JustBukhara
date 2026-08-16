"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import FadeUp from "@/components/FadeUp";

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    instructions: "",
  });

  if (cart.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fbfaf7] px-6 pb-20 pt-36">
        <FadeUp className="rounded-lg bg-white p-10 text-center shadow-sm ring-1 ring-black/5">
          <h1 className="text-3xl font-black">Cart is empty</h1>
          <button type="button" onClick={() => router.push("/menu")} className="mt-5 text-sm font-bold text-[#b95649]">
            Return to shop
          </button>
        </FadeUp>
      </div>
    );
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    let orderDetails = "*NEW ORDER - JUST BUKHARA*\\n\\n";
    orderDetails += "*Customer Details:*\\n";
    orderDetails += `Name: ${formData.name}\\n`;
    orderDetails += `Phone: ${formData.phone}\\n`;
    orderDetails += `Address: ${formData.address}\\n`;

    if (formData.instructions) {
      orderDetails += `Notes: ${formData.instructions}\\n`;
    }

    orderDetails += "\\n*Order Items:*\\n";
    cart.forEach((item, index) => {
      orderDetails += `${index + 1}. ${item.product.name} x${item.quantity} - est. ₹${item.product.price * item.quantity}\\n`;
    });
    orderDetails += `\\n*Estimated subtotal: ₹${cartTotal}*\\n`;
    orderDetails += "Please confirm availability, delivery charge, final total, and payment method.";

    clearCart();
    window.open(`https://wa.me/919597710592?text=${encodeURIComponent(orderDetails)}`, "_blank");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[#fbfaf7] px-6 pb-20 pt-36 sm:px-10 lg:px-20 xl:px-28">
      <FadeUp>
        <Link href="/cart" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-black/55 hover:text-black">
          <ArrowLeft className="h-4 w-4" />
          Back to Cart
        </Link>
      </FadeUp>

      <FadeUp delay={100} className="mb-10">
        <p className="text-sm font-bold text-[#b95649]">Delivery details</p>
        <h1 className="text-5xl font-black leading-none">Checkout</h1>
      </FadeUp>

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <FadeUp delay={200}>
          <form onSubmit={handleSubmit} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-bold">
                Full Name *
                <input
                  required
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  className="rounded-lg bg-[#f0efeb] px-4 py-4 font-normal outline-none ring-black/10 focus:ring-2"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Phone Number *
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                  className="rounded-lg bg-[#f0efeb] px-4 py-4 font-normal outline-none ring-black/10 focus:ring-2"
                  placeholder="+91 99999 99999"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Complete Address *
                <textarea
                  required
                  rows={3}
                  value={formData.address}
                  onChange={(event) => setFormData({ ...formData, address: event.target.value })}
                  className="resize-none rounded-lg bg-[#f0efeb] px-4 py-4 font-normal outline-none ring-black/10 focus:ring-2"
                  placeholder="House, road, landmark, area"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Special Instructions
                <textarea
                  rows={3}
                  value={formData.instructions}
                  onChange={(event) => setFormData({ ...formData, instructions: event.target.value })}
                  className="resize-none rounded-lg bg-[#f0efeb] px-4 py-4 font-normal outline-none ring-black/10 focus:ring-2"
                  placeholder="Cake message, delivery time, spice level, allergy notes"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-green-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-green-700"
            >
              <MessageCircle className="h-5 w-5" />
              Place Order via WhatsApp
            </button>
            <p className="mt-4 text-center text-xs leading-5 text-black/50">
              Payment, delivery charge, and final total are confirmed by Just Bukhara on WhatsApp.
            </p>
          </form>
        </FadeUp>

        <FadeUp delay={300}>
          <aside className="h-max rounded-lg bg-white p-6 shadow-sm ring-1 ring-black/5 lg:sticky lg:top-8">
            <h2 className="text-2xl font-black">Your Order</h2>
            <div className="mt-6 max-h-[320px] space-y-4 overflow-y-auto border-b border-black/10 pb-6">
              {cart.map((item) => (
                <div key={item.product.id} className="flex justify-between gap-4 text-sm">
                  <span className="text-black/65">
                    <strong className="text-black">{item.quantity}x</strong> {item.product.name}
                  </span>
                  <span className="font-bold">₹{item.product.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-end justify-between">
              <span className="font-black">Estimated total</span>
              <span className="text-3xl font-black text-[#b95649]">₹{cartTotal}</span>
            </div>
          </aside>
        </FadeUp>
      </div>
    </div>
  );
}
