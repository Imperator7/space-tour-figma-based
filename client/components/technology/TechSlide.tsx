'use client'

import { useState } from 'react'
import { TECH, TECH_ASSETS } from '@/lib/techs'
import PaginationBigDots from '../PaginationBigDots'

const TechSlide = (/*{ selectedTab = 'spaceport' }: TechSlideProps*/) => {
  const [selectedTab, setSelectedTab] = useState<TECH>('Launch_vehicle')

  const handleSelect = (tech: TECH) => {
    setSelectedTab(tech)
  }

  return (
    <div className="flex flex-col gap-400 relative w-full h-full lg:flex-row-reverse">
      <div className="relative w-screen lg:w-full h-[258px] md:h-full md:max-h-[450px] lg:max-h-none ml-[calc(50%-50vw)] lg:ml-0 mt-800 lg:mt-0 flex lg:items-center">
        <picture className="relative lg:block w-full">
          <source
            media="(min-width: 1024px)"
            srcSet={`/assets/technology/image-${selectedTab
              .toLowerCase()
              .split('_')
              .join('-')}-portrait.jpg`}
          />
          <img
            src={`/assets/technology/image-${selectedTab
              .toLowerCase()
              .split('_')
              .join('-')}-landscape.jpg`}
            className={`w-full h-full object-cover object-${TECH_ASSETS[selectedTab].images.focalPoint}`}
            alt={selectedTab}
            loading="eager"
          />
        </picture>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-500 lg:gap-800 lg:min-w-[635px] w-full lg:justify-center">
        <PaginationBigDots
          selectedTab={selectedTab}
          handleSelect={handleSelect}
        />
        <div className="flex flex-col max-w-[512px] items-center gap-200 lg:gap-300 lg:w-full">
          <div className="flex flex-col items-center gap-200 w-full">
            <h2 className="text-4 text-[18px] md:text-[24px] lg:text-[32px] opacity-[50.42%] h-[21px] md:h-[28px] lg:h-[37px] lg:text-start lg:w-full">
              THE TERMINOLOGY...
            </h2>
            <h1 className="text-3 text-[24px] md:text-[40px] lg:text-[56px] h-[28px] md:h-[46px] lg:h-[64px] leading-none lg:w-full">
              {selectedTab.toUpperCase().split('_').join(' ')}
            </h1>
          </div>
          <p className="text-9 text-[15px] md:text-[16px] lg:text-[18px] text-secondary-blue text-center lg:text-start">
            {TECH_ASSETS[selectedTab].description}
          </p>
        </div>
      </div>
    </div>
  )
}
export default TechSlide
