import { useEffect, useState } from "react";
import { MutatingDots } from "react-loader-spinner";
import Produto from "../../../models/Produtos"; 
import CardProdutos from "../cardprodutos/CardProdutos";
import { buscar } from "../../../services/Service";

function ListaProdutos() {

  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function buscarProdutos() {
    try {
      await buscar("/produtos", setProdutos);
      console.log("Produtos encontrados:", produtos);
    } catch (error) {
      console.error("Erro ao buscar produtos", error);
    }
  }
  useEffect(() => {
    buscarProdutos();
  }, []);
return (
  <>
    {produtos.length === 0 ? (
      <div className="flex justify-center w-full pt-28">
        <MutatingDots color="#000000" secondaryColor="#5a5a5a" />
      </div>
    ) : (
      <div className="flex justify-center w-full my-4 pt-28">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtos.map((produto) => (
              <CardProdutos key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      </div>
    )}
  </>
  );
}

export default ListaProdutos;