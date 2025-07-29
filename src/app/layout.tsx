// **No** "use client" here — this stays a server component.

import './globals.css'
import Footer from '../components/footer'
import Head from 'next/head'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Double Red Rose</title>
        <meta
          name="description"
          content="Elevate Your Morning • Fuel Your Success • Live Your Dream"
        />
      </Head>
      <body className="bg-white text-gray-800 antialiased">
        {children}
        <Footer />
      </body>
    </html>
  )
}
