const ExploreButton = () => {
  return (
    <div>
      <a
        href="/destination"
        className={[
          'bg-white rounded-full h-[144px] w-[144px] md:h-[272px] md:w-[272px] flex items-center justify-center',
          'group relative',
        ].join(' ')}
      >
        <div
          className={[
            'absolute bg-white/10 rounded-full',
            'group-hover:h-[320px] group-hover:w-[320px] md:group-hover:h-[448px] md:group-hover:w-[448px] transition-all duration-500 ease',
          ].join(' ')}
        ></div>
        <p className="text-primary-blue text-4 text-[18px] md:text-[32px] w-[77px] md:w-[136px] ">
          EXPLORE
        </p>
      </a>
    </div>
  )
}
export default ExploreButton
