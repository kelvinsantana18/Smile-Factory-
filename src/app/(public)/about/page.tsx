import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Us | The Smile Factory',
  description: `Learn about The Smile Factory — Brigantine's favorite family arcade since ${BUSINESS_INFO.established}. Our story, mission, and what makes us special.`,
}

export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@700;800;900&family=Work+Sans:wght@300;400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

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
        .font-display { font-family: 'Epilogue', sans-serif; }
        .font-body-sf { font-family: 'Work Sans', sans-serif; }

        .factory-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20l20 20M0 40L20 20M20 0l20 20M0 20L20 0' stroke='%23e5e7eb' stroke-width='0.5' fill='none'/%3E%3C/svg%3E");
        }
        .blueprint-gears {
          background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 70c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 10c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20zm0-25c2.2 0 4-1.8 4-4V45c0-2.2-1.8-4-4-4s-4 1.8-4 4v6c0 2.2 1.8 4 4 4zm43.3 18c1.6 1.6 4.1 1.6 5.7 0l4.2-4.2c1.6-1.6 1.6-4.1 0-5.7s-4.1-1.6-5.7 0l-4.2 4.2c-1.6 1.6-1.6 4.1 0 5.7zm11.7 43.3c0 2.2 1.8 4 4 4h6c2.2 0 4-1.8 4-4s-1.8-4-4-4h-6c-2.2 0-4 1.8-4 4zm-18 43.3c1.6 1.6 4.1 1.6 5.7 0l4.2-4.2c1.6-1.6 1.6-4.1 0-5.7s-4.1-1.6-5.7 0l-4.2 4.2c-1.6 1.6-1.6 4.1 0 5.7zM100 155c-2.2 0-4 1.8-4 4v6c0 2.2 1.8 4 4 4s4-1.8 4-4v-6c0-2.2-1.8-4-4-4zm-43.3-18c-1.6-1.6-4.1-1.6-5.7 0l-4.2 4.2c-1.6 1.6-1.6 4.1 0 5.7s4.1 1.6 5.7 0l4.2-4.2c1.6-1.6-1.6-4.1 0-5.7zM45 100c0-2.2-1.8-4-4-4h-6c-2.2 0-4 1.8-4 4s1.8 4 4 4h6c2.2 0 4-1.8 4-4zm11.7-43.3c-1.6-1.6-4.1-1.6-5.7 0l-4.2 4.2c-1.6 1.6-1.6 4.1 0 5.7s4.1 1.6 5.7 0l4.2-4.2c1.6-1.6-1.6-4.1 0-5.7z' fill='%23e5e7eb' fill-opacity='0.4'/%3E%3C/svg%3E");
        }
        .diamond-plate {
          background-color: #fcfcfc;
          background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0l2 13 13 2-13 2-2 13-2-13-13-2 13-2z' fill='%23f1f1f1' fill-opacity='0.4'/%3E%3C/svg%3E");
        }
      `}</style>

      <div className="bg-[#fcfcfc] text-[#2d2f2f] font-body-sf diamond-plate overflow-x-hidden">

        {/* ── Hero ── */}
        <section className="relative min-h-[819px] flex items-center justify-center px-6 blueprint-gears">
          <div className="max-w-screen-xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="inline-block px-4 py-1.5 bg-red-100/80 text-red-600 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-red-200 font-display">
                EST. {BUSINESS_INFO.established}
              </span>
              <h1 className="font-display text-6xl md:text-8xl font-black leading-none text-[#2d2f2f] mb-8 italic uppercase tracking-tighter">
                WELCOME TO <br />
                <span className="text-red-600" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.1)' }}>
                  OUR FACTORY
                </span>
              </h1>
              <p className="text-xl text-[#5a5c5c] max-w-xl mb-10 leading-relaxed font-body-sf">
                Where mechanical precision meets raw, unadulterated joy. We&apos;ve spent nearly
                two decades engineering the perfect environment for play.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/gallery"
                  className="bg-red-600 text-white px-10 py-4 rounded-full font-display font-bold text-lg flex items-center gap-2 hover:opacity-90 transition-all shadow-xl uppercase"
                >
                  EXPLORE THE FLOOR
                  <span className="material-symbols-outlined">precision_manufacturing</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="aspect-square bg-white p-4 rounded-lg shadow-2xl relative transform rotate-3 overflow-hidden">
                {/* Replace with a real arcade photo in /public/images/ */}
                <img
                  src="/images/about-hero.jpg"
                  alt="The Smile Factory Arcade Floor"
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700 rounded"
                />
                <div className="absolute inset-0 bg-red-500/10 mix-blend-multiply pointer-events-none" />
              </div>
              <div className="absolute -bottom-12 -left-12 font-display font-black text-9xl text-gray-200 opacity-50 select-none -z-10">
                SMILE
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Mission ── */}
        <section className="py-24 px-6 bg-zinc-50/80 relative">
          <div className="absolute inset-0 factory-pattern opacity-50 pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-display text-5xl font-black mb-4 uppercase tracking-tighter italic text-[#2d2f2f]">
                  Our Mission:<br />
                  <span className="text-red-600">Joy Engineered</span>
                </h2>
                <p className="text-lg text-[#5a5c5c] font-body-sf">
                  We don&apos;t just provide games — we assemble experiences. Every ticket, every
                  light, and every gear is calibrated for maximum impact.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="material-symbols-outlined text-4xl text-red-600">settings_suggest</span>
                <span className="material-symbols-outlined text-4xl text-red-200">build</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: 'bolt',
                  title: 'HIGH-OCTANE FUN',
                  desc: 'Velocity is our baseline. We curate games that challenge reflexes and ignite the competitive spirit of every Joy Assembler.',
                },
                {
                  icon: 'settings',
                  title: 'PRECISION ENGINEERING',
                  desc: 'Our floor is a living machine. From prize distribution to climate control, every detail is optimized for your comfort and thrill.',
                },
                {
                  icon: 'military_tech',
                  title: 'UNRIVALED QUALITY',
                  desc: "We maintain the highest standards in the industry. If it isn't the best version of the game, it doesn't belong on our factory floor.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-white p-10 rounded-lg hover:shadow-xl transition-all group border border-gray-100"
                >
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mb-8 group-hover:rotate-180 transition-transform duration-700 border border-red-200">
                    <span className="material-symbols-filled text-3xl">{card.icon}</span>
                  </div>
                  <h3 className="font-display text-2xl font-black mb-4 uppercase tracking-tight text-[#2d2f2f]">
                    {card.title}
                  </h3>
                  <p className="text-[#5a5c5c] leading-relaxed font-body-sf">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our History ── */}
        <section className="py-24 px-6 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
              {/* Red stat block */}
              <div className="md:col-span-4 bg-red-600 text-white p-12 rounded-lg flex flex-col justify-between shadow-2xl">
                <div>
                  <h2 className="font-display text-7xl font-black mb-6 italic tracking-tighter">
                    SINCE<br />{BUSINESS_INFO.established}
                  </h2>
                  <p className="text-xl font-medium opacity-90 font-body-sf">
                    A legacy built on laughter and high scores. We&apos;ve been the heart of
                    Brigantine&apos;s entertainment for nearly two decades.
                  </p>
                </div>
                <div className="mt-12">
                  <span className="material-symbols-outlined text-9xl opacity-20 -rotate-12 block">
                    history_edu
                  </span>
                </div>
              </div>

              {/* Photo + story grid */}
              <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Replace these with real photos in /public/images/ */}
                <div className="bg-zinc-100 rounded-lg overflow-hidden min-h-[300px] relative group border border-zinc-200 shadow-md">
                  <img
                    src="/images/arcade-history-2006.jpg"
                    alt="The Smile Factory opening 2006"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white font-display font-bold text-xl uppercase tracking-tighter">
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
                    <p className="text-white font-display font-bold text-xl uppercase tracking-tighter">
                      The Modern Era (2024)
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-2 bg-zinc-50 p-12 rounded-lg border border-zinc-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <span className="material-symbols-outlined" style={{ fontSize: '8rem' }}>settings</span>
                  </div>
                  <h4 className="font-display text-2xl font-black mb-6 text-red-600 uppercase tracking-tight italic">
                    GROWING THE MACHINE
                  </h4>
                  <p className="text-[#5a5c5c] text-lg leading-relaxed mb-8 font-body-sf">
                    What started as a small collection of classic machines has grown into
                    Brigantine&apos;s premier family entertainment destination. We&apos;ve
                    survived every trend by leaning into what makes us special: the physical,
                    social, and thrilling experience of real-world arcade play.
                  </p>
                  <div className="flex flex-wrap items-center gap-10">
                    <div className="text-center">
                      <div className="text-4xl font-black font-display text-[#2d2f2f]">{BUSINESS_INFO.machineCount}+</div>
                      <div className="text-xs uppercase font-bold text-red-600 tracking-widest mt-1">Machines</div>
                    </div>
                    <div className="w-px h-10 bg-zinc-200" />
                    <div className="text-center">
                      <div className="text-4xl font-black font-display text-[#2d2f2f]">{BUSINESS_INFO.established}</div>
                      <div className="text-xs uppercase font-bold text-red-600 tracking-widest mt-1">Est.</div>
                    </div>
                    <div className="w-px h-10 bg-zinc-200" />
                    <div className="text-center">
                      <div className="text-4xl font-black font-display text-[#2d2f2f]">5★</div>
                      <div className="text-xs uppercase font-bold text-red-600 tracking-widest mt-1">Rated</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-6 blueprint-gears relative overflow-hidden">
          <div className="max-w-4xl mx-auto bg-zinc-900 text-white rounded-3xl p-12 md:p-20 text-center relative shadow-2xl border-4 border-red-600">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <span className="material-symbols-outlined" style={{ fontSize: '10rem' }}>precision_manufacturing</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black mb-8 leading-tight italic uppercase tracking-tighter">
              READY TO START THE MACHINE?
            </h2>
            <p className="text-lg opacity-80 mb-12 max-w-xl mx-auto font-body-sf">
              Join thousands of visitors who have found their smile at The Factory. Book your
              visit or party today — tokens are waiting!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/parties"
                className="bg-red-600 text-white px-12 py-5 rounded-full font-display font-bold text-xl hover:scale-105 transition-transform shadow-xl uppercase"
              >
                BOOK A PARTY
              </Link>
              <Link
                href="/pricing"
                className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-12 py-5 rounded-full font-display font-bold text-xl hover:bg-white/20 transition-all uppercase"
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
