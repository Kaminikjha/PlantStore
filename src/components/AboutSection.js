import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaArrowUp,
  FaLinkedin,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

import bgImage from "../assets/about-bg.jpg";
import statsBg from "../assets/about-bg-2.jpg";
import mainImage from "../assets/background.jpg";
import img1 from "../assets/plant-7.jpg";
import img2 from "../assets/plant-8.jpg";
import img3 from "../assets/plant-9.jpg";
import img4 from "../assets/plant-10.jpg";
import img5 from "../assets/plant-11.jpg";
import img6 from "../assets/plant-12.jpg";
import img7 from "../assets/plant-13.jpg";
import team1 from "../assets/woman.jpg";
import team2 from "../assets/man.jpg";
import team3 from "../assets/woman-1.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7];

const AboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [activeImage, setActiveImage] = useState(mainImage);
  const [index, setIndex] = useState(0);
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const thumbnailsPerPage = 3;
  const [email, setEmail] = useState("");
  const isMobile = window.innerWidth <= 640;


  const stats = [
    { value: 745, label: "Happy clients" },
    { value: 864, label: "Sold plants" },
    { value: 297, label: "Completed projects" },
    { value: 101, label: "Winning awards" },
  ];
  const [counts, setCounts] = useState(stats.map(() => 0));

  
  const navigate = useNavigate();
  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const team = [
    { name: "Robert Evans", role: "CEO & Founder", image: team1, socials: [FaFacebookF, FaTwitter, FaLinkedin] },
    { name: "Peter Beckett", role: "General Manager", image: team2, socials: [FaFacebookF, FaTwitter, FaLinkedin, FaInstagram] },
    { name: "Ana Johnson", role: "Customer Support Manager", image: team3, socials: [FaFacebookF, FaInstagram] },
  ];

  useEffect(() => {
    const handleScroll = () => setShowScrollButton(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (index + 1) % images.length;
      setIndex(newIndex);
      setActiveImage(images[newIndex]);
      if (isMobile) {
        setVisibleStartIndex(newIndex);
      } else {
        const newStartIndex = (visibleStartIndex + 1) % (images.length - thumbnailsPerPage + 1);
        setVisibleStartIndex(newStartIndex);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [index, visibleStartIndex]);

  useEffect(() => {
    const duration = 1500;
    const steps = 40;
    const increment = stats.map((s) => s.value / steps);
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setCounts((prev) =>
        prev.map((val, i) =>
          currentStep < steps ? Math.floor(val + increment[i]) : stats[i].value
        )
      );
      if (currentStep >= steps) clearInterval(interval);
    }, duration / steps);
  }, []);

  const handleThumbnailPrev = () => {
    setVisibleStartIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleThumbnailNext = () => {
    setVisibleStartIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Subscribed with: ${email}`);
      setEmail("");
    } else {
      alert("Please enter a valid email.");
    }
  };

  const visibleThumbnails = isMobile
    ? [images[visibleStartIndex]]
    : images.slice(visibleStartIndex, visibleStartIndex + thumbnailsPerPage);

  return (
    <>
      <div className="pt-20"></div>

      {/* About Section */}
      <section
        className="py-20 px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-6 md:p-10">
          {/* Three Cards */}
          {[
            {
              title: "Who we are",
              text: "We are a small team of nature lovers and world wanderers. Our story began in late 2014 when we first opened our small shop in LA. During the next years we opened another two stores in Yerevan and Dublin, and grew into one of the leaders of the market.",
            },
            {
              title: "What we want",
              text: "We want to help bring the joy of gardening to anyone and everyone. But apart from all, we want to build the strongest bridges between man and nature. We believe that growing and caring for a plant are valuable actions that make us more human.",
            },
            {
              title: "What we do",
              text: "Not only we gather plants from all edges of the world, but also plant any seed by your choice. Our specialists take the whole responsibility so you are fully satisfied with what we have as a final result. Meanwhile our support team is at your disposal 24/7 to help you further.",
            },
          ].map((card, idx) => (
            <div key={idx} className="bg-white shadow-lg rounded-xl p-6 text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Boutique Section */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="hidden sm:block w-full lg:w-1/2">
            <img src={activeImage} alt="Boutique" className="rounded-xl shadow-xl w-full h-auto object-cover" />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our boutique stores</h2>
            <p className="text-gray-600 mb-6">Find our boutique stores in the centers of LA, Yerevan and Dublin. Learn more by checking the addresses.</p>
            <div className="flex flex-wrap gap-4 mb-6">
              <button onClick={() => handleNavClick("/contact")} className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg shadow">Learn more</button>
              <button onClick={() => handleNavClick("/plants")} className="bg-white border border-gray-300 text-gray-700 px-5 py-2 rounded-lg shadow hover:bg-gray-100">Collection</button>
            </div>
            <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
              {!isMobile && (
                <button onClick={handleThumbnailPrev} className="bg-green-300 hover:bg-green-400 text-white p-3 rounded-xl">
                  <span className="text-green-700 font-bold text-3xl">&#8249;</span>
                </button>
              )}
              {visibleThumbnails.map((img, i) => {
                const realIndex = isMobile ? visibleStartIndex : visibleStartIndex + i;
                return (
                  <img
                    key={realIndex}
                    src={img}
                    alt={`thumb-${realIndex}`}
                    onClick={() => {
                      setActiveImage(img);
                      setIndex(realIndex);
                    }}
                    className={`${
                      isMobile ? "w-full h-full max-w-[300px]" : "w-24 sm:w-32 sm:h-32"
                    } rounded-lg cursor-pointer transition-all duration-300 shadow-sm border-2 ${
                      activeImage === img ? "border-green-500" : "border-transparent"
                    }`}
                  />
                );
              })}
              {!isMobile && (
                <button onClick={handleThumbnailNext} className="bg-green-300 hover:bg-green-400 text-white p-3 rounded-xl">
                  <span className="text-green-700 font-bold text-3xl">&#8250;</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-cover bg-top bg-no-repeat py-16 px-4 sm:px-6 md:px-12" style={{ backgroundImage: `url(${statsBg})` }}>
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl md:text-5xl font-extrabold text-green-400">{counts[index]}</h3>
              <p className="mt-2 text-lg md:text-base font-medium">{stat.label}</p>
              <div className="mt-2 w-6 h-0.5 mx-auto bg-white opacity-60"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Meet our team</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-lg mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-600 mt-1 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4 mt-4">
                  {member.socials.map((Icon, i) => (
                    <a key={i} href="#" className="bg-gradient-to-b from-green-400 to-green-600 text-white p-3 rounded-md shadow hover:scale-110 transition">
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#d9eddc] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Subscribe to our newsletter!</h2>
            <p className="text-gray-600 mt-2">Be informed when new offers are available.</p>
          </div>
          <form onSubmit={handleSubscribe} className="flex w-full md:w-auto max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-full border border-gray-300 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="bg-green-600 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-r-full shadow-md transition-all">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 text-white bg-green-400 p-3 rounded-xl shadow hover:bg-white hover:text-green-400 transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default AboutPage;
