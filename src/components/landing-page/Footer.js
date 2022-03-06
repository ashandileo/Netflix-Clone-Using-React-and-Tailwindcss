import React from "react";
import Divider from "../shared/Divider";
import footerLinks from "../../fixtures/footerLinks.json";

const Footer = () => {
  return <>
    <Divider />
    <div className="bg-black px-[5%] py-[50px]">
      <div className="max-w-[1000px] mx-auto">
        <p className="text-[16px] text-gray-400">
          {"Questions? Call "}
          <a className="hover:underline cursor-pointer">007-803-321-2130</a>
        </p>

        <div className="flex flex-wrap text-gray-400 mt-[24px]">
          { footerLinks.map(link =>
            <a
              className="w-[50%] md:w-[33.33%] lg:w-[25%] block mb-[16px] text-[13px] hover:underline"
              href="#"
            >
              {link}
            </a>
          )}
        </div>
        <p className="text-[13px] text-gray-400 mt-[24px]">Netflix Indonesia</p>
      </div>
    </div>
  </>
}

export default Footer;