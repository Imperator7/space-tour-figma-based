import { LinkObject } from '@/lib/constants/links'
import Link from 'next/link'

type NavLinkProps = {
  selected: boolean
  linkData: LinkObject
  index: number
  className?: string
}

const MobileLayout = ({
  selected,
  linkData,
  index,
  className,
}: NavLinkProps) => (
  <div
    className={[
      'flex justify-between group h-[19px] cursor-pointer',
      className || '',
    ].join(' ')}
  >
    <div className="flex gap-[12px] h-[19px]">
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
  </div>
)

const TabletLayout = ({
  selected,
  linkData,
  index,
  className,
}: NavLinkProps) => {
  return (
    <div
      className={[
        className || '',
        'group h-full cursor-pointer',
        'h-full items-center relative justify-center',
      ].join(' ')}
    >
      <div className="flex gap-[12px] h-[19px] leading-[19px]">
        <p className="text-8 font-bold leading-none tabular-nums">
          {'0' + index}
        </p>
        <p className="text-8 leading-none">{linkData.name.toUpperCase()}</p>
      </div>
      <div className={['flex h-full w-full absolute items-end'].join(' ')}>
        <div
          className={[
            'bg-white w-full h-[3px] opacity-0 transition-opacity duration-300 delay-50 ease-in',
            selected ? 'opacity-100' : 'group-hover:opacity-50 ',
          ].join(' ')}
        ></div>
      </div>
    </div>
  )
}

const DesktopNavbar = () => {}

const NavLink = ({ selected, linkData, index }: NavLinkProps) => {
  return (
    <Link href={linkData.href} className="h-full">
      <MobileLayout
        selected={selected}
        linkData={linkData}
        index={index}
        className="md:hidden"
      />
      <TabletLayout
        selected={selected}
        linkData={linkData}
        index={index}
        className="hidden md:flex"
      />
    </Link>
  )
}

export default NavLink
