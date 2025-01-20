import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gig Things Consulting (GTC) - Business Automation & Strategy Experts',
  description: 'Enhance success with GTC: Strategy experts for MSMEs & Start-Ups. We specialise in Sales, Digital Transformation, Turnarounds, M&A, China strategy, and automation solutions.',
  keywords: 'business automation, digital transformation, MSME consulting, SME consulting, sales automation, marketing automation, customer support automation, HR automation',
  openGraph: {
    title: 'Gig Things Consulting (GTC) - Business Automation & Strategy Experts',
    description: 'Enhance success with GTC: Strategy experts for MSMEs & Start-Ups. We specialise in Sales, Digital Transformation, Turnarounds, M&A, China strategy, and automation solutions.',
    url: 'https://gigthingsconsulting.com',
    siteName: 'Gig Things Consulting',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gig Things Consulting (GTC)',
    description: 'Business Automation & Strategy Experts for MSMEs & Start-Ups',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

