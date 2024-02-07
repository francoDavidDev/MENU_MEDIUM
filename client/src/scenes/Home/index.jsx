import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FlexCenter from "../../components/muiComponents/FlexCenter";

import { CARDS_MENU } from "../../constants";
import { Box, Button, Typography } from "@mui/material";

import CardProduct from "../../components/CardProduct";
import Search from "../../components/Search";
import Carrousel from "../../components/Carrousel";

import { getAllProducts } from "../../assets/api/products.api";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [tags, setTags] = useState("coffees");

  const handleClick = (tag) => {
    setTags(tag);
    console.log(tag);
  };

  useEffect(() => {
    async function loadProduct() {
      const res = await getAllProducts();
      setProducts(res.data);
    }
    loadProduct();
  }, []);
  const [addClass, setAddClass] = useState(false);

  useEffect(() => {
    // Esta función se ejecutará después de que el componente se monte
    const timerId = setTimeout(() => {
      // Tu lógica aquí, por ejemplo:
      setAddClass(true);
    }, 1000); // 1000 milisegundos = 1 segundo

    // Limpieza: esta función se ejecutará antes de que el componente se desmonte
    return () => {
      clearTimeout(timerId); // Limpiamos el timeout para evitar fugas de memoria
    };
  }, []); // El array vacío asegura que este useEffect solo se ejecute una vez, similar a componentDidMount

  const chandleClick = () => {
    setAddClass(!addClass);
  };

  return (
    <motion.div
      mode="wait"
      transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
      animate={{
        opacity: [0, 1],
      }}
      exit={{
        opacity: [1, 0],
        transition: { duration: 0, delay: 0.5, ease: "easeOut" },
      }}
    >
      <Search />

      <FlexCenter mt={5} sx={{ justifyContent: "space-around" }}>
        {CARDS_MENU.map((card) => {
          return (
            <FlexCenter
            backgroundColor={card.tag === tags ? 'primary.dark.card' : 'primary.dark.cardNone'}
              sx={{
             
                borderRadius: 3,
                height: 30,
              }}
              component={"motion.div"}
              transition={{
                delay: `${card.delay}`,
                duration: `${card.delay}`,
                ease: "easeOut",
              }}
              animate={{
                opacity: [0, 1],
              }}
              exit={{
                opacity: [1, 0],
                transition: {
                  duration: `${card.delay}`,
                  delay: `${card.delay}`,
                  ease: "easeOut",
                },
              }}
            >
              <Button onClick={() => handleClick(card.tag)}
               >
                <Typography
                  fontWeight={"bold"}
                  textAlign={"center"}
                
                  color={card.tag === tags ? 'primary.dark.font' : 'primary.dark.font2'}

                 
                  p={1}
                  sx={{
                    fontSize: { xs: "0.7rem", sm: "1rem" },
                  }}
                >
                  {card.title}
                </Typography>
              </Button>
            </FlexCenter>
          );
        })}
      </FlexCenter>
      <Box height={260} backgroundColor={"white"}>
        <Carrousel data={products} tags={tags} />
      </Box>

      <Box
        m={"auto"}
        mt={2}
        display="grid"
        gridTemplateColumns="repeat(1,1fr)"
        gridAutoRows="130px"
        gap={"0px"}
      >
        {products.map((card) => {
          if (card.tag === tags) {
            return (
              <FlexCenter
                m={1}
                gridColumn="span 2"
                gridRow="span 1"
                flexDirection="column"
                justifyContent="space-between"
                flex="1 1 100%"
              >
                <CardProduct
                  title={card.title}
                  price={card.price}
                  id={card.id}
                  tag={card.tag}
                  image={card.image}
                  likes={card.likes}
                />
              </FlexCenter>
            );
          } else {
            <></>;
          }
        })}
      </Box>
    </motion.div>
  );
};

export default Home;
