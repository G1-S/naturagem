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
                <h1 className="text-4xl md:text-5xl font-bold">
                    Lorem ipsum dolor sit amet. In quas quam sed rerum nesciunt.
                </h1>
                <p className="mt-4 text-lg">
                    Lorem ipsum dolor sit amet, in quas quam sed rerum nesciunt. Lorem ipsum dolor sit amet, in quas quam sed rerum nesciunt.
                </p>
                <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-lg transition">
                    Veja nossos treinos
                </button>
            </div>
        </div>
    );
}

export default Home;


