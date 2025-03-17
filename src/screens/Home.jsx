import React from "react";
import "../assets/styles/Home.css";
import { Link, Outlet } from "react-router-dom";

import websiteImage from '../assets/images/website.webp';
import mobileApp from '../assets/images/mobile_app.webp';
import cloudSolutions from '../assets/images/cloud_solutions.webp';
import ai from '../assets/images/ai.webp';

export const Layout = () => {
  return (
    <div>
      <section id="services" class="services">
        <h2>Our Services</h2>
        <div class="service-grid">
          <div class="service">
            <img src={websiteImage} alt="Web Development" />
            <h3>Web Development</h3>
            <p>
              Responsive and scalable web applications tailored to your needs.
            </p>
          </div>
          <div class="service">
            <img src={mobileApp} alt="Mobile App Development" />
            <h3>Mobile App Development</h3>
            <p>Native and cross-platform mobile apps for iOS and Android.</p>
          </div>
          <div class="service">
            <img src={cloudSolutions} alt="Cloud Solutions" />
            <h3>Cloud Solutions</h3>
            <p>Secure and efficient cloud-based infrastructure and services.</p>
          </div>
          <div class="service">
            <img src={ai} />
            <h3>AI & Machine Learning</h3>
            <p>
              Intelligent solutions using cutting-edge AI and machine learning
              techniques.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" class="projects">
        <h2>Our Recent Projects</h2>
        <div class="project-grid">
          <div class="project">
            <img src={"images/project1.jpg"} alt="Project 1" />
            <h3>E-commerce Platform</h3>
            <p>A robust and user-friendly online shopping experience.</p>
          </div>
          <div class="project">
            <img src="images/project2.jpg" alt="Project 2" />
            <h3>Mobile Productivity App</h3>
            <p>Streamlining tasks and enhancing productivity on the go.</p>
          </div>
          <div class="project">
            <img src={"images/project3.jpg"} alt="Project 3" />
            <h3>Data Analytics Dashboard</h3>
            <p>
              Visualizing and analyzing key business metrics for informed
              decisions.
            </p>
          </div>
        </div>
      </section>

      <section id="about" class="about">
        <h2>About Us</h2>
        <p>
          We are a team of experienced software developers passionate about
          creating innovative and impactful solutions. Our mission is to help
          businesses achieve their goals through technology.
        </p>
        <p>
          We believe in collaboration, transparency, and delivering high-quality
          software that exceeds expectations.
        </p>
      </section>

      <section id="contact" class="contact">
        <h2>Contact Us</h2>
        <form action="#" method="post">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" class="btn">
            Send Message
          </button>
        </form>
      </section>

      <footer>
        <p>&copy; 2024 DevCraft. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
