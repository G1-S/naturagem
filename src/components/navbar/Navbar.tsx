import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Ícones de menu e fechar

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar o menu

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

    const colorValue = Math.floor(127 + scrollFactor * 128);
    return `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
  };

  const calculateTextColor = () => {
    const maxScroll = 300;
    const scrollFactor = Math.min(scrollPosition / maxScroll, 1);
    const colorValue = Math.floor(255 - scrollFactor * 255);

    return `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-20 transition-colors duration-300"
        style={{ backgroundColor: calculateBgColor() }}
      >
        <div className="flex justify-between items-center py-2 px-4">
          <Link
            to="/home"
            className="cursor-pointer font-bold mt-1 mr-10 hover:text-green-500 transform hover:translate-y-[-2px] transition-transform duration-200"
            style={{ color: calculateTextColor() }}
          >
            Naturagen!
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link
              to="/produtos"
              className="cursor-pointer font-bold mt-1 hover:text-green-500 transform hover:translate-y-[-2px] transition-transform duration-200"
              style={{ color: calculateTextColor() }}
            >
              nossos produtos
            </Link>
            <Link
              to="/cadastrarprodutos"
              className="cursor-pointer font-bold mt-1 hover:text-green-500 transform hover:translate-y-[-2px] transition-transform duration-200"
              style={{ color: calculateTextColor() }}
            >
              cadastro de produtos
            </Link>
            <li
              className="cursor-pointer font-bold mt-1 hover:text-green-500 transform hover:translate-y-[-2px] transition-transform duration-200"
              style={{ color: calculateTextColor() }}
            >
              pedidos
            </li>
            <Link
              to="/cadastrarcategoria"
              className="cursor-pointer font-bold mt-1 hover:text-green-500 transform hover:translate-y-[-2px] transition-transform duration-200"
              style={{ color: calculateTextColor() }}
            >
              cadastro de categorias
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl focus:outline-none">
              {menuOpen ? <FiX style={{ color: calculateTextColor() }} /> : <FiMenu style={{ color: calculateTextColor() }} />}

            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-2 px-4 pb-4">
            <Link
              to="/produtos"
              className="cursor-pointer font-bold mt-1 hover:text-green-500"
              style={{ color: calculateTextColor() }}
              onClick={() => setMenuOpen(false)}
            >
              nossos produtos
            </Link>
            <Link
              to="/cadastrarproduto"
              className="cursor-pointer font-bold mt-1 hover:text-green-500"
              style={{ color: calculateTextColor() }}
              onClick={() => setMenuOpen(false)}
            >
              cadastro de produtos
            </Link>
            <li
              className="cursor-pointer font-bold mt-1 hover:text-green-500"
              style={{ color: calculateTextColor() }}
              onClick={() => setMenuOpen(false)}
            >
              pedidos
            </li>
            <li
              className="cursor-pointer font-bold mt-1 hover:text-green-500"
              style={{ color: calculateTextColor() }}
              onClick={() => setMenuOpen(false)}
            >
              categorias
            </li>
            <li
              className="cursor-pointer font-bold mt-1 hover:text-green-500"
              style={{ color: calculateTextColor() }}
              onClick={() => setMenuOpen(false)}
            >
              cadastrar categorias
            </li>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
