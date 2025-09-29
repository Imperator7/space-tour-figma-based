'use client'

import NavItem from '@/components/NavItem'
import CloseButton from '@/components/CloseButton'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

type NavbarProps = {
  toggleNavbar: boolean
  handleCloseNavbar: () => void
}

const MobileNavbar = ({
  toggleNavbar = false,
  handleCloseNavbar,
}: NavbarProps) => {
  const links = [
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
  ]

  const pathname = usePathname()

  useEffect(() => {
    console.log(pathname)
  }, [pathname])

  return (
    <div
      className={[
        'fixed z-50 bg-[#0B0D17]/15 backdrop-blur-[40px] right-0 h-dvh',
        'pl-400 flex flex-col gap-600',
        'transition-all duration-500',
        toggleNavbar ? '' : 'translate-x-full',
      ].join(' ')}
    >
      <CloseButton handleClose={handleCloseNavbar} />
      <div className="flex flex-col gap-400">
        {links.map((link, i) => (
          <NavItem
            key={link.name}
            selected={pathname === link.href}
            linkData={link}
            index={i}
          />
        ))}
      </div>
    </div>
  )
}
export default MobileNavbar
