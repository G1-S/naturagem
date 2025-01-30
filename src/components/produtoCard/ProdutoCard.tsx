import React from 'react';

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageUrl }) => {
  return (
    <div style={styles.card}>
      <img src={imageUrl} alt={name} style={styles.image} />
      <div style={styles.info}>
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.price}>R${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '0px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    width: '250px',
    minWidth: '100px',
    margin: '0 auto',
    cursor: 'pointer',
    background: 'linear-gradient(to bottom right, #808080, #006400)', // Degradê de cinza para verde médio
    ':hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  info: {
    padding: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Fundo semi-transparente para melhor legibilidade
    borderRadius: '8px',
  },
  name: {
    fontSize: '18px',
    margin: '0 0 10px 0',
    color: '#333', // Cor do texto
  },
  price: {
    fontSize: '16px',
    color: '#555', // Cor do texto
  },
};

export default ProductCard;
