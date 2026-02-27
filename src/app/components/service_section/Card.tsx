import Image from 'next/image'
import React from 'react'

const Card = ({
  image_path,
  title,
  content,
  card_no
}: {
  image_path: string
  title: string
  content: string
  card_no: string
}) => {
  return (
    <div className="relative flex flex-col gap-3">

      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
        <Image
          src={`/assets/service/${image_path}.jpg`}
          alt={title}
          fill
          className="object-cover"
        />
        <span className="absolute top-3 left-4 text-white font-semibold">
          {card_no}
        </span>
      </div>

      <h3 className="text-lg sm:text-xl font-semibold">
        {title}
      </h3>

      <p className="text-sm text-gray-700 leading-relaxed">
        {content}
      </p>

    </div>
  )
}

export default Card