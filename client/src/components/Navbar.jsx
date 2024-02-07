import React, { useState, Suspense } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
} from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import { LINKS } from "../constants";
import { Link , Outlet } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        <NavListDrawer />
      </Drawer>
      <AppBar
        sx={{
          position: "fixed",
          background: "primary",
          boxShadow: "none",
          zIndex: "999",
          left: "0px",
          top: "0px",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Box sx={{ width: 1, ml: "1rem" }}>
          <Typography fontWeight={"bold"}>
            Menu
            <Typography variant="gap" color={"primary.light"}>
              {" "}
              Cafeteria
            </Typography>
          </Typography>
        </Box>

        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            width: 1,
            p: 0,
            flexGrow: 1,
          }}
        >
         
         <Box sx={{display:{xs:'none', sm:'flex',p:0,gap:'1rem'}
               
              }}>
         {LINKS.map((link,i)=>{
             return(
                 <Box component='div' key={i} 
                 sx={{color:'white',width:'5rem'}}
                 >
                     <Link  underline="hover" className='link' to={link.path} >
                         {/* los estilos estan en el index.css */}
                         <Typography  color='white'>
                         {link.name}
                         </Typography>
                     
                     </Link>
                
                 </Box>
                
             )
         })}
   
   
     </Box>

          <IconButton
            size="large"
            
            onClick={() => setOpen(true)}
            sx={{ display: { sm: "none", sx: "flex", color: "#FCD9B8" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      
      </AppBar>
  
    </Box>
  );
};

export default Navbar;
