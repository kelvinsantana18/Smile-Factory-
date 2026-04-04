import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS_INFO, PARTY_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Birthday Parties | The Smile Factory',
  description:
    "Celebrate your child's birthday at The Smile Factory! Our all-inclusive party packages include a private room, pizza, drinks, tokens, and 2 hours of arcade fun.",
}

const included = [
  { icon: 'schedule', label: '2 Hour Party in Private Decorated Party Room' },
  { icon: 'supervisor_account', label: 'Private Party Hosts' },
  { icon: 'local_pizza', label: '2 Slices of Pizza per Child' },
  { icon: 'local_bar', label: 'Soda, Juice & Chips' },
  { icon: 'receipt_long', label: 'All Paper Products' },
  { icon: 'toll', label: '$7 per Child Worth of Tokens (21 Tokens)' },
  { icon: 'monetization_on', label: '$60 Worth of Tokens for Parent to Distribute' },
  { icon: 'confirmation_number', label: 'Extra Tickets for the Birthday Child' },
]

const addOns = [
  { icon: 'person_add', label: 'Additional Child', price: '+$14.95/child' },
  { icon: 'local_pizza', label: 'Extra Pizza', price: '+$12.00 each' },
  { icon: 'cake', label: 'Custom Gear Cake', price: '+$45.00' },
  { icon: 'card_giftcard', label: 'Factory Swag Bags', price: '+$8.00/child' },
]

