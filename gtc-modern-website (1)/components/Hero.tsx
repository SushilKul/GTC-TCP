import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">Transform Your Business with</span>
            <span className="block gradient-text mt-2">Intelligent Automation</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Empowering MSMEs & Start-Ups with cutting-edge automation solutions. 
            From sales to operations, we help you streamline processes and drive growth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#contact"
              className="rounded-full bg-primary px-8 py-3 text-white shadow-lg hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="#services"
              className="group flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

