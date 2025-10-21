import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mock Groupon',
  description: 'Best deals on restaurants, shopping, travel and more',
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

