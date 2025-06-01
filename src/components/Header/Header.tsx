import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { title: "About", link: "about", id: 0 },
  { title: "Skills", link: "skills", id: 1 },
  { title: "Projects", link: "projects", id: 2 },
  { title: "Contact", link: "contact", id: 3 },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-gradient-to-r h-18 from-gray-100 via-gray-200 to-gray-300 shadow-md fixed top-0 left-0 w-full z-50 py-4">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center space-x-2"
        >
          <img src="./logo.png" alt="logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-gray-800">My Portfolio</span>
        </ScrollLink>

        <ul className="hidden md:flex space-x-8">
          {navLinks.map((item) => (
            <li key={item.id}>
              <ScrollLink
                to={item.link}
                className="text-gray-800 text-lg hover:text-gray-500 font-medium cursor-pointer transition duration-300"
                activeClass="text-blue-600 font-semibold"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                {item.title}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-gray-700"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
          {navLinks.map((item) => (
            <li key={item.id}>
              <ScrollLink
                to={item.link}
                className="block text-gray-800 hover:text-blue-600 font-medium cursor-pointer transition duration-300"
                activeClass="text-blue-600 font-semibold underline underline-offset-4"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeMenu}
              >
                {item.title}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
