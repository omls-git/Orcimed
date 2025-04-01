import React from "react";
import { Grid, Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";



const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <Container maxWidth="xl"  style={{  mt: {   md: 12, lg: 16, xl: 20 }}}>
        {/* Hero Section */}
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundImage: "url('/HomePage1.jpg')", // Replace with your image URL
            backgroundSize: { xs: "contain", sm:"contain", md: "cover" }, // Ensures responsive background scaling
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh", // Full height
            width: "100%", // Full width
            color: "white", // Ensures text visibility
            px: { xs: 2, md: 5 }, // Responsive padding
            py: 5, // Vertical padding
          }}
        >
          <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "left" }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Welcome to Our Website Jyoti
            </Typography>
            <Typography variant="body1" color="white" gutterBottom>
              
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={() => navigate("/about")}
            >
              Learn More
            </Button>
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            {/* If you want an additional image inside the grid */}
            <img
              src="/HomePage1.jpg" // Replace with your image
              alt="Home"
              style={{
                width: "100%", // Ensures responsiveness
                maxWidth: "400px", // Limits size on large screens
                borderRadius: "10px",
              }}
            />
          </Grid>
        </Grid>
        {/* //Second grid */}
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundImage: "url('/Home3.png')", // Replace with your image URL
            backgroundSize: { xs: "contain", md: "cover" }, // Ensures responsive background scaling
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh", // Full height
            width: "100%", // Full width
            color: "white", // Ensures text visibility
            px: { xs: 2, md: 5 }, // Responsive padding
            py: 5, // Vertical padding
            borderRadius: "20px", // ✅ Adds rounded corners
            overflow: "hidden", // ✅ Ensures the background doesn't overflow the rounded edges
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", 
          }}
          
        >
          <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "left" }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Welcome to Our Website
            </Typography>
            <Typography variant="body1" color="white" gutterBottom>
              Discover amazing features and services tailored for you.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={() => navigate("/about")}
            >
              Learn More
            </Button>
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            {/* If you want an additional image inside the grid */}
           
          </Grid>
        </Grid>



        {/* Feature Section */}
        <Grid container spacing={3} mt={5}>
          {["Feature 1", "Feature 2", "Feature 3"].map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                p={3}
                textAlign="center"
                border="1px solid #ddd"
                borderRadius={2}
                boxShadow={2}
              >
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {feature}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  This is a brief description of {feature}.
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>


      <Footer />
    </div>
  );
};

export default HomeScreen;