

import React, { useState } from "react";
import "./css/experience.css";

// Import your logos, avatar photos, and recommendation letters here
import aaitLogo from "./assets/AAU.png";
import pkiLogo from "./assets/insa.jpg";
import packetLogo from "./assets/utopia.jpg"; // Replace with 3rd organization logo

import danielImg from "./assets/MrDaniel.jpg"; // Supervisor photo / preview
import recLetter1 from "./assets/alehegn.png";
import afroelRec from "./assets/afroelRec.png"; // Recommendation letter image
import danielRec from "./assets/daneilRec.jpg"; // Recommendation letter image

const experienceData = [
  {
    organisation:"AAU",
    period: "2021-Present",
    role: "Full-Stack Software Engineering Student",
    organization: "Addis Ababa University (AAiT)",
    logo: aaitLogo,
    badgeText: "AAiT",
    bullets: [
      "Mastering React, Node.js, Next.js, and Django",
      "Finalist in Tech Competitions for Linux and web app development",
      "High academic performance with strong technical fundamentals"
    ]
  },
  {
    organisation:"INSA",
    period: "(Jan - June)-2026",
    role: "Cybersecurity( PKI Analyser) and Full Stack developer",
    organization: "Enterprise PKI & Security Lab",
    logo: pkiLogo,
    badgeText: "PKI",
    bullets: [
      "Focused on PKI, X.509 certificates, Nginx SSL/TLS configuration",
      "EJBCA container deployment and network security testing",
      "Systematically diagnosing low-level configuration errors"
    ]
  },
  {
    organisation:"UTOPIA",
    period: "Aug.2025 - Dec.2026",
    role: "Full Stack Engineer",
    organization: "Cisco Networking Labs",
    logo: packetLogo,
    badgeText: "CISCO",
    bullets: [
      "Simulated enterprise network routing, switching, and subnets",
      "Configured secure packet transmission protocols with Packet Tracer",
      "Automated network monitoring workflows using Python scripts"
    ]
  }
];

const testimonialData = [
  
  {
    quote: "  Her  efforts  in  engaging  with  our developers  team  and  advancing  our  ECOMMERCE  initiatives  have  contributed meaningfully to Afroel Technologies product development and productivity. We are deeply appreciative of the value she brought to our team.",
    author: "Mr.Alehegn Tefera",
    role: "CEO of Afroel Technology",
    avatar: recLetter1,
    letterImage: afroelRec
  },
  {
    author: "Mr.Daniel Tadesse",
    quote: "She is performing exceptionally well in her internship, demonstrating a strong grasp of PKI concepts and practical skills in analyzing and troubleshooting certificate-related issues. Her dedication and technical acumen make her a valuable asset to our team.",
    role: "PKI Operations Division Head & Instructor",
    avatar: danielImg,
    letterImage: danielRec
  },
  // {
  //   quote: "A dedicated software engineering student with strong leadership skills and a proactive approach toward mastering modern frontend and backend architectures.",
  //   author: "Daniel Tadesse",
  //   role: "Internship Supervisor",
  //   avatar: danielImg,
  //   letterImage: recLetter1
  // }
];

const Experience = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);

  return (
    <div className="experience-container">
      {/* Background Neon Glows */}
      <div className="exp-glow exp-glow-1"></div>
      <div className="exp-glow exp-glow-2"></div>

      {/* Header */}
      <div className="section-header">
        <span className="badge-subtitle">Hi, I'm Hana Melese <span className="pill-tag">CAREER JOURNEY</span></span>
        <h1>
          Working <span className="highlight-text">Experience</span>
        </h1>
        <p>A timeline of organizations, technical roles, and professional contributions in software engineering and cybersecurity.</p>
      </div>

      {/* 3-Organization Cards Grid */}
      <div className="cards-top-grid">
        {experienceData.map((item, index) => (
          <div key={index} className="horizontal-exp-card">
            <div className="card-header-row">
              <span className="period-badge">{item.period}</span>
            </div>
            
            <div className="card-body-content">
              <div className="card-logo-box">
                <img src={item.logo} alt={item.organization} />
              </div>
              
              <div className="card-text-details">
                <h2>{item.organisation}</h2>
                {/* <h3>{item.role}</h3> */}
                <h4>{item.role}</h4>
                <ul className="exp-bullet-list">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Horizontal Glowing Cyan Timeline Track */}
      <div className="glowing-horizontal-track">
        <div className="glow-bar"></div>
        <div className="nodes-container">
          {experienceData.map((item, index) => (
            <div key={index} className="track-node-wrapper">
              <div className="glowing-node-sphere">
                <span className="node-inner-dot"></span>
              </div>
              <div className="node-badge">
                <img src={item.logo} alt="badge" />
                <span>{item.badgeText}</span>
              </div>
            </div>
          ))}
          <div className="track-node-wrapper">
            <div className="glowing-node-sphere pulse"></div>
          </div>
        </div>
      </div>

      <div className="section-header">
        <h2>
           <span className="highlight-text">Testimonials</span>
        </h2>
      </div>

      {/* Testimonials Grid Section */}
      <div className="testimonials-grid-container">
        {testimonialData.map((test, index) => (
          <div key={index} className="testimonial-card-box">
            <div className="quote-mark">““</div>
            <p className="testimonial-quote-text">{test.quote}</p>

            <div className="testimonial-footer">
              <img src={test.avatar} alt={test.author} className="author-avatar" />
              <div className="author-info">
                <h4>{test.author}</h4>
                <span>{test.role}</span>
                <button 
                  className="view-letter-btn" 
                  onClick={() => setSelectedLetter(test)}
                >
                  View Recommendation Letter ↗
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recommendation Letter Modal */}
      {selectedLetter && (
        <div className="cert-modal-overlay" onClick={() => setSelectedLetter(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setSelectedLetter(null)}>✕</button>
            <h2>{selectedLetter.author}</h2>
            <p className="cert-modal-sub">{selectedLetter.role}</p>
            <div className="cert-modal-img-wrap">
              <img src={selectedLetter.letterImage} alt="Recommendation Letter" />
            </div>
            <p className="cert-modal-desc">{selectedLetter.quote}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;