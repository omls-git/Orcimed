import React, { useState } from 'react'
import '../styles/Header.css'
import Logo from '../images/ocmlsLogo.png'
import { Link } from 'react-router-dom'
import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width: 425px)')//useMediaQuery(theme.breakpoints.down('md')); // Check if screen is small
  const isTab = useMediaQuery('(min-width: 425px) and (max-width: 768px)')
  //useMediaQuery('(min-width: 768px) and (max-width: 1024px)')

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  return (
       <AppBar position="fixed" className='appBar' sx={{ bgcolor: 'white', color: 'black', boxShadow: 2, paddingX:isMobile ? 0: isTab ? 5 : 25}} >
        <Toolbar className='toolBar'>
          {/* <Typography > */}
            <img src={Logo} alt='OMLS Logo' id='logo'/>
          {/* </Typography> */}
      {isMobile ? (
          <>
            <IconButton color="error" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer
            anchor='top' open={mobileOpen} onClose={handleDrawerToggle}>
              <List sx={{ width: 200 }}>
                {["Home",'About', 'Services', "Careers", 'Contact'].map((text) => (
                  <ListItem button key={text} component={Link} to={`/${text.toLowerCase()}`} onClick={handleDrawerToggle}>
                    <ListItemText primary={text.toUpperCase()} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) :  isTab ? (
          <>
        <IconButton color="error" onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
        <Drawer
            anchor='top' open={mobileOpen} onClose={handleDrawerToggle}>
              <List sx={{ width: 200 }}>
                {["Home",'About', 'Services', "Careers"].map((text) => (
                  <ListItem button key={text} component={Link} to={`/${text.toLowerCase()}`} onClick={handleDrawerToggle}>
                    <ListItemText primary={text.toUpperCase()} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          <Button id='contactBtn' component={Link} to='/contact'>CONTACT US</Button>
        </>) :(
        <Box textAlign={'right'} py={{ xs: 2, md: 4 }} className='navItems'>
          <Link to="/" >HOME</Link>
          <Link to='/about'>ABOUT</Link>
          <Link to="/services" >SERVICES</Link>
          <Link to='/careers' >CAREERS</Link>
          <Link to='/news-blog'>NEW & BLOG</Link>
          <Button id='contactBtn' component={Link} to='/contact'>CONTACT US</Button>
        </Box>
        )}
        </Toolbar>
        </AppBar>
  )
}

export default Header