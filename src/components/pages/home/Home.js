import PagesContainer from "../../layout/PagesContainer";
import BannerHome from "./bannerHome/BannerHome";
import BoxSection from "./giochi-in-evidenza/BoxSection";
import Hero1 from "./hero1/Hero1";
import Hero2 from "./hero2/Hero2";
import LatestGrid from "./ultimenovità/LatestGrid";

function Home() {

    return (
        <PagesContainer>
            <Hero1 />
            <BoxSection />
            <LatestGrid />
            <Hero2 />
            <BannerHome />
        </PagesContainer>
    );
}

export default Home;
