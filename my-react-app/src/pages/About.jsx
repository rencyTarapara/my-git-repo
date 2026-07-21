import React from "react";

const About = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #4facfe, #00f2fe)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <div
        style={{
          background: "#fff",
          width: "800px",
          borderRadius: "15px",
          padding: "40px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#007bff",
            marginBottom: "15px",
            fontSize: "38px",
          }}
        >
          About Us
        </h1>

        <p
          style={{
            color: "#555",
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          Welcome to our React application. We are passionate about creating
          modern, responsive, and user-friendly web applications using React.js.
        </p>

        <hr style={{ margin: "25px 0" }} />

        <h2 style={{ color: "#333" }}>🎯 Our Mission</h2>
        <p style={{ color: "#666", lineHeight: "1.8" }}>
          Our mission is to develop fast, secure, and interactive websites that
          provide an excellent user experience.
        </p>

        <h2 style={{ color: "#333", marginTop: "25px" }}>
          💻 Technologies We Use
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
            marginTop: "15px",
          }}
        >
          {[
            "React JS",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Bootstrap",
            "Git",
          ].map((tech) => (
            <span
              key={tech}
              style={{
                background: "#007bff",
                color: "#fff",
                padding: "10px 18px",
                borderRadius: "25px",
                fontWeight: "bold",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <h2 style={{ color: "#333", marginTop: "30px" }}>⭐ Features</h2>

        <ul
          style={{
            textAlign: "left",
            maxWidth: "400px",
            margin: "20px auto",
            color: "#555",
            lineHeight: "2",
          }}
        >
          <li>Responsive Design</li>
          <li>Modern User Interface</li>
          <li>Fast Performance</li>
          <li>Reusable Components</li>
          <li>Easy Navigation</li>
        </ul>

        <div
          style={{
            marginTop: "30px",
            background: "#f8f9fa",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2 style={{ color: "#007bff" }}>📞 Contact Us</h2>
          <p>Email: info@example.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

        <p
          style={{
            marginTop: "25px",
            color: "#777",
            fontSize: "14px",
          }}
        >
          © 2026 React Application. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default About