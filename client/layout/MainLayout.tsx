'use client'

import Navbar from '@/layout/Navbar'
import MobileNavbar from '@/layout/mobile/MobileNavbar'
import { useState } from 'react'

type RootProps = {
  children: React.ReactNode
}

export type LinkObject = {
  name: string
  href: string
}

const MainLayout = ({ children }: RootProps) => {
  const [toggleNavbar, setToggleNavbar] = useState(false)

  const links: LinkObject[] = [
    {
      name: 'home',
      href: '/',
    },
    {
      name: 'destination',
      href: '/destination',
    },
    {
      name: 'crew',
      href: '/crew',
    },
    {
      name: 'technology',
      href: '/technology',
    },
  ] as const

  const handleCloseNavbar = () => {
    setToggleNavbar(false)
  }

  const handleOpenNavbar = () => {
    setToggleNavbar(true)
  }

  return (
    <div className="h-dvh">
      <Navbar handleOpenNavbar={handleOpenNavbar} links={links} />
      <MobileNavbar
        toggleNavbar={toggleNavbar}
        handleCloseNavbar={handleCloseNavbar}
        links={links}
      />
      {children}
    </div>
  )
}
export default MainLayout
