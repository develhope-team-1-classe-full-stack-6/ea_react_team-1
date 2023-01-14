/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Typography, useMediaQuery } from "@mui/material";
import styled from "styled-components";
import Banner from "../../components/banner/Banner";

function BannerFooter (props) {

    const matchesDownMd = useMediaQuery((theme) => theme.breakpoints.down('md'));

    const list = ["Lavora con noi","Dirigenza","Rapporto sull'impatto", "I nostri impegni","Segnala un problema"]

    const icons = [
        {
            icon: "./assets/images/common/social-icons/facebook.png",
            link: "https://www.facebook.com/ea.it"
        },
        {
            icon: "./assets/images/common/social-icons/twitter.png",
            link: "https://twitter.com/ea"
        },
        {
            icon: "./assets/images/common/social-icons/youtube.png",
            link: "https://www.youtube.com/EAvideos"
        },
        {
            icon: "./assets/images/common/social-icons/instagram.png",
            link: "https://www.instagram.com/ea/"
        },
        {
            icon: "./assets/images/common/social-icons/twitch.png",
            link5: "https://www.twitch.tv/ea"
        },
    ]

    const Div = styled(Box)({
        display:"flex",
        flex: "2 1",
        flexWrap: matchesDownMd ? "wrap" : "no-wrap",
        justifyContent: matchesDownMd ? "center" : "flex-start",
        alignItems:"center",
        gap:"40px",
        marginBottom: matchesDownMd ? "20px" : "0",
        a:{
            textDecoration: "none",
            color: "#161616",
            "&:hover":{
                color: "#ff4747"
            },
        }
    })

    const Icons = styled(Box)({
        display:"flex",
        flexDirection: "column",
        flex: "1 2",
        justifyContent: "space-around",
        alignItems: matchesDownMd ? "center" : "flex-end",
        marginTop: matchesDownMd ? "20px" : "0",
        div: {
            paddingTop: matchesDownMd ? "20px" : "0",
            justifyContent: "flex-end",
        },
        a:{
            paddingLeft: "20px",
            "&:first-of-type":{
                paddingLeft: "0",
            }
        },
        p:{
            fontSize: "14px",
           fontWeight: "700",
        }
    })

    return (
        <Banner background="#eaeaea">
            <Div>
            {list.map((item, index) => (
                <Typography key={index+item}>
                    <a href="#">{item}</a>
                </Typography>
            ))}
            </Div>
            {matchesDownMd && <hr/>}
            <Icons>
                <Typography>
                    <p>Partecipa alla conversazione</p>
                </Typography>
                <div>
                {icons.map((item, index) => (
                    <a href={item.link} target="_blank" key={item+index}><img src={item.icon}></img></a>
                ))}
                </div>
            </Icons>
        </Banner>
     );
}

export default BannerFooter;
