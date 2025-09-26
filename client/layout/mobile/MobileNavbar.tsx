'use client'

import NavItem from '@/components/์NavItem'
import { useState } from 'react'

const MobileNavbar = () => {
  const [selectedLink, setSelectedLink] = useState('HOME')
  const links = ['HOME', 'DESTINATION', 'CREW', 'TECHNOLOGY']

  const handleLinkSelected = (link: string) => {
    setSelectedLink(link)
    return
  }

  return (
    <div
      className={[
        'absolute top-0 right-0 w-[254px] h-[100vh] pl-400 bg-[#0B0D17] bg-opacity-15 backdrop-blur-[80px]',
        'flex flex-col gap-600',
      ].join(' ')}
    >
      <div className="h-[85px]"></div>
      <div className="flex flex-col gap-400">
        {links.map((link, i) => (
          <NavItem
            key={link}
            selected={selectedLink === link}
            navName={link}
            handleClick={handleLinkSelected}
            index={i}
          />
        ))}
      </div>
    </div>
  )
}
export default MobileNavbar
