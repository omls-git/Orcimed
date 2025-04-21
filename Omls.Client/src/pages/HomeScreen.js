import React,  { useState, useEffect, useRef }  from "react";
import { Grid, Typography } from "@mui/material";
import HeroSection from "./HeroSection";
import WhatDefinesUs from "./WhatDefinesUs";
import CustomizedSolutions from "./CustomizedSolutions";
import CustomerCarousel from "./CustomerCarousel";
import { motion } from "framer-motion";
import ServiceCards from "./ServiceCards";

const HomeScreen = () => {
  const [visible, setVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([]);
  const intervalRefs = useRef([]);

  const stats = [
    { id: 1, icon: "./icsrs.png", label: "ICSRs", count: 500000 },
    { id: 2, icon: './safetySignals.jpg', label: "Safety Signals", count: 1000 },
    { id: 3, icon: "./rmps.png", label: "RMPs", count: 100 },
    { id: 4, icon: "./reports.png", label: "Aggregate Reports", count: 1200 },
    { id: 5, icon: "./litreture.png", label: "Literature Surveillance", count: 5000 },
  ];

  useEffect(() => {
    setAnimatedStats(stats.map(stat => ({ ...stat, current: 0 })));
  }, []);

  useEffect(() => {
    if (visible) {
      stats.forEach((stat, index) => {
        let current = 0;
        const increment = Math.ceil(stat.count / 100); // ~1 second animation
        intervalRefs.current[index] = setInterval(() => {
          current += increment;
          setAnimatedStats(prev =>
            prev.map((s) =>
              s.id === stat.id
                ? { ...s, current: current >= stat.count ? stat.count : current }
                : s
            )
          );
          if (current >= stat.count) {
            clearInterval(intervalRefs.current[index]);
          }
        }, 20);
      });
    }
    return () => {
      intervalRefs.current.forEach(clearInterval);
    };
  }, [visible]);

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
    <div style={{ backgroundColor: "black" }}>
      <HeroSection />
      <WhatDefinesUs />
      <CustomizedSolutions />
      <Grid
        container
        id="diversity-difference"
        sx={{
          width: "100%",
          backgroundColor: "#F39200",
          color: "white",
          textAlign: "center",
          py: 6,
          position: "relative",
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" fontWeight="bold" sx={{ mb: 4 }}>
          Our Experience
          </Typography>
        </Grid>

        <Grid container spacing={3} display="flex" justifyContent="center">
          {animatedStats.map((stat) => (
            <Grid item xs={12} sm={6} md={2} key={stat.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: stat.id * 0.2 }}
                style={{
                  padding: "10px",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                <Typography width="100%" display="flex" justifyContent="center">
                  <img
                    src={stat.icon}
                    alt={stat.label}
                    width="100px"
                    height="100px"
                    style={{ borderRadius: "50px" }}
                  />
                </Typography>
                <Typography variant="h4" color="white" sx={{ mt: 2, fontWeight: "bold" }}>
                  {stat.current.toLocaleString()}+
                </Typography>
                <Typography variant="h5" color="white" sx={{ mt: 2, fontWeight: "bold" }}>
                  {stat.label}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <ServiceCards />
      <CustomerCarousel />
    </div>
  );
};


export default HomeScreen;