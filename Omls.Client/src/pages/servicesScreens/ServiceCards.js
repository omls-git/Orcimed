import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  useMediaQuery,
  Slide,
  Box,
  Grid
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ChecklistIcon from "@mui/icons-material/Checklist";
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import { useNavigate } from "react-router-dom";
const size = 100;

const cardData = [
  {
    icon: <AddBusinessOutlinedIcon sx={{ fontSize: size, color: "#F39200" }} />,
    title: "Post Marketing Safety Operations",
    description:
    "Post marketing safety operations is an important practice of monitoring the safety of a pharmaceutical drug or a medical device.",
  },
  {
    icon: <ChecklistIcon sx={{ fontSize: size, color: "#F39200" }} />,
    title:  "Clinical Trial Safety Operations",
    description:
      "Clinical trial is a pivotal phase in the drug development process that provides safety information along with therapeutic exploration.",
  },
  {
    icon: <Diversity3Icon sx={{ fontSize: size, color: "#F39200" }} />,
    title: "Additional Pharmacovigilance",
    description:
    "Pharmacovigilance is a critical function in the life cycle of the drug focusing on patient safety and quality of life. While the principle of drug safety.",
  },
  {
    icon: <DocumentScannerIcon sx={{ fontSize: size, color: "#F39200" }} />,
    title: "Medical Writing",
    description:
      "Medical writing is a distinct skill to create well-structured documents to present the information clearly and concisely. It is well known fact.",
  },
  {
    icon: <BarChartIcon sx={{ fontSize: size, color: "#F39200" }} />,
    title: "Biostatistics and Clinical SAS",
    description:
      "Biostatistics is an important development and statistical method to get appropriate interpretation of clinical study results.",
  },
  {
    icon: <AssuredWorkloadIcon sx={{ fontSize: size, color: "#F39200" }} />,
    title: "Regulatory Affairs",
    description:
      "Health Authorities have meticulously devised complex rules and regulation for development of pharmaceutical products.",
  },
  {
    icon: <DataSaverOnIcon sx={{ fontSize: size, color: "#F39200" }} />,
    title: "Data Management",
    description:
      "Data Management is the central requirement for enabling subsequent processes with the intent of providing structured data consistently for analysis and reporting",
  },
  {
    icon: <AssessmentIcon sx={{ fontSize: size, color: "#F39200" }} />,
    title: "Health Economics and Outcomes Research",
    description:
      "A multidisciplinary approach in designing, executing and analyzing new interventions is required for generating relevant evidence.",
  },
];

export default function ServiceCards() {
  const navigate = useNavigate();
  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTab = useMediaQuery('(min-width: 425px) and (max-width: 768px)');

    const handleClick = (value) => {
      const linkTo = value?.replace(/\s+/g, '-').toLowerCase()
      navigate(`/${linkTo}`)
    }
  return (
    <Box sx={{ px: 2, py: 4}} bgcolor='black'>
      <Grid container justifyContent= {isTab ? "space-between" : "center"} >
        {cardData.map((card, index) => (
          <Slide direction="left" in timeout={500 + index * 200} key={index}
          style={{marginBottom: '30px', height: isMobile ? '100%': isTab ? '500px':'400px',

          }}>
              <Card
                sx={{
                  width: "100%",
                  maxWidth: {md: 400,lg:400,sm:300, xs: 300, xl:500},//isTab ? 300 : 500,
                  borderRadius: 4,
                  padding: 3,
                  backgroundColor: "white",
                  height: "100%",
                  marginX: {md:'2%',lg:'4%',sm:0, xs: 0},
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "center",
                  // border:"2px solid black"
                }}
              >
                <CardContent style={{textAlign:"left", height:'100%'}}
                >
                  <div>{card.icon}</div>
                  <Typography
                    variant="h5"
                    color="black"
                    fontWeight={"bold"}
                    gutterBottom
                    sx={{ mt: 2 }}
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="h6" color="textPrimary">
                    {card.description}
                  </Typography>                  
                </CardContent>
                <Button
                    variant="contained"
                    sx={{
                      width:"140px",
                      py:1,
                      backgroundColor: "#F39200",
                      ":hover": { backgroundColor: "#007b8f" },
                      borderRadius: 2
                    }}
                    onClick={()=>handleClick(card.title)}
                  >
                    Read More →
                  </Button>
              </Card>
          </Slide>
        ))}
      </Grid>
    </Box>
  );
}