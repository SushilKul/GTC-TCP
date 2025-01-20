import Image from 'next/image'
import { Trophy, Users2, Globe2 } from 'lucide-react'

const stats = [
  { icon: Trophy, label: 'Years Experience', value: '30+' },
  { icon: Users2, label: 'Clients Served', value: '200+' },
  { icon: Globe2, label: 'Countries', value: '3' }
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gig_Thing_Consulting_-_Logo_Idea4-removebg-preview%20(1)-jOnNsy9n30EnJ1QyUw08ymKpNENR8S.png"
              alt="GTC Logo"
              width={400}
              height={400}
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl" />
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About GTC Consulting
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              GTC Consulting is at the forefront of business process automation, leveraging 
              cutting-edge AI technologies to transform operations for MSMEs and SMEs across 
              India, USA, and Canada.
            </p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="mt-3">
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

