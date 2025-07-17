import React, { useEffect, useState } from "react";
import "./headerStyle.css";
import camera2 from "./assets/camera3.jpg";

const Header = () => {
  const [spinning, setSpinning] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // <-- new state

  useEffect(() => {
    const interval = setInterval(() => {
      setSpinning(true);
      setTimeout(() => setSpinning(false), 1500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      {/* Logo Section */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={camera2}
          className={spinning ? "spin-slow" : ""}
          style={{ height: "38px", width: "45px", borderRadius: "50%" }}
          alt="logo"
        />
        <div
          style={{
            fontFamily: "Dancing Script",
            letterSpacing: "3px",
            marginLeft: "8px",
            color: "white",
          }}
        >
          <span style={{ color: "red", fontSize: "22px" }}>H</span>ana
        </div>
      </div>

      {/* Burger button */}
      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "line rotate1" : "line"}></div>
        <div className={menuOpen ? "line fade" : "line"}></div>
        <div className={menuOpen ? "line rotate2" : "line"}></div>
      </div>

      {/* Navigation Links */}
      <nav className={menuOpen ? "link open" : "link"}>
        <a href="#home" className="header Home">
          Home
        </a>
        <a href="#work" className="header Home">
          Project
        </a>
        <a href="#certificate" className="header Home">
          Certificate
        </a>
        <a href="#contact" className="header Home">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
