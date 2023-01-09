import { useState } from "react";
import EAAsideMenu from "./aside/asideMenu/EAAsideMenu";
import BoxAside from "./aside/boxAside/BoxAside";
import EANavbar1 from "./navbar/EANavbar1";
import EANavbar2 from "./navbar/EANavbar2";

function PagesContainer(props) {
    const [openAside, setOpenAside] = useState({
        aside1:false,
        aside2:false
    });

    return (
        <div>
            <header>
                <EANavbar1 />
                <EANavbar2 render={(open)=> {
                    setOpenAside(open)
                }}/>
            </header>
            <div style={{marginTop:"56px"}}>
                <main>
                    <aside>
                        <BoxAside open={openAside.aside1}/>
                        <EAAsideMenu open={openAside.aside2}/>
                    </aside>
                    <article>
                        {props.children}
                    </article>
                </main>
                <footer>

                </footer>
            </div>
        </div>
    );
}

export default PagesContainer;
