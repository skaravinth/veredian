import React, { useRef } from 'react';
import Topbar from '../components/Topbar/Topbar';
import Management from '../components/Investmanagement/Management';
import Grid from '@mui/material/Grid2';
import { Homess } from './Homestyles';
import About from '../components/About/About';
import { lighttheme } from '../Theme/Theme';
import Holistic from '../components/Holistic/Holistic';
import Footer from '../components/Footer/Footer';
import Copy from '../components/Copyright/Copyright';
import Swipper from '../components/Swipper/Swipper';

const Home = () => {
  const Homes = Homess(lighttheme);

  // Refs for each section
  const managementRef = useRef(null);
  const aboutRef = useRef(null);
  const ourteamRef = useRef(null);
  const contactRef = useRef(null);
  const investmentapproachRef=useRef(null);
  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Grid>
      <Grid container xs={12} md={10}>
        <Topbar scrollToSection={scrollToSection} refs={{ managementRef, aboutRef, investmentapproachRef, contactRef,ourteamRef }} sx={Homes.topbar} />
      </Grid>
      <Grid sx={Homes.toco}>
        <Grid item xs={12} ref={managementRef}>
          <Management />
        </Grid>
        <Grid container sx={Homes.layout}>
          <Grid item sx={Homes.about}>
            <Grid ref={aboutRef}>
            <About  />
            </Grid>
            <Grid  ref={ourteamRef}>
            <Swipper/>
            </Grid>
            <Grid ref={investmentapproachRef} >
            <Holistic />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={Homes.Footer} ref={contactRef}>
          <Footer />
        </Grid>
      </Grid>
      <Copy />
    </Grid>
  );
};

export default Home;
