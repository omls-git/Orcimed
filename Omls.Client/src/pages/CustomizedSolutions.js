import React from "react";
import { Container, Typography, Box, useMediaQuery, useTheme, List, ListItem, ListItemIcon } from "@mui/material";
import NavigationIcon from '@mui/icons-material/Navigation';

const CustomizedSolutions = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "20px",
      }}
    >
      <Container maxWidth="100%" sx={ isMobile || isTablet ? {}:{display:'flex', justifyContent: "space-around"}}
      >
        <Typography
          color="#F39200"
          variant={isTablet ? "h4": isMobile ? "h4" :"h2"}
          sx={{ fontWeight: "bold", textAlign: "center", py:{sm:'30px', xs: "30px"}, px:{xs:'2.5%', sm:'2.5%'}}}
          width={isTablet || isMobile ? '90%': "40%"}
        >
          Client-Focused <br/>
           <span style={{ color: "#007b8f" }}>Scientific Expertise</span>
        </Typography>
        <Typography
          py="20px"
          variant="h6"
          sx={{ textAlign: isMobile || isTablet ? "center" : "left", alignItems: "center",
   }}
          maxWidth={isTablet || isMobile ? "100%" : "50%"}
          fontFamily="inherit"
        >
          <List >
            <ListItem alignItems="flex-start">
            <ListItemIcon>
                <NavigationIcon  sx={{ transform: 'rotate(90deg)', color: '#007b8f' }} />
              </ListItemIcon>
              OrciMed Life Sciences prides itself on providing all centralized services within the Clinical and Post Marketed markets.
            </ListItem>
             <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <NavigationIcon sx={{ transform: 'rotate(90deg)', color: '#007b8f' }} />
                </ListItemIcon>
                With extensive experience, close collaboration with clients-large or small, OMLS is the perfect off-shore partner
                </ListItem>
                <ListItem alignItems="flex-start">
              <ListItemIcon>
                  <NavigationIcon sx={{ transform: 'rotate(90deg)', color: '#007b8f' }} />
                </ListItemIcon>
                A tailored, client-focused organization with decades of  experience
              </ListItem>
          </List>
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
