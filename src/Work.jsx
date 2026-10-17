import React from "react";

import "./css/work.css";
import photo from "./assets/charity.png";
import menu from "./assets/DigitalMenu.png";
import pdf from "./assets/Pdf.png";
import photo1 from "./assets/repo-analyzer.png";
import workspace from "./assets/workspace.png"
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
import netflix from "./assets/netflix.webp";
import resume from "./assets/resume.png";
const Work = () => {
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
            <a href="https://habesha-trails.web.app">
              <img src={menu}></img>
            </a>
            <h2>Digital Menu</h2>
            <h3>Used frameworks:</h3>react and supabase
            <h4>Built a restaurant ordering system with separate admin and customer interfaces. Admins manage menus and orders, while customers browse the menu and place orders online.</h4>
          </div>
<div className="restful2">
            {" "}
            <a href="https://ai-powered-repository-analyzer.vercel.app/">
              <img src={photo1}></img>
            </a>
            <h2>AI-powered-repository-analyzer</h2>
            <h3>Used frameworks:</h3>Next.js,Tailwindcss,Openai,Type script
          </div>

          <div className="restful2">
            {" "}
            <a href="https://real-time-colaborative-workspace-1suw8vn0k-hanameleses-projects.vercel.app/">
              <img src={workspace}></img>
            </a>
            <h2>Collaborative workspace</h2>
            <h3>Used frameworks:</h3>
            <h4>Frontend:</h4>Next.js,Tailwindcss,,Type script
            <h4>Backend:</h4> Rust
          </div>





 <div className="restful2">
            {" "}
            <a href="https://pdf-reader-three-weld.vercel.app/">
              <img src={pdf}></img>
            </a>
            <h2>Pdf Reader</h2>
            <h3>Used frameworks:</h3>react and firebase
            <h4> A web app that enables users to edit compress,convert,merge and bundle files.</h4>
          </div>



          <div className="restful2">
            {" "}
            <a href="https://charity-organization-637f0.firebaseapp.com/">
              <img src={photo}></img>
            </a>
            <h2>Charity Organisation</h2>
            <h3>Used frameworks:</h3>react and nodejs
          </div>


         

          

          <div className="restful2">
            <a href="https://crop-recomendationgit-menuvgsa3gy8ddxp5e7538.streamlit.app/">
              <img src={crop}></img>
            </a>

            <h2>AI-Agri chat bot</h2>
            <h5>
              <b>Used frameworks</b>:flask,python
            </h5>
          </div>

          <div className="restful2">
            <a href="https://netflix-clone-2025-ej41.vercel.app/">
              <img src={netflix}></img>
            </a>

            <h2>Netflix Clone</h2>
            <h5>
              <b>Used frameworks</b>:React,TMDB-api
            </h5>
          </div>

          <div className="restful2">
            <a href="https://resume-cover-letter-builder-alpha.vercel.app/">
              <img src={resume}></img>
            </a>

            <h2>Resume Builder</h2>
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
