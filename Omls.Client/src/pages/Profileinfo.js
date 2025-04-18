import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useParams } from "react-router-dom";
import profileInfo from './Profiles.json';

const Profileinfo = () => {
  const theme = useTheme();
  const { id } = useParams(); 
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container maxWidth="lg" sx={{ py: 6}}>
      <Grid
        container
        spacing={10}
        direction={isMobile ? "column" : "row"}
      >
        <Grid item xs={12} sm={4} alignItems="flex-start">
          <Avatar
            alt={profileInfo[id].name}
            src={profileInfo[id].profilePic}
            sx={{ width: isMobile ? 200: 250, height:isMobile ? 200: 250, mx: isMobile ? "auto" : 0 }}
          />
        </Grid>

        <Grid item xs={12} sm={8}>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "#f9c332" }} textAlign={'left'}>
            {profileInfo[id].name}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold", mt: 1 }} textAlign={'left'}>
          {profileInfo[id].role}
          </Typography>

          <Box mt={2} textAlign={"left"}>
          {profileInfo[id].info.map((info) => (
            <Typography variant="body1" paragraph>{info}</Typography>
          ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profileinfo;
