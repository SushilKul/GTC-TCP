import Image from 'next/image'
import { ArrowRight, BarChart3, MessageSquare, Users, UserPlus, Search, FileText, CheckCircle, Trophy, Users2, Globe2, Linkedin } from 'lucide-react'

export default function Home() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: '#1f2937', lineHeight: '1.5' }}>
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        zIndex: 50,
        borderBottom: '1px solid #e5e7eb',
        padding: '1rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gig_Thing_Consulting_-_Logo_Idea4-removebg-preview%20(1)-jOnNsy9n30EnJ1QyUw08ymKpNENR8S.png"
            alt="GTC Logo"
            width={120}
            height={40}
            style={{ height: '40px', width: 'auto' }}
          />
          <nav style={{ display: 'flex', gap: '2rem' }}>
            {['Services', 'Automation', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{ color: '#4b5563', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        backgroundImage: 'linear-gradient(to bottom right, #f9fafb, #f3f4f6)',
        padding: '8rem 1rem 4rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Transform Your Business with
            <span className="gradient-text" style={{ display: 'block' }}>
              Intelligent Automation
            </span>
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#4b5563', marginBottom: '2rem' }}>
            Empowering MSMEs & Start-Ups with cutting-edge automation solutions. 
            From sales to operations, we help you streamline processes and drive growth.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <a href="#contact" style={{
              backgroundColor: '#00B4D8',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'background-color 0.3s'
            }}>
              Get Started
            </a>
            <a href="#services" style={{
              display: 'flex',
              alignItems: 'center',
              color: '#4b5563',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}>
              Learn more <ArrowRight style={{ marginLeft: '0.5rem', width: '1rem', height: '1rem' }} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: '4rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>
            Our Automation Services
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { icon: Users, title: 'Sales Automation', description: 'AI-powered outbound calls, email outreach, and LinkedIn automation for efficient lead generation and conversion.' },
              { icon: MessageSquare, title: 'Marketing Automation', description: 'Streamline your marketing with automated social media scheduling, campaign optimization, and content personalization.' },
              { icon: BarChart3, title: 'Customer Support', description: 'Enhance customer experience with automated support ticket triage and intelligent alert systems.' },
              { icon: UserPlus, title: 'HR Automation', description: 'Simplify HR processes with automated recruiting workflows and employee benefits management systems.' },
              { icon: Search, title: 'Prospecting Automation', description: 'Leverage AI for lead generation, data enrichment, and targeted prospect identification.' },
              { icon: FileText, title: 'Document Analysis', description: 'Automate form processing, document review, and metadata extraction with AI-powered solutions.' }
            ].map((service, index) => (
              <div key={index} style={{
                padding: '1.5rem',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                transition: 'box-shadow 0.3s',
                cursor: 'pointer'
              }}>
                <service.icon style={{ width: '2rem', height: '2rem', color: '#00B4D8', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{service.title}</h3>
                <p style={{ color: '#4b5563' }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section id="automation" style={{ padding: '4rem 1rem', backgroundColor: '#f3f4f6' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2rem' }}>
          <div style={{ flex: '1 1 300px' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Transform Your Business with Intelligent Automation
            </h2>
            <p style={{ color: '#4b5563', marginBottom: '2rem' }}>
              Our automation solutions combine artificial intelligence, machine learning, and 
              robotic process automation to streamline your business operations and drive growth.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                'Reduce operational costs by up to 40%',
                'Increase team productivity by 60%',
                'Eliminate manual data entry errors',
                'Scale operations without adding headcount',
                'Improve customer satisfaction scores',
                'Enable 24/7 business operations'
              ].map((benefit, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle style={{ width: '1.25rem', height: '1.25rem', color: '#00B4D8' }} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: '1 1 300px', position: 'relative' }}>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Automation Dashboard"
              width={600}
              height={400}
              style={{ borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '4rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2rem' }}>
          <div style={{ flex: '1 1 300px', position: 'relative' }}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gig_Thing_Consulting_-_Logo_Idea4-removebg-preview%20(1)-jOnNsy9n30EnJ1QyUw08ymKpNENR8S.png"
              alt="GTC Logo"
              width={400}
              height={400}
              style={{ borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
            />
          </div>
          <div style={{ flex: '1 1 300px' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              About GTC Consulting
            </h2>
            <p style={{ color: '#4b5563', marginBottom: '2rem' }}>
              GTC Consulting is at the forefront of business process automation, leveraging 
              cutting-edge AI technologies to transform operations for MSMEs and SMEs across 
              India, USA, and Canada.
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {[
                { icon: Trophy, label: 'Years Experience', value: '30+' },
                { icon: Users2, label: 'Clients Served', value: '200+' },
                { icon: Globe2, label: 'Countries', value: '3' }
              ].map((stat, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{ backgroundColor: 'rgba(0, 180, 216, 0.1)', borderRadius: '9999px', padding: '1rem', display: 'inline-flex', marginBottom: '0.5rem' }}>
                    <stat.icon style={{ width: '1.5rem', height: '1.5rem', color: '#00B4D8' }} />
                  </div>
                  <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{stat.value}</div>
                  <div style={{ color: '#6b7280', fontSize: '0.875rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '4rem 1rem', backgroundColor: '#f3f4f6' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Get in Touch
          </h2>
          <p style={{ color: '#4b5563', marginBottom: '2rem' }}>
            Ready to transform your business with intelligent automation? 
            Contact us today for a free consultation.
          </p>
          <form style={{ display: 'grid', gap: '1rem' }}>
            <input type="text" placeholder="Name" style={inputStyle} />
            <input type="email" placeholder="Email" style={inputStyle} />
            <textarea placeholder="Message" rows={4} style={inputStyle}></textarea>
            <button type="submit" style={{
              backgroundColor: '#00B4D8',
              color: 'white',
              padding: '0.75rem',
              borderRadius: '0.375rem',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1f2937', color: 'white', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ flex: '1 1 300px' }}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gig_Thing_Consulting_-_Logo_Idea4-removebg-preview%20(1)-jOnNsy9n30EnJ1QyUw08ymKpNENR8S.png"
              alt="GTC Logo"
              width={120}
              height={40}
              style={{ height: '40px', width: 'auto', marginBottom: '1rem' }}
            />
            <p style={{ color: '#9ca3af' }}>
              Empowering businesses through intelligent automation and strategic consulting.
            </p>
          </div>
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Services', 'Automation', 'About', 'Contact'].map((item) => (
                <li key={item} style={{ marginBottom: '0.5rem' }}>
                  <a href={`#${item.toLowerCase()}`} style={{ color: '#9ca3af', textDecoration: 'none' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Contact</h3>
            <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>
              Pune, India
            </p>
            <a href="mailto:contact@gtcconsulting.com" style={{ color: '#9ca3af', textDecoration: 'none' }}>
              contact@gtcconsulting.com
            </a>
            <div style={{ marginTop: '1rem' }}>
              <a
                href="https://www.linkedin.com/in/laxmikantbhakre/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#9ca3af', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
              >
                <Linkedin style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.5rem' }} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #374151', marginTop: '2rem', paddingTop: '2rem', textAlign: 'center', color: '#9ca3af' }}>
          <p>&copy; {new Date().getFullYear()} GTC Consulting. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  borderRadius: '0.375rem',
  border: '1px solid #d1d5db',
  backgroundColor: 'white'
}

