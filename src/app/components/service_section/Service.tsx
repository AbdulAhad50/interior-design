'use client'
import React, { useRef } from 'react'
import Card from './Card'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Service = () => {
  const swiperRef = useRef(null)

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[50px] py-16">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          Service we provide
        </h2>

        <div className="flex gap-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex justify-center items-center w-10 h-10 rounded-full border border-black"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="flex justify-center items-center w-10 h-10 rounded-full bg-black text-white"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Slider */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        <SwiperSlide>
          <Card
            image_path="card_1"
            title="Arch Design"
            content="From initial concept development semantic design"
            card_no="01"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            image_path="card_2"
            title="Interior Design"
            content="Creating cohesive interior spaces that reflect your style"
            card_no="02"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            image_path="card_3"
            title="Urban Planning"
            content="Design the spaces between buildings & outdoor"
            card_no="03"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            image_path="card_4"
            title="Project Manage"
            content="Overseeing & controlling the entire construction process"
            card_no="04"
          />
        </SwiperSlide>
      </Swiper>

    </section>
  )
}

export default Service