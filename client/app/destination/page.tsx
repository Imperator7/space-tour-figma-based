import Image from 'next/image'

const Destination = () => {
  return (
    <div
      className={[
        'preserve-navbar-space h-dvh',
        "bg-cover bg-[url('/assets/destination/background-destination-mobile.jpg')]",
      ].join(' ')}
    >
      <div
        className={['flex flex-col items-center gap-300', 'h-full p-300'].join(
          ' '
        )}
      >
        <p className="h-[19px]">
          <span>01</span>
          <span>PICK YOUR DESTINATION</span>
        </p>
        <div className="h-[202px] flex justify-center items-center">
          <Image
            src={'/assets/destination/image-moon.png'}
            width={150}
            height={150}
            alt="moon"
          />
        </div>
      </div>
    </div>
  )
}
export default Destination
