import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_j42ta8a",
        "template_iisnfyf",
        formData,
        "WJ6ELODA4Zxf8c6jo"
      )
      .then(
        (result) => {
          console.log("Email sent!", result.text);
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("Failed to send email:", error.text);
        }
      );
  };

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.8; // trigger a bit earlier

      const formSection = document.getElementById("formSection");
      const infoSection = document.getElementById("infoSection");

      if (
        formSection &&
        formSection.getBoundingClientRect().top < triggerPoint
      ) {
        formSection.style.opacity = "1";
        formSection.style.transform = "translateX(0)";
      }

      if (
        infoSection &&
        infoSection.getBoundingClientRect().top < triggerPoint
      ) {
        infoSection.style.opacity = "1";
        infoSection.style.transform = "translateX(0)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ padding: "60px 10%", fontFamily: "Poppins, sans-serif" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "100px",
        }}
      >
        Contact & Feedback
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "70px",
          justifyContent: "space-between",
        }}
      >
        {/* === Feedback Form === */}
        <div
          id="formSection"
          style={{
            flex: 1,
            minWidth: "300px",
            opacity: 0,
            transform: "translateX(-100px)",
            transition: "all 1s ease",
            willChange: "opacity, transform",
            background: "#121a2f",
            padding: "30px",
            borderRadius: "20px",
            boxShadow:
              "0 4px 10px rgba(30,0,0,0.3), 0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <label>Name:</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                background: "lightGrey",
              }}
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                background: "lightGrey",
              }}
            />

            <label>Message:</label>
            <textarea
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                background: "lightGrey",
              }}
            ></textarea>

            <button
              type="submit"
              style={{
                padding: "10px",
                border: "none",
                marginTop: "25px",
                background: "#A4CCD9",
                borderRadius: "5px",
                color: "black",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </form>

          {submitted && (
            <p style={{ color: "green", marginTop: "10px" }}>
              ✅ Thank you! Your message has been sent.
            </p>
          )}
        </div>

        {/* === Info Section === */}
        <div
          id="infoSection"
          style={{
            flex: 1,
            minWidth: "300px",
            opacity: 0,
            transform: "translateX(100px)",
            transition: "all 1s ease",
            willChange: "opacity, transform",
            color: "white",
            fontSize: "1rem",
          }}
        >
          <h3>Full Name</h3>
          <p>Hana Melese</p>

          <h3>Phone Number</h3>
          <p>+251-946446656</p>

          <h3>Email</h3>
          <p>hanamelese95@gmail.com</p>

          <h3>Telegram Username</h3>
          <p>@hanitta111996</p>

          <div
            className="icons"
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "100px",
            }}
          >
            <a href="https://github.com/hanamelese" style={{ color: "white" }}>
              <i className="fab fa-github"></i>
            </a>

            <a href="https://t.me/hanitta111996" style={{ color: "white" }}>
              <i className="fab fa-telegram"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/hana-melese-103520339/"
              style={{ color: "white" }}
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
