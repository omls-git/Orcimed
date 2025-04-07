import React,  { useState, useEffect }  from "react";
import { Grid, Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "./HeroSection";
import WhatDefinesUs from "./WhatDefinesUs";
import CustomizedSolutions from "./CustomizedSolutions";
import CustomerCarousel from "./CustomerCarousel";
import { motion, useAnimation } from "framer-motion";

const stats = [
  { id: 1, icon: "📄", label: "ICSRs", count: 500000 },
  { id: 2, icon: "💊", label: "Safety Signals", count: 1000 },
  { id: 3, icon: "👨‍⚕️", label: "RMPs", count: 100 },
  { id: 4, icon: "📑", label: "Aggregate Reports", count: 1200 },
  { id: 5, icon: "🩺", label: "Literature Surveillance", count: 0 },
];
import ServiceCards from "./ServiceCards";



const HomeScreen = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("leaders-experience");
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
      <ServiceCards />
      <CustomerCarousel />
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
        {/* Black Circles in Background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url('/black-circles.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2, // Semi-transparent effect
            zIndex: -1,
          }}
        ></div>

        <Grid item xs={12}>
          <Typography variant="h3" fontWeight="bold" sx={{ mb: 4 }}>
            The TOTAL Diversity Difference
          </Typography>
        </Grid>

        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat) => (
            <Grid item xs={12} sm={6} md={3} key={stat.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: stat.id * 0.2 }}
                style={{
                  background: "rgba(0, 0, 0, 0.6)",
                  padding: "20px",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                <Typography variant="h3">{stat.icon}</Typography>
                <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                  {stat.label}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* <Footer />
       */}
       <Footer />
    </div>
  );
};

export default HomeScreen;