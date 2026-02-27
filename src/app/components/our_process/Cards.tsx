import Image from 'next/image'
import React from 'react'

const Cards = ({
  card_no,
  title,
  description
}: {
  card_no: string
  title: string
  description: string
}) => {
  return (
    <div className="relative flex flex-col justify-between p-6 bg-[#dfdfdf4f] border rounded-xl min-h-[280px] transition-transform duration-300 hover:scale-[1.03]">

      <div>
        <h3 className="text-2xl font-semibold">{card_no}.</h3>
        <h4 className="text-lg mt-1">{title}</h4>
      </div>

      <p className="text-sm text-gray-700 mt-4 max-w-[240px]">
        {description}
      </p>

      {/* Decorative Image */}
      <div className="absolute bottom-0 right-0 opacity-40 pointer-events-none">
        <Image
          src="/assets/process/outline_img.png"
          alt=""
          width={300}
          height={300}
        />
      </div>

    </div>
  )
}

export default Cards