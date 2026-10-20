// import React from "react";

// import "./css/work.css";
// import photo from "./assets/charity.png";
// import menu from "./assets/DigitalMenu.png";
// import pdf from "./assets/Pdf.png";
// import photo1 from "./assets/repo-analyzer.png";
// import workspace from "./assets/workspace.png"
// import flutter from "./assets/flutter.png";
// import react from "./assets/react.png";
// import node from "./assets/node.jpg";
// import kotlin from "./assets/kotlin.jpg";
// import nest from "./assets/nest.png";
// import ecomerce from "./assets/ecomerce.jpg";
// import reserve from "./assets/reserve.jpg";
// import html from "./assets/html.png";
// import css from "./assets/css.jpg";
// import js from "./assets/js.jpg";
// import crop from "./assets/crop.png";
// import netflix from "./assets/netflix.webp";
// import resume from "./assets/resume.png";
// const Work = () => {
//   return (
//     <>
//       <h1
//         style={{
//           marginLeft: "40%",
//           marginBottom: "50px",
//           fontFamily: "poppins",
//         }}
//       >
//         Sample Works
//       </h1>
//       <div className="project">
//         <div className="restful">

          
// <div className="restful2">
//             {" "}
//             <a href="https://habesha-trails.web.app">
//               <img src={menu}></img>
//             </a>
//             <h2>Digital Menu</h2>
//             <h3>Used frameworks:</h3>react and supabase
//             <h4>Built a restaurant ordering system with separate admin and customer interfaces. Admins manage menus and orders, while customers browse the menu and place orders online.</h4>
//           </div>
// <div className="restful2">
//             {" "}
//             <a href="https://ai-powered-repository-analyzer.vercel.app/">
//               <img src={photo1}></img>
//             </a>
//             <h2>AI-powered-repository-analyzer</h2>
//             <h3>Used frameworks:</h3>Next.js,Tailwindcss,Openai,Type script
//           </div>

//           <div className="restful2">
//             {" "}
//             <a href="https://real-time-colaborative-workspace-1suw8vn0k-hanameleses-projects.vercel.app/">
//               <img src={workspace}></img>
//             </a>
//             <h2>Collaborative workspace</h2>
//             <h3>Used frameworks:</h3>
//             <h4>Frontend:</h4>Next.js,Tailwindcss,,Type script
//             <h4>Backend:</h4> Rust
//           </div>





//  <div className="restful2">
//             {" "}
//             <a href="https://pdf-reader-three-weld.vercel.app/">
//               <img src={pdf}></img>
//             </a>
//             <h2>Pdf Reader</h2>
//             <h3>Used frameworks:</h3>react and firebase
//             <h4> A web app that enables users to edit compress,convert,merge and bundle files.</h4>
//           </div>



//           <div className="restful2">
//             {" "}
//             <a href="https://charity-organization-637f0.firebaseapp.com/">
//               <img src={photo}></img>
//             </a>
//             <h2>Charity Organisation</h2>
//             <h3>Used frameworks:</h3>react and nodejs
//           </div>


         

          

//           <div className="restful2">
//             <a href="https://crop-recomendationgit-menuvgsa3gy8ddxp5e7538.streamlit.app/">
//               <img src={crop}></img>
//             </a>

//             <h2>AI-Agri chat bot</h2>
//             <h5>
//               <b>Used frameworks</b>:flask,python
//             </h5>
//           </div>

//           <div className="restful2">
//             <a href="https://netflix-clone-2025-ej41.vercel.app/">
//               <img src={netflix}></img>
//             </a>

//             <h2>Netflix Clone</h2>
//             <h5>
//               <b>Used frameworks</b>:React,TMDB-api
//             </h5>
//           </div>

//           <div className="restful2">
//             <a href="https://resume-cover-letter-builder-alpha.vercel.app/">
//               <img src={resume}></img>
//             </a>

//             <h2>Resume Builder</h2>
//             <h5>
//               <b>Used frameworks</b>:flask,python
//             </h5>
//           </div>

