'use client'

import NavItem from '@/components/navbar/NavLink'
import CloseButton from '@/components/navbar/CloseButton'
import { usePathname } from 'next/navigation'
import { LinkObject } from '../MainLayout'

type NavbarProps = {
  toggleNavbar: boolean
  handleCloseNavbar: () => void
  links: LinkObject[]
}

const MobileNavbar = ({
  toggleNavbar = false,
  handleCloseNavbar,
  links,
}: NavbarProps) => {
  const pathname = usePathname()

  return (
    <div
      className={[
        'flex h-dvh inset-0',
        'z-50 right-0 md:hidden',
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
