'use client'

import CrewSlide from '@/components/crew/CrewSlide'

const Crew = () => {
  return (
    <main
      className={[
        'h-dvh bg-cover bg-no-repeat',
        'preserve-navbar-space',
        "bg-[url('/assets/crew/background-crew-mobile.jpg')]",
        "md:bg-[url('/assets/crew/background-crew-tablet.jpg')]",
        "lg:bg-[url('/assets/crew/background-crew-desktop.jpg')]",
        'overflow-hidden',
        'lg:flex justify-center',
      ].join(' ')}
    >
      <div className="flex flex-col p-300 md:p-500 gap-300 lg:p-0 lg:py-600 h-full w-full lg:max-w-[1110px]">
        <h3 className="flex h-[19px] md:h-[24px] lg:h-[34px] gap-300 items-center justify-center md:justify-start">
          <span className="text-8 md:text-[20px] lg:text-[28px] font-bold tabular-nums leading-none opacity-25">
            02
          </span>
          <span className="text-5 text-[16px] md:text-[20px] lg:text-[28px] leading-none">
            MEET YOUR CREW
          </span>
        </h3>{' '}
        <CrewSlide />
      </div>
    </main>
  )
}
export default Crew