//           <div className="restful2">
//             <a href="https://github.com/hanamelese/Ecommerce-api.git">
//               <img src={ecomerce}></img>
//             </a>

//             <h2>Ecomerce-Api</h2>
//             <h5>
//               <b>Used frameworks</b>:Node.js,Express
//             </h5>
//           </div>

//           <div className="restful2">
//             <a href="https://github.com/Ritaayalew/Junior_joyrides_API.git">
//               <img src={reserve}></img>
//             </a>

//             <h2>Reservation-Api</h2>
//             <h5>
//               <b>Used frameworks</b>:Next.js
//             </h5>
//           </div>
//         </div>
//       </div>

//       <h1
//         style={{
//           marginLeft: "43%",
//           marginBottom: "50px",
//           fontFamily: "poppins",
//         }}
//       >
//         Skills
//       </h1>
//       <div className="skills">
//         <img src={flutter}></img>
//         <img src={kotlin}></img>
//         <img src={react}></img>
//         <img src={node}></img>
//         <img src={nest}></img>
//         <img src={js}></img>
//         <img src={css}></img>
//         <img src={html}></img>
//       </div>
//     </>
//   );
// };

// export default Work;




import React, { useState } from "react";
import "./css/work.css";

import photo from "./assets/charity.png";
import menu from "./assets/DigitalMenu.png";
import pdf from "./assets/Pdf.png";
import photo1 from "./assets/repo-analyzer.png";
import workspace from "./assets/workspace.png";
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

// Devicon CDN mapping for tech stack logos
const TECH_LOGOS = {
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  NestJS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
  Supabase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Rust: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  OpenAI: "https://api.iconify.design/simple-icons:openai.svg?color=%2310a37f",
  Streamlit: "https://api.iconify.design/simple-icons:streamlit.svg?color=%23ff4b4b",
  "TMDB API": "https://api.iconify.design/simple-icons:themoviedatabase.svg?color=%2301b4e4",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  HTML5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  Flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  Kotlin: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  "REST API": "https://api.iconify.design/heroicons:code-bracket.svg?color=%23a5b4fc",
};

