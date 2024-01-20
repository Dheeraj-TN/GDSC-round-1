import React, { useState } from "react";
import logo from "./logo-white.png";
import logo2 from "./logo.png";
import "./Header.css";
import { hover } from "@testing-library/user-event/dist/hover";
const Header = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      {!hovered ? (
        <>
          <header>
            <img
              src={logo}
              alt="logo"
              className="logo"
              onMouseLeave={() => setHovered(false)}
            />

            <nav>
              <a href="#section1">Food delivery</a>
              <a href="#section3">How it works</a>
              <a href="#section4">Our cities</a>
              <a href="#section6">Sign up</a>
            </nav>
          </header>
        </>
      ) : (
        <>
          <div className="header__hover">
            <img
              src={logo2}
              alt="logo"
              className="logo"
              onMouseLeave={() => setHovered(false)}
            />

            <nav className="hovered__a">
              <a href="#section1">Food delivery</a>
              <a href="#section3">How it works</a>
              <a href="#section4">Our cities</a>
              <a href="#section6">Sign up</a>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
