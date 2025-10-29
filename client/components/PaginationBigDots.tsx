import { TECH, TECHS } from '@/lib/techs'

type PaginationBigDotsProps = {
  selectedTab: TECH
  handleSelect: (tech: TECH) => void
}

const PaginationBigDots = ({
  selectedTab,
  handleSelect,
}: PaginationBigDotsProps) => {
  return (
    <div className="flex lg:flex-col gap-200 lg:gap-400">
      {TECHS.map((tech, index) => (
        <div
          key={index}
          className={[
            'h-[40px] w-[40px] md:h-[56px] md:w-[56px] lg:h-[80px] lg:w-[80px] rounded-full cursor-pointer',
            'flex items-center justify-center',
            'text-4 text-[18px] md:text-[24px] lg:text-[32px]',
            selectedTab === tech
              ? 'bg-white text-black'
              : 'border border-white/15',
            'hover:border-white transition-all duration-700',
          ].join(' ')}
          onClick={() => handleSelect(tech)}
        >
          {index + 1}
        </div>
      ))}
    </div>
  )
}
export default PaginationBigDots
