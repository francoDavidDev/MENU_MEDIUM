import React from "react";
import { Box, Typography } from "@mui/material";
import FlexCenter from "../../components/muiComponents/FlexCenter";
import fondo from "../../assets/gifs/particulas.gif";

const Error404 = () => {
  return (
    <FlexCenter
      color={"white"}
      width={1}
      height={"100vh"}
      sx={{
        backgroundImage: `url(${fondo})`,
        backgroundPosition: "center bottom ",
        backgroundRepeat: "no-repeat",
        backgroundSize:'cover'
      }}
    >
      <Typography component={"h2"} fontWeight={'bold'} variant="h2" textAlign={"center"}>
        Menu solo para celulares
        <Typography component={"h6"} variant="gap">
          Por favor abra el menu en un celular.
        </Typography>
      </Typography>
    </FlexCenter>
  );
};

export default Error404;
