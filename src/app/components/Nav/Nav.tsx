'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="max-w-[1440px] mx-auto px-[50px]">
      <div className="flex justify-between items-center py-3">

        {/* Logo */}
        <Image
          src="/logo.png"
          alt="logo"
          width={150}
          height={50}
          className="w-[130px] sm:w-[150px]"
          priority
        />

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700 pr-[20px]">
          <li><Link href="/">About Us</Link></li>
          <li><Link href="/">Our Services</Link></li>
          <li><Link href="/">Portfolio</Link></li>
          <li><Link href="/">Process</Link></li>
          <li><Link href="/">Contacts</Link></li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-[2px] bg-gray-800"></span>
          <span className="w-6 h-[2px] bg-gray-800"></span>
          <span className="w-6 h-[2px] bg-gray-800"></span>
        </button>
      </div>

      {/* Mobile Menu (always rendered for animation) */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-out
          ${menuOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'}
        `}
      >
        <ul className="flex flex-col gap-4 py-4 font-medium text-gray-700">
          {['About Us', 'Our Services', 'Portfolio', 'Process', 'Contacts'].map(item => (
            <li key={item}>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="block"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </header>
  )
}

export default Nav
