import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./EATabPc.scss";
import { useNavigate } from "react-router-dom";

export default function EATabLibreriaDeiGiochi() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {
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
          onClick={() => handleClick("/games")}
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
          onClick={() => handleClick("/coming-soon")}
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
          onClick={() => handleClick("/ea-sports")}
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
          onClick={() => handleClick("/star-wars")}
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
          onClick={() => handleClick("/the-sims")}
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
          onClick={() => handleClick("/ea-originals")}
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
          onClick={() => handleClick("/pogo")}
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
