import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';

import FlexCenter from "./muiComponents/FlexCenter";

import {
    Typography,
    Box,
    IconButton,

  } from "@mui/material";
  
import { likeProduct } from "../assets/api/products.api";

const CardProduct=(props)=> {
  const {title,description,description2,price,id,tag,image,likes}=props

  const [isLiked, setIsLiked] = useState(true);
  const [likeCount, setLikeCount] = useState(likes);



  useEffect(() => {
 
 
      
      setLikeCount((prevCount) => (isLiked ? prevCount + 1 : prevCount - 1));
    
  }, [isLiked]);

  const chandleClick = async(id,likes,title) => {
    
   setIsLiked(!isLiked)

   likes = likeCount
   const objeto={
      "likes":likes,
      'title':title
    }
   await likeProduct(id,objeto)
    console.log('id: ', id, 'obketo: ', objeto)

}




  return (


    <FlexCenter 
               
    key={title}
    component={motion.div}
    mode="wait"
    transition={{ duration:0.5, delay: 0.3,ease: "easeOut"}}
    animate={{
      x:[-3000,0],
      opacity: [0, 1],
    }}
    exit={{
      x:[0,3000],
      opacity: [1, 0],
      transition: { duration:0.5, delay: 0.3,ease: "easeOut" },
    }}
    sx={{
      backgroundColor:'primary.dark.card',
      width: "90%",
      height: 120,
      borderRadius:6
     
    }}
    
  >
    <FlexCenter
        sx={{
          backgroundImage: `url(${image})`,
          width: "50%",
          height: "90%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "none",
          borderRadius: 4,
          ml:1
         
        }}>

    

    </FlexCenter>
    <FlexCenter
      sx={{
        justifyContent:'left',
        width: 1,
        height: 1,
        borderRadius: 4,
      }}
  
    >
    
        <Box sx={{ position: "absolute", left: 40 }} >
        
        </Box>
        <Typography
          textAlign={"right"}
          color={"primary.dark.font"}
          fontWeight={"bold"}
          variant="h5"
          fontSize={'1.2rem'}
          pr={1}
          pl={1}
          pb={2}
        >
          {title}
          <br></br>
          <Typography
            textAlign={"left"}
   
            variant="h5"
            component='p'
            fontSize={'1.1rem'}
            pr={1}
          >
            ${price}
          </Typography>
       
        </Typography>
      
   

    </FlexCenter>
      <Link to={`/singleProduct/${title}`}   className="link">
        <IconButton sx={{ mr:1,borderRadius:50, backgroundColor:'primary.dark.font'}}>
    <AddIcon sx={{fontSize:20, color:'primary.dark.icons'}}/>
    </IconButton>
    </Link>
  </FlexCenter>
  )
} 


export default CardProduct
