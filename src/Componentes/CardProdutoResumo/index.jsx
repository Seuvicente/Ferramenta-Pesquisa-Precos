/* eslint-disable react/jsx-key */
import './CardProdutoResumo.css'
import { useContext } from 'react';
import {ResumoContexto}  from "../../Contexto/Contexto.jsx";

export default function CardProdutosResumo(){
    
    const {
        setProdutosSelecionados,
        produtosSelecionados,
        produtosSelecionadosArray,
        setProdutosSelecionadosArray
      
      } = useContext(ResumoContexto);

    const removeFlag = (e)=>{
        setProdutosSelecionadosArray(produtosSelecionadosArray.filter((x)=> x.id != e))
        setProdutosSelecionados(produtosSelecionados.filter((x)=> x != e))
    }

    
        
    return(
       
        <div  className="cardProdutoResumo">
            {produtosSelecionadosArray ? produtosSelecionadosArray.map((produto)=>( 
                <div className='card-flag-resumo' key={produto}>
                    <span title={produto.nome}  className='item-produto'>{produto.nome}</span>
                    <button onClick={()=>removeFlag(produto.id)} className='botao-remove-flag-resumo-loja' >X</button>
                </div>
            )):<></>}        
        </div>
    )
}


