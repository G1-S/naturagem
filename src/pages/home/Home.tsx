

function Home() {
  return (
    <div 
      className="relative w-full h-screen flex flex-col justify-center items-center text-white text-center"
      style={{
        backgroundImage: "url('/natureba.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        height: "100vh"
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-red-100 hover:text-green-600 transition">
          Delivery Rangers!
        </h1>
        <p className="mt-20 text-lg">
            Aqui nós fazemos de tudo para lhe enviar os melhores produtos
            </p>
        <button className="mt-6 px-6 py-3 bg-red-800 hover:bg-green-600 text-white font-bold rounded-full shadow-lg transition">
          Ofertas
        </button>
      </div>
    </div>
  );
}

export default Home;
