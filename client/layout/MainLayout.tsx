'use client'

import Navbar from '@/layout/Navbar'
import MobileNavbar from '@/layout/mobile/MobileNavbar'
import { useState } from 'react'

type RootProps = {
  children: React.ReactNode
}

const MainLayout = ({ children }: RootProps) => {
  const [toggleNavbar, setToggleNavbar] = useState(false)

  const handleCloseNavbar = () => {
    setToggleNavbar(false)
  }

  const handleOpenNavbar = () => {
    setToggleNavbar(true)
  }

  return (
    <div className="h-dvh">
      <Navbar handleOpenNavbar={handleOpenNavbar} />
      <MobileNavbar
        toggleNavbar={toggleNavbar}
        handleCloseNavbar={handleCloseNavbar}
      />
      {children}
    </div>
  )
}
export default MainLayout
