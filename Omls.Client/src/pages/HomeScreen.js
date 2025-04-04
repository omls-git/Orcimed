import React from "react";
import { Grid, Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "./HeroSection";
import WhatDefinesUs from "./WhatDefinesUs";
import CustomizedSolutions from "./CustomizedSolutions";
import CustomerCarousel from "./CustomerCarousel";
import ServiceCards from "./ServiceCards";



const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div style={{backgroundColor:"black"}}>
      <Header />
      <HeroSection />
      <WhatDefinesUs />
      <CustomizedSolutions />
      <ServiceCards />
      <CustomerCarousel />
      {/* <Footer />
       */}
       <Footer />
    </div>
  );
};

export default HomeScreen;