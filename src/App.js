import React from 'react';

import NavAppBar from './components/NavLinkBar';
import Home from './components/Home';
import ButtonPage from './components/ButtonPage'
import Footer from './components/Footer';


import './App.css';

function App() {
  return (
      <>
      <NavAppBar />
      <Home />
      <ButtonPage />
      <Footer/>
      </>
  );
}

export default App;
