import CardCategorias from "../cardcategorias/CardCategorias";
import { useState, useEffect } from "react";
import Categoria from "../../../models/Categoria";  
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";

function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try {
            const resposta = await buscar("/categorias", setCategorias);
            console.log("Categorias carregadas:", resposta); 
        } catch (error) {
            console.error("Erro ao buscar categorias", error);
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, []);

    return (
        <>
            {categorias.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categorias.map((categoria) => ( 
                    <CardCategorias key={categoria.id} categoria={categoria} />
                ))}
            </div>
        </>
    );
}

export default ListaCategorias;
