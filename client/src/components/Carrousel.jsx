import React,{useState,useEffect} from "react";
import Slider from "react-slick";
 // Import css files
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";

import CardProductSearch from "./CardProductSearch";

import FlexCenter from "./muiComponents/FlexCenter";
import {Box} from "@mui/material";
import CardProductCarrousel from "./CardProductCarrousel";



const settings = {
  dots: false,
  lazyLoad: true,
  infinite: true,
  speed: 500,
 slidesToShow :1.5,
  slidesToScroll: 1,
  initialSlide: 2,
  arrows: false,
  centerMode: true,
  centerPadding: "20px",
};





const Carrousel = ({ data,tags}) => {





    const [w,setW] = useState(window.innerWidth)

    useEffect(()=>{
      const handleResize =()=>{
        setW(window.innerWidth)
    
      }
  
      window.addEventListener('resize', handleResize);
      return()=>{
        window.removeEventListener('resize', handleResize);
      }
  
     
    },[])
  
  
  if( w <= 350 ){
      settings.slidesToShow = 1.1,
      settings.centerPadding= "10px"
     }else if( w <= 400 ){
        settings.slidesToShow = 1.5,
        settings.centerPadding= "10px"
     }else if( w <= 500){
      settings.slidesToShow = 1.6
      settings.centerPadding= "10px"
   }else if( w <= 540){
    settings.slidesToShow = 2
  
   }else if( w <= 600){
    settings.slidesToShow = 2.3
  
   }else{
    settings.slidesToShow = 2.6
   }


  return (
    <Box  width='100%' sx={{mt:4,backgroundColor:'primary.dark.background'}}  >
    <Slider {...settings}>

      {data.map((product) => {
        if(product.tag == tags){
            return (
                <FlexCenter
                m={1}
             
                gridColumn="span 2"
                gridRow="span 1"
                flexDirection="column"
                justifyContent="space-between"
                flex="1 1 100%">
                  
                <CardProductCarrousel
                title={product.title}
                price={product.price}
                id={product.id}
                tag={product.tag}
                image={product.image}
                likes={product.likes}
                />
                </FlexCenter>
              );
        }else{
            <></>
        }
       
      })}
    </Slider>
    </Box>
  );
};

export default Carrousel;
