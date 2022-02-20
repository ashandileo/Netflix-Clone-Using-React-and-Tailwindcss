import Header from "../components/landing-page/Header";
import Banner from "../components/landing-page/Banner";
import EnjoyOnYourTvSection from "../components/landing-page/EnjoyOnYourTvSection";
import DownloadYourShowsSection from "../components/landing-page/DownloadYourShowsSection";
import WatchEverywhereSection from "../components/landing-page/WatchEverywhereSection";
import ProfileForKidsSection from "../components/landing-page/ProfileForKidsSection";

const LandingPage = () => {
  return <>
    <Header />
    <Banner />
    <EnjoyOnYourTvSection />
    <DownloadYourShowsSection />
    <WatchEverywhereSection />
    <ProfileForKidsSection />
  </>
}

export default LandingPage;