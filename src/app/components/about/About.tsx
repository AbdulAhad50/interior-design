"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const About = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[50px] py-2">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

        {/* Left Content */}
        <motion.div
          className="flex flex-col justify-between gap-8 lg:w-[60%]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">
              About Company
            </h2>
            <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              {`At Apex Architechs, we believe that architecture is more than just
              buildings; it's about creating environments that enhance human
              experience.`}
            </p>
          </div>

          {/* Badges */}
          <motion.div
            className="flex flex-wrap gap-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {["CNBC", "officeRND", "ARCONIC"].map((item, i) => (
              <motion.button
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.4 }}
                className="bg-[#f2f2f2ae] rounded-full px-5 py-1 border border-gray-400 text-sm"
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Stats */}
        <motion.div
          className="grid grid-cols-2 gap-8 text-center w-full lg:w-auto"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            ["25+", "Years Of Experience in Architecture & Design"],
            ["500+", "Projects Successfully Completed"],
            ["98%", "Client Retention Rate"],
            ["15+", "Countries With Our Projects"],
          ].map(([value, label], i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold">{value}</h2>
              <p className="text-sm sm:text-base">{label}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;