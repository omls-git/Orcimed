import React, { useRef, useState } from 'react'
import '../styles/Header.css'
import Logo from '../images/ocmlsLogo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Box, Button, Collapse, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Paper, Toolbar, Typography, useMediaQuery } from '@mui/material'
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
    // {title:'News & Blog', link: 'news-blog'}
  ]

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
        {isMobile || isTab ? (
          <Box>
            <IconButton color="warning" onClick={handleDrawerToggle} sx={{marginRight: isMobile ? 0 : "40px"}}>
              <MenuIcon />
            </IconButton>
            <div
              style={{
                position: "absolute",
                top: isMobile ? 60 : 80, // Adjust based on menu icon height
                left: "50%",
                transform: "translateX(-50%)",
                width: "90%",
                zIndex: 1300,
              }}>
          <Collapse in={mobileOpen} mountOnEnter unmountOnExit
          >
            <Paper
              elevation={4}
              sx={{
                overflow: "hidden",
                borderTop: "3px solid #007b8f",
                py:"15px",
              }}
            >
              <List disablePadding>
                {QuickLinks.map((item) => (                  
                  <ListItem                  
                    key={item.title}
                    button
                    component={Link}
                    to={`/${item.link.toLowerCase()}`}
                    onClick={handleDrawerToggle}
                    sx={{
                      width:"90%",
                      mx: {xs:2, sm:4},
                      color:location.pathname === `/${item.link}`? "#fff" : "black",
                      borderBottom: item.title === "Careers" ? "" : "1px solid #eee",
                      backgroundColor: location.pathname === `/${item.link}`? "#007b8f" : "#fff",
                      "&:hover": {
                        color: "#F39200",
                      },
                    }}
                  >
                    <ListItemText
                      primary={
                      <Typography
                        fontWeight="bold"
                        textTransform="uppercase"
                      >
                        {item.title}
                      </Typography>}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Collapse >
          </div>
           {isMobile ? null : <Button id='contactBtn' component={Link} to='/contact'>CONTACT US</Button>}
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
                          sx={{ display: 'inline-block',position: 'relative' }}
                          
                        >
                          <Button
                          onMouseEnter={handleHoverOpen}
                          onMouseLeave={handleHoverClose}
                            component={Link}
                            endIcon={menuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                            style={{ color: menuOpen || isActive || hasMatch? '#F39200' : 'black', 
                              cursor:"pointer",whiteSpace: 'nowrap',marginRight:"30px" }}
                          >
                            SERVICES
                          </Button>
                          <Menu
                            anchorEl={anchorEl}
                            open={menuOpen}
                            onClose={() => setAnchorEl(null)}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            disableAutoFocusItem
                            disableEnforceFocus
                            slotProps={{
                              paper: {
                                onMouseEnter: () => clearTimeout(hoverTimeout.current),
                                onMouseLeave: handleHoverClose,
                                sx: { mt: 1, borderRadius: 3, px: 1, py: 1, boxShadow: 3,  width: 'auto',
                                  maxWidth: 'unset',
                                  minWidth: 'unset',pointerEvents: 'fill',},
                              }
                            }}                            
                            sx={{pointerEvents: 'none',}}
                          >
                            {
                            text.services && text.services?.map((service) => {
                              const isServiceActive = location.pathname === `/${service?.replace(/\s+/g, '-').toLowerCase()}`;
                              return(
                                <MenuItem key={service} selected={isServiceActive}
                                sx={{ whiteSpace: 'normal' }}
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
                return (<Button  style={{ color: isActive ?'#F39200' : "black", cursor:"pointer",marginRight:"35px" }} key={text.title} component={Link} to={`/${text.link}`}>{text.title}</Button>)
            })
            }
            <Button id='contactBtn' component={Link} to='/contact' style={{fontSize:'20px', width:"175px", textAlign:"center"}}>CONTACT US</Button>
            </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header;
