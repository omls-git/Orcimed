import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

import services from './ServicesFile.json'
import Pharmacovigilance from "./Pharmacovigilance";
import { useParams } from "react-router-dom";

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: -100 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

export default function SiteSupportServices() {
  //const location = useLocation();
  const { id } = useParams();
  const currentPath = id;
  // const currentPath = location.pathname.startsWith("/") && location.pathname !== "/"
  //   ? location.pathname.slice(1, location.pathname?.length)
  //   : location.pathname;
  console.log(currentPath, id)
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTab = useMediaQuery('(min-width: 425px) and (max-width: 768px)');
  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(${services[currentPath].image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 4,
          py: 8,
          color: "white",
          zIndex: -1,
          marginTop: isTab ? "15%" : { xs: "20%", sm: "6.5%", md: "15%", lg: "9%", xl: "5%" },
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(2px)",
            zIndex: -1,
          },
        }}
      >
        {/* Overlay Light Orange Box */}
        <Box
          sx={{
            backgroundColor: "rgba(255, 165, 0, 0.3)", // Light orange with transparency
            padding: { xs: 2, sm: 4 },
            borderRadius: 2,
            maxWidth: "80%",
            textAlign: "center",
            boxShadow: 3,
          }}
        >
          <Typography variant="h3" fontWeight="bold" mb={2}>
            {services[currentPath].title}
          </Typography>

          {services[currentPath].content.map((item) => (
            <Typography
              key={item}
              variant="h6"
              textAlign={isMobile ? "left" : "justify"}
              mb={1}
              dangerouslySetInnerHTML={{ __html: item }}
            />
              
          ))}
      </Box>
    </Box >

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 4,
          color: "white"
        }}>
        <Pharmacovigilance services={services[currentPath]} />
      </Box>

    </>
  );
}
