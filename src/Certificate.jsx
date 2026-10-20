// import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";

// import ciscoImg from "./assets/programing.png";
// import jsImg from "./assets/cyber.png";
// import webImg from "./assets/packet.png";
// import linux from "./assets/Linux.png";

// const certificateData = [
//   {
//     title: "Cisco Cyber Security",
//     subtitle: "Udemy - 2023",
//     description: "Mastered ES6, DOM manipulation, and asynchronous JS.",
//     bgColor: "#121a2f",
//     image: jsImg,
//   },
//   {
//     title: "Cisco Linux",
//     subtitle: "freeCodeCamp - 2022",
//     description: "Built responsive designs using HTML, CSS, and Flexbox.",
//     bgColor: "#121a2f",
//     image: linux,
//   },
//   {
//     title: "Programming",
//     subtitle: "Packet Tracer",
//     description:
//       "Completed a professional certificate in networking with Packet Tracer.",
//     bgColor: "#121a2f",
//     image: ciscoImg,
//   },

//   {
//     title: "Cisco Networking",
//     subtitle: "freeCodeCamp - 2022",
//     description: "Built responsive designs using HTML, CSS, and Flexbox.",
//     bgColor: "#121a2f",
//     image: webImg,
//   },
// ];

// const Certificate = () => {
//   return (
//     <div style={{ marginTop: "100px" }}>
//       <h1
//         style={{
//           textAlign: "center",
//           marginBottom: "100px",
//           fontFamily: "Poppins",
//         }}
//       >
//         Certificates
//       </h1>

//       <VerticalTimeline lineColor="wheat">
//         {certificateData.map((item, index) => (
//           <VerticalTimelineElement
//             key={index}
//             contentStyle={{
//               background: item.bgColor,
//               color: "wheat",
//               borderRadius: "10px",
//               boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
//               maxWidth: "400px", // ✅ Limit width
//               padding: "10px", // ✅ Reduce padding
//             }}
//             contentArrowStyle={{ borderRight: "7px solid wheat" }}
//             iconStyle={{
//               background: item.bgColor,
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               borderBlockColor: "wheat",
//             }}
//             icon={
//               <img
//                 src={item.image}
//                 alt="icon"
//                 style={{
//                   width: "100%",

//                   // objectFit: "contain",
//                   borderRadius: "30%",
//                 }}
//               />
//             }
//           >
//             <h3 className="vertical-timeline-element-title">{item.title}</h3>

//             <img
//               src={item.image}
//               alt={item.title}
//               style={{
//                 width: "100%",

//                 objectFit: "cover",
//                 borderRadius: "18px",
//               }}
//             />
//           </VerticalTimelineElement>
//         ))}
//       </VerticalTimeline>
//     </div>
//   );
// };

// export default Certificate;



import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./css/certificate.css"; // Optional dedicated stylesheet or integrate into your global CSS

import ciscoImg from "./assets/programing.png";
import jsImg from "./assets/cyber.png";
import webImg from "./assets/packet.png";
import linux from "./assets/Linux.png";

const certificateData = [
  {
    title: "Cisco Cyber Security",
    subtitle: "Cisco Networking Academy / Udemy - 2023",
    description: "Mastered fundamental security principles, network defense strategies, and threat analysis.",
    image: jsImg,
  },
  {
    title: "Cisco Linux Essentials",
    subtitle: "Linux Professional Institute & Cisco - 2022",
    description: "Gained hands-on proficiency in Linux operating system navigation, file systems, and command-line shell scripting.",
    image: linux,
  },
  {
    title: "Programming & Networking Fundamentals",
    subtitle: "Cisco Packet Tracer",
    description: "Completed professional practical labs simulating enterprise network routing, switching, and device configurations.",
    image: ciscoImg,
  },
  {
    title: "Cisco Networking & Packet Tracer",
    subtitle: "Networking Essentials - 2022",
    description: "Built and tested reliable multi-subnet local area networks and verified packet transmission protocols.",
    image: webImg,
  },
];

const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="certificate-container">
      {/* Background Neon Glow Accents */}
      <div className="cert-glow cert-glow-1"></div>
      <div className="cert-glow cert-glow-2"></div>

      <div className="section-header">
        <span className="badge-subtitle">ACCREDITATIONS</span>
        <h1>
          Licenses & <span className="highlight-text">Certificates</span>
        </h1>
        <p>Professional certifications validating expertise in cybersecurity, operating systems, and networking.</p>
        <div className="skills-underline"></div>
      </div>

      <VerticalTimeline lineColor="#4f46e5">
        {certificateData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#090d16",
              color: "#f1f5f9",
              borderRadius: "1.25rem",
              boxShadow: "0 12px 30px -10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(99, 102, 241, 0.15)",
              border: "1px solid #1e293b",
              padding: "1.75rem",
            }}
            contentArrowStyle={{ borderRight: "7px solid #090d16" }}
            date={item.subtitle}
            dateClassName="timeline-date-text"
            iconStyle={{
              background: "#111827",
              color: "#818cf8",
              boxShadow: "0 0 15px rgba(99, 102, 241, 0.4)",
              border: "2px solid #4f46e5",
            }}
            icon={
              <div className="timeline-icon-wrapper" onClick={() => setSelectedCert(item)}>
                <img src={item.image} alt="icon" />
              </div>
            }
          >
            <h3 className="timeline-title">{item.title}</h3>
            <h4 className="timeline-subtitle">{item.subtitle}</h4>
            
            <p className="timeline-desc">{item.description}</p>

            {/* Certificate Image Preview Card */}
            <div 
              className="cert-image-preview"
              onClick={() => setSelectedCert(item)}
            >
              <img
                src={item.image}
                alt={item.title}
              />
              <div className="cert-overlay">
                <span>Click to Expand ↗</span>
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      {/* Interactive Modal Preview */}
      {selectedCert && (
        <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>✕</button>
            <h2>{selectedCert.title}</h2>
            <p className="cert-modal-sub">{selectedCert.subtitle}</p>
            <div className="cert-modal-img-wrap">
              <img src={selectedCert.image} alt={selectedCert.title} />
            </div>
            <p className="cert-modal-desc">{selectedCert.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;