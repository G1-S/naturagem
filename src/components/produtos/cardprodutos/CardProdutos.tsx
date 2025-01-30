import { Link } from 'react-router'
import Produto from '../../../models/Produtos'

interface CardProdutosProps {
    produto: Produto
}

function CardProduto({ produto }: CardProdutosProps) {
    return (
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mx-auto mt-20">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex space-x-4">
            <div>
              <div className="text-lg font-bold dark:text-white">
                {produto.nome}
              </div>
            </div>
          </div>
          <div className="flex gap-4" >
            <Link
              to={`/categorias`}
              className="text-white bg-lime-700 hover:bg-lime-900 
                      py-1 px-1 rounded"
            >
              Editar
            </Link>
  
            <Link
              to={`/deletarcategoria/${produto.id}`}
              className="text-red-500 border py-1 px-2 border-red-300 
                         rounded-md"
            >
              X
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default CardProduto;;