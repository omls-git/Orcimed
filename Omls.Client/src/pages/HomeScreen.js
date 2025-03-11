import React, { useState, useEffect } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

// Text Sets for rotation every 5 seconds
const textSets = [
  "Customer testimonials, industry news, blog posts",
  "A compelling headline highlighting your value proposition, a brief company overview",
  "Product/service highlights, customer testimonials, a visually appealing hero"
];

const gridItems = [
  {
    image: "/Homepage1.jpg",
    text: "Image 1",
    height: 400,
    bgColor: "#ff5733",
    textColor: "#fff",
    textAlign: "left",
    borderRadius: "10px",
  },
  {
    image: "/Homepage2.jpg",
    text: "Image 2",
    height: 300,
    bgColor: "#33a1ff",
    textColor: "#fff",
    textAlign: "center",
    borderRadius: "20px",
  },
  {
    image: "/Homepage3.jpg",
    text: "Image 3",
    height: 500,
    bgColor: "#ffcc00",
    textColor: "#000",
    textAlign: "right",
    borderRadius: "0px",
  },
  {
    image: "/Homepage4.jpg",
    text: "Image 4",
    height: 350,
    bgColor: "#2ecc71",
    textColor: "#fff",
    textAlign: "center",
    borderRadius: "15px",
  },
];

const HomeScreen = () => {
  const [currentText, setCurrentText] = useState(textSets[0]);
  const navigate = useNavigate();

  // Update text every 5 seconds
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = textSets.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % textSets.length;
        return textSets[nextIndex];
      });
    }, 5000); // Change text every 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(textInterval);
  }, []);

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {gridItems.map((item, index) => (
            <Grid item xs={12} key={index}>
              <Box
                sx={{
                  height: item.height, // Unique height per widget
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: item.borderRadius,
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: item.textAlign,
                  padding: "20px",
                  color: item.textColor,
                  overflow: "hidden",
                }}
              >
                {/* Dark Overlay for Readability */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.3)", // Dark overlay
                  }}
                />
                {/* Dynamic Text in Widget 1 */}
                {index === 0 && (
                  <Box sx={{ position: "absolute", color: item.textColor, zIndex: 2 }}>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      {currentText}
                    </Typography>
                    {/* Button Below the Dynamic Text */}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleContactClick}
                      sx={{ marginTop: 2 }}
                    >
                      Go to Contact Page
                    </Button>
                  </Box>
                )}
                {/* Static Text for Other Widgets */}
                {index !== 0 && (
                  <Typography
                    variant="h4"
                    sx={{
                      position: "absolute",
                      color: item.textColor,
                      fontWeight: "bold",
                      zIndex: 2,
                    }}
                  >
                    {item.text}
                  </Typography>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default HomeScreen;

