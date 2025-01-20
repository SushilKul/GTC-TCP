import { BarChart3, MessageSquare, Users, UserPlus, Search, FileText, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Users,
    title: 'Sales Automation',
    description: 'AI-powered outbound calls, email outreach, and LinkedIn automation for efficient lead generation and conversion.',
    link: '#contact'
  },
  {
    icon: MessageSquare,
    title: 'Marketing Automation',
    description: 'Streamline your marketing with automated social media scheduling, campaign optimization, and content personalization.',
    link: '#contact'
  },
  {
    icon: BarChart3,
    title: 'Customer Support',
    description: 'Enhance customer experience with automated support ticket triage and intelligent alert systems.',
    link: '#contact'
  },
  {
    icon: UserPlus,
    title: 'HR Automation',
    description: 'Simplify HR processes with automated recruiting workflows and employee benefits management systems.',
    link: '#contact'
  },
  {
    icon: Search,
    title: 'Prospecting Automation',
    description: 'Leverage AI for lead generation, data enrichment, and targeted prospect identification.',
    link: '#contact'
  },
  {
    icon: FileText,
    title: 'Document Analysis',
    description: 'Automate form processing, document review, and metadata extraction with AI-powered solutions.',
    link: '#contact'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Automation Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive automation solutions designed to transform your business operations
            and drive sustainable growth.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <a
                href={service.link}
                className="absolute inset-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={`Learn more about ${service.title}`}
              >
                <span className="sr-only">Learn more about {service.title}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

