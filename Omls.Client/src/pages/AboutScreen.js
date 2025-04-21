import React from 'react'
import { Grid, Box, Typography, Card, CardContent, List, ListItem, ListItemIcon } from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Doctors from '../components/Doctors';


const sections = [
  {
    imgSrc: "./cusstomerfocus.jpg",
    title: "Customer Focused",
    text: "Our management, processes and people are aligned towards satisfying the needs of our customers",
  },
  {
    imgSrc: "./rawImage.jpg",
    title: "Integrity & Commitment",
    text: "Our core values are embedded in our DNA, which is to perform to the highest standards in order to meet expectations. We deliver what we promise with transparency and integrity, thereby earning the trust of customers and partners to foster long term business relationship",
  },
  {
    imgSrc: "./employe.jpg",
    title: "Employee Focused",
    text: "Development of medicines requires knowledge and technical know-how. We invest to acquire knowledge to lead this evolving field and develop our employees. We provide growth and healthy work environment for our employees and promote positive work-life balance",
  },
  {
    imgSrc: "./quality.jpg",
    title: "Quality",
    text: "We endeavour for the highest quality in everything we do by creating a culture of continuous learning and improvement. In order to optimise work efficiency and effectiveness, our employees are supported with training and development to ensure high standards are met",
  },
];

const cardData = [
  {
    title: "Transparency",
    description: [
      "The organization has transparency in its structure, workflow,",
      "and communication and a great team with global experience",
    ],
    imgSrc: "Trnasparency.png", // Replace with actual image URL
  },
  {
    title: "High Quality",
    description: [
      "We are committed to serve or customer requirements with our",
      " dedication to timelines, persistent flexibility standards."
    ],
    imgSrc: "HeighestQuality.png", // Replace with actual image URL
  },
  {
    title: "Cost Effective",
    description: [
      "We provide cost effective solutions that can be ",
      "tailor made to meet customer's requirement"
    ],
    imgSrc: "costeffective.png", // Replace with actual image URL
  },
  {
    title: "Scalability",
    description: [
      "We have robust scalability plans to meet",
      "increasing demands of the industry"
    ],
    imgSrc: "scalability.png", // Replace with actual image URL
  }
];



const AboutScreen = () => {

  return (
    <Box style={{overflow: "hidden"}} mt={"94px"}>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          backgroundImage: "url('/baoutusbg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start", // Move content to the left
          textAlign: "left", // Align text to the left
          pl: { xs: 2, md: 10 }, // Add left padding for spacing
          py: { xs: "20px", md: "40px" },
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight="bold" color="#007b8f">
            Vision
          </Typography>
          <List dense>
            <ListItem  alignItems="flex-start">
              <ListItemIcon>
                <CheckCircleIcon  sx={{ color: '#F39200' }}   />
              </ListItemIcon>
              <Typography variant="h6" color="black" maxWidth={{xs:"100%", md: '65%'}} >
                To achieve  <strong style={{color:'black'}}>leading industry presence</strong> with expertise and experience in the delivery of  <strong style={{color:'black'}}>clinical research services</strong> across the globe, through collaboration and networking with clients, developing professionals, and providing cutting-edge infrastructure.
              </Typography>
            </ListItem>
            <ListItem  alignItems="flex-start">
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: '#F39200' }} />
              </ListItemIcon>
              <Typography variant="h6" color="black" maxWidth={{xs:"100%", md: '65%'}}>
                We strive to be a  <strong style={{color:'black'}}>long-term trusted partner</strong> of major innovative healthcare organizations.
              </Typography>
              </ListItem>
          </List>
          <Typography variant="h3" fontWeight="bold" color="#F39200" sx={{ mt: 2 }}>
            Mission
          </Typography>
          <List dense>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: '#F39200' }} />
              </ListItemIcon>
              <Typography variant="h6" color="black" maxWidth={{xs:"100%", md: '65%'}}>
                To provide reliable <strong style={{color:'black'}}>clinical research services</strong> covering a  <strong style={{color:'black'}}>range of activities</strong> for pharmaceutical and biotech companies, through a team of committed experts.
              </Typography>
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: '#F39200' }} />
              </ListItemIcon>
              <Typography variant="h6" color="black" maxWidth={{xs:"100%", md: '65%'}}>
                To help our customers in creating a healthier and safer world through our  <strong style={{color:'black'}}>quality services</strong>.
              </Typography>    
              </ListItem>
          </List>
        </Grid>
      </Box>

      <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mt: 4, px:{ xs: 2, md: 10 } }}>
        {sections.map((section, index) => (
          <Grid container item spacing={4} key={index} alignItems="center">
            <Grid
              item
              xs={12}
              md={5}
              order={{ xs: 1, md: index % 2 === 0 ? 1 : 2 }}
              sx={{ display: "flex", justifyContent: "center"  }}
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
            <Grid item xs={12} md={7} order={{ xs: 2, md: index % 2 === 0 ? 2 : 1 }}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }} // Slide from right/left
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ amount: 0.2 }} // Keeps triggering on scroll
              >
                <Card elevation={3} sx={{ padding: "20px", minHeight: "100%", maxWidth: "500px", margin: "0 auto" }}>
                  <CardContent>
                    <Typography variant="h4" gutterBottom sx={{ color: "#007b8f", fontWeight: "bold" }}>
                      {section.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" sx={{ textAlign: "justify", lineHeight: "1.6", fontSize: '1.1rem' }}>
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
      <Doctors />

      {/* why orcimed lifesciences */}
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4, px: { xs: 2, md: 10 }, mb: 4 }} >
        <Grid item xs={12} textAlign="center">
          <Typography variant="h3" fontWeight="bold" color="#F39200">
            Why OrciMed Life Sciences?
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
                  <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                    <img src={item.imgSrc} alt={item.title} style={{ width: "80px", height: "80px" }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: "bold", color: " #F39200", textAlign: "center" }}>
                    {item.title}
                  </Typography>
                  <Box
                    component="ul"
                    sx={{
                      flex: 1,
                      px: 2,
                      listStyle: "none", // Remove bullet points
                      padding: 0, // Ensure no extra padding
                    }}
                  >
                    {item.description.map((point, i) => (
                      <Typography
                        component="li"
                        key={i}
                        sx={{ fontSize: "16px", lineHeight: "1.5", marginBottom: "8px" }}
                      >
                        {point}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default AboutScreen