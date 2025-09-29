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
        'flex h-dvh inset-0',
        'z-50 right-0',
        'fixed transition-all duration-500',
        toggleNavbar ? '' : 'translate-x-full',
      ].join(' ')}
    >
      <div className="w-full" onClick={handleCloseNavbar}></div>
      <div
        className={[
          'bg-[#0B0D17]/15 backdrop-blur-[40px]',
          'pl-400 flex flex-col gap-600',
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
    </div>
  )
}
export default MobileNavbar
