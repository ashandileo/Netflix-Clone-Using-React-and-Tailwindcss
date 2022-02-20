import logo from "./../../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="px-[5%] py-[24px] max-w-[1920px] mx-auto">
      <div className="flex items-center justify-between">
        <img
          src={logo}
          className="w-auto h-8 sm:h-10"
          alt="Logo"
        />
        <div>
          <button className="bg-red-600 text-white font-normal py-1 px-4 rounded text-base">
            Sign In
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;