import React from "react";

const Jumbotron = ({ children }) => {
  return (
    <div className="bg-black px-[5%] py-[50px]">
      <div className="flex items-center justify-center flex-col md:flex-row max-w-[1100px] mx-auto">
        {children}
      </div>
    </div>
  )
}

const Title = ({ children }) => {
  return (
    <h1 className="text-[26px] sm:text-[40px] md:text-[50px] font-bold mb-[8px]">
      {children}
    </h1>
  )
}

const SubTitle = ({ children }) => {
  return (
    <h2 className="text-[18px] sm:text-[20px] md:text-[26px] font-normal">
      {children}
    </h2>
  )
}

const Pane = ({ children, className="" }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

const Image = ({ children, src, alt, className }) => {
  return (
    <div className={className}>
      {children ? children : <img src={src} alt={alt} />}
    </div>
  )
}

Jumbotron.Title = Title;
Jumbotron.SubTitle = SubTitle;
Jumbotron.Pane = Pane;
Jumbotron.Image = Image;
export default Jumbotron;