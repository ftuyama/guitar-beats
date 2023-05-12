import React from 'react';
import logo from './logo.svg';
import BeatsManager from './components/BeatsManager';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <img src={logo} className="App-logo" alt="logo" />
            <BeatsManager/>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
