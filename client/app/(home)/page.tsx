'use client'

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
      <div
        className={[
          'fixed inset-0 pointer-events-none -z-10',
          'bg-cover bg-no-repeat bg-center',
          "bg-[url('/assets/home/background-home-mobile.jpg')]",
          "md:bg-[url('/assets/home/background-home-tablet.jpg')]",
          "lg:bg-[url('/assets/home/background-home-desktop.jpg')]",
        ].join(' ')}
      ></div>
      <div className="flex flex-col p-300 md:px-500 md:py-1600 min-h-full w-full items-center z-10">
        <div className="flex flex-col items-center md:gap-600 h-full md: max-w-[540px]">
          <div className="flex flex-col items-center justify-center gap-300 md:max-w-[512px]">
            <p className="text-5 text-[16px] md:text-[28px] h-[19px] md:h-[34px] leading-relaxed text-secondary-blue tracking-[2px]">
              SO, YOU WANT TO TRAVEL TO
            </p>
            <p className="text-1 text-[80px] md:text-[144px] h-[92px] md:h-[165px] flex items-center leading-none">
              SPACE
            </p>
            <p className="text-9 text-[15px] text-center text-secondary-blue">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="flex items-center justify-center h-full md:h-fit">
            <ExploreButton />
          </div>
        </div>
      </div>
    </main>
  )
}
