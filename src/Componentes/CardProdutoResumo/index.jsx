/* eslint-disable react/jsx-key */
import './CardProdutoResumo.css'
import { useContext } from 'react';
import {ResumoContexto}  from "../../Contexto/Contexto.jsx";

export default function CardProdutosResumo(){
    
    const {
        produtosSelecionadosArray,
        produtosSelecionados
      } = useContext(ResumoContexto);
    
    return(
       
        <div  className="cardProdutoResumo">
            {console.log(produtosSelecionadosArray)}

            {produtosSelecionadosArray ? produtosSelecionadosArray.map((produto)=>( 
                
                <span className='item-produto'>{produto.nome}<p className='X'>X</p></span>
                
                
            )):<></>}        
        </div>
    )
}


