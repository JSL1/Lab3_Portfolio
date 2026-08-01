// Author: Jeremy St Pierre #301540695 for COMP229 
import React, { Component } from 'react';
import logo from './logo.svg';
import RouteSwitch from './RouteSwitch';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import './Portfolio.css';

function App() {
  return (
    <div className="App">
    {/*
        The structure of this app is as follows:
        The Header and the footer components are stuck to the top and bottom of the page
        The page's content is directed by React's BrowserRouter:
        The url determines which of component is rendered to the page by the router, this is contained in the RouteSwitch component, see RouteSWitch.js for the structure of this.
    */}
      <BrowserRouter>
        <Header />
          <RouteSwitch />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
