import { useContext } from 'react'
import { ResumoContexto } from '../../Contexto/Contexto'
import './CardLojaResumo.css'

export default function CardLojaResumo(){
    const{listaLojas, setListaLojas} = useContext(ResumoContexto)
    
    const removeFlag = (e)=>{
      setListaLojas(listaLojas.filter((x)=>x != e))
    }

      function limitarTexto(string, maxCaracteres) {
        if (string.length <= maxCaracteres) {
          return string;
        } else {
          return string.substring(0, maxCaracteres);
        }
    }

    return(
        
        <div className="cardlojaresumo">
          {listaLojas?listaLojas.map((loja)=>(
            <>
              <div className='item-loja'key={loja.codigo} > {limitarTexto(loja,5)}
              <button onClick={()=> removeFlag(loja)} className='botao-remove-flag-resumo-loja'>X</button>
              </div>
            </>
            
          )):<></>}
                    
        </div>
    )
}