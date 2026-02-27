import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="relative max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[50px] py-6">

      {/* Image Container */}
      <div className="relative w-full h-[70vh] sm:h-[80vh] rounded-3xl overflow-hidden">
        <Image
          src="/assets/Hero/banner.jpg"
          alt="Architectural design banner"
          fill
          priority
          className="object-cover clip-path-image"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-16 text-white">

          <div className="max-w-[700px]">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Designing Spaces
            </h1>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
              That Inspire & Endure
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <div className="inline-flex items-center justify-center bg-white rounded-full p-2">
              <button className="bg-black text-white rounded-full px-8 sm:px-12 py-3 text-sm sm:text-base hover:opacity-90 transition">
                Schedule a Free Consultation
              </button>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Hero