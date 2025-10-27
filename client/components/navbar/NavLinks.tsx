import { links } from '@/lib/constants/links'
import NavLink from './NavLink'
import { usePathname } from 'next/navigation'

const NavLinks = () => {
  const pathname = usePathname()

  return (
    <div
      className={[
        'flex bg-white/5 h-[96px] backdrop-blur-[40px] w-full',
        'min-w-[488px] items-center justify-end gap-600 px-500',
        'hidden md:flex max-w-[736px]',
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
