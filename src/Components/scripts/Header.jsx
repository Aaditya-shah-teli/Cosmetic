import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-pink-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <button
          className="md:hidden p-2 rounded-lg hover:bg-pink-700 transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul
          className={`md:flex md:space-x-6 absolute md:static bg-pink-600 md:bg-transparent w-full md:w-auto left-0 top-16 md:top-auto px-6 md:px-0 py-4 md:py-0 transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              to="/"
              className="block py-2 md:py-0 text-xl font-semibold hover:text-pink-200 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block py-2 md:py-0 text-xl font-semibold hover:text-pink-200 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="block py-2 md:py-0 text-xl font-semibold hover:text-pink-200 transition duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/social"
              className="block py-2 md:py-0 text-xl font-semibold hover:text-pink-200 transition duration-300"
            >
              Social
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};