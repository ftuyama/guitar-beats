import React from "react";
import "./Home.css";

import logo from "./logo.svg";
import BeatsManager from "./BeatsManager";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import Link from "@mui/material/Link";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function Home() {
  const navItems = [
    {
      title: "Home",
      link: '.',
    },
    {
      title: "Author",
      link: '/',
    },
    {
      title: "About",
      link: 'https://github.com/ftuyama/guitar-beats'
    },
  ];

  return (
    <div className="Home">
      <header className="Home-header">
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />

          <AppBar component="nav">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Guitar Beats <FontAwesomeIcon icon={icon({ name: "coffee" })} />
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button key={item['title']} sx={{ color: "#fff" }}>
                    <Link href={item['link']} sx={{ color: "#fff" }}>{item['title']}</Link>
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>

          <img src={logo} className="Home-logo" alt="logo" />
          <BeatsManager />
        </ThemeProvider>
      </header>
    </div>
  );
}

export default Home;
