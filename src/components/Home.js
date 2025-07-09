import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaPlane,
  FaDollarSign,
  FaHeadset,
  FaArrowUp,
} from "react-icons/fa";
import Slider from "react-slick";
import bgImage from "../assets/background.jpg";
import bgQuoteImage from "../assets/gardening-banner.jpg";
import cactus from "../assets/plant.jpg";
import fern from "../assets/plant-2.jpg";
import succulent from "../assets/plant-1.jpg";
import aloe from "../assets/plant-3.jpg";
import snakePlant from "../assets/plant-4.jpg";
import peaceLily from "../assets/plant-5.jpg";
import plantImage from "../assets/banner-img.jpg";
import bgWood from "../assets/wood-bg.jpg";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const plants = [
    { id: "01", name: "Potted Houseplant", discount: "10% off", image: cactus },
    { id: "02", name: "Potted Houseplant", discount: "15% off", image: fern },
    { id: "03", name: "Potted Houseplant", discount: "30% off", image: succulent },
    { id: "04", name: "Potted Houseplant", discount: "20% off", image: aloe },
    { id: "05", name: "Potted Houseplant", discount: "25% off", image: snakePlant },
    { id: "06", name: "Potted Houseplant", discount: "35% off", image: peaceLily },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full relative">
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

        <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-24 text-white max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">GreenEarth</h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Plant Store</h2>
          <hr className=" border-2 border-white w-auto mb-4 mr-24 md:mr-0" />
          <p className="text-lg md:text-xl font-light pr-8">
            Take your piece of nature filled with love and care.
          </p>
        </div>

        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 space-y-4 text-white">
          <a href="#" className="p-3 md:p-4 text-xl md:text-2xl rounded-full hover:bg-opacity-50 transition">
            <FaFacebookF className="animate-pulse"/>
          </a>
          <a href="#" className="p-3 md:p-4 text-xl md:text-2xl rounded-full hover:bg-opacity-50 transition">
            <FaTwitter className="animate-pulse" />
          </a>
          <a href="#" className="p-3 md:p-4 text-xl md:text-2xl rounded-full hover:bg-opacity-50 transition">
            <FaYoutube className="animate-pulse" />
          </a>
          <a href="#" className="p-3 md:p-4 text-xl md:text-2xl rounded-full hover:bg-opacity-50 transition">
            <FaInstagram className="animate-pulse" />
          </a>
        </div>
      </div>

      {/* About Section */}
      <section  className="bg-[#d9eddc] py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 leading-snug">
              We are deeply in love with <br /> the green earth
            </h2>
          </div>
          <div className="hidden md:block w-px bg-green-600 h-40"></div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              At GreenEarth Plant Store, our mission is to bring people closer to nature. We make it easy for you to find and order your favorite plants with just one click. While your satisfaction is our top priority, we’re also here to guide you in taking care of your plants every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <button onClick={() => handleNavClick("/about")} className="bg-green-500  hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md transition-all">
                About us
              </button>
              <button onClick={() => handleNavClick("/plants")} className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 px-6 py-2 rounded-lg shadow-sm transition-all">
                Our plants
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section
        className="w-full bg-cover bg-center py-24 px-4 text-center text-white relative"
        style={{ backgroundImage: `url(${bgQuoteImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative max-w-4xl mx-auto z-10">
          <h2 className="text-xl font-bold mb-4">
            Working with plants will teach you all other social commitments in a soothing way
          </h2>
          <div className="w-16 h-1 mx-auto bg-green-400 mb-2"></div>
          <p className="text-sm sm:text-base font-light">Kamini Jha</p>
        </div>
      </section>

      {/* Offer Section */}
      <section className="bg-gray-100 py-12 px-4 md:px-10">
        <h1 className="text-center text-2xl md:text-4xl text-green-600 font-medium my-5 md:my-10">
          Sale
        </h1>
        <h3 className="text-center text-gray-600 font-medium mb-10">
          Only for a month!
        </h3>
        <Slider {...sliderSettings}>
          {plants.map((plant) => (
            <div key={plant.id} className="px-2 md:px-4">
              <div className="relative bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300">
                <div className="absolute top-4 left-4 bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-lg z-10">
                  {plant.discount}
                </div>
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-72 object-cover rounded-t-xl"
                />
                <div className="px-6 py-5 text-center">
                  <p className="text-4xl font-bold text-left text-white -mt-14 ml-2 z-10 absolute">
                    {plant.id}
                  </p>
                  <p className="text-gray-700 my-8">{plant.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Seed Section */}
      <section
        className="w-full bg-cover bg-center py-16 px-6 md:px-20 bg-opacity-95"
        style={{ backgroundImage: `url(${bgWood})` }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We will plant any seed you want
            </h2>
            <p className="text-gray-800 text-base md:text-lg mb-6 leading-relaxed">
              The whole process will be supervised and managed by our specialists to ensure the success of the project. Taking the whole responsibility, we'll make sure you are fully satisfied with what we have as a final result.
            </p>
            <button onClick={() => handleNavClick("/plants")} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md transition-all">
              See more
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={plantImage}
              alt="Potted Plants"
              className="rounded-2xl w-full max-w-md object-cover shadow-md transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#d9eddc] py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-b from-green-400 to-green-600 text-white p-4 rounded-lg shadow-md animate-bounce">
              <FaPlane size={32} className="animate-spin-slow" />
            </div>
            <p className="mt-4 font-semibold text-gray-800">Free shipping</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-b from-green-400 to-green-600 text-white p-4 rounded-lg shadow-md animate-bounce">
              <FaDollarSign size={32} className="animate-spin-slow" />
            </div>
            <p className="mt-4 font-semibold text-gray-800">Money back guarantee</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-b from-green-400 to-green-600 text-white p-4 rounded-lg shadow-md animate-bounce">
              <FaHeadset size={32} className="animate-spin-slow" />
            </div>
            <p className="mt-4 font-semibold text-gray-800">24/7 Customer support</p>
          </div>
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
    </div>
  );
};

export default HomePage;
