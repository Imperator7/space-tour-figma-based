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
        'preserve-navbar-space min-h-dvh',
        "bg-cover bg-[url('/assets/destination/background-destination-mobile.jpg')]",
      ].join(' ')}
    >
      <div
        className={[
          'flex flex-col items-center',
          'h-full p-300 gap-300',
        ].join()}
      >
        <h3 className="flex h-[19px] gap-300 items-center justify-center">
          <span className="text-8 font-bold tabular-nums leading-none opacity-25">
            01
          </span>
          <span className="text-5 text-[16px] leading-none">
            PICK YOUR DESTINATION
          </span>
        </h3>

        <div
          className={[
            'h-[202px] flex justify-center items-center',
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
              width={150}
              height={150}
              alt={selectedTab}
            />
          </picture>
        </div>
        <div className="flex flex-col gap-300 items-center h-full">
          <TabMenu
            selectedTab={selectedTab}
            handleSelectTab={handleSelectTab}
          />
          <div className="flex flex-col gap-200 items-center">
            <h2 className="text-2 text-[56px]">
              {PLANET_ASSETS[selectedTab].name.toUpperCase()}
            </h2>
            <p className="text-center text-secondary-blue h-[136px]">
              {PLANET_ASSETS[selectedTab].description}
            </p>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#979797]/25"></div>
        <div className="flex flex-col items-center gap-300">
          <div className="flex flex-col items-center gap-150">
            <p className="text-7 leading-none text-secondary-blue h-[17px] align-text-center">
              AVG. DISTANCE
            </p>
            <p className="text-6 leading-none h-[32px]">
              {PLANET_ASSETS[selectedTab].distance.toUpperCase()}
            </p>
          </div>
          <div className="flex flex-col items-center gap-150">
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
  )
}
export default Destination
