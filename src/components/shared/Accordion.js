import React, { useState } from "react";
import ctl from "@netlify/classnames-template-literals";
import AnimateHeight from 'react-animate-height';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';


const AccordionContext = React.createContext();
const useAccordion = () => React.useContext(AccordionContext);

const AccordionItem = React.createContext();
const useAccordionItem = () => React.useContext(AccordionItem);

const Accordion = ({ children, customClass }) => {
  const [accordionOpen, setAccordionOpen] = useState("");
  
  const setOpenAccordion = (id) => {
    setAccordionOpen(id === accordionOpen ? "" : id)
  }

  const value = {
    accordionOpen,
    setOpenAccordion
  }

  return (
    <AccordionContext.Provider value={{ ...value }}>
      <div className={`accordion ${customClass ? customClass : ""}`}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

const Item = ({ children, id }) => {
  const { accordionOpen } = useAccordion();
  const isAccordionOpen = accordionOpen === id;

  const value = {
    id,
    isAccordionOpen
  }

  return (
    <AccordionItem.Provider value={{ ...value }}>
      <div className="accordion-item">
        {children}
      </div>
    </AccordionItem.Provider>
  )
}

const Body = ({ children }) => {
  const { isAccordionOpen } = useAccordionItem();

  return (
    <AnimateHeight
      height={isAccordionOpen ? "auto" : 0}
      duration={250}
    >
      <div
        className="accordion-body px-[24px] py-[16px] mb-[8px]"
        style={{ background: "#303030" }}
      >
        {children}
      </div>
    </AnimateHeight>
  )
}

const Header = ({ children }) => {
  const { setOpenAccordion } = useAccordion();
  const { id, isAccordionOpen } = useAccordionItem();

  const headerCN = ctl(`
    accordion-header
    px-[24px]
    py-[16px]
    text-white
    text-[20px]
    font-normal
    h-[58px
    flex
    items-center
    cursor-pointer
    ${isAccordionOpen ? "mb-[1px]" : "mb-[8px]"}
  `);

  return (
    <div
      className={headerCN}
      onClick={() => setOpenAccordion(id)}
      style={{ background: "#303030" }}
    >
      <div className="flex items-center justify-between w-full">
        <div>{children}</div>
        {isAccordionOpen ? <CloseIcon /> : <AddIcon />}
      </div>
    </div>
  )
}

Accordion.Body = Body;
Accordion.Header = Header;
Accordion.Item = Item;
export default Accordion;