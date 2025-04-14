// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar"
import Summa from "./components/Summa"
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
      <Routes>
        {/* Layout route */}
        {/* <Route path="/" element={<Sidebar/>}> */}
        <Route path="/" element={<Summa/>}>
          {/* Nested routes rendered in <Outlet /> */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
  );
};

export default App;
