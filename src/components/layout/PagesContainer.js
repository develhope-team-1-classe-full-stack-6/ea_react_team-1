import { useState } from "react";
import MyProvider from "../components/context/Context";
import EAAsideMenu from "./aside/asideMenu/EAAsideMenu";
import BoxAside from "./aside/boxAside/BoxAside";
import BannerFooter from "./bannerFooter/BannerFooter";
import Footer from "./footer/Footer";
import EANavbar1 from "./navbar/EANavbar1";
import EANavbar2 from "./navbar/EANavbar2";



function PagesContainer(props) {
    const [openAside, setOpenAside] = useState({
        aside1: false,
        aside2: false
    });

    const renderOpen = (open) => {
        setOpenAside(c => ({
            ...c,
            ...open
        }));
    };

    return (
        <MyProvider>
            <header>
                <EANavbar1 aside={openAside} />
                <EANavbar2 render={renderOpen} aside={openAside} />
            </header>
            <div style={{ marginTop: "56px" }}>
                <main>
                    <aside>
                        <BoxAside open={openAside.aside1} render={renderOpen} />
                        <EAAsideMenu open={openAside.aside2} render={renderOpen} />
                    </aside>
                    <article>
                        {props.children}
                    </article>
                    <BannerFooter />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </MyProvider>
    );
}

export default PagesContainer;
