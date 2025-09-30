'use client'

import { useState } from 'react'
import { TECH, TECH_ASSETS } from '@/lib/techs'
import PaginationBigDots from '../PaginationBigDots'
import Image from 'next/image'

const TechSlide = (/*{ selectedTab = 'spaceport' }: TechSlideProps*/) => {
  const [selectedTab, setSelectedTab] = useState<TECH>('Launch_vehicle')

  const handleSelect = (tech: TECH) => {
    setSelectedTab(tech)
  }

  return (
    <div className="flex flex-col gap-400 relative">
      <div className="relative w-screen h-[258px] ml-[calc(50%-50vw)] mt-800">
        <Image
          src={`/assets/technology/image-${selectedTab
            .toLowerCase()
            .split('_')
            .join('-')}-portrait.jpg`}
          className={`object-cover object-${TECH_ASSETS[selectedTab].images.focalPoint}`}
          fill
          alt={selectedTab}
          priority
        />
      </div>
      <div className="flex flex-col items-center gap-500">
        <PaginationBigDots
          selectedTab={selectedTab}
          handleSelect={handleSelect}
        />
        <div className="flex flex-col items-center gap-200">
          <h2 className="text-4 text-[18px] opacity-[50.42%] h-[21px]">
            THE TERMINOLOGY...
          </h2>
          <h1 className="text-3 text-[24px] h-[28px] leading-none">
            {selectedTab.toUpperCase().split('_').join(' ')}
          </h1>
          <p className="text-9 text-[15px] text-secondary-blue text-center">
            {TECH_ASSETS[selectedTab].description}
          </p>
        </div>
      </div>
    </div>
  )
}
export default TechSlide
