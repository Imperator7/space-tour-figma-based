'use client'

import { links } from '@/lib/constants/links'
import NavLink from '@/components/navbar/NavLink'
import CloseButton from '@/components/navbar/CloseButton'
import { usePathname } from 'next/navigation'

type NavbarProps = {
  toggleNavbar: boolean
  handleCloseNavbar: () => void
}

const MobileNavbar = ({
  toggleNavbar = false,
  handleCloseNavbar,
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
      <div className="flex-1" onClick={handleCloseNavbar}></div>
      <div
        className={[
          'bg-[#0B0D17]/15 backdrop-blur-[40px]',
          'pl-400 flex flex-col gap-600',
          'w-[254px]',
        ].join(' ')}
      >
        <CloseButton handleClose={handleCloseNavbar} />
        <div className="flex flex-col gap-400">
          {links.map((link, i) => (
            <NavLink
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
