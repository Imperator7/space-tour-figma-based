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
    <div className="flex gap-200">
      {TECHS.map((tech, index) => (
        <div
          key={index}
          className={[
            'h-[40px] w-[40px] rounded-full cursor-pointer',
            'flex items-center justify-center',
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
