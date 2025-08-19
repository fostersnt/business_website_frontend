import React, { useEffect, useState } from "react";
import "../assets/styles/Home.css";
import { Link, Outlet } from "react-router-dom";

import { getProducts } from "../api/Products";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About_Us from "../components/About_Us";
import Contact_Us from "../components/Contact_Us";
import Footer from "../components/Footer";
import CubeLoader from "../components/animations/CubeLoader";

export const Home = () => {

  return (
    <>
      <Hero/>
      <Services/>
      <About_Us/>
      <Contact_Us/>
      <Footer/>
      {/* <CubeLoader/> */}
    </>
  );
};

export default Home;
