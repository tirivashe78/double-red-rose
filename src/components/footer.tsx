'use client'
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
        <div className="space-y-2">
          <p>📧 info@double-red-rose.com</p>
          <p>📞 +263 71 211 0487</p>
          <p>
            <FaWhatsapp className="inline mr-2" />
            <a href="https://wa.me/263712110487">Chat Now</a>
          </p>
        </div>
        <div className="space-x-4 text-2xl">
          <a href="https://facebook.com/yourpage"><FaFacebook /></a>
          <a href="https://instagram.com/yourpage"><FaInstagram /></a>
        </div>
      </div>
<p className="mt-6 text-center text-sm text-gray-500">
  All Rights Reserved. Designed by{' '}
  <a
    href="https://wa.me/263784558583"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors"
    aria-label="Message Tirivashe Tinarwo on WhatsApp"
  >
    <FaWhatsapp className="w-4 h-4 text-green-500" aria-hidden />
    <span className="underline">Tirivashe Tinarwo</span>
  </a>
</p>
    </footer>
  )
}