const projectsData = [
  {
    id: "digital-menu",
    title: "Digital Menu Platform",
    category: "Full Stack",
    image: menu,
    description:
      "A multi-tenant digital restaurant menu system with real-time order sync and distinct admin/customer dashboards.",
    longDescription:
      "Engineered a digital ordering ecosystem featuring table-specific QR code scanning, instant menu updates, real-time ticket management, and Supabase database subscriptions.",
    technologies: ["React", "Supabase", "JavaScript", "CSS3"],
    liveUrl: "https://habesha-trails.web.app",
    githubUrl: "https://github.com/hanamelese",
    highlights: ["Table QR Code Generation", "Real-time Supabase Engine", "Customer & Admin Dashboards"],
  },
  {
    id: "repo-analyzer",
    title: "AI Repository Analyzer",
    category: "AI & ML",
    image: photo1,
    description:
      "An intelligent repository analytics platform leveraging Groq Llama & OpenAI models to inspect, summarize, and evaluate source code.",
    longDescription:
      "Processes Git code repositories to compute semantic code context, streaming chat responses, code architectural summaries, and automated quality metrics.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "OpenAI"],
    liveUrl: "https://ai-powered-repository-analyzer.vercel.app/",
    githubUrl: "https://github.com/hanamelese",
    highlights: ["Streaming Vector AI Chat", "Repository Parsing", "Automated Architecture Mapping"],
  },
  {
    id: "collab-workspace",
    title: "Collaborative Workspace",
    category: "Full Stack",
    image: workspace,
    description:
      "A high-performance real-time collaborative platform with WebSocket room states and document streaming.",
    longDescription:
      "Combines a Next.js frontend with an Axum Rust backend service using WebSockets for ultra-low latency multi-user room interaction and state syncing.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Rust"],
    liveUrl: "https://real-time-colaborative-workspace-1suw8vn0k-hanameleses-projects.vercel.app/",
    githubUrl: "https://github.com/hanamelese",
    highlights: ["Rust Axum WebSocket Engine", "Room-based State Management", "Concurrent User Editing"],
  },
  {
    id: "pdf-utility",
    title: "PDF Reader & Suite",
    category: "Full Stack",
    image: pdf,
    description:
      "A browser-based document utility enabling file compression, format conversion, merging, and annotation.",
    longDescription:
      "Client-side processing tool that manipulates PDF documents seamlessly with Firebase cloud storage backup and zero server overhead.",
    technologies: ["React", "Firebase", "JavaScript"],
    liveUrl: "https://pdf-reader-three-weld.vercel.app/",
    githubUrl: "https://github.com/hanamelese",
    highlights: ["Client-Side PDF Manipulation", "Firebase Cloud Storage", "In-Browser Compression"],
  },
  {
    id: "charity-platform",
    title: "Charity Platform",
    category: "Full Stack",
    image: photo,
    description:
      "A fundraising ecosystem driving transparent community donations and initiative management.",
    longDescription:
      "Features payment portal integration, campaign progress tracking, campaign analytics, and community donor updates.",
    technologies: ["React", "Node.js", "Express"],
    liveUrl: "https://charity-organization-637f0.firebaseapp.com/",
    githubUrl: "https://github.com/hanamelese",
    highlights: ["Secure Payment Integration", "Campaign Progress Metrics", "RESTful API Backend"],
  },
  {
    id: "agri-bot",
    title: "AI Agri Assistant",
    category: "AI & ML",
    image: crop,
    description:
      "Smart agricultural advisor analyzing soil and environmental data to recommend optimized crop cultivation strategies.",
    longDescription:
      "Utilizes machine learning models integrated with Streamlit & Flask to process rainfall, humidity, and soil chemistry data for yield optimization.",
    technologies: ["Flask", "Python", "Streamlit"],
    liveUrl: "https://crop-recomendationgit-menuvgsa3gy8ddxp5e7538.streamlit.app/",
    githubUrl: "https://github.com/hanamelese",
    highlights: ["Crop Yield Prediction Models", "Interactive Parameter Controls", "Flask Inference Backend"],
  },
  {
    id: "netflix-clone",
    title: "Netflix Streaming Replica",
    category: "Full Stack",
    image: netflix,
    description:
      "A feature-rich dynamic media streaming frontend integrating real-time movie catalogs and trailer playback.",
    longDescription:
      "Builds an immersive user interface utilizing TMDB API feeds, YouTube trailer popups, custom category rows, and responsive design patterns.",
    technologies: ["React", "TMDB API", "CSS3"],
    liveUrl: "https://netflix-clone-2025-ej41.vercel.app/",
    githubUrl: "https://github.com/hanamelese",
    highlights: ["Dynamic Movie Catalog API", "Embedded Trailer Popups", "Polished Dark UI"],
  },
  {
    id: "resume-builder",
    title: "Resume & Cover Letter Builder",
    category: "AI & ML",
    image: resume,
    description:
      "An automated document builder generating formatted resumes and job application letters.",
    longDescription:
      "Allows job seekers to input career experience, select templates, and export cleanly formatted PDF applications instantly.",
    technologies: ["Flask", "Python", "Tailwind CSS"],
    liveUrl: "https://resume-cover-letter-builder-alpha.vercel.app/",
    githubUrl: "https://github.com/hanamelese",
    highlights: ["Dynamic PDF Generation", "Tailored Layout Templates", "Responsive Input Forms"],
  },
  {
    id: "ecommerce-api",
    title: "E-Commerce REST API",
    category: "Backend",
    image: ecomerce,
    description:
      "Scalable backend engine offering JWT authentication, product catalog management, and payment checkout pipelines.",
    longDescription:
      "Comprehensive Express and MongoDB backend supporting RBAC permissions, cart persistence, inventory tracking, and order history.",
    technologies: ["Node.js", "Express", "MongoDB"],
    liveUrl: null,
    githubUrl: "https://github.com/hanamelese/Ecommerce-api.git",
    highlights: ["JWT & RBAC Security", "MongoDB Aggregation Pipelines", "Scalable Service Architecture"],
  },
  {
    id: "reservation-api",
    title: "Junior Joyrides Reservation API",
    category: "Backend",
    image: reserve,
    description:
      "A reservation backend engine coordinating vehicle bookings, scheduling conflicts, and availability slots.",
    longDescription:
      "High-concurrency API service designed for managing entertainment venue bookings with automated calendar slot verification.",
    technologies: ["Next.js", "TypeScript", "REST API"],
    liveUrl: null,
    githubUrl: "https://github.com/Ritaayalew/Junior_joyrides_API.git",
    highlights: ["Concurrency Conflict Checking", "Type-safe Next.js Routes", "Automated Booking Slots"],
  },
];

