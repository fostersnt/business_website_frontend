import React, { useState } from "react";
import "../styles/NavBar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const menuItems = [
    { title: "Home", link: "/" },
    {
      title: "About AmaliTech",
      subMenu: ["Who We Are", "Our Team", "Partners"],
    },
    {
      title: "AmaliTech Services",
      subMenu: ["Software Development", "QA & Testing", "AI Solutions"],
    },
    {
      title: "AmaliTech Training",
      subMenu: ["Apply Now", "Programs", "FAQ"],
    },
    {
      title: "AmaliTech Social",
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
        {/* Logo */}
        <div className="logo">
          <span className="black">AMALI</span>
          <span className="orange">TECH</span>
        </div>

        {/* Desktop Menu */}
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
                  {item.title} <span className="arrow">▼</span>
                </span>
                {dropdown === index && (
                  <ul className="dropdown">
                    {item.subMenu.map((sub, i) => (
                      <li key={i} className="dropdown-item">
                        {sub}
                      </li>
                    ))}
                  </ul>
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
