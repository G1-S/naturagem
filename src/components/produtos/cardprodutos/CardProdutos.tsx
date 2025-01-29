import { Link } from 'react-router-dom'
import Produto from '../../../models/Produtos';

interface CardProdutosProps{
    produto: Produto;
}

function CardProdutos({produto}: CardProdutosProps){

    return(
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
        <div>
            <div className='p-4'>
                <h4 className='text-lg font-semibold uppercase'>{produto.nome}</h4>
                <p>Categoria: {produto.categoria}</p>
                <p>Preço: {produto.preco}</p>
            </div>
        </div>
        <div className="flex">
                <Link to={`/editarproduto/${produto.id}`} 
                    className='w-full text-slate-100 bg-blue-900 hover:bg-blue-700 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarproduto/${produto.id}`}  className='text-slate-100 bg-red-800 hover:bg-red-700 w-full 
                    flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
    </div>
    );
}

export default CardProdutos;