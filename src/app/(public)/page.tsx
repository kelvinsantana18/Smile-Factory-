import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { BUSINESS_INFO, TOKEN_PRICING } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Home | The Smile Factory',
  description:
    "Welcome to The Smile Factory — Brigantine's favorite family arcade since 2006. Over 41 games, birthday parties, prizes, and fun for all ages!",
}

export default function HomePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@700;800;900&family=Work+Sans:wght@300;400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

        .font-headline { font-family: 'Epilogue', sans-serif; }
        .font-body-custom { font-family: 'Work Sans', sans-serif; }

        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          display: inline-block;
          vertical-align: middle;
        }
        .material-symbols-filled {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          display: inline-block;
          vertical-align: middle;
        }

        .diamond-plate {
          background-color: #fcfcfc;
          background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0l2 13 13 2-13 2-2 13-2-13-13-2 13-2z' fill='%23f1f1f1' fill-opacity='0.4'/%3E%3C/svg%3E");
        }
        .factory-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20l20 20M0 40L20 20M20 0l20 20M0 20L20 0' stroke='%23e5e7eb' stroke-width='0.5' fill='none'/%3E%3C/svg%3E");
        }
        .blueprint-gears {
          background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 70c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 10c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20zm0-25c2.2 0 4-1.8 4-4V45c0-2.2-1.8-4-4-4s-4 1.8-4 4v6c0 2.2 1.8 4 4 4zm43.3 18c1.6 1.6 4.1 1.6 5.7 0l4.2-4.2c1.6-1.6 1.6-4.1 0-5.7s-4.1-1.6-5.7 0l-4.2 4.2c-1.6 1.6-1.6 4.1 0 5.7zm11.7 43.3c0 2.2 1.8 4 4 4h6c2.2 0 4-1.8 4-4s-1.8-4-4-4h-6c-2.2 0-4 1.8-4 4zm-18 43.3c1.6 1.6 4.1 1.6 5.7 0l4.2-4.2c1.6-1.6 1.6-4.1 0-5.7s-4.1-1.6-5.7 0l-4.2 4.2c-1.6 1.6-1.6 4.1 0 5.7zM100 155c-2.2 0-4 1.8-4 4v6c0 2.2 1.8 4 4 4s4-1.8 4-4v-6c0-2.2-1.8-4-4-4zm-43.3-18c-1.6-1.6-4.1-1.6-5.7 0l-4.2 4.2c-1.6 1.6-1.6 4.1 0 5.7s4.1 1.6 5.7 0l4.2-4.2c1.6-1.6-1.6-4.1 0-5.7zM45 100c0-2.2-1.8-4-4-4h-6c-2.2 0-4 1.8-4 4s1.8 4 4 4h6c2.2 0 4-1.8 4-4zm11.7-43.3c-1.6-1.6-4.1-1.6-5.7 0l-4.2 4.2c-1.6 1.6-1.6 4.1 0 5.7s4.1 1.6 5.7 0l4.2-4.2c1.6-1.6-1.6-4.1 0-5.7z' fill='%23e5e7eb' fill-opacity='0.4'/%3E%3C/svg%3E");
        }

        .sfac-primary { color: #FF0000; }
        .sfac-bg-primary { background-color: #FF0000; }
        .sfac-border-primary { border-color: #FF0000; }
      `}</style>

      <div className="bg-[#f8f5f5] text-[#2d2f2f] font-body-custom diamond-plate overflow-x-hidden">

        {/* ── Hero ── */}
        <section className="relative min-h-screen flex items-center justify-center px-6 blueprint-gears">
          <div className="max-w-3xl w-full flex flex-col items-center text-center gap-6 relative z-10 py-20">

            {/* Badge */}
            <span className="inline-block px-4 py-1.5 bg-red-100/80 text-red-600 rounded-full text-xs font-black uppercase tracking-widest border border-red-200 font-headline">
              FAMILY FUN SINCE {BUSINESS_INFO.established}
            </span>

            {/* "WELCOME TO" italic label */}
            <p className="font-headline font-black italic text-3xl md:text-4xl text-zinc-300 uppercase tracking-tighter -mb-4">
              WELCOME TO
            </p>

            {/* Centered logo */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 drop-shadow-xl">
              <Image
                src="/branding/smile-factory-logo.png"
                alt="The Smile Factory Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Brand name headline */}
            <h1
              className="font-headline font-black italic uppercase text-5xl md:text-7xl text-red-600 tracking-tighter leading-none -mt-4"
              style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.08)' }}
            >
              THE SMILE FACTORY!
            </h1>

            {/* Subtext */}
            <p className="text-lg text-[#5a5c5c] max-w-xl leading-relaxed font-body-custom">
              Brigantine&apos;s favorite arcade and family fun center since {BUSINESS_INFO.established}.
              With over {BUSINESS_INFO.machineCount} games, birthday party packages, and a prize
              counter bursting with rewards — smiles are guaranteed!
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <Link
                href="/parties"
                className="sfac-bg-primary text-white px-10 py-4 rounded-full font-headline font-bold text-lg flex items-center gap-2 hover:opacity-90 transition-all shadow-xl uppercase"
              >
                BOOK A PARTY
                <span className="material-symbols-outlined text-lg">search</span>
              </Link>
              <Link
                href="/pricing"
                className="bg-white text-[#2d2f2f] border border-gray-300 px-10 py-4 rounded-full font-headline font-bold text-lg flex items-center gap-2 hover:border-red-400 hover:text-red-600 transition-all shadow-md uppercase"
              >
                VIEW PRICING
                <span className="material-symbols-outlined text-lg">desktop_windows</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Our Mission ── */}
        <section className="py-24 px-6 bg-zinc-50/80 relative">
          <div className="absolute inset-0 factory-pattern opacity-50 pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-headline text-5xl font-black mb-4 uppercase tracking-tighter italic text-[#2d2f2f]">
                  Why Families Love Us<br />
                </h2>
                <p className="text-lg text-[#5a5c5c] font-body-custom">
                  We don&apos;t just provide games — we assemble experiences. Every ticket, every light,
                  and every prize is calibrated for maximum fun.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="material-symbols-outlined text-4xl text-red-600">settings_suggest</span>
                <span className="material-symbols-outlined text-4xl text-red-200">build</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: 'bolt',
                  title: `${BUSINESS_INFO.machineCount}+ GAMES`,
                  desc: 'From classic favorites to the latest arcade hits — something for every age and skill level.',
                },
                {
                  icon: 'celebration',
                  title: 'BIRTHDAY PARTIES',
                  desc: 'Private party room, pizza, drinks, tokens, and 2 hours of non-stop factory fun.',
                },
                {
                  icon: 'military_tech',
                  title: 'PRIZE COUNTER',
                  desc: 'Win tickets and redeem them for awesome prizes — from small toys to big rewards.',
                },
                {
                  icon: 'groups',
                  title: 'FAMILY FUN',
                  desc: 'A safe, clean, and welcoming space where families have made memories since 2006.',
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-white p-10 rounded-lg hover:shadow-xl transition-all group border border-gray-100"
                >
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mb-8 group-hover:rotate-180 transition-transform duration-700 border border-red-200">
                    <span className="material-symbols-filled text-3xl">{card.icon}</span>
                  </div>
                  <h3 className="font-headline text-xl font-black mb-4 uppercase tracking-tight text-[#2d2f2f]">
                    {card.title}
                  </h3>
                  <p className="text-[#5a5c5c] leading-relaxed font-body-custom text-sm">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Token Pricing ── */}
        <section className="py-24 px-6 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline text-5xl font-black uppercase tracking-tighter italic text-[#2d2f2f] mb-4">
                Token <span className="text-red-600">Pricing</span>
              </h2>
              <p className="text-lg text-[#5a5c5c] font-body-custom">
                Grab your tokens and start playing! The more you buy, the more you save.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TOKEN_PRICING.map((tier) => {
                const isBestValue = tier.price === 20
                return (
                  <div
                    key={tier.price}
                    className={`relative bg-white rounded-lg overflow-hidden text-center transition-all hover:shadow-xl border ${
                      isBestValue
                        ? 'border-red-500 shadow-lg shadow-red-100 ring-2 ring-red-200'
                        : 'border-gray-100'
                    }`}
                  >
                    {isBestValue && (
                      <div className="sfac-bg-primary text-white px-3 py-1 text-xs font-black uppercase tracking-widest font-headline">
                        BEST VALUE — 10% SAVINGS
                      </div>
                    )}
                    <div className="p-10 flex flex-col items-center gap-3">
                      <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 border border-red-200">
                        <span className="material-symbols-filled text-3xl">toll</span>
                      </div>
                      <div className="font-headline text-5xl font-black text-red-600">${tier.price}</div>
                      <div className="font-headline text-2xl font-black text-[#2d2f2f] uppercase tracking-tight">
                        {tier.tokens} Tokens
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 border-2 border-[#2d2f2f] text-[#2d2f2f] px-10 py-4 rounded-full font-headline font-bold uppercase tracking-tight hover:bg-red-600 hover:text-white hover:border-red-600 transition-all"
              >
                SEE FULL PRICING DETAILS
                <span className="material-symbols-outlined text-lg">chevron_right</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── History / Stats ── */}
        <section className="py-24 px-6 overflow-hidden bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
              <div className="md:col-span-4 sfac-bg-primary text-white p-12 rounded-lg flex flex-col justify-between shadow-2xl">
                <div>
                  <h2 className="font-headline text-7xl font-black mb-6 italic tracking-tighter">
                    SINCE<br />{BUSINESS_INFO.established}
                  </h2>
                  <p className="text-xl font-medium opacity-90 font-body-custom">
                    A legacy built on laughter and high scores. We&apos;ve been the heart of
                    Brigantine&apos;s entertainment for nearly two decades.
                  </p>
                </div>
                <div className="mt-12">
                  <span className="material-symbols-outlined text-9xl opacity-20 transform -rotate-12">
                    history_edu
                  </span>
                </div>
              </div>

              <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-zinc-100 rounded-lg overflow-hidden min-h-[300px] relative group border border-zinc-200 shadow-md">
                  <img
                    src="/images/arcade-history-2006.jpg"
                    alt="The Smile Factory opening 2006"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white font-headline font-bold text-xl uppercase tracking-tighter">
                      The First Assembly ({BUSINESS_INFO.established})
                    </p>
                  </div>
                </div>

                <div className="bg-zinc-100 rounded-lg overflow-hidden min-h-[300px] relative group border border-zinc-200 shadow-md">
                  <img
                    src="/images/arcade-today.jpg"
                    alt="The Smile Factory today"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white font-headline font-bold text-xl uppercase tracking-tighter">
                      The Modern Era
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-2 bg-white p-12 rounded-lg border border-zinc-100 relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <span className="material-symbols-outlined text-[8rem]">settings</span>
                  </div>
                  <h4 className="font-headline text-2xl font-black mb-6 text-red-600 uppercase tracking-tight italic">
                    GROWING THE MACHINE
                  </h4>
                  <p className="text-[#5a5c5c] text-lg leading-relaxed mb-8 font-body-custom">
                    What started as a small collection of classic machines has grown into
                    Brigantine&apos;s premier family entertainment destination. We&apos;ve survived every
                    trend by leaning into what makes us special: the physical, social, and thrilling
                    experience of real-world arcade play.
                  </p>
                  <div className="flex flex-wrap items-center gap-10">
                    <div className="text-center">
                      <div className="text-4xl font-black font-headline text-[#2d2f2f]">{BUSINESS_INFO.machineCount}+</div>
                      <div className="text-xs uppercase font-bold text-red-600 tracking-widest mt-1">Machines</div>
                    </div>
                    <div className="w-px h-10 bg-zinc-200" />
                    <div className="text-center">
                      <div className="text-4xl font-black font-headline text-[#2d2f2f]">2006</div>
                      <div className="text-xs uppercase font-bold text-red-600 tracking-widest mt-1">Est.</div>
                    </div>
                    <div className="w-px h-10 bg-zinc-200" />
                    <div className="text-center">
                      <div className="text-4xl font-black font-headline text-[#2d2f2f]">5★</div>
                      <div className="text-xs uppercase font-bold text-red-600 tracking-widest mt-1">Rated</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonial ── */}
        <section className="py-24 px-6 bg-white relative overflow-hidden">
          <div className="absolute inset-0 factory-pattern opacity-30 pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="material-symbols-filled text-5xl text-red-600 mb-6 block">star</span>
            <blockquote className="font-headline text-2xl md:text-3xl font-bold italic leading-relaxed text-[#2d2f2f] uppercase tracking-tight mb-8">
              &ldquo;My kids absolutely love The Smile Factory! The arcade is clean, the staff is friendly,
              and the birthday party we had there was the best one yet. We&apos;ll definitely be back!&rdquo;
            </blockquote>
            <p className="font-body-custom font-semibold text-[#5a5c5c] uppercase tracking-widest text-sm">
              — A Happy Brigantine Family
            </p>
            <div className="flex items-center justify-center gap-1 mt-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="material-symbols-filled text-2xl text-red-600">star</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="py-24 px-6 blueprint-gears relative overflow-hidden">
          <div className="max-w-4xl mx-auto bg-zinc-900 text-white rounded-3xl p-12 md:p-20 text-center relative shadow-2xl border-4 border-red-600">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <span className="material-symbols-outlined text-[10rem]">precision_manufacturing</span>
            </div>
            <h2 className="font-headline text-4xl md:text-6xl font-black mb-8 leading-tight italic uppercase tracking-tighter">
              READY TO START THE MACHINE?
            </h2>
            <p className="text-lg opacity-80 mb-12 max-w-xl mx-auto font-body-custom">
              Join thousands of visitors who have found their smile at The Factory. Book your visit
              or party today — tokens are waiting!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/parties"
                className="sfac-bg-primary text-white px-12 py-5 rounded-full font-headline font-bold text-xl hover:scale-105 transition-transform shadow-xl uppercase"
              >
                BOOK A PARTY
              </Link>
              <Link
                href="/pricing"
                className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-12 py-5 rounded-full font-headline font-bold text-xl hover:bg-white/20 transition-all uppercase"
              >
                VIEW PRICING
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
