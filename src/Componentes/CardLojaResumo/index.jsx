import { useContext } from 'react'
import { ResumoContexto } from '../../Contexto/Contexto'
import './CardLojaResumo.css'

export default function CardLojaResumo(){
    const{listaLojas} = useContext(ResumoContexto)
    
    return(
        
        <div className="cardlojaresumo">
          {listaLojas?listaLojas.map((loja)=>(
            <span className='item-loja'key={loja.codigo} > {loja} <span className='X'>X</span></span>
          )):<></>}
                    
        </div>
    )
}