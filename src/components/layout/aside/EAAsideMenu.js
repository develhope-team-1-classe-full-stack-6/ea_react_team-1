import Drawer from '@mui/material/Drawer';
import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import AccordinonAside from '../../components/accordion/AccordionAside';
const pages = [
    {
        id: 0,
        title: "Giochi",
        menu: [
            {
                subtitle: "ESPLORA I GIOCHI",
                items: ["Ultimi giochi", "Prossimamente", "Giochi gratuiti", "EA SPORTS", "EA Originals", "Libreria dei giochi"]
            },
            {
                subtitle: "PIATTAFORME",
                items: ["PC", "PlayStation®5", "Xbox Series X", "Nintendo Switch™", "Cellulari"]
            }
        ]
    },
    {
        id: 1,
        title: "Altre esperienze",
        menu: [
            {
                items: ["EA Play", "l'EA app", "Competizioni videoludiche", "Diretta di EA Play", "Test di gioco"]
            },
        ]
    },
    {
        id: 2,
        title: "Informazioni",
        menu: [
            {
                items: ["Società", "EA Studi", "Lavora con noi", "La nostra tecnologia", "EA Partners", "Notizie", "Inside EA"]
            },
        ]
    },
    {
        id: 3,
        title: "impegni",
        menu: [
            {
                items: ["I nostri impegni", "Gioco positivo", "Diversità e inclusione", "Impatto sociale", "Persone e cultura", "Ambiente"]
            },
        ]
    },
    {
        id: 4,
        title: "Risorse",
        menu: [
            {
                items: ["Aiuto", "Forum", "Filtro famiglia", "Accessibilità", "Stampa", "Investitori"]
            },
        ]
    }
]

export default function EAAsideMenu() {

    return (
        <div>
            <Drawer
                anchor="left"
                open
                // onClose={""}
            >
                <Box
                    sx={{ background: grey[300], padding: 2, display: "flex", justifyContent: "space-between" }}
                >
                    <img src="./assets/images/common/ea-wordmark-network-nav-coral.svg" alt="EA Logo" style={{ width: "60%", cursor: "pointer" }} />

                    <img src="./assets/images/common/closebutton.svg" alt="close" style={{ width: "9%", cursor: "pointer" }} />

                </Box>
                <Box
                    sx={{ width: 400, padding: 1 }}
                >
                        {pages.map(item => <AccordinonAside title={item.title} key={item.title}>
                            {item.title}
                        </AccordinonAside>)}
                </Box>
            </Drawer>

        </div>
    );
}
