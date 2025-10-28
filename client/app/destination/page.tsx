'use client'

import Image from 'next/image'
import TabMenu from '@/components/TabMenu'
import { useState } from 'react'
import { PLANET, PLANET_ASSETS } from '@/lib/planets'

const Destination = () => {
  const [selectedTab, setSelectedTab] = useState<PLANET>('MOON')

  const handleSelectTab = (tab: PLANET) => setSelectedTab(tab)

  return (
    <div
      className={[
        'h-full',
        'preserve-navbar-space min-h-dvh',
        'bg-cover bg-no-repeat bg-center',
        "bg-[url('/assets/destination/background-destination-mobile.jpg')]",
        "md:bg-[url('/assets/destination/background-destination-tablet.jpg')]",
        "lg:bg-[url('/assets/destination/background-destination-desktop.jpg')]",
      ].join(' ')}
    >
      <div
        className={[
          'flex flex-col items-center',
          'h-full p-300 md:p-500 lg:p-600 ',
        ].join(' ')}
      >
        <div className="h-full gap-300 flex flex-col items-center w-full max-w-[1110px]">
          <h3 className="flex h-[19px] md:h-[24px] gap-300 items-center justify-center md:justify-start w-full">
            <span className="text-8 font-bold tabular-nums leading-none opacity-25">
              01
            </span>
            <span className="text-5 text-[16px] leading-none">
              PICK YOUR DESTINATION
            </span>
          </h3>

          <div className="flex flex-col w-full h-full items-center lg:justify-center lg:flex-row lg:items-center gap-400">
            <div
              className={[
                'h-[202px] md:h-[384px] w-full flex justify-center items-center',
                'transition-all duration-2000',
              ].join(' ')}
            >
              <picture>
                <source
                  srcSet={`/assets/destination/image-${selectedTab.toLowerCase()}.webp`}
                  type="image/webp"
                />
                <Image
                  src={`/assets/destination/image-${selectedTab.toLowerCase()}.png`}
                  width={300}
                  height={300}
                  className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[480px] lg:h-[480px] "
                  alt={selectedTab}
                />
              </picture>
            </div>
            <div className="flex flex-col gap-300 w-full items-center lg:items-center">
              <div className="flex flex-col gap-300 max-w-[445px]">
                <div className="flex flex-col gap-300 items-center lg:items-start h-full md:max-w-[514px] lg:max-w-[445px]  lg:justify-center">
                  <TabMenu
                    selectedTab={selectedTab}
                    handleSelectTab={handleSelectTab}
                  />
                  <div className="flex flex-col gap-200 items-center lg:items-start">
                    <h2 className="text-2 text-[56px] md:text-[80px] lg:text-[96px]">
                      {PLANET_ASSETS[selectedTab].name.toUpperCase()}
                    </h2>
                    <p className="text-9 text-center text-secondary-blue text-[15px] md:text-[16px] lg:text-[18px] max-w-[514px] lg:text-start ">
                      {PLANET_ASSETS[selectedTab].description}
                    </p>
                  </div>
                </div>
                <div className="h-[1px] w-full bg-[#979797]/25"></div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-300">
                  <div className="flex flex-col  items-center gap-150 w-full lg:items-start">
                    <p className="text-7 leading-none text-secondary-blue h-[17px] align-text-center ">
                      AVG. DISTANCE
                    </p>
                    <p className="text-6 leading-none h-[32px]">
                      {PLANET_ASSETS[selectedTab].distance.toUpperCase()}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-150 w-full lg:items-start">
                    <p className="text-7 leading-none text-secondary-blue h-[17px] align-text-center">
                      EST. TRAVEL TIME
                    </p>
                    <p className="text-6 leading-none h-[32px]">
                      {PLANET_ASSETS[selectedTab].travel.toUpperCase()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Destination
