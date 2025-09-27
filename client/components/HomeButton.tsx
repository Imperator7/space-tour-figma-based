import Image from 'next/image'
import Link from 'next/link'

const HomeButton = () => {
  return (
    <Link href={'/'}>
      <Image src="assets/shared/logo.svg" width={40} height={40} alt="logo" />
    </Link>
  )
}
export default HomeButton
