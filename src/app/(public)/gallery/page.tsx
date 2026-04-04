import type { Metadata } from 'next'
import { BUSINESS_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Gallery | The Smile Factory',
  description: `Take a look inside The Smile Factory arcade! Browse photos of our ${BUSINESS_INFO.machineCount}+ arcade games, party room, prize counter, and more.`,
}

// ─── Replace these src values with your actual image paths ───────────────────
const arcadeAction = [
  { src: '/images/gallery/arcade-wide.jpg',   alt: 'Arcade floor overview',       span: 'col-span-1 md:col-span-2 aspect-video' },
  { src: '/images/gallery/gamer-portrait.jpg', alt: 'Gamer at the controls',       span: 'aspect-square' },
  { src: '/images/gallery/racing-game.jpg',   alt: 'Racing arcade machine',        span: 'aspect-square' },
  { src: '/images/gallery/racing-game.jpg',   alt: 'Neon light motion blur',       span: 'col-span-1 md:col-span-2 aspect-[21/9]' },
]

const birthdaySmiles = [
  { src: '/images/gallery/birthday-kids.jpg', alt: 'Kids celebrating birthday' },
  { src: '/images/gallery/birthday-cake.jpg', alt: 'Birthday cake close up' },
  { src: '/images/gallery/friends-playing.jpg', alt: 'Friends playing together' },
  { src: '/images/gallery/party-lights.jpg',  alt: 'Party atmosphere lighting' },
]

const socialFeed = [
  '/images/gallery/social-1.jpg',
  '/images/gallery/social-2.jpg',
  '/images/gallery/social-3.jpg',
  '/images/gallery/social-4.jpg',
  '/images/gallery/social-5.jpg',
  '/images/gallery/social-6.jpg',
  '/images/gallery/social-7.jpg',
  '/images/gallery/social-8.jpg',
]

const winners = [
  { initials: 'LF', bg: 'bg-red-600',   name: 'Leo F. — Mega Prize',    sub: 'Won a Nintendo Switch',       icon: 'emoji_events' },
  { initials: 'SK', bg: 'bg-[#a03646]', name: 'Sarah K. — Ticket King', sub: '150,000 Tickets in one session', icon: 'local_activity' },
  { initials: 'MJ', bg: 'bg-zinc-900',  name: 'Marcus J. — High Score', sub: 'Pac-Man Global Rank #4',       icon: 'videogame_asset' },
]

