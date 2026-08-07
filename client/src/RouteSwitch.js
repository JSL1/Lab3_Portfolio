// Author: Jeremy St Pierre #301540695 for COMP229 

import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Admin from './Components/Admin';
import AddProject from './Components/Admin/AddProject';
import EditProject from './Components/Admin/EditProject';
import AddReference from './Components/Admin/AddReference';
import EditReference from './Components/Admin/EditReference';
import AddUser from './Components/Admin/AddUser';
import EditUser from './Components/Admin/EditUser';
import AddService from './Components/Admin/AddService';
import EditService from './Components/Admin/EditService';
import Login from './Components/Users/Login';
import Signup from './Components/Users/SignUp';

const RouteSwitch = () => {
    return (
        <Routes>
            {/* 
                This component uses Reacts BrowserRouter and Routes to render components to the page based on the URL path
            */}
            <Route path='/' element={<Home />} />
            <Route path='/AboutMe' element={<AboutMe />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Admin' element={<Admin />} />
            <Route path='/Admin/AddProject' element={<AddProject />} />
            <Route path='/Admin/EditProject' element ={<EditProject />} />
            <Route path='/Admin/AddReference' element={<AddReference />} />
            <Route path='/Admin/EditReference' element={<EditReference />} />
            <Route path='/Admin/AddUser' element={<AddUser />} />
            <Route path='/Admin/EditUser' element={<EditUser />} />
            <Route path='/Admin/AddService' element={<AddService />} />
            <Route path='/Admin/EditService' element={<EditService />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
        </Routes>
    );
}

export default RouteSwitch;