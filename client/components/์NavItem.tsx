type NavLinkProps = {
  selected: boolean
  navName: string
  index: number
  handleClick: (link: string) => void
}

const NavLink = ({ selected, navName, index, handleClick }: NavLinkProps) => {
  return (
    <div
      className="flex justify-between group w-[222px] h-[19px] cursor-pointer"
      onClick={() => handleClick(navName)}
    >
      <div className="flex gap-[12px]">
        <p className="text-8 font-bold leading-none tabular-nums">
          {'0' + index}
        </p>
        <p className="text-8 leading-none">{navName}</p>
      </div>
      <div
        className={[
          'w-[3px]  bg-white opacity-0 transition-opacity duration-300 delay-50 ease-in',
          selected ? 'opacity-100' : 'group-hover:opacity-50',
        ].join(' ')}
      ></div>
    </div>
  )
}

export default NavLink
