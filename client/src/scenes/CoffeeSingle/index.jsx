import React from "react";
import { useParams } from "react-router-dom";
import { COFFEES } from "../../constants";
import { Typography } from "@mui/material";
import FlexCenter from "../../components/muiComponents/FlexCenter";
import {motion} from 'framer-motion'

const CoffeeSingle = () => {
  const { productTitle } = useParams();
  console.log(productTitle);
  const product = COFFEES.find((product) => product.title === productTitle);
  const { title, image, description, price,delay} = product;

  return (
    <>
      <FlexCenter
        pt={0}
        sx={{
          background: `url(${image})`,
          backgroundPosition: "center top",
          backgroundSize: "cover",
          backgroundRepeat: "none",
          width: 1,
          height: "100vh",
          alignItems: "end",
        }}
        component={motion.div}
        transition={{
          duration: 1.5,
          delay:0.5,
          ease: "easeIn",
        }}
        animate={{
      
          opacity:[0,1]
        }}
        exit={{
       
          opacity:[1,0],
              transition: { duration:0.3, delay: 0.3,ease: "easeOut" },
            }}
      >
        <FlexCenter
          width={"100%"}
          height={"100vh"}
          sx={{
            background:
              "linear-gradient(180deg, rgba(2,0,36,0) 70%, rgba(2,2,2,1) 90%)",
          }}
        >
          <Typography fontWeight={"bold"} variant="h4" color="white" sx={{position:'absolute', top:80,right:20}}>
            {price}
          </Typography>
          <Typography
            color="white"
            fontWeight={"bold"}
            variant="h4"
            mt="200px"
            pt={40}
            textAlign={"center"}
          >
            {title}
<br></br>
            <Typography fontWeight={"bold"} variant="span" mt={2} fontSize={'1.5rem'} > 
              {description}
            </Typography>
          </Typography>
        
        </FlexCenter>
      </FlexCenter>
    </>
  );
};

export default CoffeeSingle;
