import React from "react";
import ctl from "@netlify/classnames-template-literals";

const NewlineText = ({ text, customClass }) => {
  const newlineTextCN = (index) => ctl(`
  font-normal
  ${index > 0 && "mt-[12px]"}
  ${customClass && customClass}
`);

  const newText = text.split("/n").map((str, index) =>
    <p
      key={index}
      className={newlineTextCN(index)}
    >
      {str}
    </p>
  );
  
  return newText;
}

export default NewlineText;