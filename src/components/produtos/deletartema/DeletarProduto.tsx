import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscar, deletar } from "../../../services/Service"
import Produto from "../../../models/Produtos"

function DeletarProduto() {

    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [produto, setProduto] = useState<Produto | null>(null);
  
    useEffect(() => {
      if (id) {
        buscar(`/produtos/${id}`, setProduto).catch((error) => {
          console.error("Erro ao buscar produto:", error);
        });
      }
    }, [id]);
  
    async function handleDelete() {
      if (id && produto) {
        try {
          await deletar(`/produtos/${id}`);
          alert("Produto deletado com sucesso!");
          navigate("/produtos"); 
        } catch (error) {
          alert("Erro ao deletar ao deletar produto.");
        }
      }
    }
  
    return (
      <div className="container flex flex-col items-center justify-center pt-28  ">
        {produto ? (
          <div className="w-1/2 bg-white rounded-xl shadow-md p-8">
            <h1 className="text-2xl font-semibold mb-4">Deletar Produto</h1>
            <p className="mb-4">Tem certeza que deseja deletar o produto "{produto.nome}"?</p>
            <div className="flex justify-end gap-4">
              <button
                className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-700 cursor-pointer"
                onClick={handleDelete}
              >
                Deletar
              </button>
              <button
                className="bg-gray-500 text-white py-2 px-6 rounded hover:bg-gray-700 cursor-pointer"
                onClick={() => navigate("/produtos")}
              >
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <p>Carregando produto...</p>
        )}
      </div>
    );
  }
export default DeletarProduto