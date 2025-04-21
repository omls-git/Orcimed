import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import ServiceCards from "./ServiceCards";

const ServicesScreen = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTab = useMediaQuery('(min-width: 425px) and (max-width: 768px)');

  return (
    <div>
    <Box
      sx={{
        backgroundColor: "white",
        color: "white",
        py: {xs:4,sm:3,md:3},
        px: {xs:4,sm:5,md:8,xl:30},
        minHeight: "80vh",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
      }}
    >
      {/* Left Side - Text Content */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant= {isMobile || isTab ? "h4" :"h2"}
          textAlign='left'
          sx={{
            fontWeight: 'bold',
            mb: isTab || isMobile ? 5 : 10,
          }}
          color= "#F39200"
        >
            Diverse<span style={{color:"#007b8f"}}> Clinical Trial{isMobile || isTab? '' : <br/>} Services</span>
        </Typography>
        <Typography
          variant="h6"
          // component="h1"
          sx={{
            flex:1,
            // fontSize: isMobile ? "1rem" : "1.1rem",
            mb: 2,
          }}
          textAlign='left'
          color="black"
        >
          Our services leverage deep clinical trial management expertise to drive strategic, culturally sensitive, and results-focused trial diversity through <strong style={{color:'black'}}>recruitment</strong>,  <strong style={{color:'black'}}>site support</strong>, and  <strong style={{color:'black'}}>creative outreach.</strong>
        </Typography>
        <Typography
          variant="h6"
          // component="h1"
          // sx={{
          //   fontSize: isMobile ? "1rem" : "1.1rem",
          // }}
          textAlign='left'
          color="black"
        >
         A skilled expert team ensures responsive communication and full-service support across diverse therapeutic areas.
        </Typography>
      </Box>

      {/* Right Side - Image */}
        <motion.img
           src='./clinicaltrial.png'
         
          alt="Smiling Woman Jumping"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: isMobile? 10 : 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            width: "500px",
            maxHeight: isMobile ? "300px" : "600px",
            marginRight: isMobile ? "0" : "20px", // changed to marginRight
            marginBottom: isMobile ? "20px" : "40px", 
            marginLeft: isMobile ? "0" : "60px", // added marginLeft for larger screens
          }}
        />
      </Box>
      <ServiceCards />
    </div>
  );
};

export default ServicesScreen;
