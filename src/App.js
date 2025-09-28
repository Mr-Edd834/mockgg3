
import React from 'react';
import './App.css';

import Home from './Components/Home';
import { animate } from 'animejs';

import Profile from './Components/Profile';

import Orderhistory from './Components/Orderhistory';
import Privatechef from './Components/Privatechef';
import Gas from './Components/Gas';
import Shopping from './Components/Shopping';


import Checkout from './Components/Checkout';
import Favorites from './Components/Favorites';
import Sidebar from './Components/Sidebar';

import "./Components/Home.css";

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Myorder from './Components/Myorder';
import Delightmeals from './categories/Delightmeals';
import Fastfood from './categories/Fastfood';
import Snacks from './categories/Snacks';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="App">
      <Sidebar onToggle={setIsCollapsed} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orderhistory" element={<Orderhistory />} />
          <Route path="/myorder" element={<Myorder />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/delightmeals" element={<Delightmeals />} />
          <Route path="/fastfood" element={<Fastfood />} />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/gas" element={<Gas />} />
         <Route path="/privatechef" element={<Privatechef />} /> 
          <Route path="/shopping" element={<Shopping/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;


