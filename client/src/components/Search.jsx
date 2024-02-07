import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useState, useEffect } from "react";
import { getAllProducts } from "../assets/api/products.api";

import FlexCenter from "../components/muiComponents/FlexCenter";
import CardProductSearch from "./CardProductSearch";
import SearchIcon from '@mui/icons-material/Search';

import FilterListIcon from '@mui/icons-material/FilterList';
const Search = () => {
  //datos de forma estatica
  const [products, setProducts] = useState([]);
  //datos de forma dinamica
  const [tableProducts, setTableProducts] = useState([]);
  // tabla para controlar lo que se va a digitando en la busqueda
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadProduct() {
      const res = await getAllProducts();
      setProducts(res.data);
      setTableProducts(res.data);
      //console.log(products);
    }
    loadProduct();
  }, []);

  //capturar valor del input
  const handleChange = (e) => {
    setSearch(e.target.value);
    //console.log('Busqueda:' + e.target.value)
    filterProduct(e.target.value);
  };

  const filterProduct = (terminoBusqueda) => {
    var resultadoBusqueda = tableProducts.filter((elemento) => {
      if (
        elemento.title
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setProducts(resultadoBusqueda);
  };



  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "primary.dark.background",
        boxShadow: "none",
        border: "0px",
        width: "100%",
      }}
    >
      <FlexCenter
        sx={{
          mt: 10,
        }}
        noValidate
        autoComplete="off"
      >
        <input
          className="inputProducts"
          placeholder="Buscar Producto..."
          //valor del estdo search
          value={search}
          onChange={handleChange}
        ></input>
       
        
           <SearchIcon
          sx={{
           
            color:'grey',
            borderRadius: 50,
            position: "absolute",
            left:'15%',
            fontSize:20,
            p:'3px'
          }}
        />
        <FilterListIcon
          sx={{
            backgroundColor: "#FCA311",
            color:'primary.dark.font',
            borderRadius: 50,
            position: "absolute",
            right:'15%',
            fontSize:17,
            p:'3px'
          }}
        />
      </FlexCenter>
      <Table sx={{ width: 1, mt: 0 }} aria-label="simple table">
        <TableHead>
          <TableRow></TableRow>
        </TableHead>
        <TableBody>
          <Box
            width={1}
            alignItems={'center'}
            justifyContent={'center'}
            display="grid"
            gridTemplateColumns="repeat(1,1fr)"
            gridAutoRows="270px"
            gap={"0px"}
       
          >
            {search.length > 0 ? (
              products.map((card) => {
                return (
                  <CardProductSearch
                    title={card.title}
                    description={card.description}
                    description2={card.description2}
                    price={card.price}
                    id={card.id}
                    tag={card.id}
                    image={card.image}
                    likes={card.likes}
                  ></CardProductSearch>
                );
              })
            ) : (
              <></>
            )}
          </Box>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Search;
