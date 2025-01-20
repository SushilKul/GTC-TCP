import Image from 'next/image'
import Link from 'next/link'
import { Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gig_Thing_Consulting_-_Logo_Idea4-removebg-preview%20(1)-jOnNsy9n30EnJ1QyUw08ymKpNENR8S.png"
              alt="GTC Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <p className="mt-4 text-gray-400">
              Empowering businesses through intelligent automation and strategic consulting.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#automation" className="text-gray-400 hover:text-white transition-colors">
                  Automation
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">Pune, India</p>
            <a href="mailto:contact@gtcconsulting.com" className="text-gray-400 hover:text-white transition-colors">
              contact@gtcconsulting.com
            </a>
            <div className="mt-4">
              <a
                href="https://www.linkedin.com/in/laxmikantbhakre/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GTC Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

