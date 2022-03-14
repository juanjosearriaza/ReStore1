import { ThemeProvider } from '@emotion/react';
import { Container, createTheme, CssBaseline } from '@mui/material';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import About from '../../features/about/About';
import Catalog from '../../features/catalog/Catalog';
import ProductDetails from '../../features/catalog/ProductDetails';
import Contact from '../../features/contact/Contact';
import Home from '../../features/home/Home';

import Header from './Header';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? "dark" : "light"
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: palleteType === "light" ? "#eaeaea" : "#121212"
      }
    },
  });

  function handleThemeChange() {
    setDarkMode(!darkMode)
  }
  
  return (
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        <Route exact path="/" component={Home}/>
        <Route exact path="/catalog" component={Catalog}/>
        <Route path="/catalog/:id" component={ProductDetails}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
      </Container>      
  </ThemeProvider>
  );
}

export default App;
