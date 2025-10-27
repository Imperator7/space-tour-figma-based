import HomeButton from '@/components/navbar/HomeButton'
import NavToggle from '@/components/navbar/NavToggle'
import NavLinks from '@/components/navbar/NavLinks'
import { useEffect, useRef } from 'react'

type NavbarProps = {
  handleOpenNavbar: () => void
}

const Navbar = ({ handleOpenNavbar }: NavbarProps) => {
  const lineRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      const customWidth = screenWidth - 180 - 700
      if (lineRef.current) {
        lineRef.current.style.width = `${customWidth}px`
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav
      className={[
        'absolute z-10 flex items-center h-[88px] w-screen px-300',
        'md:h-[96px] md:px-0',
        'lg:h-[136px] lg:items-end',
      ].join(' ')}
    >
      <div className="flex justify-between lg:justify-baseline w-full items-center">
        <HomeButton />
        <div
          ref={lineRef}
          className={`absolute left-[180px] bg-white/25 lg:h-[1px] w-[500px] z-50`}
        ></div>
        <NavLinks />
        <NavToggle handleClick={handleOpenNavbar} />
      </div>
    </nav>
  )
}
export default Navbar
