import React from 'react'
import ProductCard from '../produtoCard/ProdutoCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Carrossel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
    };
  return (
    <>
    <div style={styles.container}>
        <h2>Produtos</h2>
        <Slider {...settings}>
          <div>
            <ProductCard name="Produto Exemplo" price={29.99} imageUrl="https://via.placeholder.com/150" />
          </div>
          <div>
            <ProductCard name="Produto Exemplo" price={29.99} imageUrl="https://via.placeholder.com/150" />
          </div>
          <div>
            <ProductCard name="Produto Exemplo" price={29.99} imageUrl="https://via.placeholder.com/150" />
          </div>
          <div>
            <ProductCard name="Produto Exemplo" price={29.99} imageUrl="https://via.placeholder.com/150" />
          </div>
          <div>
            <ProductCard name="Produto Exemplo" price={29.99} imageUrl="https://via.placeholder.com/150" />
          </div>
          <div>
            <ProductCard name="Outro Produto" price={49.99} imageUrl="https://via.placeholder.com/150" />
          </div>
          <div>
            <ProductCard name="Mais um Produto" price={39.99} imageUrl="https://via.placeholder.com/150" />
          </div>
        </Slider>
      </div>
    </>
  )
}

const styles = {
    container: {
      backgroundColor: 'darkgray',
      padding: '20px',
    },
  };

export default Carrossel