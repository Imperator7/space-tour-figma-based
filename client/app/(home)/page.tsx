'use client'

import ExploreButton from '@/components/ExploreButton'

export default function Home() {
  return (
    <main
      className={[
        "relative bg-cover bg-no-repeat bg-[url('/assets/home/background-home-mobile.jpg')] ",
        'preserve-navbar-space h-dvh overflow-hidden',
      ].join(' ')}
    >
      <div className="flex flex-col p-300 h-full">
        <div className="flex flex-col items-center justify-center gap-300">
          <p className="text-6 text-[16px] h-[19px] leading-relaxed">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <p className="text-1 text-[80px] h-[92px] flex items-center leading-none">
            SPACE
          </p>
          <p className="text-9 text-[15px] text-center">
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
