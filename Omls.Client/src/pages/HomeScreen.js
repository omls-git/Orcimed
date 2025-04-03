import React from "react";
import { Grid, Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "./HeroSection";
import WhatDefinesUs from "./WhatDefinesUs";
import HomeSection3 from "./HomeSection3";
import CustomerCarousel from "./CustomerCarousel";



const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div style={{backgroundColor:"black"}}>
      <Header />
      <HeroSection />
      <WhatDefinesUs />
      <HomeSection3 />
      <CustomerCarousel />
      <Footer />
    </div>
  );
};

export default HomeScreen;