'use client'                              // ← Also mark the page itself as client

import HeroSection from '../components/hero-section'
import WhyItMatters from '../components/why-it-matters'
import ProductFeatures from '../components/product-features'
import BeautyAndBrain from '../components/beauty-and-brain'
import HowToUse from '../components/how-to-use'
import VideoRow from '../components/video-row'
import MapSection from '../components/map-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyItMatters />
      <ProductFeatures />
      <BeautyAndBrain />
      <HowToUse />
      <VideoRow />
      <MapSection />
    </>
  )
}