export default function GalleryPage() {
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
        .blueprint-gears {
          background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 70c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 10c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20zm0-25c2.2 0 4-1.8 4-4V45c0-2.2-1.8-4-4-4s-4 1.8-4 4v6c0 2.2 1.8 4 4 4zm43.3 18c1.6 1.6 4.1 1.6 5.7 0l4.2-4.2c1.6-1.6 1.6-4.1 0-5.7s-4.1-1.6-5.7 0l-4.2 4.2c-1.6 1.6-1.6 4.1 0 5.7zm11.7 43.3c0 2.2 1.8 4 4 4h6c2.2 0 4-1.8 4-4s-1.8-4-4-4h-6c-2.2 0-4 1.8-4 4zm-18 43.3c1.6 1.6 4.1 1.6 5.7 0l4.2-4.2c1.6-1.6 1.6-4.1 0-5.7s-4.1-1.6-5.7 0l-4.2 4.2c-1.6 1.6-1.6 4.1 0 5.7zM100 155c-2.2 0-4 1.8-4 4v6c0 2.2 1.8 4 4 4s4-1.8 4-4v-6c0-2.2-1.8-4-4-4zm-43.3-18c-1.6-1.6-4.1-1.6-5.7 0l-4.2 4.2c-1.6 1.6-1.6 4.1 0 5.7s4.1 1.6 5.7 0l4.2-4.2c1.6-1.6-1.6-4.1 0-5.7zM45 100c0-2.2-1.8-4-4-4h-6c-2.2 0-4 1.8-4 4s1.8 4 4 4h6c2.2 0 4-1.8 4-4zm11.7-43.3c-1.6-1.6-4.1-1.6-5.7 0l-4.2 4.2c-1.6 1.6-1.6 4.1 0 5.7s4.1 1.6 5.7 0l4.2-4.2c1.6-1.6-1.6-4.1 0-5.7z' fill='%23e5e7eb' fill-opacity='0.4'/%3E%3C/svg%3E");
        }
      `}</style>

      <div className="bg-[#fcfcfc] text-[#2d2f2f] font-body-custom diamond-plate overflow-x-hidden">

        {/* ── Hero ── */}
        <section className="relative px-6 lg:px-8 py-20 max-w-screen-2xl mx-auto overflow-hidden blueprint-gears">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left copy */}
            <div className="flex-1 space-y-6">
              <span className="inline-block px-4 py-1.5 bg-red-100 text-red-600 text-xs font-black tracking-widest uppercase rounded-full border border-red-200">
                Visual Archive
              </span>
              <h1 className="font-headline text-6xl md:text-8xl font-black text-[#2d2f2f] leading-[0.9] tracking-tighter italic uppercase">
                THE <span className="text-red-600">SMILE</span>
                <br />FACTORY
              </h1>
              <p className="text-xl text-zinc-600 max-w-xl font-body-custom leading-relaxed">
                Step into the assembly line of joy. From high-score heroics to neon-drenched
                birthday celebrations — witness the factory in full production mode.
              </p>
            </div>

            {/* Right hero image */}
            <div className="flex-1 w-full aspect-video rounded-lg overflow-hidden bg-zinc-200 shadow-2xl relative group border-4 border-zinc-900">
              <img
                src="/images/gallery/hero-arcade.jpg"
                alt="Vibrant modern arcade atmosphere"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-red-500/10 mix-blend-multiply pointer-events-none" />
            </div>
          </div>
        </section>

        {/* ── Gallery Sections ── */}
        <section className="px-6 lg:px-8 py-16 max-w-screen-2xl mx-auto space-y-32">

          {/* 01 — Arcade Action */}
          <div className="space-y-8">
            <div className="flex items-end justify-between border-b-2 border-red-600/10 pb-4">
              <h2 className="font-headline text-4xl font-black tracking-tight uppercase italic text-[#2d2f2f]">
                Arcade Action
              </h2>
              <span className="font-headline font-black tracking-tighter text-6xl text-red-600 opacity-10">01</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {arcadeAction.map((img, i) => (
                <div
                  key={i}
                  className={`${img.span} rounded-lg overflow-hidden border-[6px] border-zinc-900 shadow-xl group bg-zinc-200`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 02 — Birthday Smiles */}
          <div className="space-y-8">
            <div className="flex items-end justify-between border-b-2 border-red-600/10 pb-4">
              <h2 className="font-headline text-4xl font-black tracking-tight uppercase italic text-[#2d2f2f]">
                Birthday Smiles
              </h2>
              <span className="font-headline font-black tracking-tighter text-6xl text-red-600 opacity-10">02</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {birthdaySmiles.map((img, i) => (
                <div
                  key={i}
                  className="aspect-[3/4] rounded-lg overflow-hidden border-[6px] border-zinc-900 shadow-xl group bg-zinc-200"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 03 — Prize Winners */}
          <div className="space-y-8">
            <div className="flex items-end justify-between border-b-2 border-red-600/10 pb-4">
              <h2 className="font-headline text-4xl font-black tracking-tight uppercase italic text-[#2d2f2f]">
                Prize Winners
              </h2>
              <span className="font-headline font-black tracking-tighter text-6xl text-red-600 opacity-10">03</span>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Jackpot images */}
              <div className="flex-1 bg-white rounded-lg p-8 shadow-sm border-l-8 border-red-600">
                <div className="flex items-center gap-4 mb-6">
                  <span className="material-symbols-filled text-red-600 text-4xl">stars</span>
                  <h3 className="font-headline text-2xl font-black tracking-tighter italic text-[#2d2f2f] uppercase">
                    Jackpot Junction
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square rounded-lg overflow-hidden border-[6px] border-zinc-900 shadow-xl group bg-zinc-200">
                    <img
                      src="/images/gallery/prize-wall.jpg"
                      alt="Prize wall"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden border-[6px] border-zinc-900 shadow-xl group bg-zinc-200">
                    <img
                      src="/images/gallery/happy-winner.jpg"
                      alt="Happy winner"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Leaderboard */}
              <div className="flex-1 space-y-4">
                {winners.map((w) => (
                  <div
                    key={w.name}
                    className="bg-zinc-100 rounded-lg p-6 flex items-center justify-between hover:bg-white transition-colors border border-zinc-100 shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full ${w.bg} flex items-center justify-center text-white font-black font-headline text-sm`}>
                        {w.initials}
                      </div>
                      <div>
                        <p className="font-bold text-[#2d2f2f]">{w.name}</p>
                        <p className="text-sm text-zinc-500">{w.sub}</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-red-600">{w.icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 04 — Social Feed */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-headline text-5xl font-black tracking-tighter uppercase italic text-[#2d2f2f]">
                Join the Factory Floor
              </h2>
              <p className="text-zinc-500 font-body-custom">
                Tag your wins with{' '}
                <span className="text-red-600 font-black">#SMILEFACTORYARCADE</span>{' '}
                for a chance to be featured.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialFeed.map((src, i) => (
                <div
                  key={i}
                  className="aspect-square bg-zinc-900 rounded-lg overflow-hidden border-4 border-black shadow-lg group relative"
                >
                  <img
                    src={src}
                    alt={`Fan photo ${i + 1}`}
                    className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-filled text-white text-3xl">favorite</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <button className="px-10 py-4 bg-zinc-900 text-white rounded-full font-headline font-black uppercase tracking-widest hover:bg-red-600 transition-colors flex items-center gap-2 shadow-lg">
                Load More Action
                <span className="material-symbols-outlined">refresh</span>
              </button>
            </div>
          </div>

        </section>
      </div>
    </>
  )
}
