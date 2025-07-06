import { LinkedIn } from '@mui/icons-material'
import { Avatar, Box, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const teamMembers = [
  {
    name: "Mr. Suman Maarisetty",
    role: "Chief Executive Officer",
    image: "/suman.png",
    linkedin: "https://www.linkedin.com/in/suman-m-omls/",
  },
  {
    name: "Dave Agrella",
    role: "Chief Revenue Officer",
    image: "/Dave.png",
    linkedin: "https://www.linkedin.com/in/davidagrella/",
  },
  {
    name: "Dr. Raza Mohammad",
    role: "Chief Scientific Officer",
    image: "/Raza.png",
    linkedin: "https://www.linkedin.com/in/mohammed-raza-432b9376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Rob Petrie",
    role: "Chief Innovation Officer",
    image: "/rob.png",
    linkedin: "https://www.linkedin.com/in/robert-p-34540146/",
  },
  {
    name: "Dr. Someshwar Komuravelly",
    role: "Chief Development Officer",
    image: "/someshawar.png",
    linkedin: "https://www.linkedin.com/in/dr-someshwar-komuravelly-a20ab71b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Swetha Tatineni",
    role: "Director - Support Functions",
    image: "/swetha.png",
    linkedin: "https://www.linkedin.com/in/swetha-tatineni-081870241/",
  },
  {
    name: "Savita Ravindra Gupta",
    role: "Associate Director - QA",
    image: "/savitha.png",
    linkedin: "https://www.linkedin.com/in/savita-vaishya-gupta-1953419b/",
  },

];
const Doctors = () => {
  const navigate = useNavigate()
  const handlenavigation =(doctor) => {
    navigate(`/doctor/${doctor.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`)
  }
  return (
    <Grid container spacing={3} justifyContent="center" sx={{ marginTop: 5 }}>
        <Grid item xs={12} textAlign="center">
          <Typography variant="h3" fontWeight="bold" color="#F39200">
          Our Leadership
          </Typography>
        </Grid>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ paddingBottom: "20px" }}>
            <Box
              sx={{
                textAlign: "center",
                borderRadius: 2,
                padding: "10px",
                minHeight: "280px", // Set a min-height to avoid shifting
                transition: "0.3s",
              }}
              onClick={() => {handlenavigation(member)}}
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
  )
}

export default Doctors