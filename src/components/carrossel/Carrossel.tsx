import React, { useState, useEffect } from 'react';
import ProductCard from '../produtoCard/ProdutoCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Carrossel() {
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
    return `rgb(${colorValue}, ${colorValue}, ${colorValue})`; // De branco para cinza
  };

  const calculateTextColor = () => {
    const maxScroll = 300;
    const scrollFactor = Math.min(scrollPosition / maxScroll, 1);
    const colorValue = Math.floor(scrollFactor * 128 + 127);
    return `rgb(${colorValue}, ${colorValue}, ${colorValue})`; // De cinza para branco
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Ajustado para melhor responsividade no desktop
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768, // Celular grande
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480, // Celular pequeno
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <>
      <div className="p-5 rounded-lg shadow-lg transition-colors duration-300" style={{ backgroundColor: calculateBgColor() }}>
        <h2 id="ofertas" className="text-3xl font-bold mb-4 text-center transition-colors duration-300" style={{ color: calculateTextColor() }}>
          Produtos
        </h2>
        <Slider {...settings}>
          <div className="p-2">
            <ProductCard name="Produto Exemplo" price={29.99} imageUrl="https://via.placeholder.com/150" />
          </div>
          <div className="p-2">
            <ProductCard name="Produto Exemplo" price={29.99} imageUrl="https://via.placeholder.com/150" />
          </div>
          <div className="p-2">
            <ProductCard name="Produto Exemplo" price={29.99} imageUrl="https://via.placeholder.com/150" />
          </div>
          <div className="p-2">
            <ProductCard name="Produto Exemplo" price={29.99} imageUrl="https://via.placeholder.com/150" />
          </div>
          <div className="p-2">
            <ProductCard name="Produto Exemplo" price={29.99} imageUrl="https://via.placeholder.com/150" />
          </div>
          <div className="p-2">
            <ProductCard name="Outro Produto" price={49.99} imageUrl="https://via.placeholder.com/150" />
          </div>
          <div className="p-2">
            <ProductCard name="Mais um Produto" price={39.99} imageUrl="https://via.placeholder.com/150" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Carrossel;
