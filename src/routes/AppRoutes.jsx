import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import AboutUs from '../pages/AboutUs/AboutUs';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/about_us" element={<AboutUs/>}></Route>
      </Routes>

    </Router>
  );
};

export default AppRoutes;
