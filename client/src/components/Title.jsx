import React, { Suspense } from "react";
import { Box, Typography } from "@mui/material";
import FlexCenter from "./muiComponents/FlexCenter";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

const Title = ({ title, subtitle, image }) => {
  return (
    <FlexCenter

      component={motion.div}
      initial={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        delay: 1,
        ease: "easeOut",
      }}
      animate={{
      
        opacity:[0,1]
      }}
      exit={{
     
        opacity:[1,0],
            transition: { duration: 0.3, delay: 0.3,ease: "easeIn" },
          }}
    >
      <Typography
      color={"primary.light"}
        variant="h3"
        fontWeight={"bold"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          pb: 1,
          pt: 10,
          backgroundColor:'primary.dark',
         // backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "none",
          width: 1,
        }}
      >
        {title}

        <Typography variant="p" fontSize={"0.7rem"} color={"primary.light"}>
          {subtitle}
        </Typography>
      </Typography>
     
    </FlexCenter>
  );
};

export default Title;
