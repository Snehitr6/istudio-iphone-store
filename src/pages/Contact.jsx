
import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <main className="contact-page">
      <div className="listing-header">
        <span className="eyebrow">WE'RE HERE FOR YOU</span>
        <h1>Let's start a <span>conversation.</span></h1>
        <p>Questions about a product? We'd love to hear from you.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <div><Mail /><h3>Email</h3><p>support@istudio.example</p></div>
          <div><Phone /><h3>Phone</h3><p>+91 12345 67890</p></div>
          <div><MapPin /><h3>Location</h3><p>Bengaluru, Karnataka, India</p></div>
        </div>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Send us a message</h2>
          <label className="form-field">
            Your name
            <input required placeholder="Enter your name" />
          </label>
          <label className="form-field">
            Email address
            <input type="email" required placeholder="Enter your email" />
          </label>
          <label className="form-field">
            Message
            <textarea required rows="5" placeholder="How can we help?" />
          </label>

          <button className="btn-primary" type="submit">
            Send Message <Send size={17} />
          </button>

          {submitted && (
            <p className="form-success">
              <CheckCircle2 size={18} /> Demo message submitted successfully!
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
