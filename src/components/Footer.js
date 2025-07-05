import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-800 text-white py-8 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-6">
        <div className="text-center md:text-left text-sm font-medium">
          GreenEarth Plant Store © 2025
        </div>
        <div className="flex justify-center space-x-6 text-sm font-medium">
          <button onClick={() => handleNavClick("/")} className="hover:text-green-400 transition">Home</button>
          <button onClick={() => handleNavClick("/about")} className="hover:text-green-400 transition">About</button>
          <button onClick={() => handleNavClick("/plants")} className="hover:text-green-400 transition">Plants</button>
          <button onClick={() => handleNavClick("/contact")} className="hover:text-green-400 transition">Contact</button>
        </div>
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="#" className="bg-gradient-to-b from-green-400 to-green-600 p-2 rounded-md"><FaFacebookF /></a>
          <a href="#" className="bg-gradient-to-b from-green-400 to-green-600 p-2 rounded-md"><FaTwitter /></a>
          <a href="#" className="bg-gradient-to-b from-green-400 to-green-600 p-2 rounded-md"><FaInstagram /></a>
          <a href="#" className="bg-gradient-to-b from-green-400 to-green-600 p-2 rounded-md"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
