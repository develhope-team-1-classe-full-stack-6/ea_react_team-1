import { Grid, useTheme, Select, MenuItem, FormControl, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    minHeight: "55px"
  });

  const LogoImg = styled ('img') ({
    width: md ? "64px" : "47px", 
    height:  md ? "64px" : "47px"
  });

  const CopyrightImg = styled ('img') ({
    width: "191px",
    height: "57px"
  });

  const MainLinkGrid = styled (Grid) ({
    height: lg ? "40%" : sm ? "20%" : "40%",
    paddingLeft : "8px",
    paddingTop: lg ?  "0px" : md ? "0.5em" :"0px" ,
    margin: lg ? "0px" : md ? "5px" : sm ? "10px" : "0px"
  });

  const MainLink = styled (Typography) ({
    fontSize: "18px",
    marginRight: "20px",
    '&:hover': {
      cursor: 'pointer'
    }
  });

  const FormContainerGrid = styled (Grid) ({
    justifyContent: "space-between",
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
    wordWrap: "break-word"
  });

  const CopyrightImgGrid = styled (Grid) ({
    height: lg ? "60%" : md ? "140px" : "auto",
    justifyContent: md ? "flex-end" : "flex-start"
  });

  const DropdownFormControl = styled (FormControl) ({
    margin : "8px",
    minWidth: "120px",
    width: lg ? "120px" : md ? "40%" : "80%"
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
          {MAIN_LINKS.map((text) => (<Typography item sx={{ mr: "20px", fontSize: "18px" }}>{text}</Typography>))}
        </MainLinkGrid>
        <Grid
          item
          container
          justifyContent="space-between"
          sx={{
            // border: "1px solid black",
            height: 2 / 5,
            justifyContent: { xs: "center", lg: "flex-end" },
            minHeight: { sm: "150px", md: "80px", lg: "0px" },
          }}
          xs={12}
          lg={5}
        >
          <FormControl
            sx={{
              m: 1,
              minWidth: 120,
              width: { xs: "80%", md: "40%", lg: 120 },
            }}
          >
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
          </FormControl>

          <FormControl
            sx={{
              m: 1,
              minWidth: 120,
              width: { xs: "80%", md: "40%", lg: 120 },
            }}
          >
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
          </FormControl>
        </Grid>
        <Grid item container sx={{height: 3 / 5, pt: 2, pb: 2, pl: 1, ml: { sm: "10px", md: 3, lg: 9, xl: 11 }}} xs={12} md={7} xl={5}>
          {TC_LINKS.map((text) => (<Typography item sx={{ fontSize: "14px", mr: "15px", wordWrap: "break-word" }}>{text}</Typography>))}
        </Grid>
        <Grid
          item
          container
          justifyContent="flex-end"
          alignItems="flex-end"
          sx={{
            // border: "1px solid black",
            height: { md: "140px", lg: 3 / 5 },
            justifyContent: { sx: "flex-start", md: "flex-end" },
          }}
          xs={12}
          md={3}
        >
          <img
            style={{ width: "191px", height: "57px" }}
            alt="diritti"
            src="https://privacy-policy.truste.com/privacy-seal/seal?rid=2593a571-b03b-4951-9a22-c175bd66b351"
          />
        </Grid>
      </MainGrid>
    </FooterGrid>
  );
};

export default Footer;
