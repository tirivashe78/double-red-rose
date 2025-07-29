'use client'

export default function MapSection() {
  return (
    <section className="py-20 container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
      <img
        src="/assets/map-galax-mall.jpg"
        alt="Galax Mall Location"
        className="w-full md:w-1/2 rounded-lg shadow-lg"
      />
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-2xl font-semibold">Where to Experience</h3>
        <p>
          Galax Mall, 4th Floor, Corner Jason Moo & First Street<br/>
          Join our in-person presentation and tasting!
        </p>
        <a
          href="https://maps.google.com/?q=Galax+Mall+Harare"
          target="_blank" rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-crimson text-white rounded-full"
        >
          Get Directions
        </a>
      </div>
    </section>
  )
}
