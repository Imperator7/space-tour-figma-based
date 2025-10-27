import HomeButton from '@/components/navbar/HomeButton'
import NavToggle from '@/components/navbar/NavToggle'
import NavLinks from '@/components/navbar/NavLinks'

type NavbarProps = {
  handleOpenNavbar: () => void
}

const Navbar = ({ handleOpenNavbar }: NavbarProps) => {
  return (
    <nav
      className={[
        'absolute z-10 flex items-center h-[88px] w-screen px-300',
        'md:h-[96px] md:px-0',
      ].join(' ')}
    >
      <div className="flex justify-between w-full items-center">
        <HomeButton />
        <NavLinks />
        <NavToggle handleClick={handleOpenNavbar} />
      </div>
    </nav>
  )
}
export default Navbar
