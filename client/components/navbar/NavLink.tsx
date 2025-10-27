import { LinkObject } from '@/lib/constants/links'
import Link from 'next/link'

type NavLinkProps = {
  selected: boolean
  linkData: LinkObject
  index: number
  className?: string
}

const Indicator = ({
  selected,
  position,
}: {
  selected: boolean
  position: 'bottom' | 'right'
}) => {
  return (
    <div
      className={[
        'bg-white opacity-0 transition-opacity duration-300 delay-50 ease-in',
        'md:absolute md:bottom-0 md:left-0 md:right-0',
        position === 'bottom' ? 'h-[3px] w-full' : 'h-full w-[3px]',
        selected ? 'opacity-100' : 'group-hover:opacity-50',
      ].join(' ')}
    />
  )
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
    <Indicator selected={selected} position="right" />
  </div>
)

const TabletDesktopLayout = ({
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
      <Indicator selected={selected} position="bottom" />
    </div>
  )
}

const NavLink = ({ selected, linkData, index }: NavLinkProps) => {
  return (
    <Link href={linkData.href} className="h-full">
      <MobileLayout
        selected={selected}
        linkData={linkData}
        index={index}
        className="md:hidden"
      />
      <TabletDesktopLayout
        selected={selected}
        linkData={linkData}
        index={index}
        className="hidden md:flex"
      />
    </Link>
  )
}

export default NavLink
