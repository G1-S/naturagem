import Carrossel from "../../carrossel/Carrossel";

function FormProduto() {
    return (
        <>
            <div
                className="relative w-full h-screen flex flex-col justify-center items-center text-white text-center"
                style={{
                backgroundImage: "url('/amazon.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "left",
                backgroundRepeat: "no-repeat",
                height: "100vh"
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div> 
                
                <div className="relative z-10 max-w-4xl px-6"> 
                <h1 className="text-4xl md:text-5xl font-bold text-red-100 hover:text-green-600 transition mb-10">Cadastrar Produto</h1>
        
                <form className="flex flex-col w-full max-w-lg gap-4"> 
                    <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Nome do produto</label>
                    <input
                        type="text"
                        placeholder="Nome"
                        name="titulo"
                        required
                        className="border-2 border-slate-700 rounded-full p-2 w-full" 
                    />
                    </div>
                    <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Categoria</label>
                    <input
                        type="text"
                        placeholder="Categoria"
                        name="categoria"
                        required
                        className="border-2 border-slate-700 rounded-full p-2 w-full" 
                    />
                    </div>
                    <div className="flex flex-col gap-2">
                    <label htmlFor="foto">Foto</label>
                    <input
                        type="text"
                        placeholder="Foto"
                        name="foto"
                        required
                        className="border-2 border-slate-700 rounded-full p-2 w-full" 
                    />
                    </div>
                    <div className="flex flex-col gap-2">
                    <label htmlFor="preco">Preço</label>
                    <input
                        type="text"
                        placeholder="Preço"
                        name="preco"
                        required
                        className="border-2 border-slate-700 rounded-full p-2 w-full" 
                    />
                    </div>
                    <button
                    type='submit'
                    className="mt-6 px-6 py-3 bg-red-800 hover:bg-green-600 text-white font-bold rounded-full shadow-lg transition"
                >
                    Cadastrar
                    </button>
                </form>
                </div>
            </div>

            <Carrossel/>
        </>
    );
  }
  
  export default FormProduto;
  