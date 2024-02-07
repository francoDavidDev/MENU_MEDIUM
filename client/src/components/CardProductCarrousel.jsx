import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";

import FlexCenter from "./muiComponents/FlexCenter";

import {
  Typography,
  Box,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Icon,
} from "@mui/material";

import { likeProduct } from "../assets/api/products.api";

const CardProductCarrousel = (props) => {
  const { title, description, description2, price, id, tag, image, likes } =
    props;

  const [isLiked, setIsLiked] = useState(true);
  const [likeCount, setLikeCount] = useState(likes);

  useEffect(() => {
    setLikeCount((prevCount) => (isLiked ? prevCount + 1 : prevCount - 1));
  }, [isLiked]);

  const handleClick = async (id, likes) => {
    setIsLiked(!isLiked);

    likes = likeCount;
    const objeto = {
      likes: likes,
      title: title,
    };
    await likeProduct(id, objeto);
    console.log("id: ", id, "obketo: ", objeto);
  };

  return (
    <Box

   
    sx={{
      width: "90%",
      height: 250,
      borderRadius: 6,
      m:'auto'
    }}
  >
   <Card
    component={motion.div}
    mode="wait"
    transition={{
      duration: 0.5,
      delay: 0.3,
      ease: "easeOut",
    }}
    animate={{
      y: [100, 0],
      transition: {
        duration: 0.5,
        delay: 0.,
        ease: "easeOut",
      },
      
    }}
    exit={{
      opacity: [1, 0],
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut",
      },
    }}
   
sx={{
  justifyContent: "left",
  backgroundColor: "primary.dark.card",
  borderRadius: 4,
  width: 1,
  height: 240,
}}
>
<CardMedia

  image={image}
  sx={{
    height: 150,
  }}
>
  <IconButton
    sx={{
      m: 1,
      borderRadius: 50,
      backgroundColor: "primary.dark.icons",
      color: "red",
    }}
    onClick={() => {
      handleClick(likes);
    }}
  >
    <FavoriteIcon />
  </IconButton>
</CardMedia>

<CardContent
  sx={{
    display: "flex",
    justifyContent: "space-between",

    flexDirection: "column",
    gap: 2,
  }}
>
  <Box
    sx={{
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }}
  >
    <Typography
      textAlign={"left"}
      color={"primary.dark.font"}
      fontWeight={"bold"}
      variant="p"
      fontSize={"1rem"}
      pr={1}
      pb={2}
      height={5}
    >
      {title}
    </Typography>
    <FlexCenter sx={{ justifyContent: "space-between" }}>
      <Typography
        textAlign={"left"}
        color={"primary.dark.font"}
        fontWeight={"bold"}
        variant="body2"
        component="p"
        fontSize={"0.9rem"}
        pr={1}
        pt={1}
      >
        ${price}
      </Typography>
      <Link to={`/singleProduct/${title}`} className="link">
        <IconButton
          sx={{
            mr: 0,
            mt:1,
            borderRadius: 50,
            backgroundColor: "primary.dark.font",
          }}
        >
          <AddIcon sx={{ fontSize: 15, color: "primary.dark.icons" }} />
        </IconButton>
      </Link>
    </FlexCenter>
  </Box>
</CardContent>
</Card>
  </Box>
  );
};

export default CardProductCarrousel;
