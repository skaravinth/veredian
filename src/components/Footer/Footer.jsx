import React from 'react';
import {Box,Grid2,Typography} from '@mui/material'
import {styless} from './Footerstyle'
import Arrow from '../../assets/arrow'
import {lighttheme} from '../../Theme/Theme'
import Right from '../../assets/RightBox'
import Left from '../../assets/LeftBox'
const Footer = () => {
    const styles=styless(lighttheme)
  return (
    <Grid2 sx={styles.layout}>
         <Grid2 sx={styles.Right}>
            <Left />
        </Grid2>
        <Grid2 sx={styles.Left}>
            <Right />
        </Grid2>
        <Grid2 sx={styles.conatctus}>
      <Typography sx={styles.contact}>
        Contact Us
      </Typography>
      </Grid2>
      <Typography sx={styles.text}>
      Have questions or need more information? Reach out to us at. 
      </Typography>
      <Box sx={styles.mailto}>
    <Box sx={styles.twothings}>
        <Box sx={styles.mail}>
           MAIL TO
        </Box>
        <Box sx={styles.git}> info@veridian.com</Box>
        
    
        </Box>
        <Grid2 sx={styles.arrow}><Arrow /></Grid2>
        
      </Box>
      <Typography sx={styles.help}>
      'We're help to help!'
      </Typography>
    </Grid2>
  );
}

export default Footer;
