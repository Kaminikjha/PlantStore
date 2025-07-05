import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex flex-col z-50 text-white bg-gray-600">
      <div className="flex items-center justify-between px-6 py-6">
        <div className="text-2xl font-bold">PlantStore</div>
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li><button onClick={() => handleNavClick("/")} className="hover:underline">Home</button></li>
          <li><button onClick={() => handleNavClick("/about")} className="hover:underline">About</button></li>
          <li><button onClick={() => handleNavClick("/plants")} className="hover:underline">Plants</button></li>
          <li><button onClick={() => handleNavClick("/contact")} className="hover:underline">Contact</button></li>
          <li><button onClick={() => handleNavClick("/learn")} className="hover:underline">Learn</button></li>
        </ul>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <ul className="md:hidden bg-black bg-opacity-80 backdrop-blur-sm text-white flex flex-col items-center space-y-4 py-6">
          <li><button onClick={() => handleNavClick("/")} className="hover:underline">Home</button></li>
          <li><button onClick={() => handleNavClick("/about")} className="hover:underline">About</button></li>
          <li><button onClick={() => handleNavClick("/plants")} className="hover:underline">Plants</button></li>
          <li><button onClick={() => handleNavClick("/contact")} className="hover:underline">Contact</button></li>
          <li><button onClick={() => handleNavClick("/learn")} className="hover:underline">Learn</button></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
