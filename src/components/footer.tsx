'use client'
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
        <div className="space-y-2">
          <p>📧 info@double-red-rose.com</p>
          <p>📞 +263 77 123 4567</p>
          <p>
            <FaWhatsapp className="inline mr-2" />
            <a href="https://wa.me/263771234567">Chat Now</a>
          </p>
        </div>
        <div className="space-x-4 text-2xl">
          <a href="https://facebook.com/yourpage"><FaFacebook /></a>
          <a href="https://instagram.com/yourpage"><FaInstagram /></a>
        </div>
      </div>
      <p className="mt-6 text-center text-sm text-gray-500">
        Manufactured in GMP‑certified, FDA‑registered facility. No sugar added. Low GI. Vegan.
      </p>
    </footer>
  )
}
