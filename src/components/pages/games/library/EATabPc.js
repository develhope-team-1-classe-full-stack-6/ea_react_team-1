import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
<<<<<<< HEAD
import "./EATabPc.scss";
import { useNavigate } from "react-router-dom";

export default function EATabLibreriaDeiGiochi() {
=======
import { useNavigate } from "react-router-dom";

export default function EATabLibreriaDeiGiochi() {

  require('./EATabPc.scss')
>>>>>>> c73030422a0ddca07c13a255b6b5136451b7dfae
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };

  const [value, setValue] = React.useState(0);

<<<<<<< HEAD
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
=======
  const handleChange = (newValue) => {
>>>>>>> c73030422a0ddca07c13a255b6b5136451b7dfae
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        textColor=""
      >
        <Tab
          disableRipple="true"
          label="Ultimi Giochi"
<<<<<<< HEAD
          onClick={() => handleClick("lastest-games")}
=======
          onClick={() => handleClick("/games")}
>>>>>>> c73030422a0ddca07c13a255b6b5136451b7dfae
        />
        <div
          style={{
            width: "1px",
            border: "1px solid lightgray",
            height: "20px",
            alignSelf: "center",
          }}
        ></div>
        <Tab
          disableRipple="true"
          label="Disponibili A Breve"
<<<<<<< HEAD
          onClick={() => handleClick("coming-soon")}
=======
          onClick={() => handleClick("/coming-soon")}
>>>>>>> c73030422a0ddca07c13a255b6b5136451b7dfae
        />
        <div
          style={{
            width: "1px",
            border: "1px solid lightgray",
            height: "20px",
            alignSelf: "center",
          }}
        ></div>
        <Tab
          disableRipple="true"
          label="EA SPORTS"
<<<<<<< HEAD
          onClick={() => handleClick("ea-sports")}
=======
          onClick={() => handleClick("/ea-sports")}
>>>>>>> c73030422a0ddca07c13a255b6b5136451b7dfae
        />
        <div
          style={{
            width: "1px",
            border: "1px solid lightgray",
            height: "20px",
            alignSelf: "center",
          }}
        ></div>
        <Tab
          disableRipple="true"
          label="Star Wars"
<<<<<<< HEAD
          onClick={() => handleClick("star-wars")}
=======
          onClick={() => handleClick("/star-wars")}
>>>>>>> c73030422a0ddca07c13a255b6b5136451b7dfae
        />
        <div
          style={{
            width: "1px",
            border: "1px solid lightgray",
            height: "20px",
            alignSelf: "center",
          }}
        ></div>
        <Tab
          disableRipple="true"
          label="The Sims"
<<<<<<< HEAD
          onClick={() => handleClick("the-sims")}
=======
          onClick={() => handleClick("/the-sims")}
>>>>>>> c73030422a0ddca07c13a255b6b5136451b7dfae
        />

        <div
          style={{
            width: "1px",
            border: "1px solid lightgray",
            height: "20px",
            alignSelf: "center",
          }}
        ></div>
        <Tab
          disableRipple="true"
          label="EA Originals"
<<<<<<< HEAD
          onClick={() => handleClick("ea-originals")}
=======
          onClick={() => handleClick("/ea-originals")}
>>>>>>> c73030422a0ddca07c13a255b6b5136451b7dfae
        />
        <div
          style={{
            width: "1px",
            border: "1px solid lightgray",
            height: "20px",
            alignSelf: "center",
          }}
        ></div>
        <Tab
          disableRipple="true"
          label="Pogo"
<<<<<<< HEAD
          onClick={() => handleClick("pogo")}
=======
          onClick={() => handleClick("/pogo")}
>>>>>>> c73030422a0ddca07c13a255b6b5136451b7dfae
        />
      </Tabs>
      <hr
        style={{
          marginTop: "63px",
          zIndex: "-1",
          border: "1.2px solid lightgray",
          width: "100%",
          position: "absolute",
          left: "0",
          right: "0",
        }}
      />
    </Box>
  );
}
