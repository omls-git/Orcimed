import React from "react";
import { Typography, Button, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import heroimage from '../images/homeimage1.png'
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const heroContent = `The strategic excellence and scientific expertise of our seasoned leadership team kindled the birth of OrciMed Life Sciences to streamline cost-effective drug development and commercialization. OrciMed Life Sciences strongly believes in patient centric process development strategies, and we conduct our work with a commitment that culminates in clinical benefit.

We are a quality driven Clinical Services Organisation (CSO) focused on delivering accelerated innovative solutions and reliable scientific services.`

const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        textAlign: "left",
        backgroundImage: `url(${heroimage})`,
        backgroundSize: "cover",
        color: "white",
        pt: "7%",
        mt: isMobile ? "25%" : '6%',
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></Box>
          <Box flex={1} ml={"10%"}>
            <Typography variant={isMobile ? "h4" : "h2"} fontWeight="bold" color="black">
            OrciMed
               <span style={{ color: "#d70000" }}> Life Sciences</span>
            </Typography>
            <Typography variant="h6" mt={2} color="rgba(14, 11, 11, 0.86)" 
            width={isMobile ? "100%": "40%"} fontFamily={'inherit'} //fontWeight={'bold'}
            >{heroContent}</Typography>
            <Button
              variant="contained"
              color="error"
              sx={{ my: 3, padding: "10px 20px" }}
              onClick={() => navigate('/about')}
            >
              Learn More
            </Button>
          </Box>
    </Box>
  );
};

export default HeroSection;
