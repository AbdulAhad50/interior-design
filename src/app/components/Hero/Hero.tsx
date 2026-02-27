"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[50px] py-2">

      {/* Image Container */}
      <motion.div
        className="relative w-full h-[70vh] sm:h-[80vh] rounded-3xl overflow-hidden"
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src="/assets/Hero/banner.jpg"
          alt="Architectural design banner"
          fill
          priority
          className="object-cover clip-path-image"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-16 text-white">

          {/* Text Animation */}
          <motion.div
            className="max-w-[700px]"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Designing Spaces
            </h1>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
              That Inspire & Endure
            </p>
          </motion.div>

          {/* CTA Animation */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center bg-white rounded-full p-2">
              <button className="bg-black text-white rounded-full px-8 sm:px-12 py-3 text-sm sm:text-base hover:opacity-90 transition">
                Schedule a Free Consultation
              </button>
            </div>
          </motion.div>

        </div>
      </motion.div>

    </section>
  );
};

export default Hero;