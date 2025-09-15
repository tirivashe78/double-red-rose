"use client"

import React from "react";
import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section className="relative py-20">
      {/* Section-wide rose tint gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-rose-100/40 to-rose-200/60 -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          {/* Left - Map / Image with rose tint overlay */}
          <div className="w-full md:w-1/2 relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="/map-galaxy-mall.jpg"
              alt="Galaxy Mall Location"
              className="w-full h-[320px] md:h-[420px] object-cover"
            />

            {/* Rose-tint overlay on the image */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-rose-50/30 via-rose-100/20 to-rose-300/25 mix-blend-multiply" />

            {/* Subtle pulse on the marker */}
            <motion.div
              aria-hidden
              initial={{ scale: 0.9, opacity: 0.9 }}
              animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute left-6 bottom-6 md:left-8 md:bottom-8 flex items-center gap-3 bg-white/80 backdrop-blur rounded-full px-3 py-2 shadow"
            >
              <div className="w-3 h-3 rounded-full bg-rose-600 ring-4 ring-rose-200" />
              <span className="text-sm font-medium">Galaxy Mall — 4th Floor</span>
            </motion.div>
          </div>

          {/* Right - Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              <h3 className="text-2xl md:text-3xl font-extrabold">Where to Experience</h3>
              <p className="mt-2 text-gray-700">
                Galaxy Mall, 4th Floor, Corner Jason Moyo &amp; First Street.<br />
                Join our in-person presentation and tasting — see, taste and sign up in person.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <a
                href="https://www.google.com/maps/dir//-17.8305924,31.0500758"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full bg-rose-600 text-white font-medium shadow hover:translate-y-[-2px] transition-transform"
              >
                Get Directions
              </a>

              <a
                href="tel:+263712110487"
                className="inline-block px-6 py-3 rounded-full border border-rose-200 text-rose-700 font-medium hover:bg-rose-50 transition"
              >
                Call Enicah — 0712 110 487
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="bg-white/60 backdrop-blur rounded-xl p-5 shadow-md border border-rose-50"
            >
              <h4 className="text-lg font-semibold">Become a Registered Distributor</h4>
              <p className="mt-2 text-gray-700">
                Want to enjoy discounted prices and sell products in your network? Become a
                registered member and distributor. Attend one of our in-person presentations at the
                Galaxy Mall location above to register and learn how the program works.
              </p>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-2">
                <a
                  href="https://wa.me/263712110487"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-rose-100 border border-rose-200 text-rose-700 font-medium shadow-sm hover:scale-105 transition-transform"
                >
                  Message Enicah on WhatsApp
                </a>

                <a
                  href="tel:+263712110487"
                  className="inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-medium text-white bg-rose-600 shadow hover:opacity-95 transition-opacity"
                >
                  Call Enicah — 0712 110 487
                </a>
              </div>

              <p className="mt-3 text-sm text-gray-600">
                Prefer to visit? Presentations and tastings happen regularly at the Mall — come
                through to secure your membership and distributor perks.
              </p>
            </motion.div>

            <motion.div
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.45 }}
              className="text-xs text-gray-500"
            >
              <span className="italic">Note:</span> By registering you agree to our distributor
              onboarding process and terms. For bulk orders, ask Enicah for special pricing and
              delivery details.
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
