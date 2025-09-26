import { useState } from "react";
import "../pages/contact.css";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const [form, setForm] = useState({
    Name: "",
    emailid: "",
    Message: "",
  });

  const [loading, setLoading] = useState(false);


  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleSendMessage = async () => {
    if (!form.Name || !form.emailid || !form.Message) {
      toast.error("Please fill all fields!");
      return;
    }

    setLoading(true);
    try {
     const api = "/api/contact"; 
      await axios.post(api, {
        Name: form.Name,
        emailid: form.emailid,
        Message: form.Message,
      });

      toast.success("Message sent successfully!");
      setForm({ Name: "", emailid: "", Message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            Have a project or just want to say hi? Reach out anytime and I’ll
            respond soon.
          </p>

          <ul className="info-list">
            <li>📍 Krishna Nagar, Delhi, India</li>
            <li>📞 +91 9667256360</li>
            <li>✉️ tanishBatra893@gmail.com</li>
          </ul>

          <div className="social-links">
            <div>
              <FaLinkedinIn size={30} />
            </div>
            <div>
              <FaTwitter size={30} />
            </div>
            <div>
              <FaGithub size={30} />
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <h2>Contact Us</h2>
          <div className="contact-details">
            <input
              type="text"
              placeholder="Your Name"
              value={form.Name}
              name="Name"
              onChange={handleForm}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={form.emailid}
              name="emailid"
              onChange={handleForm}
              required
            />
            <textarea
              placeholder="Message"
              value={form.Message}
              name="Message"
              onChange={handleForm}
              rows={4}
              required
            />
          </div>

          <button
            type="button"
            className="submit-btn"
            onClick={handleSendMessage}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};
