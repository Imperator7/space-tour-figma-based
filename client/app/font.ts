import { Bellefair, Barlow, Barlow_Condensed } from 'next/font/google'

export const bellefair = Bellefair({
  subsets: ['latin'],
  variable: '--font-bellefair',
  weight: '400',
  display: 'swap',
})

export const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: '400',
  display: 'swap',
})

export const barlowCond = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
  weight: '400',
  display: 'swap',
})
