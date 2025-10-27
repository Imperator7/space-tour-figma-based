'use client'

import Image from 'next/image'
import ExploreButton from '@/components/ExploreButton'

export default function Home() {
  return (
    <main
      className={[
        'relative z-0',
        'preserve-navbar-space min-h-dvh',
        'flex',
      ].join(' ')}
    >
      <div className="fixed inset-0">
        <Image
          src="/assets/home/background-home-mobile.jpg"
          alt="bg-space"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-col p-300 md:px-500 md:py-1600 min-h-full z-10">
        <div className="flex flex-col items-center justify-center gap-300">
          <p className="text-5 text-[16px] h-[19px] leading-relaxed text-secondary-blue tracking-[2px]">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <p className="text-1 text-[80px] h-[92px] flex items-center leading-none">
            SPACE
          </p>
          <p className="text-9 text-[15px] text-center text-secondary-blue">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex items-center justify-center h-full">
          <ExploreButton />
        </div>
      </div>
    </main>
  )
}
