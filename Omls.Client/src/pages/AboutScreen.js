import React from 'react'
import { Grid, Box, Typography, Button, Container, Card, CardContent, Avatar, IconButton } from "@mui/material";
import Footer from '../components/Footer';
import { LinkedIn } from "@mui/icons-material";
import { motion } from "framer-motion";


const sections = [
  {
    imgSrc: "./cusstomerfocus.jpg",
    title: "Customer Focussed",
    text: "Our management, processes and people are aligned towards satisfying the needs of our customers",
  },
  {
    imgSrc: "./rawImage.jpg",
    title: "Integrity & Commitment",
    text: "Our core values are embedded in our DNA, which is to perform to the highest standards in order to meet expectations. We deliver what we promise with transparency and integrity, thereby earning the trust of customers and partners to foster long term business relationship",
  },
  {
    imgSrc: "./employe.jpg",
    title: "Employee Focussed",
    text: "Development of medicines requires knowledge and technical know-how. We invest to acquire knowledge to lead this evolving field and develop our employees. We provide growth and healthy work environment for our employees and promote positive work-life balance",
  },
  {
    imgSrc: "./quality.jpg",
    title: "Quality",
    text: "We endeavour for the highest quality in everything we do by creating a culture of continuous learning and improvement. In order to optimise work efficiency and effectiveness, our employees are supported with training and development to ensure high standards are met",
  },
];
const teamMembers = [
  {
    name: "Mr.Suman Maarisetty",
    role: "Chief Execicutive Officer",
    image: "./suman.png",
    linkedin: "https://www.linkedin.com/in/johndoe/",
  },
  {
    name: "Dave Agrella",
    role: "Chief Revenue Officer",
    image: "./Dave.png",
    linkedin: "https://www.linkedin.com/in/janesmith/",
  },
  {
    name: "Dr. Raza Mohammad",
    role: "Chief Scientific Officer",
    image: "./Raza.png",
    linkedin: "https://www.linkedin.com/in/janesmith/",
  },
  {
    name: "Rob Petrie",
    role: "Chief Innovation Officer",
    image: "./rob.png",
    linkedin: "https://www.linkedin.com/in/janesmith/",
  },
  {
    name: "Dr. Someshwar Komuravelly",
    role: "Chief Development Officer",
    image: "./someshawar.png",
    linkedin: "https://www.linkedin.com/in/janesmith/",
  },
  {
    name: "Swetha Tatineni",
    role: "Head-Support Functions",
    image: "./swetha.png",
    linkedin: "https://www.linkedin.com/in/janesmith/",
  },
  {
    name: "Savita Ravindra Gupta",
    role: "Senior Manager QA",
    image: "./savitha.png",
    linkedin: "https://www.linkedin.com/in/janesmith/",
  },

];

const cardData = [
  {
    title: "D Dash™ – Metrics Dashboard",
    description: [
      "Proprietary tool for tracking and monitoring diverse enrollment in clinical trials.",
      "Project Team reviews the data at least once a week to evaluate progress toward achieving the diversity goal.",
      "Receives live data feeds from sponsors’ EDC or IWRS systems.",
      "Modifies recruitment activities based on site progress."
    ],
    imgSrc: "https://via.placeholder.com/100", // Replace with actual image URL
  },
  {
    title: "Study Startup",
    description: [
      "Utilizes DTEACH™ best practices portal for targeted improvements.",
      "Detailed feasibility and site access using the Diversity Site Assessment Tool (DSAT).",
      "DSAT benchmarks sites on 25 critical factors for diversity and inclusion.",
      "Project kick-off meetings to establish project foundations."
    ],
    imgSrc: "https://via.placeholder.com/100", // Replace with actual image URL
  },
  {
    title: "Clinical Research",
    description: [
      "Advanced clinical research techniques and monitoring.",
      "Data-driven insights for better trial outcomes.",
      "Ensuring compliance with industry regulations.",
      "Optimizing patient recruitment strategies."
    ],
    imgSrc: "https://via.placeholder.com/100", // Replace with actual image URL
  },
  {
    title: "Diversity & Inclusion",
    description: [
      "Strategies for enhancing diversity in clinical trials.",
      "Community engagement for inclusive research.",
      "Custom solutions for underrepresented populations.",
      "Data insights to track diversity progress."
    ],
    imgSrc: "https://via.placeholder.com/100", // Replace with actual image URL
  }
];

