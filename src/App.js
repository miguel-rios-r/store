import React from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Items from './components/Items';
import PromoBanner from './components/PromoBanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <PromoBanner></PromoBanner>
      <Items></Items>
      <Items></Items>
      <Items></Items>
      <Footer></Footer>
    </div>
  );
}

export default App;
