import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  return (
    <div 
      className="relative w-full h-screen flex flex-col justify-center items-center text-white text-center"
      style={{
        backgroundImage: "url('/fotohome.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        height: "100vh"
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold hover:text-orange-500 transition">
          We are Shape One!
        </h1>
        <p className="mt-10 text-lg">
            <p>  Nós somos a Shape One, somos focados em acessibilidade e crescimento pessoal através de exercícios. Nosso objetivo é capacitar indivíduos de todas as idades e habilidades a alcançarem o seu potencial máximo, promovendo um estilo de vida saudável e equilibrado.</p>
          </p>
        <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-lg transition">
          Veja nossos treinos
        </button>
      </div>
    </div>
  );
}

export default Home;
