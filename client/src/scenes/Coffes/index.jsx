import React from "react";

import coffee from "../../assets/img/backgrounds/granos-de-cafe.jpg";

import ListProduct from "../../components/ListProduct";


const Coffes = () => {

 

  return (
    <>
      <ListProduct
        background={coffee}
        title={"CAFES"}
        subtitle={"Cafes negros"}
        tag={'coffees'}
      />


    </>
  );
};

export default Coffes;
