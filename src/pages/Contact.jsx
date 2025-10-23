import { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">

      {/* Contact Section */}
      <div className="bg-white shadow-md rounded p-6 mt-6 w-full max-w-2xl">
        <h2 className="text-xl font-semibold text-center mb-4">Contact Us</h2>

        {/* Company Information */}
        <div className="mb-6 text-center text-gray-700">
          <p>📍 123 Career Street, Tech City</p>
          <p>✉️ support@careerpath.com</p>
          <p>📞 +1 234 567 890</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border rounded"
            required
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
