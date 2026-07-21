import { useState } from "react";

const styles = {
  page: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "24px",
    background: "#fafafa",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
  },
  card: {
    background: "#ffffff",
    border: "1px solid #e5e5e5",
    borderRadius: "12px",
    padding: "40px",
    maxWidth: "440px",
    width: "100%",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
    color: "#1a1a1a",
    boxSizing: "border-box",
  },
  heading: { fontSize: "24px", margin: "0 0 6px" },
  subtitle: { color: "#6b6b6b", margin: "0 0 24px", fontSize: "14px" },
  infoList: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 24px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    fontSize: "14px",
  },
  infoLink: { color: "#1a1a1a", textDecoration: "none" },
  divider: { border: "none", borderTop: "1px solid #e5e5e5", margin: "0 0 24px" },
  label: { display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px", marginTop: "18px" },
  input: {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #e5e5e5",
    borderRadius: "8px",
    fontSize: "14px",
    fontFamily: "inherit",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #e5e5e5",
    borderRadius: "8px",
    fontSize: "14px",
    fontFamily: "inherit",
    boxSizing: "border-box",
    resize: "vertical",
    minHeight: "100px",
  },
  button: {
    marginTop: "24px",
    width: "100%",
    padding: "11px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
  },
  buttonDisabled: {
    background: "#9ca3af",
    cursor: "default",
  },
  status: { marginTop: "16px", fontSize: "14px", textAlign: "center", color: "#16a34a" },
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Placeholder: replace this with a real request to your backend or form service.
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setSubmitting(false);
    }, 700);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Get in touch</h1>
        <p style={styles.subtitle}>Send a message and we'll get back to you soon.</p>

        <ul style={styles.infoList}>
          <li>
            <a href="mailto:hello@example.com" style={styles.infoLink}>hello@example.com</a>
          </li>
          <li>
            <a href="tel:+15551234567" style={styles.infoLink}>+1 (555) 123-4567</a>
          </li>
          <li>
            <span>123 Market Street, San Francisco, CA</span>
          </li>
        </ul>

        <hr style={styles.divider} />

        <form onSubmit={handleSubmit}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input
            style={styles.input}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            style={styles.input}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message" style={styles.label}>Message</label>
          <textarea
            style={styles.textarea}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={submitting}
            style={submitting ? { ...styles.button, ...styles.buttonDisabled } : styles.button}
          >
            {submitting ? "Sending..." : "Send message"}
          </button>

          {status === "success" && (
            <div style={styles.status}>Thanks — your message has been received.</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact
