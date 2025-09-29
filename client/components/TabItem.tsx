import { Planet } from '@/lib/planets'

type TabMenuProps = {
  selected: boolean
  tabName: Planet
  handleClick: (planet: Planet) => void
}

const TabItem = ({ selected, tabName, handleClick }: TabMenuProps) => {
  return (
    <div
      className="group flex flex-col justify-between group w-fit h-[32px] cursor-pointer"
      onClick={() => handleClick(tabName)}
    >
      <div className="flex h-[19px]">
        <p className="text-8 leading-none">{tabName}</p>
      </div>
      <div
        className={[
          'h-[3px]  bg-white opacity-0 transition-opacity duration-300 delay-50 ease-in',
          selected ? 'opacity-100' : 'group-hover:opacity-50',
        ].join(' ')}
      ></div>
    </div>
  )
}
export default TabItem
