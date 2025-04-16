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
        backgroundColor: "#c8102e",
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
            Diverse<span style={{color:"#fff"}}> Clinical Trial{isMobile || isTab? '' : <br/>} Services</span>
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            flex:1,
            fontSize: isMobile ? "1rem" : "1.1rem",
            mb: 2,
          }}
          textAlign='left'
        >
          Services are enriched by extensive clinical trial management experience, offering a strategic, culturally sensitive, and results-driven approach to clinical trial diversity. This includes recruitment, site support, physician relationships, and creative messaging.
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: isMobile ? "1rem" : "1.1rem",
          }}
          textAlign='left'
        >
          A team of experts with specialized skill sets supports each project. A full range of services is available across various therapeutic areas, ensuring responsiveness and open communication at every stage.
        </Typography>
      </Box>

      {/* Right Side - Image */}
        <motion.img
           src='./service-people-girl-1.png'
          alt="Smiling Woman Jumping"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: isMobile? 10 : 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            width:"auto",
            maxHeight: isMobile ? "300px" : "600px",
          }}
        />
      </Box>
      <ServiceCards />
    </div>
  );
};

export default ServicesScreen;
