import React from "react";
import { Container, Typography, Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import leftPerson from '../images/homeImageJ.png';
import rightPerson from '../images/homeimagejb.png'

const CustomizedSolutions = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "20px",
        display:'flex', 
        justifyContent:"space-between",
      }}
    >
      <Container maxWidth="100%" sx={ isMobile || isTablet ? {}:{display:'flex', justifyContent:"space-around", }}
      >
        <Typography
          variant={isTablet ? "h4": isMobile ? "h4" :"h2"}
          sx={{ fontWeight: "bold", textAlign: "center", py:{sm:'30px', xs: "30px"} }}
          width={isTablet || isMobile ? '90%': "40%"}
        >
          Customized <span style={{ color: "#C8102E" }}>Clinical Research Solutions</span>
        </Typography>
        <Typography variant="h6" pb="20px" 
        sx={{ textAlign:isMobile || isTablet ? "center": "left",alignItems:"center" }} 
        maxWidth={isTablet || isMobile ? '100%': "40%"} fontFamily={"inherit"}>
          Orcimed Life Sciences prides itself on personalized
          clinical trial management. With extensive experience, close
          collaboration with clients—large or small—designs and implements
          customized strategies. Through hands-on support and community
          outreach, efficient study launches, effective patient enrollment, and
          high-quality outcomes are ensured. A tailored, client-focused CRO
          experience is provided, meeting needs wherever clients are.
        </Typography>
      </Container>
      {/* Images */}
      {/* <Grid container spacing={2} sx={{ mt: 4, position: "relative" }}>
        <Grid
          item
          xs={6}
          sx={{ position: "absolute", left: 0, bottom: 0 }}
        >
          <img
            src={leftPerson}
            alt="Left Person"
            style={{ width: "100%", maxWidth: "250px" }}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ position: "absolute", right: 0, bottom: 0 }}
        >
          <img
            src={rightPerson}
            alt="Right Person"
            style={{ width: "100%", maxWidth: "250px" }}
          />
        </Grid>
      </Grid> */}
    </Box>
  );
};

export default CustomizedSolutions;