export default function PartiesPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;700;800;900&family=Work+Sans:wght@300;400;500;600&display=swap');
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

        .addon-card:hover .addon-icon { color: white; }
        .addon-card:hover .addon-price { color: rgba(255,255,255,0.8); }
        .addon-card:hover .addon-label { color: white; }
      `}</style>

      <div className="bg-[#fcfcfc] text-[#2d2f2f] font-body-custom diamond-plate overflow-x-hidden">

        {/* ── Hero ── */}
        <section className="relative pt-16 pb-24 overflow-hidden blueprint-gears bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left copy */}
              <div className="space-y-8">
                <span className="inline-block px-4 py-1.5 bg-red-100/80 text-red-600 rounded-full text-sm font-black tracking-widest uppercase border border-red-200 font-headline">
                  The Joy Assembly Line
                </span>
                <h1 className="font-headline text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter italic uppercase text-[#2d2f2f]">
                  ENGINEER <br />THE{' '}
                  <span className="text-red-600">ULTIMATE</span>{' '}
                  BIRTHDAY.
                </h1>
                <p className="text-xl text-zinc-600 max-w-lg font-body-custom leading-relaxed">
                  High-octane fun, precision-planned celebrations. We handle the logistics;
                  you focus on the high scores.
                </p>
                <div className="flex flex-wrap gap-6 pt-4">
                  <a
                    href="#packages"
                    className="bg-red-600 text-white px-10 py-5 rounded-full font-headline font-bold text-lg shadow-xl hover:opacity-90 active:scale-95 transition-all flex items-center gap-3 uppercase"
                  >
                    View Packages
                    <span className="material-symbols-outlined">arrow_downward</span>
                  </a>
                  <Link
                    href="/contact"
                    className="px-10 py-5 rounded-full font-headline font-bold text-[#2d2f2f] border-2 border-zinc-200 bg-white hover:bg-zinc-50 active:scale-95 transition-all flex items-center gap-3 shadow-md uppercase"
                  >
                    Contact Us
                    <span className="material-symbols-outlined">call</span>
                  </Link>
                </div>
              </div>

              {/* Right image */}
              <div className="relative">
                <div className="aspect-square rounded-lg overflow-hidden shadow-2xl rotate-3 scale-105 border-[16px] border-white">
                  <img
                    src="/images/party-hero.jpg"
                    alt="Birthday Party at The Smile Factory"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating callout */}
                <div className="absolute -bottom-8 -left-8 bg-[#7b40a2] text-[#fdeeff] p-8 rounded-lg shadow-xl max-w-xs">
                  <span className="material-symbols-outlined text-4xl mb-2 block">settings_suggest</span>
                  <h3 className="font-headline font-bold text-xl uppercase italic">Factory Special</h3>
                  <p className="text-sm opacity-90 mt-1">
                    Book any weekday party and get 500 bonus tickets for the birthday engineer!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Packages ── */}
        <section id="packages" className="py-24 bg-zinc-50/80 relative">
          <div className="absolute inset-0 factory-pattern opacity-30 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

            {/* Section header */}
            <div className="mb-20 text-center space-y-4">
              <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-[#2d2f2f]">
                Party Blueprints
              </h2>
              <div className="w-24 h-2 bg-red-600 mx-auto rounded-full" />
            </div>

            {/* Classic Package Card */}
            <div className="group bg-white rounded-2xl p-10 flex flex-col md:flex-row gap-10 hover:shadow-2xl transition-all duration-500 border border-gray-100 max-w-5xl mx-auto">

              {/* Details */}
              <div className="flex-1 space-y-8">
                <div className="flex justify-between items-start border-b border-zinc-100 pb-6">
                  <div>
                    <h3 className="font-headline text-3xl font-black text-red-600 uppercase italic">
                      Classic Package
                    </h3>
                    <p className="text-zinc-500 mt-1 font-body-custom">The essential factory experience.</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-4xl font-black font-headline text-[#2d2f2f]">$400</span>
                    <span className="text-xs font-black uppercase tracking-widest text-zinc-400">
                      For 12 Children
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 font-body-custom text-zinc-700">
                  {included.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-red-600 text-xl mt-0.5">check_circle</span>
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link
                    href="/customer/bookings"
                    className="flex-1 py-4 bg-[#2d2f2f] text-white rounded-full font-headline font-bold uppercase tracking-widest hover:bg-red-600 transition-all shadow-md text-center"
                  >
                    Book Now
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 py-4 border-2 border-zinc-200 text-[#2d2f2f] rounded-full font-headline font-bold uppercase tracking-widest hover:border-red-400 hover:text-red-600 transition-all text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 rounded-xl overflow-hidden relative border-4 border-zinc-50 shadow-inner min-h-[360px]">
                <img
                  src="/images/party-room.jpg"
                  alt="Smile Factory Party Room"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Party Details quick-stats */}
            <div className="mt-10 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: 'schedule', label: `${PARTY_CONFIG.durationMinutes / 60} Hours`, sub: 'Private Room' },
                { icon: 'groups', label: '12 Kids', sub: 'Included' },
                { icon: 'toll', label: `$${PARTY_CONFIG.depositAmount}`, sub: 'Deposit to Book' },
                { icon: 'star', label: '5★', sub: 'Rated' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-6 text-center border border-zinc-100 shadow-sm">
                  <span className="material-symbols-outlined text-red-600 text-3xl mb-2 block">{stat.icon}</span>
                  <div className="font-headline font-black text-xl text-[#2d2f2f]">{stat.label}</div>
                  <div className="text-xs uppercase tracking-widest text-zinc-400 font-bold mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Add-Ons ── */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="font-headline text-4xl font-black uppercase italic tracking-tighter text-[#2d2f2f]">
                  Part Upgrades
                </h2>
                <p className="text-zinc-500 mt-4 font-body-custom">
                  Fine-tune your celebration with these precision components.
                </p>
              </div>
              <div className="flex gap-2">
                <div className="w-12 h-2 bg-red-600 rounded-full" />
                <div className="w-6 h-2 bg-red-300 rounded-full" />
                <div className="w-3 h-2 bg-purple-500 rounded-full" />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {addOns.map((item) => (
                <div
                  key={item.label}
                  className="addon-card bg-zinc-50 p-8 rounded-xl group hover:bg-red-600 transition-all duration-300 border border-zinc-100 cursor-default"
                >
                  <span className="addon-icon material-symbols-outlined text-4xl text-red-600 mb-4 block transition-colors">
                    {item.icon}
                  </span>
                  <h4 className="addon-label font-headline font-bold uppercase text-sm text-[#2d2f2f] transition-colors">
                    {item.label}
                  </h4>
                  <p className="addon-price text-sm text-zinc-500 mt-2 transition-colors">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Large Party Notice ── */}
        <section className="pb-16 sm:pb-20 px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-8 flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                <span className="material-symbols-outlined text-xl">info</span>
              </div>
              <div>
                <h3 className="font-headline font-bold text-amber-900 uppercase tracking-tight">
                  Parties Over {PARTY_CONFIG.maxKidsBeforeCall} Children
                </h3>
                <p className="mt-1 text-sm text-amber-800 font-body-custom">
                  For parties with more than {PARTY_CONFIG.maxKidsBeforeCall} children, please call us
                  directly at{' '}
                  <a
                    href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                    className="font-semibold underline"
                  >
                    {BUSINESS_INFO.phone}
                  </a>{' '}
                  to arrange your event. We&apos;re happy to accommodate larger groups with custom arrangements!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA / Inquire ── */}
        <section className="py-24 bg-zinc-50/50 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl border border-zinc-100">
              <div className="absolute inset-0 factory-pattern opacity-10 pointer-events-none" />

              {/* Background watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                <span className="font-headline font-black text-[20rem] leading-none">SMILE</span>
              </div>

              <div className="relative z-10 space-y-10">
                <h2 className="font-headline text-5xl md:text-6xl font-black uppercase italic leading-none tracking-tighter text-[#2d2f2f]">
                  Ready to start the{' '}
                  <br />
                  <span className="text-red-600 italic">production line?</span>
                </h2>
                <p className="text-xl text-zinc-600 max-w-lg mx-auto font-body-custom">
                  Dates fill up fast. Book online or call us to lock in your factory floor time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/customer/bookings"
                    className="bg-red-600 text-white px-12 py-5 rounded-full font-headline font-bold uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all text-lg flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined">celebration</span>
                    Book Online
                  </Link>
                  <a
                    href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                    className="border-2 border-zinc-200 text-[#2d2f2f] px-12 py-5 rounded-full font-headline font-bold uppercase tracking-widest hover:border-red-400 hover:text-red-600 transition-all text-lg flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined">call</span>
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
