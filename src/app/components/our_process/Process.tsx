import React from 'react'
import Cards from './Cards'
import { FaArrowRight } from 'react-icons/fa6'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Process = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[50px] py-16">

      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          Effortless Process,
        </h2>
        <h2 className="text-3xl sm:text-4xl font-semibold">
          Continuous Supply
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Cards
          card_no="01"
          title="Choose a Plan"
          description="Select the flexible or premium plan that suits your business needs."
        />
        <Cards
          card_no="02"
          title="Subscribe Instantly"
          description="Activate your subscription with just a click — no forms, no hassle."
        />
        <Cards
          card_no="03"
          title="Get Tailored Solution"
          description="Receive personalized products tailored for your operations."
        />
        <Cards
          card_no="04"
          title="Receive Your Supply"
          description="Sit back as your supplies are delivered on time, every time."
        />
      </div>

      {/* CTA Bar */}
      <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 bg-[#dfdfdf4f] border border-gray-400 rounded-2xl px-6 py-5">

        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/maxleiter.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/evilrabbit.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <p className="text-sm sm:text-base">
            Align with businesses that <span className="font-semibold">choose quality</span>
          </p>
        </div>

        <div className="flex items-center gap-3 bg-black rounded-full px-2 py-1 cursor-pointer w-fit">
          <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-black">
            <FaArrowRight />
          </button>
          <span className="text-white pr-4">Start Now</span>
        </div>

      </div>
    </section>
  )
}

export default Process