import React,{useState, useEffect}  from "react";
import { Link, useParams } from "react-router-dom";

import { Icon, IconButton, Typography,Box} from "@mui/material";
import FlexCenter from "./muiComponents/FlexCenter";
import { motion } from "framer-motion";
import { getAllProducts } from "../assets/api/products.api";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FlexBottom from "./muiComponents/FlexBottom";

const SingleProduct = () => {
  const { productTitle } = useParams();
  //console.log(productTitle);



  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProduct() {
      const res = await getAllProducts();
      setProducts(res.data)
  
    }
    loadProduct();
  }, []);

  
  const product = products
  console.log('el producto es: ',product.title)




  return (
    <>
    { products.map((product)=>{
      if (product.title == productTitle ){
        return(
          <Box>
             <FlexCenter
          position="absolute"
          pt={0}
          sx={{
            background: `url(${product.image})`,
            backgroundPosition: "center ",
            backgroundSize: "cover",
            backgroundRepeat: "none",
            width: 1,
            height: "50vh",
            alignItems: "end",
            borderRadius: "0px 0px 50px 50px",
            boxShadow:'2px 2px 5px 0px rgba(0,0,0,1)'
          }}
          component={motion.div}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: "easeIn",
          }}
          animate={{
            opacity: [0,1],
          }}
          exit={{
            opacity: [1,0],
            transition: { duration: 0.5, delay: 0.3, ease: "easeOut" },
          }}
        >
          <FlexCenter width={"100%"} height={"100vh"}>
            <IconButton
              sx={{ position: "absolute", top: 30, left: 20 }}
              component={motion.div}
              mode="wait"
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              animate={{
                x: [-3000, 0],
                opacity: [0, 1],
              }}
              exit={{
                x: [0, -3000],
                opacity: [1, 0],
                transition: { duration: 0.5, delay: 0.3, ease: "easeOut" },
              }}
            >
              <Link to={`/home`}>
                <ArrowBackIosIcon
                  sx={{
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "primary.dark.font",
               
                  }}
                />
              </Link>
            </IconButton>
          </FlexCenter>
        </FlexCenter>
  
        <FlexCenter
          backgroundColor="primary.light"
          height={"100vh"}
          sx={{ flexDirection: "column" }}
        >
          <FlexCenter
        
            mt={35}
            width={1}
            sx={{ flexDirection: "column", alignItems: "start" }}
            component={motion.div}
            transition={{
              duration: 1.5,
              delay: 1.5,
              ease: "easeIn",
            }}
            animate={{
              opacity: [0, 1],
            }}
            exit={{
              opacity: [1, 0],
              transition: { duration: 0.5, delay: 0.3, ease: "easeOut" },
            }}
          >
            <Typography
              fontWeight={"bold"}
              fontSize="1.7rem"
              variant="h4"
              color={"primary.font"}
              pl="1rem"
           
            >
              {product.title}
            </Typography>
            <Typography
              color={"primary.font"}
           
              fontSize="1.4rem"
            
              variant="p"
              pl="1rem"
            >
              ${product.price}
            </Typography>
          </FlexCenter>
          <FlexCenter
           
            mt={5}
            width={1}
            sx={{ flexDirection: "row", justifyContent: "space-around", gap: 20 }}
            component={motion.div}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: "easeIn",
            }}
            animate={{
              opacity: [0, 1],
            }}
            exit={{
              opacity: [1, 0],
              transition: { duration: 0.5, delay: 0.3, ease: "easeOut" },
            }}
          >
            <Typography
              textAlign={'center'}
              fontStyle={'italic '}
              variant="h4"
              fontSize={"1.2rem"}
              color={"primary.font"}
              pl={3}
              pr={3}
            >
              {product.description2}
              
            </Typography>
          </FlexCenter>
        </FlexCenter>
          </Box>
        )
      }else{
        <></>
      }
     
    })}
     
    </>
  );
};

export default SingleProduct;
