import Tv from "../../assets/img/tv.png";

const EnjoyOnYourTvSection = () => {
  return (
    <div className="bg-black px-[5%] py-[50px] border border-0 border-t-[8px] border-b-[8px] border-secondary">
      <div className="flex items-center justify-center flex-col md:flex-row max-w-[1100px] mx-auto">
        <div className="flex flex-col items-center text-white text-center md:text-left md:items-start md:w-[52%]">
          <h1 className="text-[26px] sm:text-[40px] md:text-[50px] font-bold mb-[8px]">Enjoy on your TV.</h1>
          <h2 className="text-[18px] sm:text-[20px] md:text-[26px] font-normal">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
        </div>
        <div className="w-full sm:w-[48%]">
          <img src={Tv} alt="Tv" />
        </div>
      </div>
    </div>
  )
}

export default EnjoyOnYourTvSection;