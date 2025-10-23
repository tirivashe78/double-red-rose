"use client";
import React from "react";
import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-rose-100/50 to-rose-200/70 -z-10" />

      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6"
        >
          Visit Us or Become a Distributor
        </motion.h2>

        {/* Buttons (Directions + Call) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
        >
          <a
            href="https://www.google.com/maps/dir//-17.8305924,31.0500758"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-rose-600 text-white font-semibold shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-transform"
          >
            Get Directions
          </a>
          <a
            href="tel:+263712110487"
            className="px-8 py-3 rounded-full border border-rose-300 text-rose-700 font-semibold hover:bg-rose-50 transition-colors"
          >
            Call Enicah — 0712 110 487
          </a>
        </motion.div>

        {/* Distributor Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-rose-100 max-w-2xl mx-auto"
        >
          <h4 className="text-xl font-semibold text-gray-800">
            Become a Registered Distributor
          </h4>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Want to enjoy discounted prices and sell products in your network?
            Become a registered member and distributor. Call or message Enicah to
            learn how the program works and start earning today.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/263712110487"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-rose-100 border border-rose-200 text-rose-700 font-semibold shadow-sm hover:scale-105 transition-transform"
            >
              Message Enicah on WhatsApp
            </a>
            <a
              href="tel:+263712110487"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-rose-600 text-white font-semibold shadow-md hover:opacity-95 transition-opacity"
            >
              Call Enicah — 0712 110 487
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Come through to secure your membership and distributor perks.
          </p>
        </motion.div>

        {/* Note */}
        <motion.p
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6 text-xs text-gray-500 max-w-lg"
        >
          <span className="italic font-medium">Note:</span> By registering, you
          agree to our distributor onboarding process and terms. For bulk orders,
          ask Enicah about special pricing and delivery options.
        </motion.p>
      </div>
    </section>
  );
}
