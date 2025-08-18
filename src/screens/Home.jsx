import React, { useEffect, useState } from "react";
import "../assets/styles/Home.css";
import { Link, Outlet } from "react-router-dom";

// import websiteImage from "../assets/images/website.webp";
// import mobileApp from "../assets/images/mobile_app.webp";
// import cloudSolutions from "../assets/images/cloud_solutions.webp";
// import ai from "../assets/images/ai.webp";

import { getProducts } from "../api/Products";
import Hero from "../components/Hero";
import Services from "../components/Services";

export const Home = () => {

  return (
    <>
      <Hero/>
      <Services/>
    </>
  );
};

export default Home;
