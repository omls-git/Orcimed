import React, { useState } from 'react'
import '../styles/Header.css'
import Logo from '../images/ocmlsLogo.png'
import { Link } from 'react-router-dom'
import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, useMediaQuery } from '@mui/material'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // const theme = useTheme();
  const isMobile = useMediaQuery('(max-width: 425px)');
  const isTab = useMediaQuery('(min-width: 425px) and (max-width: 768px)');

  const QuickLinks = [{title:'Home', link: ''}, 
    {title:'About', link: 'about'},
    {title:'Services', link: 'services'},
    {title:'Careers', link: 'careers'},
    {title:'News & Blog', link: 'news-blog'}]

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <AppBar 
      position="fixed"
      className='appBar' 
      sx={{ bgcolor: 'white', color: 'black', boxShadow: 2, padding: 0 }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: isTab || isMobile ? "space-between" : "space-evenly", alignItems: 'center', padding: '0 2%px' }}>
        
        {/* Left Side: Logo */}
        <Box maxWidth={isTab || isMobile ? "40%" :"30%"} sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img 
            src={Logo} 
            alt='OMLS Logo' 
            style={!isMobile ? { width: '250px', margin: 0, padding: '10px' } : {padding: '2% 0%' }} 
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
                {QuickLinks.map((text) => (
                  <ListItem button key={text.title} component={Link} to={`/${text.link.toLowerCase()}`} onClick={handleDrawerToggle}>
                    <ListItemText primary={text.title.toUpperCase()} />
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
                {QuickLinks.map((text) => (
                  <ListItem button key={text.title} component={Link} to={`/${text.link.toLowerCase()}`} onClick={handleDrawerToggle}>
                    <ListItemText primary={text.title.toUpperCase()} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
            <Button id='contactBtn' component={Link} to='/contact'>CONTACT US</Button>
          </>
        ) : (
          <Box textAlign={'right'} py={{ xs: 2, md: 4 }} className='navItems'>
            {QuickLinks.map((text) => (
              <Link to={`/${text.link}`} key={text.title} style={{fontSize:'20px'}}>{text.title.toLocaleUpperCase()}</Link>                  
                ))}
            <Button id='contactBtn' component={Link} to='/contact' style={{fontSize:'20px'}}>CONTACT US</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header;
