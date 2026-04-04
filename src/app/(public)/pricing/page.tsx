import type { Metadata } from 'next'
import Link from 'next/link'
import { TOKEN_PRICING, BUSINESS_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Token Pricing | The Smile Factory',
  description:
    'Token pricing at The Smile Factory arcade. Buy tokens to play over 41 arcade games — the more you buy, the more you save!',
}

const tierLabels: Record<number, string> = {
  1: 'SINGLE SHOT',
  5: 'STARTER PACK',
  10: 'HEAVY DUTY',
  20: 'FACTORY OVERLOAD',
}

export default function PricingPage() {
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
        <header className="relative overflow-hidden py-24 px-8 blueprint-gears">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-100/80 text-red-700 text-sm font-black tracking-widest uppercase border border-red-200 font-display">
                INDUSTRIAL JOY
              </span>
              <h1 className="font-display font-black text-6xl md:text-8xl text-red-600 leading-none tracking-tighter uppercase italic">
                Smile<br />Factory
              </h1>
              <p className="text-xl md:text-2xl font-body-sf max-w-xl text-[#5a5c5c] leading-relaxed">
                Fuel your fun with our premium token bundles. No hidden fees — just pure
                mechanical joy manufactured daily.
              </p>
            </div>

            <div className="flex-1 w-full aspect-video rounded-xl relative overflow-hidden group shadow-2xl bg-zinc-100">
              {/* Replace with a real arcade photo at /public/images/pricing-hero.jpg */}
              <img
                src="/images/pricing-hero.jpg"
                alt="Arcade machine buttons and joystick"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent" />
            </div>
          </div>
        </header>

        {/* ── Pricing Grid ── */}
        <section className="py-24 px-8 bg-zinc-50/50 relative">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
              <div>
                <span className="text-red-600 font-display font-bold uppercase tracking-widest text-sm">
                  Industrial Pricing
                </span>
                <h2 className="font-display font-black text-5xl md:text-6xl text-[#2d2f2f] mt-2 tracking-tighter">
                  TOKENS
                </h2>
              </div>
              <div className="bg-zinc-200/50 px-6 py-3 rounded-full flex items-center gap-3 border border-zinc-200">
                <span className="material-symbols-outlined text-red-600">settings_suggest</span>
                <span className="text-[#2d2f2f] font-semibold text-sm font-body-sf">
                  Bulk discount applied automatically
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {TOKEN_PRICING.map((tier) => {
                const isMostPopular = tier.price === 10
                const isBestValue = tier.price === 20
                const label = tierLabels[tier.price] ?? 'TOKEN PACK'

                return (
                  <div
                    key={tier.price}
                    className={`bg-white rounded-lg p-10 flex flex-col items-center text-center transition-all border shadow-sm relative ${
                      isMostPopular
                        ? 'ring-4 ring-red-600 shadow-2xl scale-105 z-10 border-transparent'
                        : 'border-zinc-100 hover:-translate-y-2'
                    }`}
                  >
                    {isMostPopular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1.5 rounded-full text-[10px] font-display font-black tracking-widest shadow-lg">
                        MOST POPULAR
                      </div>
                    )}

                    <span className="text-[#5a5c5c] font-display font-bold text-xs tracking-widest mb-4 uppercase">
                      {label}
                    </span>
                    <div className="text-6xl font-display font-black text-[#2d2f2f] mb-2">
                      ${tier.price}
                    </div>
                    <div className="text-2xl font-display font-bold text-red-600 mb-2 italic">
                      {tier.tokens} TOKENS
                    </div>
                    {isBestValue && (
                      <div className="text-red-600 font-bold text-[10px] mb-4 uppercase tracking-wider italic">
                        +6 Bonus Tokens Included
                      </div>
                    )}
                    <div className="mt-auto pt-6 w-full">
                      <Link
                        href="/contact"
                        className={`block w-full py-4 rounded-xl font-display font-bold uppercase tracking-widest text-xs transition-all text-center ${
                          isMostPopular
                            ? 'bg-red-600 text-white shadow-lg hover:opacity-90'
                            : 'bg-zinc-100 text-[#2d2f2f] hover:bg-red-600 hover:text-white'
                        }`}
                      >
                        Select
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Mechanical Workflow ── */}
        <section className="py-32 px-8 overflow-hidden bg-white">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-display font-black text-5xl text-[#2d2f2f] tracking-tighter italic uppercase">
                Mechanical Workflow
              </h2>
              <p className="text-[#5a5c5c] mt-4 text-lg font-body-sf">
                Your three-step guide to manufacturing fun
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative">
              {/* Connector line */}
              <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-zinc-100 -z-10" />

              {[
                {
                  icon: 'payments',
                  filled: false,
                  title: 'Buy Tokens',
                  desc: 'Purchase tokens at the front counter. Cash and card accepted — no kiosk needed.',
                },
                {
                  icon: 'sports_esports',
                  filled: true,
                  title: 'Play Games',
                  desc: `Access over ${BUSINESS_INFO.machineCount}+ premium arcade machines, from classics to the newest hits.`,
                },
                {
                  icon: 'workspace_premium',
                  filled: true,
                  title: 'Win Prizes',
                  desc: 'Collect tickets and redeem them for awesome prizes at our prize counter.',
                },
              ].map((step) => (
                <div key={step.title} className="flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-red-600 flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform">
                    <span
                      className={step.filled ? 'material-symbols-filled' : 'material-symbols-outlined'}
                      style={{ fontSize: '2.5rem', color: '#FF0000' }}
                    >
                      {step.icon}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-4 tracking-tight uppercase text-[#2d2f2f]">
                    {step.title}
                  </h3>
                  <p className="text-[#5a5c5c] max-w-xs font-body-sf">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Prize Gear Protocol (Info + Good to Know) ── */}
        <section className="pb-32 px-8">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-0 bg-white rounded-3xl overflow-hidden shadow-2xl border border-zinc-100">
            {/* Image */}
            <div className="md:w-2/5 h-80 md:h-auto overflow-hidden bg-zinc-100">
              {/* Replace with /public/images/pricing-arcade.jpg */}
              <img
                src="/images/pricing-arcade.jpg"
                alt="Inside The Smile Factory arcade"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-12 md:p-16 flex flex-col justify-center">
              <div className="bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-[10px] font-black w-fit mb-6 tracking-widest uppercase border border-red-100 font-display">
                GOOD TO KNOW
              </div>
              <h3 className="font-display font-black text-4xl mb-6 tracking-tighter uppercase italic text-[#2d2f2f]">
                The Token Playbook
              </h3>
              <ul className="text-[#5a5c5c] text-lg leading-relaxed mb-8 space-y-3 font-body-sf">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-filled text-red-600 mt-0.5">check_circle</span>
                  Tokens are available for purchase at the front counter
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-filled text-red-600 mt-0.5">check_circle</span>
                  Most games cost 1–3 tokens per play
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-filled text-red-600 mt-0.5">check_circle</span>
                  Unused tokens never expire — use them on your next visit
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-filled text-red-600 mt-0.5">check_circle</span>
                  Birthday party packages include tokens — check our parties page for details
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/parties"
                  className="flex items-center gap-3 px-6 py-3 bg-zinc-50 border border-zinc-100 rounded-xl hover:border-red-200 hover:bg-red-50 transition-all"
                >
                  <span className="material-symbols-filled text-red-600 text-xl">celebration</span>
                  <span className="text-sm font-black uppercase tracking-tight font-display text-[#2d2f2f]">
                    Party Packages
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-3 px-6 py-3 bg-zinc-50 border border-zinc-100 rounded-xl hover:border-red-200 hover:bg-red-50 transition-all"
                >
                  <span className="material-symbols-filled text-red-600 text-xl">contact_support</span>
                  <span className="text-sm font-black uppercase tracking-tight font-display text-[#2d2f2f]">
                    Contact Us
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="pb-24 px-8">
          <div className="max-w-3xl mx-auto bg-red-600 text-white rounded-3xl p-12 md:p-16 text-center shadow-2xl">
            <h2 className="font-display text-4xl font-black mb-4 uppercase tracking-tighter italic">
              Planning a Party?
            </h2>
            <p className="text-lg opacity-90 mb-8 font-body-sf">
              Our birthday party packages include tokens, pizza, drinks, and a private party room.
            </p>
            <Link
              href="/parties"
              className="inline-flex items-center gap-2 bg-white text-red-600 px-10 py-4 rounded-full font-display font-black uppercase tracking-tight hover:scale-105 transition-transform shadow-xl text-lg"
            >
              <span className="material-symbols-filled">celebration</span>
              View Party Packages
            </Link>
          </div>
        </section>

      </div>
    </>
  )
}
