import React from 'react';
import logo from './logo.svg';
import BeatsManager from './BeatsManager';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './Home.css';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

function Home() {
  return (

    <div className="Home">
      <header className="Home-header">
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <img src={logo} className="Home-logo" alt="logo" />
            <BeatsManager/>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default Home;
