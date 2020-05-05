import React, { useState } from "react";
import { Link } from "@reach/router";

const ResponsiveNavigation = ({
  navLinks,
  background,
  hoverBackground,
  linkColor,
  logo,
}) => {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="responsive-toolbar" style={{ background }}>
      <ul style={{ background }} className={navOpen ? "active" : ""}>
        <figure onClick={() => setNavOpen(!navOpen)}>
          <img src={logo} alt="logo-nav-toggler" width="40px" height="40px" />
        </figure>
        {navLinks.map((link, index) => {
          return (
            <li
              key={link.text}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(-1)}
              style={{
                background:
                  hoverIndex === index ? hoverBackground || "#999" : "",
              }}
            >
              <Link to={link.path} style={{ color: linkColor }}>
                {link.text}
                <ion-icon name={link.icon}></ion-icon>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ResponsiveNavigation;
