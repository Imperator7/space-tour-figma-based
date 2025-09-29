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
    <div className="flex flex-col gap-400 items-center inset-0">
      <div className="flex flex-col items-center pt-500 gap-300">
        <div className="flex flex-col gap-300">
          <div className="flex flex-col items-center gap-100">
            <h3 className="text-4 text-[18px] opacity-50 h-[21px] leading-none">
              {crewData.role.toUpperCase()}
            </h3>
            <h2 className="text-3 text-[24px] h-[28px] leading-none">
              {crewData.name.toUpperCase()}
            </h2>
          </div>
          <p className="h-[164px] text-9 text-[15px] text-center text-secondary-blue ">
            {crewData.bio}
          </p>
        </div>
        <PaginationSmallDots
          pageAmount={crews.length}
          pageSelected={selectedCrewNumber}
          handleClick={handleSelectPage}
        />
      </div>
      <div className="flex flex-col justify-center items-center h-[350px] w-full">
        <div className="relative h-[340px] w-full">
          <picture>
            <source
              srcSet={`/assets/crew/image-${crewData.name
                .split(' ')
                .join('-')}.webp`}
              type="image/webp"
            />
            <Image
              src={`/assets/crew/image-${crewData.name
                .split(' ')
                .join('-')}.png`}
              fill
              className="object-contain [mask-image:linear-gradient(to_bottom,black_80%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black_80%,transparent)]"
              alt={crewData.name}
            />
          </picture>
        </div>
      </div>
    </div>
  )
}
export default CrewSlide
