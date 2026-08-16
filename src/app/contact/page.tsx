import FadeUp from "@/components/FadeUp";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "Contact Us | Just Bukhara",
  description: "Get in touch with Just Bukhara in Magam for orders, catering, custom cakes, and inquiries.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full pb-20 bg-[#fbfaf7] min-h-screen">
      {/* Contact Hero */}
      <div 
        className="relative w-full pt-48 pb-24 bg-cover bg-center flex flex-col items-center justify-center text-center rounded-b-[40px] overflow-hidden"
        style={{ backgroundImage: "url('/Hero.png')" }}
      >
        <div className="absolute inset-0 bg-[#8f453b]/35" />
        <FadeUp className="relative z-10 max-w-2xl px-6">
          <div className="inline-flex items-center gap-2 text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            Reach Out
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Contact Us
          </h1>
          <p className="text-white/90 text-lg font-light leading-relaxed">
            Have a question about our menu, custom cakes, or catering? We'd love to hear from you.
          </p>
        </FadeUp>
      </div>

      <div className="max-w-[1200px] mx-auto w-full px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Contact Information */}
          <div className="grid gap-8">
            <FadeUp>
              <h2 className="text-4xl font-black text-[#1a1a1a] mb-4">Get in Touch</h2>
              <p className="text-[#1a1a1a]/60 leading-relaxed text-lg">
                Whether you're planning a grand Wazwan, looking for a custom celebration cake, or simply want to say hello, our team is here for you.
              </p>
            </FadeUp>

            <div className="grid gap-6">
              <FadeUp delay={100} className="bg-white border border-[#1a1a1a]/5 p-6 rounded-3xl flex items-center gap-6 shadow-sm">
                <div className="w-14 h-14 bg-[#f0efeb] text-[#C37A65] rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-1 text-[#1a1a1a]">Visit Us</h3>
                  <p className="text-[#1a1a1a]/60 font-light text-sm">Magam, Jammu and Kashmir 193401</p>
                </div>
              </FadeUp>

              <FadeUp delay={200} className="bg-white border border-[#1a1a1a]/5 p-6 rounded-3xl flex items-center gap-6 shadow-sm">
                <div className="w-14 h-14 bg-[#f0efeb] text-[#C37A65] rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-1 text-[#1a1a1a]">Call or WhatsApp</h3>
                  <p className="text-[#1a1a1a]/60 font-light text-sm">+91 95977 10592</p>
                </div>
              </FadeUp>

              <FadeUp delay={300} className="bg-white border border-[#1a1a1a]/5 p-6 rounded-3xl flex items-center gap-6 shadow-sm">
                <div className="w-14 h-14 bg-[#f0efeb] text-[#C37A65] rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-1 text-[#1a1a1a]">Email Us</h3>
                  <p className="text-[#1a1a1a]/60 font-light text-sm">contact@justbukhara.com</p>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* Contact Form */}
          <FadeUp delay={400} className="bg-white rounded-[40px] p-8 md:p-10 shadow-sm border border-[#1a1a1a]/5">
            <h2 className="text-3xl font-black text-[#1a1a1a] mb-8">Send a Message</h2>
            
            <form action="https://api.web3forms.com/submit" method="POST" className="grid gap-6">
              <input type="hidden" name="access_key" value="23b87d40-870f-45ed-a145-92e369c526c7" />
              <input type="hidden" name="subject" value="New Message from Just Bukhara Website" />

              <label className="grid gap-2 text-sm font-bold text-[#1a1a1a]">
                Your Name *
                <input
                  type="text"
                  name="name"
                  required
                  className="rounded-xl bg-[#f9f8f6] px-5 py-4 font-normal outline-none ring-black/5 focus:ring-2 focus:ring-[#C37A65]/30 transition-all text-[#1a1a1a]"
                  placeholder="John Doe"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-[#1a1a1a]">
                Email Address *
                <input
                  type="email"
                  name="email"
                  required
                  className="rounded-xl bg-[#f9f8f6] px-5 py-4 font-normal outline-none ring-black/5 focus:ring-2 focus:ring-[#C37A65]/30 transition-all text-[#1a1a1a]"
                  placeholder="john@example.com"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-[#1a1a1a]">
                Your Message *
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="resize-none rounded-xl bg-[#f9f8f6] px-5 py-4 font-normal outline-none ring-black/5 focus:ring-2 focus:ring-[#C37A65]/30 transition-all text-[#1a1a1a]"
                  placeholder="How can we help you?"
                />
              </label>

              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-full bg-black px-6 py-4 text-sm font-bold text-white transition hover:bg-[#2b241f]"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
