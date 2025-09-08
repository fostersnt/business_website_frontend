import React, { useState } from "react";
import "../styles/NavBar.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Logo from "./Logo";

import ai_image from '../assets/images/ai.webp';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdown, setDropdown] = useState(null);

    const menuItems = [
        { title: "Home", link: "/" },
        {
            title: "About",
            subMenu: [{ title: "Who We Are", link: "/who_we_are" }, { title: "Our Team", link: "/our_team" }, { title: "Partners", link: "/partners" }],
        },
        {
            title: "Services",
            subMenu: [{ title: "Software Development", link: "/software_development" }, { title: "QA & Testing", link: "/qa_testing" }, { title: "AI Solutions", link: "/ai_solutions" }],
        },
        {
            title: "Training",
            subMenu: [{ title: "Apply Now", link: "/apply_now" }, { title: "Programs", link: "/programs" }, { title: "FAQ", link: "/faq" }],
        },
        {
            title: "Social",
            subMenu: [{ title: "Events", link: "/events" }, { title: "Community", link: "/community" }, { title: "Impact Stories", link: "/impact_stories" }],
        },
        {
            title: "Jobs",
            subMenu: [{ title: "Open Roles", link: "/jobs" }, { title: "Internships", link: "/internships" }, { title: "Graduate Trainee", link: "/graduate_trainee" }],
        },
        { title: "Locations & Contact", link: "/contact" },
    ];

    return (
        <nav className="navbar_main">
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
                                                <NavLink key={i} to={sub.link} className={({ isActive }) =>
                                                    isActive ? "active-link" : "inactive-link"
                                                } onClick={() => setDropdown(null)}>
                                                    {sub.title}
                                                </NavLink>
                                                // <Link key={i} to="/jobs" onClick={() => setDropdown(null)}><div className="navLink">{sub}</div></Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </li>
                        ) : (
                            <li key={index} className="menu-item">
                                <NavLink key={index} to={item.link} className={({ isActive }) =>
                                    isActive ? "active-link" : "inactive-link"
                                } onClick={() => setDropdown(null)}>
                                    {item.title}
                                </NavLink>
                                {/* <span className="menu-link">{item.title}</span> */}
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
                                                <NavLink key={index} to={sub.link} className={({ isActive }) =>
                                                    isActive ? "active-link" : "inactive-link"
                                                } onClick={() => setDropdown(null)}>
                                                    {sub.title}
                                                </NavLink>
                                                {/* {sub.title} */}
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            </li>
                        ) : (
                            <li key={index} className="mobile-item">
                                <NavLink key={index} to={item.link} className={({ isActive }) =>
                                    isActive ? "active-link" : "inactive-link"
                                } onClick={() => setDropdown(null)}>
                                    {item.title}
                                </NavLink>
                                {/* {item.title} */}
                            </li>
                        )
                    )}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
