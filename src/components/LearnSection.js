import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaArrowUp,
  FaQuoteRight,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

import img1 from "../assets/plant-1.jpg";
import img2 from "../assets/about-bg-2.jpg";
import img3 from "../assets/plant-11.jpg";
import bgImage from "../assets/learn-bg.jpg";
import aloe from "../assets/Colorful Cacti.jpg";
import cactus from "../assets/aloevera.jpg";
import succulents from "../assets/reen and Pink Succulents.jpg";
import tip1 from "../assets/gardening-banner.jpg";
import tip2 from "../assets/plant-11.jpg";
import tip3 from "../assets/plant-7.jpg";
import quoteBg from "../assets/quote-bg.jpg";

const LearnSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [activeTip, setActiveTip] = useState(0);
  const [activeQuote, setActiveQuote] = useState(0);

  const tips = [
    {
      title: "Temperature requirement",
      text: "Most plants grown as houseplants are selected because they are already adapted to growing at typical house temperatures, between 15° and 25°C...",
      image: tip1,
    },
    {
      title: "Water requirement",
      text: "The amount of water a particular houseplant needs is influenced by several factors including plant size and species, light, temperature, and humidity...",
      image: tip2,
    },
    {
      title: "Nutrition requirement",
      text: "Houseplants in a controlled greenhouse are kept in ideal conditions for rapid growth, requiring higher nutrition levels...",
      image: tip3,
    },
  ];

  const quotes = [
    {
      text: "Planting the right seeds today brings a better tomorrow. Good actions bring good results.",
    },
    {
      text: "Nature takes its time, yet everything gets done beautifully, calmly, and just when it's needed most.",
    },
    {
      text: "One small acorn can grow into a thousand forests — big things often start from something very small.",
    },
    {
      text: "Look deep into nature, and then you will understand everything better.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => setShowScrollButton(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const blogPosts = [
    {
      title: "Indoor plant Care",
      image: img1,
      description:
        "Mixing plants by height, volume and texture will make your space look fresh. But keep in mind that the fewer varieties you choose, the easier it will be to look after them. For a fail-safe selection, check out our Best Office Plants collection above.",
    },
    {
      title: "Our top tips for office greening",
      image: img2,
      description:
        "Start with the natural light. Switch off the lights during the day (if possible) to get a measure for how the sunlight fills the room, as indoor plants can't feed off light bulbs. All plants need some natural sunlight to survive, but each one has different needs — so check out the product page description for each plant before you checkout.",
    },
    {
      title: "Styling your plants",
      image: img3,
      description:
        "Look for surfaces that feel a bit sparse and could use some livening up, or frame doorways by placing tall plants on either side. If floor space is at a premium, keep your chin up: you can always use a hanging planter and a trailing plant that’ll look good at a great height.",
    },
  ];

  const cards = [
    {
      title: "Aloe Vera",
      image: aloe,
      description:
        "Aloe Vera is a succulent plant species of the genus Aloe. It grows wild in tropical, semi-tropical, and arid climates around the world. It is cultivated for agricultural and medicinal uses.The species is also used for decorative purposes and grows successfully indoors as a potted plant.",
    },
    {
      title: "Colorful Cacti",
      image: cactus,
      description:
        "Cacti occur in a wide range of shapes and sizes. Most cacti live in habitats subject to at least some drought. Many live in extremely dry environments, even being found in the Atacama Desert, one of the driest places on earth. Cacti show many adaptations to conserve water.",
    },
    {
      title: "Green and Pink Succulents",
      image: succulents,
      description:
        "Succulent plants, also known as succulents, are plants with parts that are thickened, fleshy and engorged, usually to retain water in arid climates or soil conditions. Succulent plants may store water in various structures, such as leaves and stems.",
    },
  ];

  return (
    <>
      <div className="pt-20"></div>

      {/* Header */}
      <header id="learn" 
        className="w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="bg-black bg-opacity-10 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-4 drop-shadow">
            GreenEarth Blog
          </h1>
          <p className="text-white text-sm md:text-lg max-w-2xl drop-shadow">
            Follow the latest news and find the most useful tips on our blog.
          </p>
        </div>
      </header>

      {/* Blog Section */}
      <section className="bg-gray-50 py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-2 md:mb-8">
            Best posts this week
          </h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            We bring you carefully picked high quality news and tips from all
            over the world.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform hover:scale-105"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-gray-900 text-white py-16 px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Quick tips
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            {tips.map((tip, index) => (
              <div
                key={index}
                onClick={() => setActiveTip(index)}
                className={`p-6 rounded-lg cursor-pointer transition ${
                  activeTip === index
                    ? "bg-white text-black shadow"
                    : "bg-transparent text-white"
                }`}
              >
                <h3 className="text-md md:text-lg font-semibold mb-2">
                  {tip.title}
                </h3>
                {activeTip === index && (
                  <p className="text-sm leading-relaxed">{tip.text}</p>
                )}
              </div>
            ))}
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <img
              src={tips[activeTip].image}
              alt="Tip Visual"
              className="rounded-lg shadow-lg w-full h-auto max-h-[500px] object-cover"
            />
          </div>
        </div>
        <div className="flex justify-center mt-10 space-x-2">
          {tips.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTip(index)}
              className={`w-3 h-3 rounded-full transition ${
                activeTip === index ? "bg-green-500" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Plant Cards */}
      <section className="bg-gray-100 py-16 px-4 md:px-16 relative">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-8">
            Stay Tuned!
          </h2>
          <p className="text-gray-500 mt-2">New plants are coming soon!</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section
        className="w-full bg-cover bg-center py-16 px-4 sm:px-8 flex items-center justify-center"
        style={{ backgroundImage: `url(${quoteBg})` }}
      >
        <div className="bg-white bg-opacity-80 rounded-xl shadow-xl p-8 max-w-4xl w-full text-center transition-all duration-500 ease-in-out">
          <div className="flex justify-center mb-4">
            <div className="bg-green-400 p-3 rounded-lg shadow text-white text-xl">
              <FaQuoteRight />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Quote of the day
          </h2>
          <p className="text-gray-800 text-md md:text-lg italic max-w-3xl mx-auto transition-opacity duration-300">
            "{quotes[activeQuote].text}"
          </p>
          <div className="flex justify-center mt-6 space-x-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveQuote(index)}
                className={`w-3 h-3 rounded-full transition ${
                  activeQuote === index ? "bg-green-500" : "bg-gray-400"
                }`}
              ></button>
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

export default LearnSection;
