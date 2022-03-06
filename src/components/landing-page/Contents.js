import React from "react";
import Jumbotron from "../shared/Jumbotron";
import Divider from "../shared/Divider";
import jumboData from "../../fixtures/jumbo.json";

const Contents = () => {
  return <>

    { jumboData.map((item, index) => {
      const isEven = index % 2 === 0;
      return (
        <React.Fragment key={item.id}>
          <Divider />
          <Jumbotron>
            <Jumbotron.Pane className={`flex flex-col items-center text-white text-center md:text-left md:items-start md:w-[52%] ${isEven ? "" : "order-2"}`}>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane className={`w-full sm:w-[48%] ${isEven ? "" : "order-1"}`}>
              { item.id === 2
                ? <Jumbotron.Image className="relative">
                    <img src="/images/mobile.jpg" alt="mobile" />
                    <div className="absolute bottom-[0px] left-[50%] -translate-x-1/2 min-w-[264px] bg-black text-white flex items-center justify-between border-2 border-solid border-secondary rounded-[12px] w-[60%] py-[4px] px-[10px]">
                      <div className="flex items-center items-center">
                        <img src="/images/boxshot.png" alt="boxShot" className="h-[48px] mr-[16px]" />
                        <div>
                          <p className="text-[14px]">Stranger Things</p>
                          <p className="text-[12px] text-blue-500">Downloading...</p>
                        </div>
                      </div>
                      <img src="images/download-icon.gif" alt="downloadIcon" className="w-[48px] h-[48px]" />
                    </div>
                  </Jumbotron.Image>
                : <Jumbotron.Image src={item.image} alt={item.alt} />
              }
            </Jumbotron.Pane>
          </Jumbotron>
        </React.Fragment>
      )
    })}
  </>
}

export default Contents;