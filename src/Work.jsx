import React, { useEffect } from "react";

import "./css/work.css";
import photo from "./assets/charity.png";
import flutter from "./assets/flutter.png";
import react from "./assets/react.png";
import node from "./assets/node.jpg";
import kotlin from "./assets/kotlin.jpg";
import nest from "./assets/nest.png";
import ecomerce from "./assets/ecomerce.jpg";
import reserve from "./assets/reserve.jpg";
import html from "./assets/html.png";
import css from "./assets/css.jpg";
import js from "./assets/js.jpg";
import crop from "./assets/crop.png";
const Work = () => {
  useEffect(() => {
    const handleScroll = () => {
      const projectSection = document.querySelector(".project");
      const skillsSection = document.querySelector(".skills");
      const triggerPoint = window.innerHeight / 1.3;

      if (projectSection) {
        const projectTop = projectSection.getBoundingClientRect().top;
        if (projectTop < triggerPoint) {
          projectSection.classList.add("active");
        }
      }

      if (skillsSection) {
        const skillsTop = skillsSection.getBoundingClientRect().top;
        if (skillsTop < triggerPoint) {
          skillsSection.classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <h1
        style={{
          marginLeft: "40%",
          marginBottom: "50px",
          fontFamily: "poppins",
        }}
      >
        Sample Works
      </h1>
      <div className="project">
        <div className="restful">
          <div className="restful2">
            {" "}
            <a href="https://charity-organization-637f0.firebaseapp.com/">
              <img src={photo}></img>
            </a>
            <h2>Charity Organisation</h2>
            <h3>Used frameworks:</h3>react and firebase
          </div>

          <div className="restful2">
            <a href="https://crop-recomendationgit-menuvgsa3gy8ddxp5e7538.streamlit.app/">
              <img src={crop}></img>
            </a>

            <h2>Ecomerce-Api</h2>
            <h5>
              <b>Used frameworks</b>:flask,python
            </h5>
          </div>

          <div className="restful2">
            <a href="https://github.com/hanamelese/Ecommerce-api.git">
              <img src={ecomerce}></img>
            </a>

            <h2>Ecomerce-Api</h2>
            <h5>
              <b>Used frameworks</b>:Node.js,Express
            </h5>
          </div>

          <div className="restful2">
            <a href="https://github.com/Ritaayalew/Junior_joyrides_API.git">
              <img src={reserve}></img>
            </a>

            <h2>Reservation-Api</h2>
            <h5>
              <b>Used frameworks</b>:Next.js
            </h5>
          </div>
        </div>
      </div>

      <h1
        style={{
          marginLeft: "43%",
          marginBottom: "50px",
          fontFamily: "poppins",
        }}
      >
        Skills
      </h1>
      <div className="skills">
        <img src={flutter}></img>
        <img src={kotlin}></img>
        <img src={react}></img>
        <img src={node}></img>
        <img src={nest}></img>
        <img src={js}></img>
        <img src={css}></img>
        <img src={html}></img>
      </div>
    </>
  );
};

export default Work;
