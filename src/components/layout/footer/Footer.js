import { Grid, useTheme, Select, MenuItem, FormControl, Typography, useMediaQuery, InputLabel} from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import data from "../../../data/footerDatabase.json";
import "./footer.scss";

const Footer = () => {
  const theme = useTheme();
  const sm = useMediaQuery (theme.breakpoints.up('sm'));
  const md = useMediaQuery (theme.breakpoints.up('md'));
  const lg = useMediaQuery (theme.breakpoints.up('lg'));
  const xl = useMediaQuery (theme.breakpoints.up('xl'));


  const MAIN_LINKS = data.MAIN_LINKS;
  const TC_LINKS = data.TC_LINKS;
  const PRICES = data.PRICES;
  const LANGUAGES = data.LANGUAGES;

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
    justifyContent: lg ? "space-around" : "flex-start",
    height: "40%",
    $minHeight: lg ? "0px" : md ? "80px" : sm ? "150px" : "0px"
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
    width: lg ? "120px" : md ? "40%" : sm ? "80%" : "80%",
    height: "70px"
  });

  const LanguageItem = styled (MenuItem) ({
    width: lg ? "170px" : "auto",
    height: lg ? "47px" : "auto",
    transition: lg ? "padding 0.3s" : "padding 0.0s",
    '&:hover': {
      paddingLeft: lg ? "25px" : "auto"
    }
  });

  const LanguageTypography = styled (Typography) ({
    fontSize: "16px"
  });

  const [price, setPrice] = useState("Italy");
  const [language, setLanguage] = useState("Italia");

  const handlePrice = event => setPrice(event.target.value);
  const handleLanguage = event => setLanguage(event.target.value);


  return (
    <FooterGrid item container>
      <MainGrid item container xs={11} lg={8} xl={8}>
        <ImgGrid item container xs={12} lg={1}>
          <LogoImg item alt="logo" src="https://media.contentapi.ea.com/content/dam/eacom/it-it/common/october-ea-ring.png"/>
        </ImgGrid>
        <MainLinkGrid item container xs={12} lg={6}>
          {MAIN_LINKS.map((text) => (<MainLink key={Math.random()} item="true">{text}</MainLink>))}
        </MainLinkGrid>
        <FormContainerGrid item container xs={12} lg={5}>
          {/* Inizio parte dropdown da rivedere */}
          <DropdownFormControl variant="standard" sx={{border: "3px solid lightgray", width: {xs: "100vw", md: "40vw", lg: "190px"}, borderRadius: "4%", "&.MuiInputBase-input": {"&:focus": {outline: "none !important"}}}}>
          <InputLabel sx={{width: {xs: "500px", lg: "170px"}, marginLeft: {xs: "10px", lg: "20px"}, marginTop: "7px", marginBottom: "5px"}} variant="standard"
            margin="dense" shrink><Typography sx={{fontSize: "20px", width: "180px", color: "gray !important"}}>Prezzi per regione</Typography></InputLabel>
            <Select
              className="footerselect"
              value={price}
              onChange={handlePrice}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{border: "none", marginTop: "25px !important", marginRight: "10px", paddingLeft: {xs: "10px", lg: "20px"}, "&.MuiInputBase-input": {"&:focus": {outline: "none !important"}}}}
              IconComponent={KeyboardArrowDownIcon}
              disableUnderline
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: {
                        xs: '#f3f3f3'},
                    width: {
                      lg: "537px"
                    },
                    border: "3px solid lightgray",
                    borderBottom: "none",
                    boxShadow: "none",
                    transform: {
                      lg: "translateY(-225px) !important"
                    },
                    padding: {
                      xs: "auto",
                      lg: "10px"
                    },
                    height: {
                      xs: "auto",
                      lg: "514px"
                    },
                    '& .MuiMenuItem-root': {
                      marginRight: "0px",
                      width: {
                        xs: "auto",
                        lg: "160px !important"}
                    },
                    '& .MuiMenu-list': {
                      display :{
                        xs: "auto",
                        lg: "flex !important"
                      },
                      flexDirection: {
                        xs: "auto",
                        lg: "row !important"
                      },
                      flexWrap: {
                        xs: "auto",
                        lg: "wrap !important"
                      },
                    }
                  },
                },
              }}
            >

                {PRICES.map(item => <LanguageItem key={Math.random()} value={item}><LanguageTypography>{item}</LanguageTypography></LanguageItem>)}

            </Select>
          </DropdownFormControl>

          <DropdownFormControl variant="standard" sx={{border: "3px solid lightgray", width: {xs: "100vw", md: "40vw", lg: "190px"}, borderRadius: "5%"}}>
          <InputLabel sx={{width: {xs: "500px", lg: "170px"}, marginLeft: {xs: "10px", lg: "20px"}, marginTop: "7px", marginBottom: "5px"}} variant="standard"
            margin="dense" shrink><Typography sx={{fontSize: "20px", width: "180px", color: "gray !important"}}>Lingua</Typography></InputLabel>
            <Select
              value={language}
              onChange={handleLanguage}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{border: "none", marginTop: "25px !important", marginRight: "10px", paddingLeft: {xs: "10px", lg: "20px"}}}
              IconComponent={KeyboardArrowDownIcon}
              disableUnderline
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: {
                        xs: '#f3f3f3'},
                    width: {
                      lg: "537px"
                    },
                    transform: {
                      lg: "translateY(-225px) !important"
                    },
                    border: "3px solid lightgray",
                    borderBottom: "none",
                    boxShadow: "none",
                    padding: {
                      xs: "auto",
                      lg: "10px"
                    },
                    height: {
                      xs: "auto",
                      lg: "420px"
                    },
                    '& .MuiMenuItem-root': {
                      marginRight: "0px",
                      width: {
                        xs: "auto",
                        lg: "160px !important"}
                    },
                    '& .MuiMenu-list': {
                      display :{
                        xs: "auto",
                        lg: "flex !important"
                      },
                      flexDirection: {
                        xs: "auto",
                        lg: "row !important"
                      },
                      flexWrap: {
                        xs: "auto",
                        lg: "wrap !important"
                      },
                    }
                  },
                },
              }}
            >
              {LANGUAGES.map(item => <LanguageItem key={Math.random()} value={item.name}><LanguageTypography>{item.name} <img style={{marginLeft: lg ? "5px" : "10px"}} src={item.flag} alt=""/></LanguageTypography></LanguageItem>)}

            </Select>
          </DropdownFormControl>
        </FormContainerGrid>
        {/* Fine parte dropdown da rivedere */}
        <PrivacyLinkGrid item container xs={12} md={7} xl={5}>
          {TC_LINKS.map((text) => (<PrivacyLink key={Math.random()}>{text}</PrivacyLink>))}
        </PrivacyLinkGrid>
        <CopyrightImgGrid item container xs={12} md={3}>
          <CopyrightImg alt="diritti" src="https://privacy-policy.truste.com/privacy-seal/seal?rid=2593a571-b03b-4951-9a22-c175bd66b351"/>
        </CopyrightImgGrid>
      </MainGrid>
    </FooterGrid>
  );
};

export default Footer;
