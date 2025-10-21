import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Groupon - Deals, Coupons & Discount',
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

