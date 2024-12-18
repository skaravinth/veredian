import React from 'react';
import {Box,Typography} from '@mui/material'
import Grid from '@mui/material/Grid2'
import{style} from './Copystyle'
const Copyright = () => {
  return (
<Grid sx={style.copyright}>
    <Typography sx={style.text1}>COPYRIGHT © Veridian 2024. All rights reserved. Any and all content included on this website or incorporated by reference is protected by international copyright laws.</Typography>
    <Typography sx={style.text2}>Term of use</Typography>
</Grid>
  );
}

export default Copyright;
