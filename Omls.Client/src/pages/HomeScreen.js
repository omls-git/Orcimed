import React,  { useState, useEffect }  from "react";
import { Grid, Typography } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "./HeroSection";
import WhatDefinesUs from "./WhatDefinesUs";
import CustomizedSolutions from "./CustomizedSolutions";
import CustomerCarousel from "./CustomerCarousel";
import { motion } from "framer-motion";
import ServiceCards from "./ServiceCards";


const stats = [
  { id: 1, icon: "./icsrs.png", label: "ICSRs", count: 500000 },//📄
  { id: 2, icon: './safetySignals.jpg', label: "Safety Signals", count: 1000 },//💊
  { id: 3, icon: "./rmps.png", label: "RMPs", count: 100 },//👨‍⚕️
  { id: 4, icon: "./reports.png", label: "Aggregate Reports", count: 1200 },//📑
  { id: 5, icon: "./litreture.png", label: "Literature Surveillance", count: 700 },//🩺
];



const HomeScreen = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("diversity-difference");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{backgroundColor:"black"}}>
      <Header />
      <HeroSection />
      <WhatDefinesUs />
      <CustomizedSolutions />
      <Grid
        container
        id="diversity-difference"
        sx={{
          width: "100%",
          backgroundColor: "#b01724", // Dark red background
          color: "white",
          textAlign: "center",
          py: 6,
          position: "relative",
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" fontWeight="bold" sx={{ mb: 4 }}>
            The TOTAL Diversity Difference
          </Typography>
        </Grid>

        <Grid container spacing={3} display={"flex"} justifyContent="center">
          {stats.map((stat) => (
            <Grid item xs={12} sm={6} md={2} key={stat.id} alignItems='center'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: stat.id * 0.2 }}
                style={{
                  padding: "10px",
                  borderRadius: "10px",
                  textAlign: "center",
                  alignContent:"center"
                }}
              >
                <Typography width='100%' alignItems='center' display='flex' justifyContent={'center'} variant="h3" >
                    <img src={stat.icon} alt="safetySignals" width='100px' height='100px' style={{borderRadius:'50px'}}/> 
                </Typography>                    
                <Typography variant="h6" color="white" sx={{ mt: 2, fontWeight: "bold" }}>
                  {stat.label}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Grid>      
      <ServiceCards />
      <CustomerCarousel />
       <Footer />
    </div>
  );
};

export default HomeScreen;