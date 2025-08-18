// Hero.jsx
import React from 'react';
import heroImage from '../assets/images/website_background_main.png';
import heroVideo from '../assets/videos/bg_video_2.mp4';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section
        className="hero"
        // style={{ backgroundImage: `url(${heroVideo})` }}
        >
            <video
                className="hero-video"
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
            />
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Empowering Innovation with <br /> Scalable Software & VAS Solutions
                    </h1>
                    <p className="hero-text">
                        Elevate your enterprise with smart, secure, and custom-built digital experiences.
                    </p>
                    <button className="hero-btn">Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
