import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { styled } from "@mui/system";

const logos = [
  { src: "./logo_-1.jpg", alt: "Cipla" },
  { src: "./logo_-2.jpg", alt: "Strides" },
  { src: "./logo_-3.jpg", alt: "logo1" },
  { src: "./logo_-4.jpg", alt: "logo2" },
  { src: "./logo_-5.jpg", alt: "Dr. Regenold" },
  { src: "./logo_-6.jpg", alt: "logo3" },
  { src: "./logo_-7.jpg", alt: "logo4" },
  { src: "./logo_-9.jpg", alt: "logo6" },
  { src: "./logo_-11.jpg", alt: "logo8" },
  { src: "./logo_-12.jpg", alt: "logo9" },
  { src: "./logo_-16.jpg", alt: "logo10" },
  { src: "./logo_-17.jpg", alt: "logo11" },
];

const CustomPrevArrow = (props) => (
  <Box
    onClick={props.onClick}
    sx={{ position: "absolute", left: -30, top: "50%", transform: "translateY(-50%)", zIndex: 2, cursor: "pointer"  }}
  >
    <ArrowBackIos sx={{ fontSize: 30, color: "#454644" }} />
  </Box>
);

const CustomNextArrow = (props) => (
  <Box
    onClick={props.onClick}
    sx={{ position: "absolute", right: -30, top: "50%", transform: "translateY(-50%)", zIndex: 2, cursor: "pointer" }}
  >
    <ArrowForwardIos sx={{ fontSize: 30, color: "#454644" }} />
  </Box>
);



const CustomDotsWrapper = styled("ul")(({ theme }) => ({
  padding: 0,
  display: "flex",
  justifyContent: "center",
  margin: 0,
  gap: theme.breakpoints.down("sm") ? "0px" : "10px",
  "& li": {
    margin: theme.breakpoints.down("sm") ? "0 0px" : "0 5px",
  },
}));

const CustomerCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTablet ? 3 : 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: isMobile || isTablet ? null : <CustomPrevArrow />, 
    nextArrow:isMobile || isTablet ? null : <CustomNextArrow />,
    appendDots: (dots) => (
      <div style={{ margin: 0, padding: isMobile ? "5px 0" : "10px" }}>
        <CustomDotsWrapper>{dots}</CustomDotsWrapper>
      </div>
    ),
  };

  return (
    <Box textAlign="center" py={5} sx={{backgroundColor:'#fff'}}>
      <Typography variant={isMobile ? "h4" : "h2"} fontWeight="bold" color="black" pb={"20px"}>
      Partnering for<span style={{ color: "#d70000" }}> Success</span>
                  </Typography>
                  <Box sx={{ maxWidth: "80%", margin: "0 auto" }}>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <Box key={index} display="flex" alignItems={"center"} justifyContent="center" >
              <img src={logo.src} alt={logo.alt} style={{objectFit: "contain", maxWidth: isMobile ? "200px": "250px", width: "100%", 
                height:isMobile ? "120px" :"150px", margin: "0 auto",}} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};


export default CustomerCarousel;