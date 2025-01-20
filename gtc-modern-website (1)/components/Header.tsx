'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gig_Thing_Consulting_-_Logo_Idea4-removebg-preview%20(1)-jOnNsy9n30EnJ1QyUw08ymKpNENR8S.png"
                alt="GTC Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-primary">Services</Link>
            <Link href="#automation" className="text-gray-700 hover:text-primary">Automation</Link>
            <Link href="#about" className="text-gray-700 hover:text-primary">About</Link>
            <Link href="#contact" className="text-gray-700 hover:text-primary">Contact</Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#services"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#automation"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Automation
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

