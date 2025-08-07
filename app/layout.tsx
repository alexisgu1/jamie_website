import type { Metadata } from 'next'
import { Inter, Rajdhani } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const rajdhani = Rajdhani({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani'
})

export const metadata: Metadata = {
  title: 'Agent Five-O Private Investigation',
  description: 'Professional private investigation services in Michigan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${rajdhani.variable}`}>{children}</body>
    </html>
  )
}
