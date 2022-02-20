import profileKids from "../../assets/img/profile-kids.png";

const ProfileForKidsSection = () => {
  return (
    <div className="bg-black px-[5%] py-[50px] border border-0 border-t-[8px] border-secondary">
      <div className="flex items-center justify-center flex-col md:flex-row max-w-[1100px] mx-auto">
        <div className="w-full sm:w-[48%] order-1 md:order-none">
          <img src={profileKids} alt="profileKids" />
        </div>
        <div className="flex flex-col items-center text-white text-center md:text-left md:items-start md:w-[52%]">
          <h1 className="text-[26px] sm:text-[40px] md:text-[50px] font-bold mb-[8px]">
            Create profiles for kids.
          </h1>
          <h2 className="text-[18px] sm:text-[20px] md:text-[26px] font-normal">
            Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
          </h2>
        </div>
      </div>
    </div>
  )
}

export default ProfileForKidsSection;