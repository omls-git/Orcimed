import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled, useMediaQuery } from "@mui/system";

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "1.8rem",
  fontWeight: 700,
  color: "#f57c00",
  textAlign: "center",
  marginBottom: theme.spacing(3),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: "0.95rem",
  marginBottom: theme.spacing(1.5),
  color: "#444",
  lineHeight: 1.6,
}));

// const clinicalTrialSafetyData = {
//   title: "Pharmacovigilance",
//   Pharmacovigilance: [
//     {
//       title: "Medical information call center setup",
//       description: [
//         "Medical information call centers play a key role in the post marketing surveillance...",
//         "The expert team would be responsible to provide therapeutic details...",
//         "This is a round the clock set up to address the queries of health care professionals..."
//       ]
//     },
//     {
//       title: "End to End case processing",
//       description: ["Content for End to End case processing goes here."]
//     },
//     {
//       title: "Aggregate reports",
//       description: ["Content for Aggregate reports goes here."]
//     },
//     {
//       title: "Risk management Plans",
//       description: ["Content for Risk management Plans goes here."]
//     },
//     {
//       title: "Risk Evaluation and Mitigation strategies",
//       description: ["Content for Risk Evaluation and Mitigation strategies goes here."]
//     }
//   ]
// };

const Pharmacovigilance = ({services}) => {
  const Pharmacovigilance = services.Pharmacovigilance;
  const isTab = useMediaQuery('(min-width: 425px) and (max-width: 768px)');
  const [expanded, setExpanded] = useState(null); // index of the currently expanded accordion

  const handleChange = (index) => (event, isExpanded) => {
    setExpanded(isExpanded ? index : false);
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Title>Pharmacovigilance</Title>
      <Grid container spacing={4} justifyContent="center">
         <Grid item xs={12} md={6}>
          <Box sx={{ maxWidth: isTab ? 400 : 700, mx: "auto"}}>
            {Pharmacovigilance.map((item, idx) => (
              <Accordion
                key={idx}
                expanded={expanded === idx}
                onChange={handleChange(idx)}
                sx={{
                  backgroundColor: "rgb(237, 246, 253)", // light blue background
                  boxShadow: "none", // optional: remove shadow
                  mb: 1, // spacing between accordions
                  borderRadius: 1,     
                  // width:"100px"             
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <SectionTitle>{item.title}</SectionTitle>
                </AccordionSummary>
                <AccordionDetails sx={{
                  backgroundColor: "#fff", 
                }}>
                <Paragraph textAlign="justify" >{item.description}</Paragraph>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src='./Clinical-Trial-Safety-OperationsPV.jpg'
            alt="Illustration"
            sx={{
              width: "100%",
              maxWidth: 400,
              mx: "auto",
              display: "block",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pharmacovigilance;
