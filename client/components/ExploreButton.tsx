const ExploreButton = () => {
  return (
    <div>
      <a
        href="/destination"
        className={[
          'bg-white rounded-full h-[144px] w-[144px] flex items-center justify-center',
          'group relative',
        ].join(' ')}
      >
        <div
          className={[
            'absolute h-[144px] w-[144px] bg-white/10 rounded-full',
            'group-hover:h-[320px] group-hover:w-[320px] transition-all duration-500 ease',
          ].join(' ')}
        ></div>
        <p className="text-primary-blue text-4 text-[18px] w-[77px] leading-[21px]">
          EXPLORE
        </p>
      </a>
    </div>
  )
}
export default ExploreButton
