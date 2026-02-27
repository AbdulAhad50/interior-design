'use client'

import React from 'react'
import Cards from './Cards'
import { FaArrowRight } from 'react-icons/fa6'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}

const Process = () => {
  return (
    <motion.section
      className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[50px] py-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >

      {/* Heading */}
      <motion.div className="mb-12" variants={fadeUp}>
        <h2 className="text-3xl sm:text-4xl font-semibold">
          Effortless Process,
        </h2>
        <h2 className="text-3xl sm:text-4xl font-semibold">
          Continuous Supply
        </h2>
      </motion.div>

      {/* Cards */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={stagger}>
        {[
          ["01", "Choose a Plan", "Select the flexible or premium plan that suits your business needs."],
          ["02", "Subscribe Instantly", "Activate your subscription with just a click — no forms, no hassle."],
          ["03", "Get Tailored Solution", "Receive personalized products tailored for your operations."],
          ["04", "Receive Your Supply", "Sit back as your supplies are delivered on time, every time."]
        ].map(([no, title, desc], i) => (
          <motion.div key={i} variants={fadeUp} transition={{ duration: 0.5 }}>
            <Cards card_no={no} title={title} description={desc} />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Bar */}
      <motion.div
        className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 bg-[#dfdfdf4f] border border-gray-400 rounded-2xl px-6 py-5"
        variants={fadeUp}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
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
      </motion.div>

    </motion.section>
  )
}

export default Process