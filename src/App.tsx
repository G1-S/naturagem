import React from 'react';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Carrossel from './components/carrossel/Carrossel';

function App() {
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
        <Navbar />
        <Home />
        <Carrossel/>
    </>
  );
}

const styles = {
  container: {
    backgroundColor: 'gray',
    padding: '20px',
  },
};

export default App;