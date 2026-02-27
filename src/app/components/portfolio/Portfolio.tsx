import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[50px] py-16">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">
              Our Portfolio Of Pioneering Design
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-700">
              Explore our selected works that demonstrate our commitment to
              design excellence, innovation, and client satisfaction.
            </p>
          </div>

          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/assets/portfolio/card_4.jpg"
              alt=""
              fill
              className="object-cover rounded-lg h-[150%]"
            />
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-6">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/assets/portfolio/card_1.jpg"
              alt=""
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/assets/portfolio/card_3.jpg"
              alt=""
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-6 justify-between">
          <div className="relative w-full aspect-[3/4]">
            <Image
              src="/assets/portfolio/card_2.jpg"
              alt=""
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <button className="w-full py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
            See More Projects
          </button>
        </div>

      </div>
    </section>
  )
}

export default Portfolio