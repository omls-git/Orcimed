import React from "react";
import { Grid, Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "./HeroSection";
import WhatDefinesUs from "./WhatDefinesUs";
import HomeSection3 from "./HomeSection3";



const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div style={{backgroundColor:"black"}}>
      <Header />
      <HeroSection />
      <WhatDefinesUs />
      <HomeSection3 />
      <Container maxWidth= "100%" sx={{m:0, p:0}}//maxWidth="xl"  //style={{  mt: {   md: 12, lg: 16, xl: 20 }}}
      >
        {/* Feature Section */}
        <Grid container spacing={3} mt={5}>
          {["Feature 1", "Feature 2", "Feature 3"].map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                p={3}
                textAlign="center"
                border="1px solid #ddd"
                borderRadius={2}
                boxShadow={2}
              >
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {feature}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  This is a brief description of {feature}.
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>


      <Footer />
    </div>
  );
};

export default HomeScreen;