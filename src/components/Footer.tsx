import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f9f8f6] text-[#1a1a1a] overflow-hidden relative border-t border-[#1a1a1a]/10">
      <div className="px-6 sm:px-12 lg:px-20 xl:px-28 pb-10 pt-16 lg:pt-20 relative z-10 max-w-[1600px] mx-auto">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-12 border-b border-[#1a1a1a]/10 pb-16 lg:pb-20">
          
          {/* Newsletter Section */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="mb-4 text-3xl md:text-4xl font-serif text-[#1a1a1a]">Join our newsletter</h2>
            <p className="mb-8 text-[#1a1a1a]/70 text-sm font-light max-w-md leading-relaxed">
              Subscribe to get exclusive updates on our seasonal Kashmiri delicacies, new bakery items, and special offers.
            </p>
            <form className="flex w-full max-w-[420px] flex-col sm:flex-row items-stretch sm:items-center rounded-lg sm:rounded-sm bg-transparent sm:bg-white p-0 sm:p-1 shadow-none sm:shadow-sm ring-0 sm:ring-1 ring-[#1a1a1a]/10 focus-within:ring-[#C37A65]/50 transition-shadow gap-3 sm:gap-0">
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full sm:min-w-0 sm:flex-1 bg-white sm:bg-transparent px-5 py-4 sm:py-3 text-sm text-[#1a1a1a] placeholder-[#1a1a1a]/40 outline-none rounded-full sm:rounded-none ring-1 ring-[#1a1a1a]/10 sm:ring-0"
              />
              <button type="button" className="w-full sm:w-auto rounded-full sm:rounded-sm bg-[#1a1a1a] hover:bg-[#C37A65] transition-colors px-8 py-4 sm:py-3 text-xs font-bold tracking-widest text-white uppercase">
                Subscribe
              </button>
            </form>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10 lg:gap-10 lg:pl-10">
            
            <div className="flex flex-col">
              <h3 className="font-serif text-lg mb-6 text-[#C37A65]">Explore</h3>
              <div className="flex flex-col gap-4 text-sm font-medium text-[#1a1a1a]/70">
                <Link href="/" className="hover:text-[#1a1a1a] transition-colors w-fit">Home</Link>
                <Link href="/about" className="hover:text-[#1a1a1a] transition-colors w-fit">About Us</Link>
                <Link href="/menu" className="hover:text-[#1a1a1a] transition-colors w-fit">Full Menu</Link>
                <Link href="/#bakery" className="hover:text-[#1a1a1a] transition-colors w-fit">Bakery</Link>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="font-serif text-lg mb-6 text-[#C37A65]">Support</h3>
              <div className="flex flex-col gap-4 text-sm font-medium text-[#1a1a1a]/70">
                <Link href="/menu" className="hover:text-[#1a1a1a] transition-colors w-fit">FAQ</Link>
                <Link href="/privacy" className="hover:text-[#1a1a1a] transition-colors w-fit">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-[#1a1a1a] transition-colors w-fit">Terms & Conditions</Link>
                <a href="tel:+919597710592" className="hover:text-[#1a1a1a] transition-colors w-fit">Custom Orders</a>
              </div>
            </div>

            <div className="flex flex-col col-span-2 sm:col-span-1">
              <h3 className="font-serif text-lg mb-6 text-[#C37A65]">Contact</h3>
              <div className="flex flex-col gap-4 text-sm font-medium text-[#1a1a1a]/70">
                <a href="tel:+919597710592" className="group flex items-center gap-3 hover:text-[#1a1a1a] transition-colors">
                  <Phone className="w-4 h-4 text-[#C37A65] group-hover:scale-110 transition-transform shrink-0" />
                  +91 95977 10592
                </a>
                <a href="mailto:info@justbukhara.com" className="group flex items-center gap-3 hover:text-[#1a1a1a] transition-colors">
                  <Mail className="w-4 h-4 text-[#C37A65] group-hover:scale-110 transition-transform shrink-0" />
                  info@justbukhara.com
                </a>
                <div className="flex items-start gap-3 mt-2 text-[#1a1a1a]/60">
                  <MapPin className="w-4 h-4 text-[#C37A65] mt-0.5 shrink-0" />
                  <span className="leading-snug text-xs">Opposite Indian Oil<br/>Petrol Pump, Magam,<br/>J&K 193401</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="flex flex-col">
            {/* Social Icons */}
            <div className="flex items-center gap-4 mb-6 md:mb-12">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-[#1a1a1a]/10 flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-[#1a1a1a]/10 flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
            
            {/* Massive Brand Name */}
            <p className="text-[clamp(2.25rem,10vw,10rem)] font-serif leading-[0.8] tracking-tight text-[#1a1a1a] break-words">
              Just Bukhara.
            </p>
          </div>
          
          <p className="max-w-[250px] text-[11px] leading-relaxed text-[#1a1a1a]/50 md:text-right md:pb-3">
            Fresh, careful food and bakery craft from Magam. &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
