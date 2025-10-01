import TechSlide from '@/components/technology/TechSlide'

const page = () => {
  return (
    <div
      className={[
        "min-h-dvh bg-cover bg-no-repeat bg-[url('/assets/technology/background-technology-mobile.jpg')]",
        'preserve-navbar-space',
      ].join(' ')}
    >
      <div className="flex flex-col h-full gap-300 p-300 pb-600">
        <h3 className="flex h-[19px] gap-300 items-center justify-center">
          <span className="text-8 font-bold tabular-nums leading-none opacity-25">
            03
          </span>
          <span className="text-5 text-[16px] leading-none">
            SPACE LAUNCH 101
          </span>
        </h3>
        <TechSlide />
      </div>
    </div>
  )
}
export default page