const skillsData = [
  {name:"Next.js",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"},

  { name: "Flutter", icon: flutter },
  { name: "Kotlin", icon: kotlin },
  { name: "React", icon: react },
  { name: "Node.js", icon: node },
  { name: "NestJS", icon: nest },
  { name: "JavaScript", icon: js },
 
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },  
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Rust", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" },
  { name: "OpenAI", icon: "https://api.iconify.design/simple-icons:openai.svg?color=%2310a37f" },
  { name: "Streamlit", icon: "https://api.iconify.design/simple-icons:streamlit.svg?color=%23ff4b4b" },

 { name: "CSS3", icon: css },
  { name: "HTML5", icon: html },];

const Work = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Full Stack", "AI & ML", "Backend"];

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <div className="portfolio-container">
      {/* Background Decorative Glow Effects */}
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>

      {/* Header */}
      <div className="section-header">
        <span className="badge-subtitle">PORTFOLIO</span>
        <h1>
          Featured <span className="highlight-text">Projects</span>
        </h1>
        <p>
          Interactive showcase of full-stack engineering, AI integrations, and real-time backend systems.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeTab === cat ? "active" : ""}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} />
              <div className="image-overlay">
                <button
                  className="quick-view-btn"
                  onClick={() => setSelectedProject(project)}
                >
                  Quick View ↗
                </button>
              </div>
            </div>

            <div className="project-content">
              <div>
                <div className="project-top-row">
                  <h2>{project.title}</h2>
                  <span className="category-pill">{project.category}</span>
                </div>
                <p>{project.description}</p>
              </div>

              <div>
                {/* Tech Badges with Logos */}
                <div className="tech-tags">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {TECH_LOGOS[tech] && (
                        <img
                          src={TECH_LOGOS[tech]}
                          alt={tech}
                          className="tech-badge-icon"
                        />
                      )}
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="project-links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn-secondary ${!project.liveUrl ? "full-width" : ""}`}
                    >
                      <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              ✕
            </button>
            <div className="modal-body">
              <div className="modal-image-container">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="modal-info">
                <span className="category-pill">{selectedProject.category}</span>
                <h2>{selectedProject.title}</h2>
                <p className="modal-description">{selectedProject.longDescription}</p>

                <div className="modal-section">
                  <h3>Key Architecture Highlights</h3>
                  <ul className="highlights-list">
                    {selectedProject.highlights.map((item, idx) => (
                      <li key={idx}>⚡ {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h3>Technologies Used</h3>
                  <div className="tech-tags">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">
                        {TECH_LOGOS[tech] && (
                          <img
                            src={TECH_LOGOS[tech]}
                            alt={tech}
                            className="tech-badge-icon"
                          />
                        )}
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Visit Live Website ↗
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      Source Code ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <div className="section-header skills-header">
        <span className="badge-subtitle">STRENGTHS</span>
        <h2>
          Technical <span className="highlight-text">Stack</span>
        </h2>
        <div className="skills-underline"></div>
      </div>

      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon-wrapper">
              <img src={skill.icon} alt={skill.name} />
            </div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;