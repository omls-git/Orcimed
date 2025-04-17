import React from "react";
import { Grid, Card, CardContent, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Post Marketing Safety Operations",
    description:
      "Post marketing safety operations is an important practice of monitoring the safety of a pharmaceutical drug or a medical device.",
     icon: "./icon_3-1.png"
  },
  {
    title: "Clinical Trial Safety Operations",
    description:
      "Clinical trial is a pivotal phase in the drug development process that provides safety information along with therapeutic exploration.",
    icon: "./icon_5-1.png"
  },
  {
    title: "Additional Pharmacovigilance",
    description:
      "Pharmacovigilance is a critical function in the life cycle of the drug focusing on patient safety and quality of life. While the principle of drug safety.",
    icon: "./icon_4-1.png"
  },
  {
    title: "Medical Writing",
    description:
      "Medical writing is a distinct skill to create well-structured documents to present the information clearly and concisely.",
    icon: "./icon_2-1.png"
  },
  {
    title: "Biostatistics and Clinical SAS",
    description:
      "Biostatistics is an important development and statistical method to get appropriate interpretation of clinical study results.",
       icon: "./icon_1-2.png"
  },
  {
    title: "Regulatory Affairs",
    description:
      "Health Authorities have meticulously devised complex rules and regulation for development of pharmaceutical products.",
    icon: "./icon_5-1.png"
  },
  {
    title: "Data Management",
    description:
      "Data Management is the central requirement for enabling subsequent processes with the intent of providing structured data.",
    icon: "./icon_6-1.png"
  },
  {
    title: "Health Economics and Outcomes Research",
    description:
      "A multidisciplinary approach in designing, executing and analyzing new interventions is required for generating relevant.",
    icon: "./icon_3-1.png"
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  backgroundColor: "#007b8f",//"#F39200",
  color: "#fff",
  height: "360px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",

  "&::before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: 0,
    background: "linear-gradient(to right, #F39200, #F39200)",
    zIndex: 0,
    transition: "width 1s ease",
  },

  "&:hover::before": {
    width: "100%",
  },

  "& > .MuiCardContent-root": {
    position: "relative",
    zIndex: 1,
  },
}));

const ServiceCards = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();
  const handleClick = (value) => {
    const linkTo = value?.replace(/\s+/g, '-').toLowerCase()
    navigate(`/${linkTo}`)
  }
  return (
    <div>
    <Typography variant={isSmallScreen ? "h4": "h2"} fontWeight="bold" color="#F39200" py={3}>
      Service <span style={{ color: "#007b8f" }}>Spectrum </span>
    </Typography>
    <Grid container spacing={3} justifyContent="center" sx={{ padding: 3 }}>
      {services.map((service, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index} 
        onClick={() => handleClick(service.title)} sx={{cursor:"pointer"}}>
          <StyledCard>
            <CardContent>
              <img src={service.icon} alt={service.icon}/>
              <Typography variant={isSmallScreen ? "h6" : "h5"} fontWeight="bold">
                {service.title}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                {service.description}
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
    </div>
  );
};

export default ServiceCards;
