const Banner = () => {
  return (
    <div className="relative mt-[-88px] h-[80vh] sm:h-[86vh] z-10">
      <div
        className="text-center px-[5%] text-white flex flex-col items-center justify-center w-full absolute h-full top-[0px] -z-1 bg-cover"
        style={{ backgroundImage: `url(/images/banner.jpeg)` }}
      >
        <h1 className="text-3xl sm:text-6xl font-bold max-w-[620px]">Unlimited movies, TV shows, and more.</h1>
        <h2 className="text-[18px] sm:text-2xl font-normal mt-[16px]">Watch anywhere. Cancel anytime.</h2>
        <h3 className="text-[18px] font-normal mt-[16px]">Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className="flex flex-col sm:flex-row items-center justify-center mt-[12px] w-full">
          <input
            className="px-4 focus:outline-none text-black h-full w-full sm:w-[450px] h-[48px] sm:h-[60px] mb-[12px] sm:mb-[0px] rounded-l-[2px] rounded-r-[2px] sm:rounded-r-[0px]"
            placeholder="Email address"
          />
          <button className="bg-red-600 hover:bg-red-500 px-4 text-base sm:text-3xl h-full w-[130px] sm:w-[216px] h-[40px] sm:h-[60px] rounded-r-[2px] rounded-r-[2px] sm:rounded-l-[0px]">
            Get Started
          </button>
        </div>
        <div className="-z-1 absolute bg-black bg-opacity-50 top-[0px] bottom-[0px] w-full"  />
      </div>
    </div>
  )
}

export default Banner;