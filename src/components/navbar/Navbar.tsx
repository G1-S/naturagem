import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateBgColor = () => {
    const maxScroll = 300;
    const scrollFactor = Math.min(scrollPosition / maxScroll, 1);
    const colorValue = Math.floor(255 - scrollFactor * 128);
    return `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-10 transition-colors duration-300"
        style={{ backgroundColor: calculateBgColor() }}
      >
        <ul className="flex justify-end space-x-4 py-2 px-4">
          <li><Link to='/home' className="text-black hover:text-orange-500 cursor-pointer font-bold mt-1">naturagem</Link></li>
          <li><Link to='/produtos' className="text-black hover:text-orange-500 cursor-pointer font-bold mt-1">nossos produtos</Link></li>
          <li><Link to='/cadastrarproduto' className="text-black hover:text-orange-500 cursor-pointer font-bold mt-1">cadastro de produtos</Link></li>
          <li><Link to='/Categorias' className="text-black hover:text-orange-500 cursor-pointer font-bold mt-1">Categorias</Link></li>

          <li className="ml-8 flex items-center space-x-0">
            <button className="bg-gray-300 text-black hover:bg-orange-500 rounded-l-full px-4 py-1">
              Create account
            </button>
            <button className="bg-black text-white hover:bg-orange-500 rounded-r-full px-4 py-1">
              Log in
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
