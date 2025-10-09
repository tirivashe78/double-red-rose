"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FaChevronDown, FaWhatsapp, FaHeart, FaLeaf, FaDroplet } from "react-icons/fa6"
import { GiRose, GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"
import Particles from "react-tsparticles"
import type { ISourceOptions } from "tsparticles-engine"
import { loadFull } from "tsparticles"

export default function HeroSection() {
  const text = "Double Red Rose".split(" ")
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  // Rose Petal Particles Configuration
  const particlesInit = async (main: any) => {
    await loadFull(main)
  }

  const options: ISourceOptions = {
    fullScreen: { enable: false },
    particles: {
      number: { value: 20 },
      move: { enable: true, speed: 1, direction: "bottom", outModes: "out" },
      shape: { type: "image", options: { image: [{ src: "/petal.png", width: 20, height: 20 }] } },
      size: { value: { min: 8, max: 18 } },
      opacity: { value: 0.9 },
    },
  }

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden bg-gradient-to-b from-rose-500 via-white to-rose-100"
    >
      {/* Background Video */}
      <video
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden
      />

      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-600/60 via-white/40 to-rose-200/70 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Rose Petal Particles */}
      <div className="absolute inset-0 z-[1]">
        <Particles id="roseParticles" init={particlesInit} options={options} />
      </div>

      {/* Header with Hamburger Menu */}
      <header className="fixed top-0 left-0 w-full z-50">
        <nav className="backdrop-blur-md bg-rose-600/70 border-b border-white/20 text-white">
          <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-3">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 text-white hover:opacity-90 transition">
              <img src="/AG.png" alt="Double Red Rose logo" className="w-10 h-10 object-contain drop-shadow" />
              <span className="font-semibold text-lg hidden sm:inline drop-shadow-lg">Double Red Rose</span>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-6 text-sm md:text-base font-medium">
              <li><a href="#why-it-matters" className="hover:text-rose-200 transition">Why It Matters</a></li>
              <li><a href="#product-features" className="hover:text-rose-200 transition">Features</a></li>
              <li><a href="#beauty-and-brain" className="hover:text-rose-200 transition">Beauty & Brain</a></li>
              <li><a href="#how-to-use" className="hover:text-rose-200 transition">How To Use</a></li>
              <li><a href="#map" className="hover:text-rose-200 transition">Contact</a></li>
            </ul>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden text-white text-2xl"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <ul className="md:hidden flex flex-col gap-4 bg-rose-600/90 px-4 py-4 text-white font-medium">
              <li><a href="#why-it-matters" onClick={toggleMenu} className="hover:text-rose-200 transition">Why It Matters</a></li>
              <li><a href="#product-features" onClick={toggleMenu} className="hover:text-rose-200 transition">Features</a></li>
              <li><a href="#beauty-and-brain" onClick={toggleMenu} className="hover:text-rose-200 transition">Beauty & Brain</a></li>
              <li><a href="#how-to-use" onClick={toggleMenu} className="hover:text-rose-200 transition">How To Use</a></li>
              <li><a href="#map" onClick={toggleMenu} className="hover:text-rose-200 transition">Contact</a></li>
            </ul>
          )}
        </nav>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20">
        {/* Product Image */}
        <motion.img
          src="/drr.webp"
          alt="Double Red Rose product"
          className="w-40 md:w-56 drop-shadow-2xl transition-transform duration-500 hover:scale-110"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Brand Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-5xl md:text-7xl font-serif font-bold text-rose-700 drop-shadow-2xl mt-6 flex flex-wrap justify-center"
        >
          {text.map((char, i) => (
            <motion.span
              key={i}
              aria-hidden={char === " "}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-4 text-lg md:text-xl text-red-700 max-w-2xl font-light"
        >
          <span className="inline-flex items-center gap-2 justify-center">
            <FaDroplet className="text-rose-700" /> Elevate Your Morning
          </span>{" "}
          •{" "}
          <span className="inline-flex items-center gap-2 justify-center">
            <FaHeart className="text-rose-700" /> Fuel Your Success
          </span>{" "}
          •{" "}
          <span className="inline-flex items-center gap-2 justify-center">
            <FaLeaf className="text-rose-700" /> Live Your Dream
          </span>
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="https://wa.me/263712110487?text=Hi%20—%20I'm%20interested%20in%20Double%20Red%20Rose"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-10 relative inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-rose-500 to-rose-400 text-white rounded-full shadow-xl hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          <FaWhatsapp className="text-xl" />
          <span className="font-medium text-lg">Buy Now</span>
        </motion.a>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 text-red-700 text-2xl"
        >
          <FaChevronDown />
        </motion.div>

        {/* Decorative Floating Roses */}
        <motion.div
          className="absolute top-24 right-16 text-rose-300/70 text-4xl"
          animate={{ y: [0, 20, 0], rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <GiRose />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-12 text-rose-400/80 text-4xl"
          animate={{ y: [0, 15, 0], rotate: [0, -10, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <GiRose />
        </motion.div>
      </div>

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/263712110487?text=Hi%20—%20I'm%20interested%20in%20Double%20Red%20Rose"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-rose-500 hover:bg-rose-600 text-white p-4 rounded-full shadow-xl transition-transform hover:scale-110"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </section>
  )
}



// "use client"

// import { useEffect } from "react"
// import { motion } from "framer-motion"
// import { FaChevronDown, FaWhatsapp, FaLeaf, FaRegHeart, FaDroplet } from "react-icons/fa6"
// import { GiRose } from "react-icons/gi"

// export default function HeroSection() {
//   const text = "Double Red Rose".split("")

//   useEffect(() => {}, [])

//   return (
//     <section
//       id="home"
//       className="relative h-screen overflow-hidden bg-gradient-to-b from-rose-200 via-white to-rose-100"
//     >
//       {/* Background Video */}
//       <video
//         src="/videos/hero.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover"
//         aria-hidden
//       />

//       {/* Elegant red-white gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-rose-300/50 via-white/40 to-rose-100/70 mix-blend-overlay pointer-events-none" />

//       {/* Subtle dark contrast for text clarity */}
//       <div className="absolute inset-0 bg-black/20 pointer-events-none" />

//       {/* Fixed Header */}
//       <header className="fixed top-0 left-0 w-full z-50">
//         <nav className="backdrop-blur-sm bg-white/20 text-white shadow-md">
//           <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
//             {/* Logo */}
//             <a
//               href="#home"
//               className="flex items-center gap-2 py-3 text-white hover:opacity-90 transition"
//             >
//               <img
//                 src="/AG.png"
//                 alt="Double Red Rose logo"
//                 className="w-10 h-10 object-contain drop-shadow"
//               />
//               <span className="font-semibold text-lg hidden sm:inline drop-shadow-md">
//                 Double Red Rose
//               </span>
//             </a>

//             {/* Navigation */}
//             <ul className="flex items-center gap-5 py-4 text-sm md:text-base font-medium">
//               <li>
//                 <a href="#why-it-matters" className="hover:text-rose-300 transition-colors">
//                   Why It Matters
//                 </a>
//               </li>
//               <li>
//                 <a href="#product-features" className="hover:text-rose-300 transition-colors">
//                   Features
//                 </a>
//               </li>
//               <li>
//                 <a href="#beauty-and-brain" className="hover:text-rose-300 transition-colors">
//                   Beauty & Brain
//                 </a>
//               </li>
//               <li>
//                 <a href="#how-to-use" className="hover:text-rose-300 transition-colors">
//                   How To Use
//                 </a>
//               </li>
//               <li>
//                 <a href="#contact" className="hover:text-rose-300 transition-colors">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </header>

//       {/* Hero Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20">
//         {/* Floating Rose Logo */}
//         <motion.img
//           src="/drr.webp"
//           alt="Double Red Rose product"
//           className="w-32 md:w-48 drop-shadow-2xl"
//           initial={{ y: -30, opacity: 0, scale: 0.9 }}
//           animate={{ y: [0, -12, 0], opacity: 1, scale: 1 }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />

//         {/* Animated Brand Title */}
//         <h1 className="text-4xl md:text-6xl font-serif text-white drop-shadow-xl mt-6 flex flex-wrap justify-center">
//           {text.map((char, i) => (
//             <motion.span
//               key={i}
//               aria-hidden={char === " "}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.05 }}
//               className="inline-block"
//             >
//               {char}
//             </motion.span>
//           ))}
//         </h1>

//         {/* Elegant tagline */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2 }}
//           className="mt-4 text-lg md:text-xl text-white max-w-2xl font-light"
//         >
//           <span className="inline-flex items-center gap-2 justify-center">
//             <FaDroplet className="text-rose-200" /> Elevate Your Morning
//           </span>{" "}
//           •{" "}
//           <span className="inline-flex items-center gap-2 justify-center">
//             <FaRegHeart className="text-rose-300" /> Fuel Your Success
//           </span>{" "}
//           •{" "}
//           <span className="inline-flex items-center gap-2 justify-center">
//             <FaLeaf className="text-rose-100" /> Live Your Dream
//           </span>
//         </motion.p>

//         {/* WhatsApp CTA */}
//         <motion.a
//           href="https://wa.me/263712110487?text=Hi%20%E2%80%94%20I'm%20interested%20in%20Double%20Red%20Rose"
//           target="_blank"
//           rel="noopener noreferrer"
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 1.6 }}
//           className="mt-10 relative inline-flex items-center gap-3 px-7 py-3 bg-gradient-to-r from-green-500 to-green-400 text-white rounded-full shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-green-300"
//         >
//           <FaWhatsapp className="text-xl" />
//           <span className="font-medium text-lg">Buy Now</span>
//         </motion.a>

//         {/* Scroll Indicator */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 1.5 }}
//           className="absolute bottom-8 text-white text-2xl"
//         >
//           <FaChevronDown />
//         </motion.div>

//         {/* Decorative floating rose icons */}
//         <motion.div
//           className="absolute top-20 right-10 text-rose-300/80 text-4xl"
//           animate={{ y: [0, 15, 0] }}
//           transition={{ repeat: Infinity, duration: 3 }}
//         >
//           <GiRose />
//         </motion.div>

//         <motion.div
//           className="absolute bottom-24 left-8 text-rose-400/70 text-3xl"
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2.5 }}
//         >
//           <GiRose />
//         </motion.div>
//       </div>
//     </section>
//   )
// }