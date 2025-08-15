import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TokSupply — Premium US TikTok Accounts',
  description: 'Premium US-based TikTok accounts from TokSupply. Clean, verified, and ready to scale. $5 per account.',
  openGraph: {
    title: 'TokSupply — Premium US TikTok Accounts',
    description: 'Premium US-based TikTok accounts from TokSupply. Clean, verified, and ready to scale. $5 per account.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'TokSupply — Premium US TikTok Accounts',
    description: 'Premium US-based TikTok accounts from TokSupply. Clean, verified, and ready to scale. $5 per account.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
