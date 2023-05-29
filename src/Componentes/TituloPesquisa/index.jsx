import './TituloPesquisa.css'
import { useContext } from 'react'
import { ResumoContexto } from '../../Contexto/Contexto';

export default function TituloPesquisa(){

    

    const {
        tituloPesquisa,
        setTituloPesquisa
      } = useContext(ResumoContexto);

    return(
        
        <div className="container-titulo-pesquisa">
        {/* <h1 className='container-titulo-titulo-pesquisa'>{tituloPesquisa ? tituloPesquisa : `Título da pesquisa`}</h1> */}
        <input 
        className='container-input-titulo-pesquisa' 
        placeholder='Digite o título da pesquisa' 
        maxLength={30}
        value={tituloPesquisa}
        onChange={(e)=> setTituloPesquisa(e.target.value)}
        required></input>
        </div>
    
    )
}