import React from 'react';

import NavAppBar from './components/NavLinkBar';
import Home from './components/Home';
import ButtonPage from './components/ButtonPage'
import Footer from './components/Footer';
import Stats from "./components/Stats"

import './App.css';

function App() {
  return (
      <>
      <NavAppBar />
      <Home />
      <Stats/>
      <ButtonPage />
      <Footer/>
      </>
  );
}

export default App;
