import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormCategoria() {
    const navigate = useNavigate();
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria);
        } catch (error) {
            console.error("Erro ao buscar categoria", error);
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    }

    function retornar() {
        navigate("/categorias");
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (id !== undefined) {
                await atualizar(`/categorias`, categoria, setCategoria);
                alert("A categoria foi atualizado com sucesso!");
            } else {
                await cadastrar(`/categorias`, categoria, setCategoria);
                alert("A categoria foi cadastrado com sucesso!");
            }
        } catch (error) {
            alert("Erro ao salvar a categoria.");
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div 
        className="relative w-full h-screen flex flex-col justify-center items-center text-white text-center rounded-xl"
        style={{
          backgroundImage: "url('/amazon.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          height: "100vh"
        }}
        >
            <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

            <div className="relative z-10 max-w-4xl px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-red-100 hover:text-green-600 transition">
                    {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
                </h1>
                <form className="mt-20 text-lg flex flex-col gap-4 p-4 bg-opacity-80 bg-gray-800 rounded-xl" onSubmit={gerarNovaCategoria}>
                    <div className="flex flex-col gap-2 rounded-xl">
                        <label htmlFor="descricao">Nome da categoria</label>
                        <input
                            type="text"
                            placeholder="Coloque aqui o nome da categoria"
                            name="nome"
                            className="border-2 border-slate-700 rounded-xl p-2"
                            value={categoria.nome || ""}
                            onChange={atualizarEstado}
                        />
                    </div>
                    <button
                        className="rounded-full text-slate-100 bg-red-500 
                                   hover:bg-green-500 w-1/2 py-2 mx-auto flex justify-center"
                        type="submit">
                        {isLoading ? (
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            />
                        ) : (
                            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormCategoria;
