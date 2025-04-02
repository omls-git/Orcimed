import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import leftPerson from '../images/homeImageJ.png';
import rightPerson from '../images/homeimagejb.png'

const HomeSection3 = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: { xs: 4, md: 8 },
        borderRadius: "20px",
        // textAlign: "center",
        // position: "relative",
        // overflow: "hidden",
        // display:"block"
        display:'flex', justifyContent:"space-between",
      }}
    >
      <Container maxWidth="100%" sx={{display:'flex', justifyContent:"space-around", }}>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", textAlign: "left" }}
        >
          Customized <span style={{ color: "#C8102E" }}>Clinical <br/>Research Solutions</span>
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "left" }} maxWidth={"50%"} fontFamily={"inherit"}>
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

export default HomeSection3;
