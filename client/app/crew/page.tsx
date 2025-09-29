'use client'

import CrewSlide from '@/components/crew/CrewSlide'

const Crew = () => {
  return (
    <main
      className={[
        "h-dvh bg-cover bg-no-repeat bg-[url('/assets/crew/background-crew-mobile.jpg')]",
        'preserve-navbar-space',
      ].join(' ')}
    >
      <div className="flex flex-col p-300 gap-300 h-full">
        <h3 className="flex h-[19px] gap-300 items-center justify-center">
          <span className="text-8 font-bold tabular-nums leading-none opacity-25">
            02
          </span>
          <span className="text-5 text-[16px] leading-none">
            MEET YOUR CREW
          </span>
        </h3>{' '}
        <CrewSlide />
      </div>
    </main>
  )
}
export default Crew
