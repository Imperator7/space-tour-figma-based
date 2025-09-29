import Link from 'next/link'

type NavItemProps = {
  selected: boolean
  linkData: {
    name: string
    href: string
  }
  index: number
}

const NavLink = ({ selected, linkData, index }: NavItemProps) => {
  return (
    <Link
      href={linkData.href}
      className="flex justify-between group w-[222px] h-[19px] cursor-pointer"
    >
      <div className="flex gap-[12px]">
        <p className="text-8 font-bold leading-none tabular-nums">
          {'0' + index}
        </p>
        <p className="text-8 leading-none">{linkData.name.toUpperCase()}</p>
      </div>
      <div
        className={[
          'w-[3px]  bg-white opacity-0 transition-opacity duration-300 delay-50 ease-in',
          selected ? 'opacity-100' : 'group-hover:opacity-50',
        ].join(' ')}
      />
    </Link>
  )
}

export default NavLink
