import react from 'react'
import { Grid, Box, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

const Footer = () => {  
    return (    
              <Box sx={{ flexGrow: 1, p: 3, backgroundColor: "#000", color: "#fff" }}>
              <Grid container spacing={2} justifyContent="center">
                {/* Email Section */}
                <Grid item xs={12} sm={6} md={3}>
                  <Box
                    sx={{
                      backgroundColor: "#777",
                      p: 3,
                      textAlign: "center",
                      borderRadius: 2,
                    }}
                  >
                    <EmailIcon sx={{ fontSize: 40 }} />
                    <Typography variant="h6">EMAIL</Typography>
                    <Typography variant="body1">bizdev@totalcro.com</Typography>
                  </Box>
                </Grid>
        
                {/* LinkedIn Section */}
                <Grid item xs={12} sm={6} md={3}>
                  <Box
                    sx={{
                      backgroundColor: "red",
                      p: 3,
                      textAlign: "center",
                      borderRadius: 2,
                    }}
                  >
                    <LinkedInIcon sx={{ fontSize: 40 }} />
                    <Typography variant="h6">LinkedIn</Typography>
                  </Box>
                </Grid>
        
                {/* Quick Links */}
                <Grid item xs={12} sm={12} md={6}>
                  <Box
                    sx={{
                      backgroundColor: "#222",
                      p: 3,
                      textAlign: "center",
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="h6">QUICK LINKS</Typography>
                    <Typography variant="body1">HOME | DTEACH | TEAM | INSIGHTS</Typography>
                  </Box>
                </Grid>
        
                {/* Contact Us Button */}
                <Grid item xs={12}>
                  <Box textAlign="center">
                    <Button variant="contained" color="error">
                      CONTACT US
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>

                )
            }

  export default Footer          