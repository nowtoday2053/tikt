import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'US TikTok Accounts — $5 each',
  description: 'Clean, ready-to-roll US-based TikTok accounts. No shadows. No suspicious login detected nonsense. $5 per account.',
  openGraph: {
    title: 'US TikTok Accounts — $5 each',
    description: 'Clean, ready-to-roll US-based TikTok accounts. No shadows. No suspicious login detected nonsense. $5 per account.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'US TikTok Accounts — $5 each',
    description: 'Clean, ready-to-roll US-based TikTok accounts. No shadows. No suspicious login detected nonsense. $5 per account.',
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
