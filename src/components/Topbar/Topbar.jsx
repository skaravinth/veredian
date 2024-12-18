import React, { useState, useEffect } from 'react';
import Logo from '../../assets/logo';
import { Grid, Box, Button, SwipeableDrawer, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';import MenuIcon from '@mui/icons-material/Menu';
import { Topbarstyles } from './Topbarstyle';
import useTabStore from '../../Store/tabstore';
import { useNavigate, useLocation } from 'react-router-dom';
import Close from '../../assets/close'
import Smalllogo from '../../assets/Mask group (3).svg'

const Topbar = ({ scrollToSection, refs }) => {
  const { activeTab, setActiveTab } = useTabStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const isMobiles = window.innerWidth <= 600;
  const tabs = [
    { label: "Home", route: "/home", ref: refs.managementRef },
    { label: "About Us", route: "/aboutus", ref: refs.aboutRef },
    { label: "Our Team", route: "/ourteam", ref: refs.ourteamRef },
    { label: "Investment Approach", route: "/investmentapproach", ref: refs.investmentapproachRef },
    { label: "Contact Us", route: "/contactus", ref: refs.contactRef },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const handleTabClick = (index) => {
    setActiveTab(index);
    if (location.pathname === '/home') {
      scrollToSection(tabs[index].ref);
    } else {
      navigate('/home');
      setTimeout(() => scrollToSection(tabs[index].ref), 300);
    }
    setDrawerOpen(false); // Close the drawer
  };

  const toggleDrawer = (open) => (event) => {
    if (event?.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };
  const drawerList = () => (
    <Box
    sx={{
      width: "100%",
      position: "static",
      top: 0,
      backgroundColor: "#fff",
      zIndex: 1500,
    }}
      role=""
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}

    >
      <Box sx={Topbarstyles.grid}>
        <Box sx={Topbarstyles.smallimg}> <Logo style={{height:'64px',width:'64px'}}/></Box>
       <Box  sx={Topbarstyles.close}>
        <Close/>
        </Box>
      </Box>
      <Divider />
      <List>
        {tabs.map((tab, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => handleTabClick(index)}>
              <ListItemText primary={tab.label} sx={Topbarstyles.taber}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  

  return (
    <Grid container sx={Topbarstyles.topbar}>
      <Grid item sx={Topbarstyles.logo}>
        <Logo style={{height:isMobiles?'64px':'100%',width:isMobiles?'64px':'100%'}}/>
      </Grid>
      {isMobile ? (
        <>
        {/* <span style={{color:'red'}}>Hii</span> */}
          <Button onClick={toggleDrawer(true)} sx={Topbarstyles.listbutton}>
            <MenuIcon />
          </Button>
          <SwipeableDrawer
            anchor="top"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {drawerList()}
          </SwipeableDrawer>
        </>
      ): (
        <Box sx={Topbarstyles.tabs}>
          {tabs.map((tab, index) => (
            <Box
              key={index}
              onClick={() => handleTabClick(index)}
              sx={{
                ...Topbarstyles.tab,
                ...(activeTab === index ? Topbarstyles.activeTabButton : {}),
              }}
            >
              {tab.label}
            </Box>
          ))}
        </Box>
      )}
    </Grid>
  );
};

export default Topbar;
