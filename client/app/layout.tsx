import type { Metadata } from 'next'
import { bellefair, barlow, barlowCond } from './font'
import MainLayout from '@/layout/MainLayout'
import './globals.css'

export const metadata: Metadata = {
  title: 'Space tourism',
  description:
    'multi-page responsive webapp (desktop/tablet/mobile), pixel-perfect from figma.',
  authors: [{ name: 'Rungroj Rungsaranon' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${bellefair.variable} ${barlow.variable} ${barlowCond.variable}`}
    >
      <body className={`antialiased`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
