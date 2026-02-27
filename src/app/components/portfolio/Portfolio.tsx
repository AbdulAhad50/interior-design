'use client'

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

const Portfolio = () => {
  return (
    <motion.section
      className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[50px] py-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Column 1 */}
        <motion.div className="flex flex-col gap-6" variants={fadeUp}>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">
              Our Portfolio Of Pioneering Design
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-700">
              Explore our selected works that demonstrate our commitment to
              design excellence, innovation, and client satisfaction.
            </p>
          </div>

          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
            <motion.div whileHover={{ scale: 1.05 }} className="w-full h-full">
              <Image
                src="/assets/portfolio/card_4.jpg"
                alt=""
                fill
                className="object-cover h-[150%]"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Column 2 */}
        <motion.div className="flex flex-col gap-6" variants={fadeUp}>
          {["/assets/portfolio/card_1.jpg", "/assets/portfolio/card_3.jpg"].map((src, i) => (
            <div key={i} className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
              <motion.div whileHover={{ scale: 1.05 }} className="w-full h-full">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Column 3 */}
        <motion.div className="flex flex-col gap-6 justify-between" variants={fadeUp}>
          <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
            <motion.div whileHover={{ scale: 1.05 }} className="w-full h-full">
              <Image
                src="/assets/portfolio/card_2.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <motion.button
            className="w-full py-3 border border-black rounded-full hover:bg-black hover:text-white transition"
            whileHover={{ scale: 1.03 }}
          >
            See More Projects
          </motion.button>
        </motion.div>

      </div>
    </motion.section>
  )
}

export default Portfolio;