const AboutScreen = () => {
  return (
    <Container maxWidth="xl" disableGutters>

      

      {/* Hero Section with Background Image */}
      <Grid
        container
        sx={{
          width: "100%",
          height: { xs: "250px", md: "700px" },
          backgroundImage: "url('/baoutusbg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start", // Move content to the left
          textAlign: "left", // Align text to the left
          pl: { xs: 2, md: 10 }, // Add left padding for spacing
        }}
      >
        <Grid item xs={12} md={6}> {/* Text only takes half width on larger screens */}
          <Typography variant="h3" fontWeight="bold" color="maroon">
            Vision
          </Typography>
          <Typography variant="h6" color="black">
            To achieve leading industry presence with expertise and experience in the delivery of clinical research services across the globe, through collaboration and networking with clients, developing professionals, and providing cutting-edge infrastructure.
            We strive to be a long-term trusted partner of major innovative healthcare organizations.
          </Typography>
          <Typography variant="h3" fontWeight="bold" color="maroon" sx={{ mt: 2 }}>
            Mission
          </Typography>
          <Typography variant="h6" color="black">
            To provide reliable Clinical Research Services covering a range of activities for pharmaceutical and biotech companies, through a team of committed experts.
            To help our customers in creating a healthier and safer world through our quality services.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mt: 4, px: { xs: 2, md: 10 } }}>
        {sections.map((section, index) => (
          <Grid container item spacing={4} key={index} alignItems="center">
            {/* Image Section - Alternating Position */}
            <Grid
              item
              xs={12}
              md={5}
              order={{ xs: 1, md: index % 2 === 0 ? 1 : 2 }}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <motion.img
                src={section.imgSrc}
                alt={section.title}
                style={{
                  width: "90%",
                  maxWidth: "400px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Slide from left/right
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ amount: 0.2 }} // Keeps triggering when visible
              />
            </Grid>

            {/* Text Card Section */}
            <Grid item xs={12} md={7} order={{ xs: 2, md: index % 2 === 0 ? 2 : 1 }}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }} // Slide from right/left
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ amount: 0.2 }} // Keeps triggering on scroll
              >
                <Card elevation={3} sx={{ padding: "20px", minHeight: "100%", maxWidth: "500px", margin: "0 auto" }}>
                  <CardContent>
                    <Typography variant="h4" gutterBottom sx={{ color: "#D32F2F", fontWeight: "bold" }}>
                      {section.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" sx={{ textAlign: "justify", lineHeight: "1.6" }}>
                      {section.text}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        ))}
      </Grid>


      {/* { Team Section} */}
      <Grid container spacing={3} justifyContent="center" sx={{ marginTop: 5 }}>
        <Grid item xs={12} textAlign="center">
          <Typography variant="h3" fontWeight="bold" color="maroon">
            OUR TEAM
          </Typography>
        </Grid>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ paddingBottom: "20px" }}>
            {/* Added paddingBottom to prevent movement */}
            <Box
              sx={{
                textAlign: "center",
                borderRadius: 2,
                padding: "10px",
                minHeight: "280px", // Set a min-height to avoid shifting
                transition: "0.3s",
              }}
            >
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{
                  width: 200,
                  height: 200,
                  margin: "15px auto",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.1)", // Instead of increasing width & height, use scale
                  },
                }}
              />
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  fontSize: "20px",
                  marginTop: 1,
                  transition: "0.3s",
                  "&:hover": { color: "orange" },
                }}
              >
                {member.name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="gray"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  transition: "0.3s",
                }}
              >
                {member.role}
              </Typography>
              <IconButton
                component="a"
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ marginTop: 1, color: "#0077B5" }}
              >
                <LinkedIn fontSize="large" />
              </IconButton>
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* why orcimed lifesciences */}

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4, px: { xs: 2, md: 10 } }}>
        <Grid item xs={12} textAlign="center">
          <Typography variant="h3" fontWeight="bold" color="maroon">
            Why Orcimed Lifesciences?
          </Typography>
        </Grid>
        {cardData.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ amount: 0.2 }}
            >
              <Card elevation={3} sx={{ height: "100%", display: "flex", flexDirection: "column", borderRadius: "15px" }}>
                <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  {/* Image */}
                  <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                    <img src={item.imgSrc} alt={item.title} style={{ width: "80px", height: "80px" }} />
                  </Box>

                  {/* Title */}
                  <Typography variant="h5" sx={{ fontWeight: "bold", color: "#D32F2F", textAlign: "center" }}>
                    {item.title}
                  </Typography>

                  {/* Description List */}
                  <Box component="ul" sx={{ flex: 1, px: 2 }}>
                    {item.description.map((point, i) => (
                      <Typography component="li" key={i} sx={{ fontSize: "16px", lineHeight: "1.5" }}>
                        {point}
                      </Typography>
                    ))}
                  </Box>

                  {/* Read More Button - Always at Bottom */}
                  <Button variant="contained" sx={{ backgroundColor: "black", color: "white", mt: "auto", alignSelf: "center" }}>
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      <Footer />
    </Container>
  );
}

export default AboutScreen