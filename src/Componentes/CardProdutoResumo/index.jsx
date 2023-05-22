/* eslint-disable react/jsx-key */
import './CardProdutoResumo.css'
import { useContext } from 'react';
import {ResumoContexto}  from "../../Contexto/Contexto.jsx";

export default function CardProdutosResumo(){
    
    const {
        produtosSelecionadosArray,
        
      } = useContext(ResumoContexto);

    //   function limitarTexto(string, maxCaracteres) {
    //     if (string.length <= maxCaracteres) {
    //       return string;
    //     } else {
    //       return string.substring(0, maxCaracteres) + "...";
    //     }
    // }
    
    return(
       
        <div  className="cardProdutoResumo">
            {console.log(produtosSelecionadosArray)}

            {produtosSelecionadosArray ? produtosSelecionadosArray.map((produto)=>( 
                <div className='card-flag-resumo' >
                    <span title={produto.nome}  className='item-produto'>{produto.nome}</span>
                    <p className='X'>X</p>
                </div>
                
                
            )):<></>}        
        </div>
    )
}


