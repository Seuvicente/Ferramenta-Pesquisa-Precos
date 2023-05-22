import './CardProdutoResumo.css'
import { useContext } from 'react';
import {ResumoContexto}  from "../../Contexto/Contexto.jsx";

export default function CardProdutosResumo(){
    
    const {
        categoriaSelecionada,
        setCategoriaSelecionada,
        produtosSelecionados,
        setProdutosSelecionados,
      } = useContext(ResumoContexto);
    
    return(
       
        <div  className="cardProdutoResumo">
            {produtosSelecionados ? produtosSelecionados.map((produto)=>( 
                <ul >
                    <li className='item-produto'>{produto}<p className='X'>X</p></li>
                    {console.log("Produto :"+ produto)}
                    
                 
                </ul>
            )):<></>}        
        </div>
    )
}


const objeto = {
    lojas:[],
    dateIni:"",
    dateFin:"",
    produtos:[],
    respostas:[],
    
} 