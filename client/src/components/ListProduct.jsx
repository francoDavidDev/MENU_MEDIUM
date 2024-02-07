import React, { useEffect, useState } from "react";
import {

  Box,
  IconButton,

} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { motion } from "framer-motion";
import Title from "./Title";

import {
  getAllProducts
} from "../assets/api/products.api";
import CardProduct from "./CardProduct";



const ListProduct = ({ title, subtitle, tag }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProduct() {
      const res = await getAllProducts();
      setProducts(res.data)
    
    }
    loadProduct();
  }, []);

   

  return (
    <motion.div mode="wait">
      <Title title={title} subtitle={subtitle} />
      <IconButton
        sx={{ position: "absolute", top: 80, left: 20 }}
        component={motion.div}
        mode="wait"
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        animate={{
          opacity: [0, 1],
        }}
        exit={{
          opacity: [1, 0],
          transition: { duration: 0.5, delay: 0.5, ease: "easeOut" },
        }}
      >
        <Link to={`/home`}>
          <ArrowBackIosIcon
            sx={{ fontSize: 30, fontWeight: "bold", color: "primary.light" }}
          />
        </Link>
      </IconButton>

      <Box
        m={1}
        display="grid"
        gridTemplateColumns="repeat(4,1fr)"
        gridAutoRows="300px"
        gap={"0px"}
      >
        {products.map((card) => {
          if (card.tag === tag) {
            return (
              <>
              <CardProduct
              title={card.title}
              description={card.description}
              description2={card.description2}
              price={card.price}
              id={card.id}
              tag={card.id}
              image={card.image}
              likes={card.likes}
              />
              </>
            );
          } else {
            ("");
          }
        })}
      </Box>
    </motion.div>
  );
};


export default ListProduct;
