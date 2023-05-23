import { useContext} from 'react'
import { ResumoContexto } from '../../Contexto/Contexto'
import './SeletorPeriodo.css'


export default function SeletorPeriodo(){
    
    const {dataInicio, setDataInicio, dataFim, setDataFim} = useContext(ResumoContexto)
     
    return(
        <div className="container-datas">
            <div className="dataInicio">
                <input 
                 type="date"
                 value={dataInicio}
                 id='dataInicio'
                 className='input-data' 
                 onChange={e => setDataInicio(e.target.value)} 
                 />
                <label htmlFor="dataInicio" className="label">Inicio Pesquisa</label>
            </div>
            <div className="dataFinal">
                <input 
                type="date" 
                value={dataFim} 
                id='dataFinal' 
                className='input-data' 
                onChange={e => setDataFim(e.target.value)}
                />
                <label htmlFor="dataFinal" className="label">Fim Pesquisa</label>
            </div>
        </div>
    )
}
