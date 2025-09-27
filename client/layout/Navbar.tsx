import HomeButton from '../components/HomeButton'
import NavToggle from '../components/NavToggle'

type NavbarProps = {
  handleOpenNavbar: () => void
}

const Navbar = ({ handleOpenNavbar }: NavbarProps) => {
  return (
    <nav className="absolute z-10 flex items-center h-[88px] w-screen px-300">
      <div className="flex justify-between w-full">
        <HomeButton />
        <NavToggle handleClick={handleOpenNavbar} />
      </div>
    </nav>
  )
}
export default Navbar
