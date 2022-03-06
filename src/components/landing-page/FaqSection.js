import Accordion from "../shared/Accordion";
import faqs from "../../fixtures/faqs.json";
import NewlineText from "../shared/NewlineText";
import Divider from "../shared/Divider";

const FaqSection = () => {
  return <>
    <Divider />
    <div className="bg-black px-[5%] py-[50px]">
      <h1 className="text-[26px] sm:text-[40px] md:text-[50px] font-bold mb-[8px] text-white text-center mb-[24px]">
        Frequently Asked Questions
      </h1>

      <Accordion customClass="max-w-[815px] mx-auto">
        { faqs.map(faq =>
          <Accordion.Item key={faq.id} id={`faq-${faq.id}`}>
            <Accordion.Header>
              {faq.header}
            </Accordion.Header>
            <Accordion.Body>
              <NewlineText text={faq.body} customClass="text-white text-[20px]" />
            </Accordion.Body>
          </Accordion.Item>
        )}
      </Accordion>
    </div>
  </>
}

export default FaqSection;