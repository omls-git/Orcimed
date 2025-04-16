import React from "react";
import { Container, Stack, Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const ContactList = [
    {
      icon: <MailOutlineIcon sx={{ p: 2, bgcolor: "#F39200", borderRadius: "50%", color: "#fff", mb:"10px" }} fontSize="large" />,
      title: "EMAIL",
      content: "contact@orcimedlifesciences.com",
      bgc: "#454644",
      hbgc: "#fff",
      color: "#fff",
      hoverC: "#F39200",
      link: 'contact@orcimedlifesciences.com'
    },
    {
      icon: <LinkedInIcon sx={{ p: 2, bgcolor: "#F39200", borderRadius: "50%", color: "#fff", mb:"10px" }} fontSize="large" />,
      title: "",
      content: "LinkedIn",
      bgc: "#007b8f",
      hbgc: "#fff",
      color: "#fff",
      hoverC: "#F39200",
      link: 'https://www.linkedin.com/company/orcimed-life-sciences'
    },
    {
      icon: "",
      title: "",
      content: "The Only CRO with 100% Recruitment Targets Met for All Populations",
      bgc: "black",
      hbgc: "#fff",
      color: "#fff",
      hoverC: "#F39200",
      link: ''
    },
    {
      icon: <DescriptionIcon sx={{ p: 2, bgcolor: "#F39200", borderRadius: "50%", color: "#fff", mb:"10px" }} fontSize="large" />,
      title: "",
      content: "News & Blog",
      bgc: "#454644",
      hbgc: "#fff",
      color: "#fff",
      hoverC: "#F39200",
      link: 'news-blog'
    }
  ];

  const QuickLinks = [
    { title: 'HOME', link: '/' },
    { title: 'ABOUT US', link: '/about' },
    { title: 'SERVICES', link: '/services' },
    { title: 'TEAM', link: '/team' },
    { title: 'MISSION & VISION', link: '/mission-vision' },
    { title: 'WHY ORCIMED LIFE SCIENCES', link: '/why-orcimed' },
    { title: 'CAREERS', link: '/careers' },
    { title: 'CONTACT US', link: '/contact' }
  ];

  const navigate = useNavigate();

  const handleClick = (value) => {
    if (value.title === "EMAIL") {
      window.location.href = `mailto:${value.link}`;
    } else if (value.content === "LinkedIn") {
      window.location.href = value.link;
    } else if (value.link) {
      navigate(`/${value.link}`);
    }
  };

  return (
    <Box sx={{ backgroundColor: "#222", color: "white", pt: 4}}>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          gutterBottom
          textAlign={isMobile ? "center": "left"}
          sx={{ fontWeight: "bold", py: 4 }}
        >
          Connect With Us
        </Typography>
        <Stack
          spacing={4}
          direction={{ xs:"column", sm:"row", md: "row"}}
          alignItems= {isMobile ? "center" : "flex-start"}
          sx={{ flexWrap: "wrap" }}
        >
          {/* Contact Cards */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr",md: "1fr 1fr" },
              gap: 0,
              flex: 0,
            }}
          >
            {ContactList.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isMobile ? -100 :-250 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: index > 1 ? 2.2 : 0.6, ease: "easeOut" }}
                viewport={{ amount: 0.2 }}
              >
                <Box
                  sx={{
                    borderTopLeftRadius: index === 0 ? "60px" : 0,
                    borderBottomRightRadius: index === 3 ? "60px" : 0,
                    bgcolor: item.bgc,
                    color: item.color,
                    p: 3,
                    textAlign: "center",
                    transition: "background-color 0.3s",
                    "&:hover": {
                      bgcolor: item.hbgc,
                      color: item.hoverC
                    },
                    minHeight: 200,
                    width: isMobile ? "240px" : "280px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems:"center",
                    cursor: item.link ? "pointer" : "default",
                  }}
                  onClick={() => handleClick(item)}
                >
                  {item.icon}
                  {item.title && (
                    <Typography variant="subtitle2" my={1} fontWeight="bold">
                      {item.title}
                    </Typography>
                  )}
                  <Typography variant="body1" fontWeight="bold">
                    {item.content}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* Quick Links */}
          <Box sx={{ minWidth: { xs: "100%", sm:"250px", md: "250px" }, pt: 4,textAlign:"left" }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            {QuickLinks.map((link) => (
              <Typography
                key={link.title}
                variant="body1"
                sx={{ my: 1, cursor: 'pointer',":hover":{color:"#F39200"} }}
                fontWeight="bold"
                onClick={() => navigate(link.link)}
              >
                {link.title}
              </Typography>
            ))}
          </Box>
        </Stack>
      </Container>

      <Box sx={{ mt: 4, bgcolor: "rgb(35, 132, 177)", py: 3, px: { xs: 2, md: 10 } }}>
        <Typography variant="body1" fontWeight="bold" textAlign="center">
          ©2023. OrciMed Life Sciences. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
