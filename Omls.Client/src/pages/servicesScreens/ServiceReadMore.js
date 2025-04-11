import React from "react";
import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import services from './ServicesFile.json'
import Pharmacovigilance from "./Pharmacovigilance";
import { useLocation } from "react-router-dom";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function SiteSupportServices() {
  const location = useLocation();
  const currentPath = location.pathname.startsWith("/") && location.pathname !== "/"
    ? location.pathname.slice(1, location.pathname?.length)
    : location.pathname;
  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTab = useMediaQuery('(min-width: 425px) and (max-width: 768px)');
  return (
    <>
    <Box
      sx={{
        position:"relative",
        backgroundImage: `url(${services[currentPath].image1})`, // replace with actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
        py: 8,
        color: "white",
        zIndex:-1,
        marginTop: isTab ? "15%" : {xs:"20%", sm:"6.5%", md:"15%",lg:"9%",xl:"5%"},
        "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: You can use this to add a dark overlay
        backdropFilter: "blur(2px)", // Adjust the blur level here
        zIndex: -1, // Make sure the blur is behind the content
  },
      }}
    >
      <Grid
        container
        maxWidth="xl"
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        spacing={4}
        zIndex={1}
      >
        <Grid item xs={12} component={motion.div} variants={itemVariants}>
          <Typography variant="h3" fontWeight="bold" align="left">
            {services[currentPath].title}
          </Typography>
        </Grid>
        {
          services[currentPath].content.map((item) => (
          <Grid item xs={12} md={6} component={motion.div} variants={itemVariants} key={item} textAlign= {isMobile ? "left":"justify"}>
            <Typography variant="h6" fontWeight="bold" >
              {item}
            </Typography>
        </Grid>
          ))
        }
      </Grid>
    </Box>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
        color: "white"}}>
        <Pharmacovigilance services={services[currentPath]} />
        </Box>
    
    </>
  );
}
