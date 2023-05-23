import { useContext } from 'react'
import { ResumoContexto } from '../../Contexto/Contexto'
import './CardLojaResumo.css'

export default function CardLojaResumo(){
    const{listaLojas, setListaLojas} = useContext(ResumoContexto)
    
    const removeFlag = (e)=>{
      setListaLojas(listaLojas.filter((x)=>x != e))
    }


    return(
        
        <div className="cardlojaresumo">
          {listaLojas?listaLojas.map((loja)=>(
            <>
              <div className='item-loja'key={loja.codigo} > {loja}</div>
              <button onClick={()=> removeFlag(loja)} className='X'>X</button>
            </>
            
          )):<></>}
                    
        </div>
    )
}