import mobile from "../../assets/img/mobile.jpg";
import boxShot from "../../assets/img/boxshot.png";
import downloadIcon from "../../assets/img/download-icon.gif";

const DownloadYourShowsSection = () => {
  return (
    <div className="bg-black px-[5%] py-[50px] border border-0 border-t-[8px] border-secondary">
      <div className="flex items-center justify-center flex-col md:flex-row max-w-[1100px] mx-auto">
        <div className="w-full sm:w-[48%] order-1 md:order-none relative">
          <img src={mobile} alt="mobile" />
          <div className="absolute bottom-[0px] left-[50%] -translate-x-1/2 min-w-[264px] bg-black text-white flex items-center justify-between border-2 border-solid border-secondary rounded-[12px] w-[60%] py-[4px] px-[10px]">
            <div className="flex items-center items-center">
              <img src={boxShot} alt="boxShot" className="h-[48px] mr-[16px]" />
              <div>
                <p className="text-[14px]">Stranger Things</p>
                <p className="text-[12px] text-blue-500">Downloading...</p>
              </div>
            </div>
            <img src={downloadIcon} alt="downloadIcon" className="w-[48px] h-[48px]" />
          </div>
        </div>
        <div className="flex flex-col items-center text-white text-center md:text-left md:items-start md:w-[52%]">
          <h1 className="text-[26px] sm:text-[40px] md:text-[50px] font-bold mb-[8px]">
            Download your shows to watch offline.
          </h1>
          <h2 className="text-[18px] sm:text-[20px] md:text-[26px] font-normal">
            Save your favorites easily and always have something to watch.
          </h2>
        </div>
      </div>
    </div>
  )
}

export default DownloadYourShowsSection;