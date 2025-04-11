import React, { useRef, useState } from 'react'
import '../styles/Header.css'
import Logo from '../images/ocmlsLogo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Toolbar, useMediaQuery } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const hoverTimeout = useRef(null);  
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 425px)');
  const isTab = useMediaQuery('(min-width: 425px) and (max-width: 768px)');

  const QuickLinks = [{title:'Home', link: ''}, 
    {title:'About', link: 'about'},
    {title:'Services', link: 'services', services: ["Post Marketing Safety Operations","Clinical Trial Safety Operations","Additional Pharmacovigilance","Medical Writing","Biostatistics and Clinical SAS","Regulatory Affairs","Data Management","Health Economics and Outcomes Research"]},
    {title:'Careers', link: 'careers'},
    {title:'News & Blog', link: 'news-blog'}]

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleHoverOpen = (event) => {
    clearTimeout(hoverTimeout.current);
    setAnchorEl(event.currentTarget);
  };

  const handleHoverClose = () => {
    hoverTimeout.current = setTimeout(() => {
      setAnchorEl(null);
    }, 200);
  };

  const menuOpen = Boolean(anchorEl);

  const handleServiceClick =(service)=>{
    setAnchorEl(null);
    const link = service?.replace(/\s+/g, '-').toLowerCase()
    setTimeout(() => navigate(`/${link}`), 50);
  }

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
            style={!isMobile ? { width: '250px', margin: 0, padding: '10px' } : {padding: '8px 0' }} 
            id='logo'
          />
        </Box>

        {/* Right Side: Navigation */}
        {isMobile ? (
          <>
            <IconButton color="warning" onClick={handleDrawerToggle}>
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
          <Box>
            <IconButton color="warning" onClick={handleDrawerToggle} sx={{marginRight:"40px"}}>
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
          </Box>
        ) : (
          <Box textAlign={'left'} py='10px' className='navItems'>
            {QuickLinks.map((text) => {
              const isServices = text.title === 'Services';
              const isActive = location.pathname === `/${text.link}`;
                if(isServices){
                  const searchTerm = location.pathname;
                // Normalize function: lowercase and replace spaces with hyphens
                const normalize = str => `/${str.toLowerCase().replace(/\s+/g, '-')}`;
                const hasMatch = text.services?.some(service => normalize(service) === searchTerm);
                  return (
                    <Box key={text.title}>
                        <Box
                          onClick={() => navigate('/services')}
                          onMouseEnter={handleHoverOpen}
                          onMouseLeave={handleHoverClose}
                          sx={{ display: 'inline-block' }}
                        >
                          <Button
                            component={Link}
                            endIcon={menuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                            style={{ color: menuOpen || isActive || hasMatch? '#F39200' : 'black', cursor:"pointer" }}
                          >
                            SERVICES
                          </Button>
                          <Menu
                            anchorEl={anchorEl}
                            open={menuOpen}
                            onClose={() => setAnchorEl(null)}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            slotProps={{
                              paper: {
                                onMouseEnter: () => clearTimeout(hoverTimeout.current),
                                onMouseLeave: handleHoverClose,
                                sx: { mt: 1, borderRadius: 2, px: 1, py: 1, boxShadow: 3 },
                              }
                            }}
                          >
                            {
                            text.services && text.services?.map((service) => {
                              const isServiceActive = location.pathname === `/${service?.replace(/\s+/g, '-').toLowerCase()}`;
                              return(
                                <MenuItem key={service} selected={isServiceActive}
                                 onClick={() => handleServiceClick(service)}>
                              {service}
                            </MenuItem>
                              )
                            })
                          }
                          </Menu>
                        </Box>
                      </Box>
                  )
                }
                return (<Button  style={{ color: isActive ?'#F39200' : "black", cursor:"pointer" }} key={text.title} component={Link} to={`/${text.link}`}>{text.title}</Button>)
            })
            }
            <Button id='contactBtn' component={Link} to='/contact' style={{fontSize:'20px', width:"175px"}}>CONTACT US</Button>
            </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header;
