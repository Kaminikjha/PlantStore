import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaArrowUp,
  FaLock,
} from "react-icons/fa";

import newArrivalImg from "../assets/plant-img.jpg";
import plantImage from "../assets/stawberry.jpg";
import img1 from "../assets/plant-gallery.jpg";
import img2 from "../assets/plant-gallery-1.jpg";
import img3 from "../assets/plant-gallery-2.jpg";
import img4 from "../assets/plant-gallery-3.jpg";
import img5 from "../assets/plant-gallery-4.jpg";
import label1 from "../assets/plant-2.jpg";
import label2 from "../assets/plant-1.jpg";
import label3 from "../assets/plant-2.jpg";
import label4 from "../assets/plant-1.jpg";
import greenBg from "../assets/green-bg.png";
import news1 from "../assets/tips-plant.jpg";
import news2 from "../assets/plant-gallery-3.jpg";
import news3 from "../assets/plant-4.jpg";

import plant1 from "../assets/beautiful plants.jpg";
import plant2 from "../assets/beautiful plant-5.jpg";
import plant3 from "../assets/beautiful plant-2.jpg";
import plant4 from "../assets/beautiful plant-3.jpg";
import plant5 from "../assets/beautiful plant-4.jpg";
import plant6 from "../assets/beautiful plant-5.jpg";



const plants = [
  { id: 1, image: plant1, price: "$50.00", code: "Code 001" },
  { id: 2, image: plant2, price: "$50.00", code: "Code 002" },
  { id: 3, image: plant3, price: "$50.00", code: "Code 003" },
  { id: 4, image: plant4, price: "$50.00", code: "Code 051"},
  { id: 5, image: plant5, price: "$50.00", code: "Code 052" },
  { id: 6, image: plant6, price: "$50.00", code: "Code 071" },
];

const PlantSection = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

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


  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
  
    const handleNavClick = (path) => {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMenuOpen(false);
    };

  return (
    <>
      <div className="pt-20"></div>

      {/* Quote Section */}
      <section className="bg-[#d9eddc] text-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Like people, plants respond to extra attention
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">- Kamini Jha</p>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="border-l-8 border-green-600 pl-6">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              New arrivals
            </h2>
            <p className="text-green-600 font-semibold text-sm md:text-base">
              New arrivals every week
            </p>
            <div className="mt-8 h-1 w-28 bg-green-600"></div>
          </div>
          <div className="w-full">
            <img
              src={newArrivalImg}
              alt="New Arrival Plant"
              className="w-full h-auto rounded-md shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="pb-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5 auto-rows-[200px] md:auto-rows-[250px]">
          <div className="row-span-2 transform transition duration-500 hover:scale-105">
            <img src={img1} alt="Gallery 1" className="w-full h-full object-cover rounded-lg shadow" />
          </div>
          <div className="transform transition duration-500 hover:scale-105">
            <img src={img2} alt="Gallery 2" className="w-full h-full object-cover rounded-lg shadow" />
          </div>
          <div className="transform transition duration-500 hover:scale-105">
            <img src={img3} alt="Gallery 3" className="w-full h-full object-cover rounded-lg shadow" />
          </div>
          <div className="row-span-2 transform transition duration-500 hover:scale-105">
            <img src={img4} alt="Gallery 4" className="w-full h-full object-cover rounded-lg shadow" />
          </div>
          <div className="col-span-1 sm:col-span-2 transform transition duration-500 hover:scale-105">
            <img src={img5} alt="Gallery 5" className="w-full h-full object-cover rounded-lg shadow" />
          </div>
        </div>
      </section>

      {/* Labelled Gallery Section */}
      <section className="bg-gray-50 py-12 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Completed projects</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative">
            <img src={label1} alt="Plant 1" className="w-full h-full object-cover rounded-xl shadow aspect-[4/5]" />
            <span className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full">Houseplant</span>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-6">
            <div className="relative">
              <img src={label2} alt="Plant 2" className="w-full h-full object-cover rounded-xl shadow aspect-[1/1]" />
              <span className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full">Houseplant</span>
            </div>
            <div className="relative">
              <img src={label3} alt="Plant 3" className="w-full h-full object-cover rounded-xl shadow aspect-[1/1]" />
              <span className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full">Houseplant</span>
            </div>
            <div className="relative col-span-2">
              <img src={label4} alt="Plant 4" className="w-full h-full object-cover rounded-xl shadow aspect-[4/2]" />
              <span className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full">Houseplant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Deal of the Day */}
      <section className="bg-green-100 px-6 py-12 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Deal of the day</h2>
            <p className="text-gray-700 text-lg mb-2">Only today purchase the Succulent plant in a jar for only <strong>$35</strong>.</p>
            <p className="text-gray-700 text-base">Succulents are plants with parts that are thickened, fleshy and engorged, usually to retain water in arid climates or soil conditions.</p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img src={plantImage} alt="Succulent Plant" className="rounded-xl h-80 object-cover shadow-lg transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
      </section>

      {/* Plant Gallery */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">Our beautiful plants</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {plants.map((plant) => (
              <div key={plant.id} className="relative rounded-lg overflow-hidden shadow-lg group">
                <img src={plant.image} alt={`plant-${plant.id}`} className="w-full h-full object-cover" />
                {plant.price && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-lg font-semibold">From {plant.price}</p>
                    <p className="text-sm">{plant.code}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Support */}
      <section className="bg-cover bg-center bg-no-repeat py-20 px-4" style={{ backgroundImage: `url(${greenBg})` }}>
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl px-6 py-12 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-green-500 p-4 rounded-md shadow-md">
              <FaLock className="text-white text-xl animate-bounce" />
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            To place an order drop us a line and our support team will get back in touch as soon as possible.
          </h2>
          <Link to="/contact" className="text-green-600 font-semibold inline-flex items-center gap-1 hover:underline">
            Get in touch <span>→</span>
          </Link>
        </div>
      </section>

      {/* News and Tips */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">News and tips</h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">Latest news from our blog.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{ img: news1, title: "How to properly pot a houseplant",  desc: "A houseplant is a plant that is grown indoors in places such as residences and offices. Major factors that should be considered when caring for houseplants are moisture, light, soil mixture, temperature, humidity, fertilizers, potting, and pest control. The following includes some general guidelines for healthy houseplant care." },
              { img: news2, title: "Top 5 Plant Care Tips", desc: "Houseplant care is the act of growing houseplants.Most plants grown as houseplants are selected because they are already adapted to growing at typical house temperatures, between 15- 25°C. Exceptions do occur, and some plants require chilling periods at lower temperatures in winter when less light is available." },
              { img: news3, title: "Guide to Propagating Succulents",  desc: "Succulents are plants with parts that are thickened, fleshy and engorged, usually to retain water in arid climates or soil conditions. Succulent plants may store water in various structures, such as leaves and stems. Succulents have the ability to thrive on limited water sources, such as mist and dew." }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow hover:shadow-lg transition">
                <img src={item.img} alt={item.title} className="w-full h-56 object-cover rounded-t-xl" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                  <button onClick={() => handleNavClick("/learn")} className="text-green-600 text-sm mt-4 inline-block hover:underline">Learn more →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

export default PlantSection;
