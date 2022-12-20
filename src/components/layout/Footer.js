import { Grid, useTheme, Select, MenuItem, FormControl, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

const Footer = () => {
  const theme = useTheme();
  const sm = useMediaQuery (theme.breakpoints.up('sm'));
  const md = useMediaQuery (theme.breakpoints.up('md'));
  const lg = useMediaQuery (theme.breakpoints.up('lg'));
  const xl = useMediaQuery (theme.breakpoints.up('xl'));

  const MAIN_LINKS = ["Libreria dei Giochi", "Registrati", "Riscatta codice", "EA App", "Informazioni", "Accessibilità", "Aiuto"];
  const TC_LINKS = ["Note legali e privacy", "Accordo con l'utente", "Politica sulla privacy e sui cookie", "Aggiornamenti sui servizi online", "Termini di servizio di YouTube", "Norme sulla privacy di Google", "Cookie preferenze"];
  
  const FooterGrid = styled (Grid) ({
    backgroundColor: theme.palette.light.main,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: lg ? "300px" : "auto"
  });

  const MainGrid = styled (Grid) ({
    justifyContent: "space-between",
    height: "75%",
    margin: "auto",
    marginTop: lg ? "10px" : "20px",
    marginBottom: lg ? "10px" : "20px",
    paddingLeft: md ? "30px" : "20px",
    paddingRight: md ? "30px" : "20px",
    maxWidth: "1120px !important"
  });

  const ImgGrid = styled (Grid) ({
    JustifyContent: lg ? "center" : "left",
    height: lg ? "40%" : sm ? "20%" : "40%",
    minHeight: "55px",
    paddingLeft: lg ? "0px" : sm ? "20px" : "8px"
  });

  const LogoImg = styled ('img') ({
    width: lg ? "64px" : "47px", 
    height:  lg ? "64px" : "47px"
  });

  const CopyrightImg = styled ('img') ({
    width: "191px",
    height: "57px"
  });

  const MainLinkGrid = styled (Grid) ({
    height: lg ? "40%" : sm ? "20%" : "40%",
    paddingLeft : "8px",
    paddingTop: lg ?  "0px" : md ? "0.5em" :"0px" ,
    margin: lg ? "0px" : md ? "10px" : sm ? "10px" : "5px"
  });

  const MainLink = styled (Typography) ({
    fontSize: lg ? "18px" : "16px",
    marginRight: "20px",
    '&:hover': {
      cursor: 'pointer'
    }
  });

  const FormContainerGrid = styled (Grid) ({
    justifyContent: lg ? "flex-end" : "flex-start",
    height: "40%",
    minHeight: lg ? "0px" : md ? "80px" : sm ? "150px" : "0px"
  });

  const PrivacyLinkGrid = styled (Grid) ({
    height: "60%",
    paddingTop: "16px",
    paddingBottom: "16px",
    paddingLeft: "8px",
    marginLeft: xl ? "88px" : lg ? "72px" : md ? "24px" : sm ? "10px" : "0px"
  });

  const PrivacyLink = styled (Typography) ({
    fontSize: "14px",
    marginRight: "15px", 
    wordWrap: "break-word",
    '&:hover': {
      cursor: 'pointer'
    }
  });

  const CopyrightImgGrid = styled (Grid) ({
    margin: md ? "0px" : "20px",
    height: lg ? "60%" : md ? "140px" : "auto",
    justifyContent: lg ? "flex-end" : "flex-start",
    alignItems: lg ? "flex-end" : md ? "center" : "flex-end"
  });

  const DropdownFormControl = styled (FormControl) ({
    margin : lg ? "8px" : "20px",
    minWidth: "120px",
    width: lg ? "120px" : md ? "40%" : "60%"
  });

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FooterGrid container>
      <MainGrid container xs={11} lg={8} xl={8}>
        <ImgGrid item container xs={12} lg={1}>
          <LogoImg item alt="logo" src="https://media.contentapi.ea.com/content/dam/eacom/it-it/common/october-ea-ring.png"/>
        </ImgGrid>
        <MainLinkGrid item container xs={12} lg={6}>
          {MAIN_LINKS.map((text) => (<MainLink item>{text}</MainLink>))}
        </MainLinkGrid>
        <FormContainerGrid item container xs={12} lg={5}>
          {/* Inizio parte dropdown da rivedere */}
          <DropdownFormControl>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem disabled value="">
                <Typography>Language</Typography>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </DropdownFormControl>

          <DropdownFormControl>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem disabled value="">
                <Typography>Language</Typography>
              </MenuItem>
              <div style={{ width: "500px", height: "500px", display: "flex" }}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </div>
            </Select>
          </DropdownFormControl>
        </FormContainerGrid>
        {/* Fine parte dropdown da rivedere */}
        <PrivacyLinkGrid item container xs={12} md={7} xl={5}>
          {TC_LINKS.map((text) => (<PrivacyLink item>{text}</PrivacyLink>))}
        </PrivacyLinkGrid>
        <CopyrightImgGrid item container xs={12} md={3}>
          <CopyrightImg alt="diritti" src="https://privacy-policy.truste.com/privacy-seal/seal?rid=2593a571-b03b-4951-9a22-c175bd66b351"/>
        </CopyrightImgGrid>
      </MainGrid>
    </FooterGrid>
  );
};

export default Footer;
