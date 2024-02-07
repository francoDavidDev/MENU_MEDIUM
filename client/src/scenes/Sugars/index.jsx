import React from "react";

import coffee from "../../assets/img/backgrounds/granos-de-cafe.jpg";
import ListProduct from "../../components/ListProduct";



const Sugars = () => {

  //const productsState =  useSelector(state => state.products) 
  //console.log(productsState)




  return (
    <>
      <ListProduct
        background={coffee}
        title={"COMIDAS"}
        subtitle={"APERITIVOS DULCES"}
        tag={'sugars'}
      />
    </>
  );
};

export default Sugars;
