import React from 'react';
import { Button,Typography} from '@mui/material';
import Grid from '@mui/material/Grid2'
import Down from '../../assets/Downarrow'
import {managements} from './Managementstyle'
import { useTheme ,Box} from '@mui/material';
import { lighttheme } from '../../Theme/Theme';
import Rectangleright from '../../assets/Rectangleright'
import Rectangleleft from '../../assets/Rectangleleft'
const Management = () => {
  // const theme = useTheme();
  const management=managements(lighttheme);
  return (
    <Grid container sx={management.maingrid} xs={12} sm={6} md={4}>
      <Grid item xs={12} sm={6} md={4}>
        <Grid sx={management.right}>
          <Rectangleright sx={management.rightimg} />
        </Grid>
        <Grid sx={management.left}>
          <Rectangleleft />
        </Grid>
      </Grid>

      <Grid item xs={12} sm={6} md={8} sx={management.maininvest}>
        <Grid sx={management.invest}>
          <Typography sx={management.manageinvest}>
            INVESTMENT MANAGEMENT
          </Typography>
        </Grid>
        <Grid sx={management.stratergygrid}>
          <Typography sx={management.stratergy}>
            Empowering Investments with Expertise and Strategy
          </Typography>
        </Grid>
        <Box sx={management.knowmore}>
          Know more <Down />
        </Box>
      </Grid>
    </Grid>
  )
}

export default Management;