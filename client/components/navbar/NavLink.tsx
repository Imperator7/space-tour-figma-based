import { LinkObject } from '@/layout/MainLayout'
import Link from 'next/link'

type NavLinkProps = {
  selected: boolean
  linkData: LinkObject
  index: number
}

const NavLink = ({ selected, linkData, index }: NavLinkProps) => {
  return (
    <Link
      href={linkData.href}
      className={[
        'flex  justify-between group h-[19px] cursor-pointer',
        'md:flex-col md:h-full md:items-center md:relative md:justify-center',
      ].join(' ')}
    >
      <div className="flex gap-[12px]">
        <p className="text-8 font-bold leading-none tabular-nums">
          {'0' + index}
        </p>
        <p className="text-8 leading-none">{linkData.name.toUpperCase()}</p>
      </div>
      <div
        className={[
          'md:hidden',
          'w-[3px]  bg-white opacity-0 transition-opacity duration-300 delay-50 ease-in',
          selected ? 'opacity-100' : 'group-hover:opacity-50',
        ].join(' ')}
      />
      <div
        className={[
          'hidden h-full w-full md:flex md:absolute md:items-end',
        ].join(' ')}
      >
        <div
          className={[
            'bg-white w-full h-[3px] opacity-0 transition-opacity duration-300 delay-50 ease-in',
            selected ? 'opacity-100' : 'group-hover:opacity-50 ',
          ].join(' ')}
        ></div>
      </div>
    </Link>
  )
}

export default NavLink
