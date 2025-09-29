import TabItem from './TabItem'
import { Planet, PLANETS } from '@/lib/planets'

type TabMenuProps = {
  selectedTab: Planet
  handleSelectTab: (tabName: Planet) => void
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
