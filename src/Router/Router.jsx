import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Home from '../pages/Home'
import '../font.css'
import { Grid2} from '@mui/material';
import theme from '../Theme/Theme';
import '../index.css'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
const Router = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<Home />} />
        <Route path="/ourteam" element={<Home />} />
        <Route path="/investmentapproach" element={<Home />} />
        <Route path="/contactus" element={<Home />} />
      </Routes>
    </BrowserRouter>

    </ThemeProvider>
  );
}

export default Router;
