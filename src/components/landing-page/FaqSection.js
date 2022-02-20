import Accordion from "../shared/Accordion";

const FaqSection = () => {
  return (
    <div className="bg-black px-[5%] py-[50px] border border-0 border-t-[8px] border-secondary">
      <h1 className="text-[26px] sm:text-[40px] md:text-[50px] font-bold mb-[8px] text-white text-center mb-[24px]">
        Frequently Asked Questions
      </h1>

      <Accordion customClass="max-w-[815px] mx-auto">
        <Accordion.Item id="item-1">
          <Accordion.Header>
            What is Netflix?
          </Accordion.Header>
          <Accordion.Body>
            <p className="text-white text-[20px] font-normal mb-[12px]">
              Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
            </p>
            <p className="text-white text-[20px] font-normal">
              You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item id="item-2">
          <Accordion.Header>
            How much does netflix cost?
          </Accordion.Header>
          <Accordion.Body>
            <p className="text-white text-[20px] font-normal">
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from IDR54,000 to IDR186,000 a month. No extra costs, no contracts.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item id="item-3">
          <Accordion.Header>
            Where can i watch?
          </Accordion.Header>
          <Accordion.Body>
            <p className="text-white text-[20px] font-normal mb-[12px]">
              Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
            </p>
            <p className="text-white text-[20px] font-normal">
              You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item id="item-4">
          <Accordion.Header>
            How do i cancel?
          </Accordion.Header>
          <Accordion.Body>
            <p className="text-white text-[20px] font-normal">
              Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item id="item-5">
          <Accordion.Header>
            What can i watch on Netflix?
          </Accordion.Header>
          <Accordion.Body>
            <p className="text-white text-[20px] font-normal">
              Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item id="item-6">
          <Accordion.Header>
            Is Netflix good for kids?
          </Accordion.Header>
          <Accordion.Body>
            <p className="text-white text-[20px] font-normal mb-[12px]">
              The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
            </p>
            <p className="text-white text-[20px] font-normal">
              Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default FaqSection;