import Background from "../../assets/img/banner.jpeg";

const Banner = () => {
  return (
    <div className="relative mt-[-88px]">
      <div className="text-center text-white flex flex-col items-center justify-center w-full absolute h-[86vh] top-[0px] -z-1 bg-cover" style={{ backgroundImage: `url(${Background})` }}>
        <h1 className="text-6xl font-bold max-w-[620px]">Unlimited movies, TV shows, and more.</h1>
        <h2 className="text-2xl font-normal mt-[16px]">Watch anywhere. Cancel anytime.</h2>
        <h3 className="text-xl font-normal mt-[24px]">Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className="flex items-center mt-[16px] h-[60px]">
          <input className="px-4 focus:outline-none text-black h-full w-[450px]" placeholder="Email address" />
          <button className="bg-red-600 px-4 text-3xl h-full w-[216px]">Get Started</button>
        </div>
        <div className="-z-1 absolute bg-black bg-opacity-50 top-[0px] bottom-[0px] w-full"  />
      </div>
    </div>
  )
}

export default Banner;