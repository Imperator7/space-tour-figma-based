import TabItem from './TabItem'
import { PLANET, PLANETS } from '@/lib/planets'

type TabMenuProps = {
  selectedTab: PLANET
  handleSelectTab: (tabName: PLANET) => void
}

const TabMenu = ({ selectedTab, handleSelectTab }: TabMenuProps) => {
  return (
    <div className="flex gap-400">
      {PLANETS.map((planet) => (
        <TabItem
          key={planet}
          selected={selectedTab === planet}
          tabName={planet}
          handleClick={() => handleSelectTab(planet)}
        />
      ))}
    </div>
  )
}
export default TabMenu
