import React, { useState } from 'react'
import '../styles/Header.css'
import Logo from '../images/ocmlsLogo.png'
import { Link } from 'react-router-dom'
import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width: 425px)');
  const isTab = useMediaQuery('(min-width: 425px) and (max-width: 768px)');

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <AppBar 
      position="fixed" 
      className='appBar' 
      sx={{ bgcolor: 'white', color: 'black', boxShadow: 2, padding: 0 }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
        
        {/* Left Side: Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img 
            src={Logo} 
            alt='OMLS Logo' 
            style={{ width: '250px', margin: 0, padding: '10px' }} 
            id='logo'
          />
        </Box>

        {/* Right Side: Navigation */}
        {isMobile ? (
          <>
            <IconButton color="error" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor='top' open={mobileOpen} onClose={handleDrawerToggle}>
              <List sx={{ width: 200 }}>
                {["Home", "About", "Services", "Careers", "Contact"].map((text) => (
                  <ListItem button key={text} component={Link} to={`/${text.toLowerCase()}`} onClick={handleDrawerToggle}>
                    <ListItemText primary={text.toUpperCase()} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : isTab ? (
          <>
            <IconButton color="error" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor='top' open={mobileOpen} onClose={handleDrawerToggle}>
              <List sx={{ width: 200 }}>
                {["Home", "About", "Services", "Careers"].map((text) => (
                  <ListItem button key={text} component={Link} to={`/${text.toLowerCase()}`} onClick={handleDrawerToggle}>
                    <ListItemText primary={text.toUpperCase()} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
            <Button id='contactBtn' component={Link} to='/contact'>CONTACT US</Button>
          </>
        ) : (
          <Box textAlign={'right'} py={{ xs: 2, md: 4 }} className='navItems'>
            <Link to="/" style={{fontSize:'20px'}}>HOME</Link>
            <Link to='/about'style={{fontSize:'20px'}}>ABOUT</Link>
            <Link to="/services"style={{fontSize:'20px'}}>SERVICES</Link>
            <Link to='/careers'style={{fontSize:'20px'}}>CAREERS</Link>
            <Link to='/news-blog'style={{fontSize:'20px'}}>NEWS & BLOG</Link>
            <Button id='contactBtn' component={Link} to='/contact' style={{fontSize:'20px'}}>CONTACT US</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header;
