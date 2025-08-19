import React, { useState } from "react";
import "../styles/NavBar.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Logo from "./Logo";

import ai_image from '../assets/images/ai.webp';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdown, setDropdown] = useState(null);

    const menuItems = [
        { title: "Home", link: "/" },
        {
            title: "About",
            subMenu: ["Who We Are", "Our Team", "Partners"],
        },
        {
            title: "Services",
            subMenu: ["Software Development", "QA & Testing", "AI Solutions"],
        },
        {
            title: "Training",
            subMenu: ["Apply Now", "Programs", "FAQ"],
        },
        {
            title: "Social",
            subMenu: ["Events", "Community", "Impact Stories"],
        },
        {
            title: "Jobs",
            subMenu: ["Open Roles", "Internships", "Graduate Trainee"],
        },
        { title: "Locations & Contact", link: "/contact" },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Logo />
                <ul className="menu">
                    {menuItems.map((item, index) =>
                        item.subMenu ? (
                            <li
                                key={index}
                                className="menu-item"
                                onMouseEnter={() => setDropdown(index)}
                                onMouseLeave={() => setDropdown(null)}
                            >
                                <span className="menu-link">
                                    <span className="">{item.title}</span> <MdOutlineKeyboardArrowDown />
                                </span>
                                {dropdown === index && (
                                    <div className="dropdown_content">
                                        <img src={ai_image} alt="" />
                                        <div className="dropdown-item">
                                            {item.subMenu.map((sub, i) => (
                                                <Link key={i} to="/jobs" onClick={() => setDropdown(null)}><span className="navLink">{sub}</span></Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </li>
                        ) : (
                            <li key={index} className="menu-item">
                                <span className="menu-link">{item.title}</span>
                            </li>
                        )
                    )}
                </ul>
                {/* Mobile Menu Button */}
                <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "✖" : "☰"}
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <ul className="mobile-menu">
                    {menuItems.map((item, index) =>
                        item.subMenu ? (
                            <li key={index} className="mobile-item">
                                <details>
                                    <summary className="mobile-link">
                                        {item.title} <span className="arrow">▼</span>
                                    </summary>
                                    <ul className="mobile-dropdown">
                                        {item.subMenu.map((sub, i) => (
                                            <li key={i} className="mobile-dropdown-item">
                                                {sub}
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            </li>
                        ) : (
                            <li key={index} className="mobile-item">
                                {item.title}
                            </li>
                        )
                    )}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
