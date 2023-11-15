import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const font = Roboto({ weight: '400', subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
