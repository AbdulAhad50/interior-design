'use client'
import React, { useRef } from 'react'
import Card from './Card'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { motion } from 'framer-motion'
import 'swiper/css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

const Service = () => {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <motion.section
      className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[50px] py-16 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={fadeUp}
    >

      {/* Header */}
      <motion.div
        className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 mb-10"
        variants={fadeUp}
      >
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
      </motion.div>

      {/* Slider */}
      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {[
            ["card_1", "Arch Design", "From initial concept development semantic design", "01"],
            ["card_2", "Interior Design", "Creating cohesive interior spaces that reflect your style", "02"],
            ["card_3", "Urban Planning", "Design the spaces between buildings & outdoor", "03"],
            ["card_4", "Project Manage", "Overseeing & controlling the entire construction process", "04"],
          ].map(([img, title, content, no], i) => (
            <SwiperSlide key={i}>
              <Card
                image_path={img}
                title={title}
                content={content}
                card_no={no}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

    </motion.section>
  )
}

export default Service