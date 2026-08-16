import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CakeSlice, ChefHat, Cookie, MapPin, Phone } from "lucide-react";
import FadeUp from "@/components/FadeUp";

const picks = [
  { label: "Seasonal", name: "Custom Cakes", color: "from-[#d8edf0] to-[#f7fbfb]", image: "/cake.jpg" },
  { label: "Signature", name: "Tandoori Chicken", color: "from-[#f3dcc7] to-[#fff7ef]", image: "/chicken.jpg" },
  { label: "Fresh", name: "Bakery Biscuits", color: "from-[#d7c2ef] to-[#fbf4ff]", image: "/biscuits.jpg" },
  { label: "Classic", name: "Kashmiri Sweets", color: "from-[#e7b2a7] to-[#fff0ed]", image: "/sweets.jpg" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfaf7] text-[#11100d]">
      <div className="w-full overflow-hidden bg-[#f8f5ef]">
        <section className="relative h-[620px] overflow-hidden bg-[#c66e60] px-8 pb-10 pt-28 text-white sm:h-[690px] sm:px-12 lg:h-[720px] lg:px-16 xl:px-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_35%,rgba(255,215,198,0.5),transparent_34%),linear-gradient(135deg,#b95649_0%,#d69188_100%)]" />
          <Image
            src="/Hero.png"
            alt="Chocolate chip cookies falling into a glass of milk"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[58%_48%]"
          />
          <div className="pointer-events-none absolute -bottom-9 left-8 text-[8rem] font-black leading-none text-white/10 sm:text-[11rem] lg:left-16 xl:left-20">
            Pantry
          </div>

          <div className="relative z-10 max-w-[460px] pt-4 sm:pt-8">
            <h1 className="text-[2.8rem] font-black leading-[0.98] tracking-normal drop-shadow-sm sm:text-[4.1rem] lg:text-[4.6rem]">
              Flourished Fantasy Bakery
            </h1>
            <p className="mt-20 max-w-[440px] text-xs leading-5 text-white/80 sm:mt-24">
              Just Bukhara brings warm bakery craft, comfort food, and celebration-ready cakes together in Magam.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="tel:+919597710592"
                className="rounded-full bg-white px-5 py-3 text-xs font-bold text-[#17120f] transition hover:bg-[#f3eee7]"
              >
                Order Now
              </a>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-3 text-xs font-semibold text-white ring-1 ring-white/25 transition hover:bg-white/20"
              >
                View Menu <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        <section id="restaurant" className="bg-[#fbfaf7] px-8 py-16 sm:px-12 lg:px-20 xl:px-28">
          <FadeUp>
            <div className="mb-7 flex items-center gap-2 text-sm font-semibold">
              <span className="h-2 w-2 rounded-full bg-black" />
              Our Picks
            </div>
          </FadeUp>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-start">
            <div>
              <FadeUp delay={100}>
                <h2 className="text-4xl font-black leading-none">From the Kitchen</h2>
              </FadeUp>
              <div className="mt-7 grid grid-cols-2 gap-5">
                {picks.slice(0, 2).map((pick, i) => (
                  <FadeUp key={pick.name} delay={200 + i * 100}>
                    <div className={`relative aspect-[1.03] overflow-hidden rounded-lg bg-gradient-to-br ${pick.color}`}>
                      <span className="absolute left-4 top-4 z-10 rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold">
                        {pick.label}
                      </span>
                      <Image
                        src={pick.image}
                        alt={pick.name}
                        fill
                        sizes="220px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="mt-3 text-xs font-bold">{pick.name}</p>
                  </FadeUp>
                ))}
              </div>
            </div>
            <FadeUp delay={150} className="grid gap-6 lg:pt-24">
              <p className="max-w-[420px] text-sm leading-6 text-[#1f1a15]/62">
                From the Kitchen brings fresh, handcrafted flavors made with care and passion. Every dish and dessert is prepared with quality ingredients and a warm, homemade taste.
              </p>
              <Link
                href="/menu"
                className="inline-flex w-max items-center gap-2 rounded-full bg-black px-4 py-2 text-[10px] font-bold text-white"
              >
                Shop All <ArrowUpRight className="h-3 w-3" />
              </Link>
              <div className="mt-4 grid grid-cols-2 gap-5">
                {picks.slice(2).map((pick, index) => (
                  <FadeUp key={pick.name} delay={300 + index * 100} className={index === 0 ? "lg:mt-14" : ""}>
                    <div className={`relative aspect-[1.03] overflow-hidden rounded-lg bg-gradient-to-br ${pick.color}`}>
                      <span className="absolute left-4 top-4 z-10 rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold">
                        {pick.label}
                      </span>
                      <Image
                        src={pick.image}
                        alt={pick.name}
                        fill
                        sizes="220px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="mt-3 text-xs font-bold">{pick.name}</p>
                  </FadeUp>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        <section id="bakery" className="bg-[#fbfaf7] px-8 py-12 sm:px-12 lg:px-20 xl:px-28">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Cakes", CakeSlice, "Birthday, wedding, and celebration cakes finished to order."],
              ["Restaurant", ChefHat, "Tandoori chicken, Wazwan, rolls, pizza, and everyday meals."],
              ["Bakery", Cookie, "Biscuits, sweets, pastries, and tea-time boxes baked fresh."],
            ].map(([title, Icon, copy], i) => (
              <FadeUp key={title as string} delay={i * 150} className="rounded-lg bg-[#f0efeb] p-6">
                <Icon className="h-6 w-6" />
                <h3 className="mt-7 text-2xl font-black">{title as string}</h3>
                <p className="mt-4 text-sm leading-6 text-[#1f1a15]/60">{copy as string}</p>
              </FadeUp>
            ))}
          </div>
        </section>

        <section id="location" className="bg-[#fbfaf7] px-8 pb-16 pt-3 sm:px-12 lg:px-20 xl:px-28">
          <FadeUp className="grid gap-6 border-t border-black/10 pt-8 md:grid-cols-[1fr_1.1fr]">
            <div>
              <h2 className="text-2xl font-black">Visit Magam</h2>
              <p className="mt-4 text-sm leading-6 text-[#1f1a15]/60">
                Opposite Indian Oil Petrol Pump, Magam, Jammu and Kashmir 193401.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a href="tel:+919597710592" className="inline-flex items-center gap-3 rounded-full bg-black px-5 py-3 text-sm font-bold text-white">
                <Phone className="h-4 w-4" /> +91 95977 10592
              </a>
              <a
                href="https://maps.google.com/?q=Magam%20Jammu%20and%20Kashmir%20193401"
                className="inline-flex items-center gap-3 rounded-full bg-[#e9dfd6] px-5 py-3 text-sm font-bold text-black"
              >
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </FadeUp>
        </section>
      </div>
    </div>
  );
}
