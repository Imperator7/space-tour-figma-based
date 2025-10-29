'use client'

import PaginationSmallDots from '../PaginationSmallDots'
import { crews, CREW, CREWS_ASSETS } from '@/lib/crews'
import Image from 'next/image'
import { useState } from 'react'

const CrewSlide = () => {
  const [selectedCrewNumber, setSelectedCrewNumber] = useState(0)

  const handleSelectPage = (crewNumber: number) => {
    setSelectedCrewNumber(crewNumber)
  }

  const selectedCrew: CREW = crews[selectedCrewNumber]
  const crewData = CREWS_ASSETS[selectedCrew]

  return (
    <div className="flex flex-col lg:flex-row gap-400 relative items-center lg:items-center h-full lg:w-full ">
      <div className="flex flex-col relative items-center justify-center h-[319px] lg:min-w-[445px] lg:h-full lg:w-full ">
        <div className="flex flex-col gap-300 md:max-w-[512px] lg:max-w-[640px] lg:h-full lg:justify-center">
          <div className="flex flex-col items-center gap-100 md:gap-200">
            <h3 className="text-4 text-[18px] md:text-[24px] lg:text-[32px] opacity-50 h-[21px] md:h-[28px] lg:h-[37px] leading-none lg:text-start lg:w-full">
              {crewData.role.toUpperCase()}
            </h3>
            <h2 className="text-3 text-[24px] md:text-[40px] lg:text-[56px] h-[28px] md:h-[46px] lg:h-fit leading-none lg:text-start lg:w-full">
              {crewData.name.toUpperCase()}
            </h2>
          </div>
          <p className="h-[164px] md:h-[117px] lg:h-fit text-9 text-[15px] md:text-[16px] lg:text-[18px] text-center text-secondary-blue lg:text-start lg:w-full">
            {crewData.bio}
          </p>
        </div>
        <div className="absolute h-full flex items-end lg:w-full lg:justify-start lg:pb-600">
          <PaginationSmallDots
            pageAmount={crews.length}
            pageSelected={selectedCrewNumber}
            handleClick={handleSelectPage}
          />
        </div>
      </div>
      <div className="relative md:absolute lg:relative md:top-[351px] lg:top-0 h-[350px] w-full md:inset-x-0 md:h-[560px] lg:h-full pointer-events-none">
        <picture>
          <source
            srcSet={`/assets/crew/image-${crewData.name
              .toLowerCase()
              .split(' ')
              .join('-')}.webp`}
            type="image/webp"
          />
          <Image
            src={`/assets/crew/image-${crewData.name
              .toLowerCase()
              .split(' ')
              .join('-')}.png`}
            fill
            className={[
              'object-contain [mask-image:linear-gradient(to_bottom,black_80%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black_80%,transparent)]',
              '',
            ].join(' ')}
            alt={crewData.name}
          />
        </picture>
      </div>
    </div>
  )
}
export default CrewSlide
