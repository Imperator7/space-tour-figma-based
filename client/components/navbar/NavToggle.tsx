import Image from 'next/image'

type NavToggleProps = {
  handleClick: () => void
}

const NavToggle = ({ handleClick }: NavToggleProps) => {
  return (
    <div
      className="flex items-center cursor-pointer md:hidden"
      onClick={handleClick}
    >
      <Image
        src="/assets/shared/icon-hamburger.svg"
        width={24}
        height={21}
        alt="nav-menu"
      />
    </div>
  )
}
export default NavToggle
