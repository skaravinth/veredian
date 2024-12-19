import React from 'react';
import {Box,Grid2,Typography} from '@mui/material'
import {styless} from './Footerstyle'
import Arrow from '../../assets/arrow'
import {lighttheme} from '../../Theme/Theme'
import Right from '../../assets/RightBox'
import Left from '../../assets/LeftBox'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
      <Box sx={styles.ContactAddress}>
              <Box sx={styles.EmailTo}>
                <Box sx={styles.ContactUsYellowBox}>MAIL TO</Box>
                <Box sx={styles.ContactUsEmail}>info@veridian.com</Box>
              </Box>
              <Box sx={styles.ContactUsIcon}><ArrowForwardIcon/></Box>
            </Box>
      <Typography sx={styles.help}>
      'We're help to help!'
      </Typography>
    </Grid2>
  );
}

export default Footer;
