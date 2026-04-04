'use client'

import { useActionState, useEffect, useState } from 'react'
import Link from 'next/link'
import { toast } from 'sonner'
import { BUSINESS_INFO } from '@/lib/constants'
import { submitContactForm } from './actions'

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (state?.success) {
      setSubmitted(true)
      toast.success('Message sent! Check your email for a confirmation.')
    }
    if (state?.error) {
      toast.error(state.error)
    }
  }, [state])

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
        .diamond-plate {
          background-color: #fcfcfc;
          background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0l2 13 13 2-13 2-2 13-2-13-13-2 13-2z' fill='%23f1f1f1' fill-opacity='0.4'/%3E%3C/svg%3E");
        }
        .blueprint-gears {
          background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 70c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 10c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20zm0-25c2.2 0 4-1.8 4-4V45c0-2.2-1.8-4-4-4s-4 1.8-4 4v6c0 2.2 1.8 4 4 4zm43.3 18c1.6 1.6 4.1 1.6 5.7 0l4.2-4.2c1.6-1.6 1.6-4.1 0-5.7s-4.1-1.6-5.7 0l-4.2 4.2c-1.6 1.6-1.6 4.1 0 5.7zm11.7 43.3c0 2.2 1.8 4 4 4h6c2.2 0 4-1.8 4-4s-1.8-4-4-4h-6c-2.2 0-4 1.8-4 4zm-18 43.3c1.6 1.6 4.1 1.6 5.7 0l4.2-4.2c1.6-1.6 1.6-4.1 0-5.7s-4.1-1.6-5.7 0l-4.2 4.2c-1.6 1.6-1.6 4.1 0 5.7zM100 155c-2.2 0-4 1.8-4 4v6c0 2.2 1.8 4 4 4s4-1.8 4-4v-6c0-2.2-1.8-4-4-4zm-43.3-18c-1.6-1.6-4.1-1.6-5.7 0l-4.2 4.2c-1.6 1.6-1.6 4.1 0 5.7s4.1 1.6 5.7 0l4.2-4.2c1.6-1.6-1.6-4.1 0-5.7zM45 100c0-2.2-1.8-4-4-4h-6c-2.2 0-4 1.8-4 4s1.8 4 4 4h6c2.2 0 4-1.8 4-4zm11.7-43.3c-1.6-1.6-4.1-1.6-5.7 0l-4.2 4.2c-1.6 1.6-1.6 4.1 0 5.7s4.1 1.6 5.7 0l4.2-4.2c1.6-1.6-1.6-4.1 0-5.7z' fill='%23e5e7eb' fill-opacity='0.4'/%3E%3C/svg%3E");
        }
        .industrial-text {
          color: #FF0000;
          text-shadow: 2px 2px 0px rgba(0,0,0,0.1);
        }
        .contact-input {
          width: 100%;
          padding: 1rem 1.5rem;
          border-radius: 0.75rem;
          background: #f4f4f5;
          border: 1px solid #e4e4e7;
          outline: none;
          font-family: 'Work Sans', sans-serif;
          font-size: 1rem;
          transition: all 0.2s;
          color: #2d2f2f;
        }
        .contact-input:focus {
          border-color: #FF0000;
          box-shadow: 0 0 0 2px rgba(255,0,0,0.12);
          background: #fff;
        }
      `}</style>

      <div className="bg-[#fcfcfc] text-[#2d2f2f] font-body-custom diamond-plate overflow-x-hidden pb-20">

        {/* ── Hero ── */}
        <section className="mt-4 mb-16 mx-6 lg:mx-8 relative overflow-hidden rounded-2xl bg-white blueprint-gears px-8 py-16 lg:px-24 lg:py-20 flex flex-col items-center text-center border border-gray-100 shadow-sm">
          {/* Glow blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/5 rounded-full -ml-48 -mb-48 blur-3xl pointer-events-none" />

          <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 font-black text-xs uppercase tracking-widest mb-8 border border-red-200 relative z-10">
            Assembly Line Open
          </span>
          <h1 className="font-headline text-5xl md:text-8xl font-black industrial-text tracking-tighter mb-6 uppercase italic relative z-10">
            Smile Factory
          </h1>
          <p className="max-w-2xl text-xl text-zinc-600 font-body-custom leading-relaxed relative z-10">
            Need technical support for your fun? Connect with the joy engineers. We&apos;re
            standing by to manufacture your next celebration.
          </p>
        </section>

        {/* ── Main Grid ── */}
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* ── Contact Form ── */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden">
              {/* Watermark gear */}
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
                <span className="material-symbols-outlined" style={{ fontSize: '9rem' }}>settings</span>
              </div>

              <div className="mb-10 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg">
                  <span className="material-symbols-outlined">sensors</span>
                </div>
                <h2 className="font-headline text-3xl font-black tracking-tight uppercase italic text-[#2d2f2f]">
                  Send a Signal
                </h2>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center gap-6 py-16 text-center relative z-10">
                  <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="material-symbols-outlined text-red-600 text-4xl">rocket_launch</span>
                  </div>
                  <h3 className="font-headline text-2xl font-black uppercase italic text-[#2d2f2f]">Message Sent!</h3>
                  <p className="max-w-sm text-zinc-500 font-body-custom">
                    Thank you for reaching out! We&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3 border-2 border-zinc-200 rounded-full font-headline font-bold uppercase tracking-widest text-[#2d2f2f] hover:border-red-400 hover:text-red-600 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form action={formAction} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 ml-1">
                        Operator Name
                      </label>
                      <input
                        className="contact-input"
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 ml-1">
                        Digital Address
                      </label>
                      <input
                        className="contact-input"
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 ml-1">
                      Mission Type
                    </label>
                    <select className="contact-input" name="subject" id="subject">
                      <option value="Party Inquiry">Party Inquiry</option>
                      <option value="Game Support">Game Support</option>
                      <option value="Feedback & Calibration">Feedback &amp; Calibration</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 ml-1">
                      The Message
                    </label>
                    <textarea
                      className="contact-input resize-none"
                      name="message"
                      id="message"
                      rows={5}
                      placeholder="How can we help manufacture your joy?"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="px-10 py-4 rounded-full bg-red-600 text-white font-headline font-black uppercase tracking-widest flex items-center gap-3 hover:opacity-90 active:scale-95 transition-all shadow-lg disabled:opacity-60"
                  >
                    {isPending ? (
                      <>
                        Sending...
                        <span className="material-symbols-outlined animate-spin">refresh</span>
                      </>
                    ) : (
                      <>
                        Initiate Contact
                        <span className="material-symbols-outlined">rocket_launch</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* ── HQ Info + Map ── */}
            <div className="lg:col-span-5 space-y-8">
              {/* Info Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="font-headline text-2xl font-black tracking-tight mb-8 uppercase italic text-[#2d2f2f]">
                  HQ Coordinates
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 shrink-0 border border-red-100">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">Physical Location</p>
                      <p className="text-[#2d2f2f] font-medium font-body-custom leading-snug">{BUSINESS_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 shrink-0 border border-red-100">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">Voice Line</p>
                      <a
                        href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                        className="text-[#2d2f2f] font-medium hover:text-red-600 transition-colors font-body-custom"
                      >
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 shrink-0 border border-red-100">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">Email</p>
                      <a
                        href="mailto:info@thesmilefactoryarcade.com"
                        className="text-[#2d2f2f] font-medium hover:text-red-600 transition-colors font-body-custom"
                      >
                        info@thesmilefactoryarcade.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 shrink-0 border border-red-100">
                      <span className="material-symbols-outlined">schedule</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">Operational Hours</p>
                      <div className="space-y-1 text-sm text-zinc-600 font-medium font-body-custom">
                        <div className="flex justify-between max-w-[200px]">
                          <span>Mon – Fri:</span>
                          <span>{BUSINESS_INFO.hours.weekday}</span>
                        </div>
                        <div className="flex justify-between max-w-[200px]">
                          <span>Sat – Sun:</span>
                          <span>{BUSINESS_INFO.hours.weekend}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-[280px] relative shadow-sm border border-gray-100 grayscale hover:grayscale-0 transition-all duration-700 group bg-zinc-200">
                {/* 
                  Replace the img below with an actual Google Maps embed or image.
                  Example iframe embed:
                  <iframe
                    src="https://www.google.com/maps/embed?pb=..."
                    width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"
                  />
                */}
                <img
                  src="/images/map-brigantine.jpg"
                  alt="Map of Brigantine NJ"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-red-600/5 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl flex items-center justify-between border border-zinc-100">
                  <span className="font-headline font-black text-sm tracking-tight uppercase text-[#2d2f2f]">
                    Brigantine HQ
                  </span>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 text-xs font-black uppercase tracking-widest flex items-center gap-1 hover:underline"
                  >
                    Open Maps
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Factory Chips ── */}
          <div className="mt-16 flex flex-wrap gap-4 justify-center">
            {[
              { icon: 'settings', label: 'High-Tech Calibration' },
              { icon: 'architecture', label: 'Precision Fun' },
              { icon: 'precision_manufacturing', label: 'Joy Engineered' },
            ].map((chip) => (
              <div
                key={chip.label}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-red-100 shadow-sm group cursor-default"
              >
                <span className="material-symbols-outlined text-red-600 group-hover:rotate-180 transition-transform duration-1000">
                  {chip.icon}
                </span>
                <span className="text-[#2d2f2f] font-bold text-sm uppercase tracking-tight font-headline">
                  {chip.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
