import Image from 'next/image'
import Link from 'next/link'

const HomeButton = () => {
  return (
    <div className="flex md:min-w-[128px] justify-center">
      <Link href={'/'}>
        <Image
          src="assets/shared/logo.svg"
          width={50}
          height={50}
          alt="logo"
          className="w-[40px] h-[40px] md:w-[48px] md:h-[48px]"
        />
      </Link>
    </div>
  )
}
export default HomeButton
