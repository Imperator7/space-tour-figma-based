import { LinkObject } from '@/layout/MainLayout'
import NavLink from './NavLink'
import { usePathname } from 'next/navigation'

type NavLinksProps = {
  links: LinkObject[]
}

const NavLinks = ({ links }: NavLinksProps) => {
  const pathname = usePathname()

  return (
    <div
      className={[
        'hidden md:flex bg-white/5 h-[96px] backdrop-blur-[40px] w-full',
        'min-w-[488px] items-center justify-end gap-600 px-500',
      ].join(' ')}
    >
      {links.map((link, i) => (
        <NavLink
          key={link.name}
          selected={link.href === pathname}
          linkData={link}
          index={i}
        />
      ))}
    </div>
  )
}
export default NavLinks
