import Tv from "../../assets/img/device-pile-id.png";

const WatchEverywhereSection = () => {
  return (
    <div className="bg-black px-[5%] py-[50px] border border-0 border-t-[8px] border-b-[8px] border-secondary">
      <div className="flex items-center justify-center flex-col md:flex-row max-w-[1100px] mx-auto">
        <div className="flex flex-col items-center text-white text-center md:text-left md:items-start md:w-[52%]">
          <h1 className="text-[26px] sm:text-[40px] md:text-[50px] font-bold mb-[8px]">
            Watch everywhere.
          </h1>
          <h2 className="text-[18px] sm:text-[20px] md:text-[26px] font-normal">
            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
          </h2>
        </div>
        <div className="w-full sm:w-[48%]">
          <img src={Tv} alt="Tv" />
        </div>
      </div>
    </div>
  )
}

export default WatchEverywhereSection;