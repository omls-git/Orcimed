import React from "react";
import { Typography, Button, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import heroimage from '../images/homeimage1.png'
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const isMobile = useMediaQuery("(max-width:480px)");
  const isTab = useMediaQuery('(min-width: 425px) and (max-width: 768px)');

  const heroContent1 = "Built by industry leaders with decades of experiences in clinical research and marketed product support, OMLS is here to provide you the services you need to be successful.  OMLS is fast, high quality and high value.  From clinical trials to post-market support, OMLS offers end-to-end solutions tailored to your needs. With an unwavering commitment to quality, transparency, and value, we are your trusted offshore partner."
// const heroContent2 = 'We are a quality driven Clinical Services Organisation (CSO) focused on delivering accelerated innovative solutions and reliable scientific services.'

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
        pt: "8%",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></Box>
          <Box flex={1} ml={ isMobile ? 0 :"7%"} px={isMobile?2:0} textAlign={"left"}>
            <Typography variant={isMobile ? "h4" : "h2"} fontWeight="bold" color="#F39200">
            OrciMed
               <span style={{ color: "#007b8f" }}> Life Sciences</span>
            </Typography>
            <Typography variant="h6" mt={2} color="rgba(14, 11, 11, 0.86)" 
            width={isMobile ? "100%": isTab ? "70%" : "40%"}  fontFamily={'inherit'} //fontWeight={'bold'}
            >{heroContent1}</Typography>
            // <Typography variant="h6" mt={2} color="rgba(14, 11, 11, 0.86)" 
            // width={isMobile ? "100%": isTab ? "70%" : "40%"}  fontFamily={'inherit'} //fontWeight={'bold'}
            // >{heroContent2}</Typography>
            <Button
              variant="contained"
              color="warning"
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
