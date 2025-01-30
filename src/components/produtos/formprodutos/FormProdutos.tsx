import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Produto from "../../../models/Produtos";
import Categoria from "../../../models/Categoria";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import Carrossel from '../../carrossel/Carrossel';

function FormProduto() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const [categoria, setCategoria] = useState<Categoria>({ id: 0, nome: '' });
    const [produto, setProduto] = useState<Produto>({} as Produto);

    const { id } = useParams<{ id: string }>();

    async function buscarProdutoPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto);
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('Erro ao buscar produtos.');
            }
        }
    }

    async function buscarCategoriaPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria);
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('Erro ao buscar categoria.');
            }
        }
    }

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias);
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('Erro ao buscar categorias.');
            }
        }
    }

    useEffect(() => {
        buscarCategorias();
        if (id !== undefined) {
            buscarProdutoPorId(id);
        }
    }, [id]);

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria.id,
        });
    }, [categoria]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria.id,
        });
    }

    function retornar() {
        navigate('/produtos');
    }

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            try {
                await atualizar(`/produtos`, produto, setProduto);
                alert('Produto atualizado com sucesso');
            } catch (error: any) {
                alert('Erro ao buscar a Postagem');
            }
        } else {
            try {
                await cadastrar(`/cadastrar`, produto, setProduto);
                alert('Produto cadastrado com sucesso');
            } catch (error: any) {
                alert('Erro ao cadastrar o produto.');
            }
        }

        setIsLoading(false);
        retornar();
    }

    const carregandoProduto = produto.nome === '';

    return (
        <>
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
                    {id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}
                </h1>
                <form className="mt-20 text-lg flex flex-col gap-4 p-4 bg-opacity-80 bg-gray-800 rounded-xl" onSubmit={gerarNovoProduto}>
                    <div className="flex flex-col gap-2 rounded-xl">
                        <label htmlFor="nome">Nome do produto: </label>
                        <input
                            type="text"
                            placeholder="Nome"
                            name="nome"
                            required
                            className="border-2 border-slate-700 rounded-xl p-2"
                            value={produto.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col gap-2 rounded-xl">
                        <p>Categoria</p>
                        <select name="tema" id="tema" className='border p-2 border-slate-800 rounded-xl'
                            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                        >
                            <option value="" selected disabled>Selecione uma categoria</option>
                            {categorias.map((categoria) => (
                                <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-2 rounded-xl">
                        <label htmlFor="foto">Foto</label>
                        <input
                            type="text"
                            placeholder="Cole o link da sua foto"
                            name="foto"
                            required
                            className="border-2 border-slate-700 rounded-xl p-2"
                            value={produto.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col gap-2 rounded-xl">
                        <label htmlFor="preco">Preço</label>
                        <input
                            type="number"
                            min="0" 
                            step="0.01"
                            placeholder="Digite o preço"
                            name="preco"
                            required
                            className="border-2 border-slate-700 rounded-xl p-2"
                            value={produto.preco}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <button
                        type='submit'
                        className='rounded-full text-slate-100 bg-red-500 hover:bg-green-500
                               w-1/2 py-2 mx-auto flex justify-center disabled:bg-slate-200'
                        disabled={carregandoProduto}
                    >
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>
                        }
                    </button>
                </form>
            </div>
        </div>
        <Carrossel/>
        </>
    );
}

export default FormProduto;
