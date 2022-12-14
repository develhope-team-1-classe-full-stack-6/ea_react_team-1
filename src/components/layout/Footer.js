import {
  Grid,
  useTheme,
  Select,
  MenuItem,
  FormControl,
  Typography,
} from "@mui/material";
import { styled, sizing } from "@mui/system";
import { useState } from "react";

const Footer = () => {
  const theme = useTheme();

  const MAIN_LINKS = [
    "Libreria dei Giochi",
    "Registrati",
    "Riscatta codice",
    "EA App",
    "Informazioni",
    "Accessibilità",
    "Aiuto",
  ];
  const TC_LINKS = [
    "Note legali e privacy",
    "Accordo con l'utente",
    "Politica sulla privacy e sui cookie",
    "Aggiornamenti sui servizi online",
    "Termini di servizio di YouTube",
    "Norme sulla privacy di Google",
    "Cookie preferenze",
  ];

  const FooterGrid = styled(Grid)({
    backgroundColor: theme.palette.light.main,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FooterGrid
      sx={{ height: { xs: "auto", lg: "300px" }, width: 1 }}
      container
    >
      <Grid
        container
        xs={11}
        lg={8}
        xl={8}
        justifyContent="space-between"
        sx={{
        //   border: "1px solid black",
          height: 3 / 4,
          margin: "auto",
          mt: { sm: "20px", lg: "10px" },
          mb: { sm: "20px", lg: "10px" },
          pl: { xs: "20px", md: "30px" },
          pr: { xs: "20px", md: "30px" },
          maxWidth: "1120px !important",
        }}
      >
        <Grid
          item
          container
          justifyContent="center"
          xs={12}
          lg={1}
          sx={{
            justifyContent: { xs: "left", lg: "center" },
            // border: "1px solid black",
            height: { xs: 2 / 5, sm: 1 / 5, lg: 2 / 5 },
            minHeight: "55px",
          }}
        >
          <img
            item
            style={{ width: "64px", height: "64px" }}
            alt="logo"
            src="https://media.contentapi.ea.com/content/dam/eacom/it-it/common/october-ea-ring.png"
          />
        </Grid>
        <Grid
          item
          container
          sx={{
            // border: "1px solid black",
            height: { xs: 2 / 5, sm: 1 / 5, md: 1 / 5, lg: 2 / 5 },
            pl: 1,
            pt: { md: "0.5em", lg: 0 },
            m: { sm: "10px", md: "5px", lg: "0px" },
          }}
          xs={12}
          lg={6}
        >
          {MAIN_LINKS.map((text) => (
            <Typography item sx={{ mr: "20px" }}>
              {text}
            </Typography>
          ))}
        </Grid>
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
        <Grid
          item
          container
          sx={{
            // border: "1px solid black",
            height: 3 / 5,
            pt: 2,
            pb: 2,
            pl: 1,
            ml: { sm: "10px", md: 3, lg: 9, xl: 11 },
          }}
          xs={12}
          md={7}
          xl={5}
        >
          {TC_LINKS.map((text) => (
            <Typography
              item
              sx={{ fontSize: "14px", mr: "15px", wordWrap: "break-word" }}
            >
              {text}
            </Typography>
          ))}
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
      </Grid>
    </FooterGrid>
  );
};

export default Footer;
