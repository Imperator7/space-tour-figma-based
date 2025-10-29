import TechSlide from '@/components/technology/TechSlide'

const page = () => {
  return (
    <div
      className={[
        'min-h-dvh bg-cover bg-no-repeat ',
        'preserve-navbar-space',
        "bg-[url('/assets/technology/background-technology-mobile.jpg')]",
        "md:bg-[url('/assets/technology/background-technology-tablet.jpg')]",
        "lg:bg-[url('/assets/technology/background-technology-desktop.jpg')]",
        'h-screen lg:flex lg:justify-end',
      ].join(' ')}
    >
      <div className="flex flex-col h-full gap-300 p-300 md:p-500 lg:py-600 lg:px-0 pb-600 md:items-start lg:w-full max-w-[1275px]">
        <h3 className="flex h-[19px] md:h-[24px] lg:h-[34px] gap-300 items-center justify-center">
          <span className="text-8 md:text-[20px] lg:text-[28px] font-bold tabular-nums leading-none opacity-25">
            03
          </span>
          <span className="text-5 text-[16px] md:text-[20px] lg:text-[28px] leading-none">
            SPACE LAUNCH 101
          </span>
        </h3>
        <TechSlide />
      </div>
    </div>
  )
}
export default page
