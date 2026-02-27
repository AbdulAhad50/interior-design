"use client";

import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";





export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(form); // replace with real submission
  }

  return (
    <section
      aria-labelledby="contact-heading"
      className="mt-6 w-full max-w-[1440px] mx-auto rounded-md p-6 sm:p-12 flex flex-col md:flex-row gap-10"
    >
      {/* LEFT */}
      <div className="flex-1">
        <h2
          id="contact-heading"
          className="text-5xl font-semibold mb-6"
        >
          Get in touch
        </h2>

        <div className="text-sm text-neutral-700 space-y-4 leading-relaxed">
          <p>
            <span className="text-[25px]">Email:</span><br />
            Moneta@gmail.com
          </p>

          <p>
            <span className="text-[25px]">Phone:</span><br />
            +17631683
          </p>

          <p>
            <span className="text-[25px]">Address:</span><br />
            123 Innovation Avenue, Suite 456<br />
            Tech District, San Francisco, CA 94107<br />
            United States
          </p>
        </div>

        <div
          className="flex gap-3 mt-4"
          aria-label="Social links"
        >
      
            <span
              className="w-7 h-7 flex justify-center items-center rounded-full border border-black"
              aria-hidden="true"><FaFacebookF /></span>
            <span
              className="w-7 h-7 flex justify-center items-center rounded-full border border-black"
              aria-hidden="true"><RiInstagramLine /></span>
            <span
              className="w-7 h-7 flex justify-center items-center rounded-full border border-black"
              aria-hidden="true"><FaYoutube /></span>
            <span
              className="w-7 h-7 flex justify-center items-center rounded-full border border-black"
              aria-hidden="true"><FaXTwitter /></span>
  
        </div>
      </div>

      {/* RIGHT */}
      <form
        onSubmit={handleSubmit}
        className="flex-[1.2] flex flex-col gap-4"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <label htmlFor="name" className="sr-only">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
              className="w-full rounded-lg bg-[#f2f2f2] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="w-full">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email address"
              required
              className="w-full rounded-lg bg-[#f2f2f2] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <label htmlFor="name" className="sr-only">
              Phone Number
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full rounded-lg bg-[#f2f2f2] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="w-full">
            <label htmlFor="email" className="sr-only">
              Business Name
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Business Name"
              required
              className="w-full rounded-lg bg-[#f2f2f2] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write something..."
            required
            className="w-full min-h-[180px] resize-none rounded-lg bg-[#f2f2f2] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
          type="submit"
          className="mt-2 rounded-lg bg-black py-3 text-sm text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
