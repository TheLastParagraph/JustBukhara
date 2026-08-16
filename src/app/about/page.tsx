import { Award, Clock, Users } from "lucide-react";
import FadeUp from "@/components/FadeUp";

export const metadata = {
  title: "About Us | Just Bukhara",
  description: "Learn about the story behind Just Bukhara, a registered micro-enterprise and highly rated local restaurant and bakery in Magam, Kashmir.",
};

export default function About() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* About Hero */}
      <div 
        className="relative w-full pt-48 pb-24 bg-cover bg-center flex flex-col items-center justify-center text-center rounded-b-[40px] overflow-hidden"
        style={{ backgroundImage: "url('/Hero.png')" }}
      >
        {/* Overlay removed as per user request */}
        <FadeUp className="relative z-10 max-w-2xl px-6">
          <div className="inline-flex items-center gap-2 text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            Our Story
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            A Legacy of Taste
          </h1>
          <p className="text-white/90 text-lg font-light leading-relaxed">
            From humble beginnings to a local culinary landmark in Magam. Discover the passion behind every dish we serve.
          </p>
        </FadeUp>
      </div>

      {/* Story Content */}
      <section className="py-24 max-w-[1000px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <h2 className="text-4xl font-serif mb-6 text-[#1a1a1a]">Our Journey</h2>
            <div className="space-y-6 text-[#1a1a1a]/70 font-light leading-relaxed text-lg">
              <p>
                Just Bukhara began its journey in 2022 with a simple mission: to bring premium quality dining and authentic bakery goods to the heart of Magam.
              </p>
              <p>
                Registered as a micro-enterprise under UDYAM-JK-04-0004523, we have quickly grown to become one of the highest-rated local establishments, maintaining a stellar 4.6/5 rating on Google Maps across hundreds of reviews.
              </p>
              <p>
                Whether it's our signature smoky Tandoori Chicken, the traditional grand Wazwan for special occasions, or our daily fresh-baked biscuits and custom cakes, we take immense pride in preserving authentic flavors while maintaining the highest hygiene standards.
              </p>
            </div>
          </FadeUp>
          
          <div className="grid grid-cols-1 gap-6">
            {/* Stat Card 1 */}
            <FadeUp delay={0} className="bg-[#f9f8f6] border border-[#1a1a1a]/5 p-8 rounded-3xl flex items-start gap-6">
              <div className="w-14 h-14 bg-[#e8dcd6] text-[#C37A65] rounded-full flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-2 text-[#1a1a1a]">Since 2022</h3>
                <p className="text-[#1a1a1a]/60 font-light text-sm">Serving the community of Magam with dedication and passion.</p>
              </div>
            </FadeUp>

            {/* Stat Card 2 */}
            <FadeUp delay={100} className="bg-[#f9f8f6] border border-[#1a1a1a]/5 p-8 rounded-3xl flex items-start gap-6">
              <div className="w-14 h-14 bg-[#e8dcd6] text-[#C37A65] rounded-full flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-2 text-[#1a1a1a]">4.6/5 Rating</h3>
                <p className="text-[#1a1a1a]/60 font-light text-sm">Consistently highly rated by our wonderful customers on Google.</p>
              </div>
            </FadeUp>

            {/* Stat Card 3 */}
            <FadeUp delay={200} className="bg-[#f9f8f6] border border-[#1a1a1a]/5 p-8 rounded-3xl flex items-start gap-6">
              <div className="w-14 h-14 bg-[#e8dcd6] text-[#C37A65] rounded-full flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-2 text-[#1a1a1a]">Registered</h3>
                <p className="text-[#1a1a1a]/60 font-light text-sm">Certified Micro-Enterprise (UDYAM-JK-04-0004523).</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}
