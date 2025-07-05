import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

const ContactSection = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-to-top action
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Form handling
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      alert("Message sent!");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <>
      {/* Contact Form Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="w-full max-w-2xl bg-transparent text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Get in touch</h2>
          <p className="text-gray-800 mb-8">
            Contact us and we will get back in touch to place an order
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <span className="text-red-500 ml-2">*</span>
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <span className="text-red-500 ml-2">*</span>
            </div>
            <div>
              <textarea
                name="message"
                required
                placeholder="Enter your message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-b from-green-400 to-green-600 text-white px-10 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition-all"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
