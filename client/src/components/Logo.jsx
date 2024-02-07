import React from "react";
import FlexCenter from "./muiComponents/FlexCenter";
import { Button, Typography } from "@mui/material";

import CoffeeIcon from "@mui/icons-material/Coffee";

import { getPrueba } from "../assets/api/products.api";



const Logo = () => {
  return (
  <FlexCenter>
      <FlexCenter
        zIndex={3}
        position='absolute'


        top={10}
        width={50}
        height={50}
        sx={{ backgroundColor: "primary.light",
    borderRadius:'50%',
    transform:'traslate(-45%)'
}}
   
      >
        <Typography color={"primary.dark.icons"} textAlign={"center"}>
          <Button onClick={()=>getPrueba()} >
          <CoffeeIcon fontSize="large" />
          </Button>
     
        </Typography>
      </FlexCenter>
      </FlexCenter>
  );
};

export default Logo;
