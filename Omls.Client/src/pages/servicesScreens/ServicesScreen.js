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
          py: { xs: 4, sm: 3, md: 3 },
          px: { xs: 4, sm: 5, md: 8, xl: 30 },
          minHeight: "80vh",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
        }}
      >
        {/* Left Side - Text Content (70%) */}
        <Box sx={{ flex: isMobile ? "1" : "0 0 70%", pr: isMobile ? 0 : 6 }}>
          <Typography
            variant={isMobile || isTab ? "h4" : "h2"}
            textAlign='left'
            sx={{
              fontWeight: 'bold',
              mb: isTab || isMobile ? 5 : 10,
            }}
            color="#F39200"
          >
            Diverse<span style={{ color: "#007b8f" }}> Clinical Trial{isMobile || isTab ? '' : <br />} Services</span>
          </Typography>
          <Typography
            variant="h6"
            sx={{ mb: 2 }}
            textAlign='left'
            color="black"
          >
            Our services leverage deep clinical trial management expertise to drive strategic, culturally sensitive, and results-focused trial diversity through <strong style={{ color: 'black' }}>recruitment</strong>,  <strong style={{ color: 'black' }}>site support</strong>, and  <strong style={{ color: 'black' }}>creative outreach.</strong>
          </Typography>
          <Typography
            variant="h6"
            textAlign='left'
            color="black"
          >
            A skilled expert team ensures responsive communication and full-service support across diverse therapeutic areas.
          </Typography>
        </Box>

        <Box
          sx={{
            flex: isMobile ? "1" : "0 0 30%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <motion.img
            src="./clinicaltrial.png"
            alt="Smiling Woman Jumping"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: isMobile ? 10 : 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              width: "100%",
              marginTop: isMobile ? "20px" : "0px",
            }}
            // Use sx to target sizes for md and xl
            sx={{
              maxWidth: {
                xs: "100%",
                sm: "400px",
                md: "500px",   // medium screen
                xl: "600px",   // extra large screen
              },
              maxHeight: {
                xs: "320px",
                sm: "400px",
                md: "650px",   // medium screen
                xl: "750px",   // extra large screen
              },
            }}
          />
        </Box>

      </Box>

      <ServiceCards />
    </div>
  );
};

export default ServicesScreen;
