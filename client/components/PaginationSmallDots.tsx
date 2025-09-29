type PaginationData = {
  pageAmount: number
  pageSelected: number
  handleClick: (crewNumber: number) => void
}

const PaginationSmallDots = ({
  pageAmount,
  pageSelected = 0,
  handleClick,
}: PaginationData) => {
  return (
    <div className="flex gap-200 md:gap-500 justify-between w-fit">
      {[...Array(pageAmount)].map((_, index) => (
        <div
          key={index}
          className={[
            'w-[10px] md:w-[15px] h-[10px] md:h-[15px] rounded-full',
            pageSelected === index
              ? 'bg-white'
              : 'bg-[#979797] opacity-[17.44%] ',
          ].join(' ')}
          onClick={() => handleClick(index)}
        ></div>
      ))}
    </div>
  )
}
export default PaginationSmallDots
