import React from "react";
import { Container, Stack, Box, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const ContactList = [
    {icon : <MailOutlineIcon sx={{p:2,bgcolor:"#222", borderRadius:"50%", color:"#fff"}} fontSize="large" />, title : "EMAIL", content: "contact@orcimedlifesciences.com",bgc: "#454644",hbgc : "#f5f5f5", color: "#fff",hoverC:"#c00", link:'contact@orcimedlifesciences.com'},
    {icon : <LinkedInIcon sx={{p:2,bgcolor:"black", borderRadius:"50%",color:"#fff"}} fontSize="large" />, title : "", content: "LinkedIn",bgc: "#bd1229",hbgc : "#f5f5f5", color: "#fff",hoverC:"#bd1229", link :'https://www.linkedin.com/company/orcimed-life-sciences'},
    {icon : "", title : "", content: "The Only CRO with 100% Recruitment Targets Met for All Populations",bgc: "black",hbgc : "black", color: "#fff",hoverC:"#fff",link:''},
    {icon : <DescriptionIcon sx={{p:2,bgcolor:"#bd1229", borderRadius:"50%", color:"#fff"}}  fontSize="large" />, title : "", content: "News & Blog",bgc: "#454644",hbgc : "#f5f5f5", color: "#fff",hoverC:"#bd1229", link:'news-blog'}
  ]
  const navigate = useNavigate();
  const QuickLinks = [{title:'HOME', link: ''}, 
    {title:'ABOUT US', link: 'about'},
    {title:'SERVICES', link: 'services'},
    {title:'TEAM', link: 'team'},
    {title:'MISSION & VISION', link: 'mission-vision'},
    {title:'WHY ORCIMED LIFE SCIENCES', link: 'why-orcimed'},
    {title:'CAREERS', link: 'careers'},
    {title:'CONTACT US', link: 'contact'}]
    const handleClick = (value) => {
      if(value.title === "EMAIL"){
        window.location.href = `mailto:${value.link}`
      }
      if(value.content === "LinkedIn"){
        window.location.href = value.link
      }
     navigate(`/${value.link}`)
    }
 
  return (
    <Box sx={{ backgroundColor: "#222", color: "white", pt: 4, height:"84vh", }}>
      <Container sx={{textAlign:'left', mx:30, height: "92%",}}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", py:1 }} align="left">
          Connect With Us
        </Typography>
        <Stack spacing={2} direction={{ xs: "column", md: "row" }} alignItems="center">
          {/* Left Section - Styled Box */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              borderTopLeftRadius: "100px",
              borderBottomRightRadius: "100px",
              overflow: "hidden",
              width: { xs: "100%", md: "70%" },
              maxWidth: 650,
              height:"500px" ,
              boxShadow: 3,
            }}
          >{ContactList.map((item) => {
            return(
            <Box   
            key={item.title}
            width={"300px"}
              sx={{ bgcolor: item.bgc,
              textAlign: "center", p:2,
              alignContent:'center',    
              transition: "background-color 0.3s",
                '&:hover': { bgcolor: item.hbgc,color:item.hoverC }}}
              color={item.color}
               >
               {item.icon}
               <Typography variant="subtitle2" my={2} fontWeight="bold" >
                 {item.title}
               </Typography>
               <Typography variant="body1" fontWeight="bold" onClick={() => handleClick(item) }>
                 {item.content}
               </Typography>
            </Box>)
          })}
          </Box>
          {/* Right Section - Quick Links */}
          <Box sx={{px:6}}>
            <Typography variant="h5" fontWeight="bold" >
              Quick Links
            </Typography>
            {QuickLinks.map((link) => (
              <Typography key={link.title} variant="button" sx={{ my: 2, display:'block', cursor: 'pointer'}} fontWeight="bold"  
              onClick={() => navigate(link.link) }>
                {link.title}
              </Typography>
              
            ))}
          </Box>
        </Stack>
      </Container>
      <Box sx={{px:30, textAlign: "left", alignContent:"center",height: "8%", backgroundColor:"#454644"}} >
          <Typography variant="body1" color="#fff" fontWeight="bold">
          ©2023. OrciMed Life Sciences. All Rights Reserved.
          </Typography>
      </Box>    
    </Box>
  );
};

export default Footer;
