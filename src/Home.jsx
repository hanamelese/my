// import React from "react";
// import "./home.css";
// import back from "./assets/ales-nesetril-Im7lZjxeLhg-unsplash.jpg";
// import { Cursor, Typewriter } from "react-simple-typewriter";
// import pic from "./assets/pic.jpg";
// const Home = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         paddingTop: "70px",
//         // backgroundImage: `url(${back})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         minHeight: "100vh",
//         borderRadius: "50%",
//       }}
//       className="home"
//     >
//       <img
//         src={pic}
//         style={{
//           height: "300px",
//           width: "400px",
//           right: "0px",
//           marginTop: "80px",
//           borderRadius: "50%",
//         }}
//         alt="cameraman"
//         className="cameraMan"
//       ></img>
//       <div className="decoration">
//         <div
//           style={{
//             background:
//               "linear-gradient(rgb(171, 237, 237),rgba(120, 119, 119, 0)",
//             borderRadius: "50%",
//             width: "25px",
//             height: "25px",
//             clipPath: "polygon(50 30,50%,100%,0 50)",
//             opacity: 1,
//             zIndex: 1,
//             marginTop: "80px",
//           }}
//         ></div>
//         <div
//           style={{
//             background: "linear-gradient(rgb(119, 180, 180),rgba(0,0,0,0)",
//             clipPath: "polygon(0 0, 50% 100%, 100% 0)",
//             height: "200px",
//             width: "3px",
//             marginLeft: "40%",
//           }}
//         ></div>
//       </div>
//       <div
//         style={{
//           marginTop: "90px",
//           backgroundColor: "transparent",
//           marginLeft: "3%",
//         }}
//       >
//         <h1
//           className="mainTitle"
//           style={{ color: "aqua", fontFamily: "poppin" }}
//         >
//           I am{" "}
//           <span
//             style={{
//               color: "wheat",
//               fontFamily: "poppin",
//             }}
//           >
//             <Typewriter
//               words={[
//                 " software engineer",
//                 "web developer",
//                 "mobile app developer",
//               ]}
//               loop={0}
//               cursor
//               cursorStyle="|"
//               typeSpeed={100}
//               deleteSpeed={60}
//               delaySpeed={1500}
//             />
//           </span>
//         </h1>
//         <h3
//           style={{
//             fontFamily: "poppins",
//             color: "smokey-white",
//             marginTop: "20px",
//           }}
//         >
//           I'm a Software Engineer at Addis ababa univercity,skilled in Web and
//           Mobile App Development.
//         </h3>
//         <button className="getInTouch">
//           Get in touch
//           <i className="  fas fa-phone"></i>
//         </button>
//         <a href="/Hana-Melese-CV.pdf" download className="downloadCV">
//           Download CV <i className="fas fa-download"></i>
//         </a>

//         <div
//           className="icons"
//           style={{
//             display: "flex",
//             justifyContent: "space-around",
//             marginTop: "100px",
//           }}
//         >
//           <a href="https://github.com/hanamelese">
//             <i className="fab fa-github"></i>
//           </a>

//           <a href="https://t.me/hanitta111996">
//             <i className="fab fa-telegram"></i>
//           </a>

//           <a href="https://www.linkedin.com/in/hana-melese-103520339/">
//             <i className="fab fa-linkedin"></i>
//           </a>
//         </div>
//       </div>
//       <img
//         src={back}
//         style={{
//           height: "300px",
//           //width: "350px",
//           marginTop: "220px",
//           borderRadius: "50%",
//         }}
//         alt="camera3"
//         className="camera3"
//       ></img>
//     </div>
//   );
// };

// export default Home;



import React from "react";
import "./home.css";
import { Typewriter } from "react-simple-typewriter";
import pic from "./assets/myphoto.png";

const Home = () => {
  return (
    <div className="home-container">
      {/* Background Neon Ambient Glows */}
      <div className="home-bg-glow home-glow-1"></div>
      <div className="home-bg-glow home-glow-2"></div>

      <div className="hero-content">
        {/* Left Column: Text & CTAs */}
        <div className="hero-text-section">
          <div className="greeting-badge">
            <span className="pulsing-dot"></span> Available for New Opportunities
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="name-highlight">Hana Melese</span>
            <br />
            <span className="typewriter-wrapper">
              <Typewriter
                words={[
                  "Software Engineer",
                  "Full Stack Web Developer",
                  "Mobile App Developer",
                  "UI/UX Enthusiast",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1800}
              />
            </span>
          </h1>

          <p className="hero-description">
            A 5th-year Software Engineering student at <strong>Addis Ababa University</strong>. 
            Passionate about crafting scalable web platforms, real-time distributed backends, 
            and modern mobile applications with clean user interfaces.
          </p>

          {/* Call to Action Buttons */}
          <div className="hero-cta-group">
            <a href="https://t.me/hanitta111996" target="_blank" rel="noopener noreferrer" className="btn-hero-primary">
              <svg className="btn-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
              Get In Touch
            </a>

            <a href="/Hana-Melese-CV.pdf" download className="btn-hero-secondary">
              <svg className="btn-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download CV
            </a>
          </div>

          {/* Social Links Row */}
          <div className="social-links-row">
            <span className="social-label">Connect:</span>
            <div className="social-icons">
              <a href="https://github.com/hanamelese" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              <a href="https://www.linkedin.com/in/hana-melese-103520339/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                </svg>
              </a>

              <a href="https://t.me/hanitta111996" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Featured Profile Avatar Frame */}
        <div className="hero-avatar-section">
          <div className="avatar-frame">
            <img src={pic} alt="Hana Melese" className="avatar-img" />
            <div className="avatar-ring-glow"></div>
          </div>
        </div>
      </div>

      {/* Bottom Metric Stats Bar */}
      <div className="hero-stats-bar">
        <div className="stat-item">
          <span className="stat-number">10+</span>
          <span className="stat-label">Projects Built</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-number">5th Year</span>
          <span className="stat-label">AAU Software Eng.</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-number">Full-Stack</span>
          <span className="stat-label">Web & Mobile</span>
        </div>
      </div>
    </div>
  );
};

export default Home;