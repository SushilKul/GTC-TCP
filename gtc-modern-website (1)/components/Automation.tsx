import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

const benefits = [
  'Reduce operational costs by up to 40%',
  'Increase team productivity by 60%',
  'Eliminate manual data entry errors',
  'Scale operations without adding headcount',
  'Improve customer satisfaction scores',
  'Enable 24/7 business operations'
]

export default function Automation() {
  return (
    <section id="automation" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Transform Your Business with Intelligent Automation
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our automation solutions combine artificial intelligence, machine learning, and 
              robotic process automation to streamline your business operations and drive growth.
            </p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Automation Dashboard"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

