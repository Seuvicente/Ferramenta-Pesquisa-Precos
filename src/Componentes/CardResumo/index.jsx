import './CardResumo.css'
import icone from '../../assets/vector.png'
import CardLojaResumo from '../CardLojaResumo'
import CardProdutosResumo from '../CardProdutoResumo'
import { useContext } from 'react'
import { ResumoContexto } from '../../Contexto/Contexto.jsx'

export default function CardResumo(){
    const {
        categoriaSelecionada,
        dataInicio,
        dataFim
      } = useContext(ResumoContexto);


    

    return(
        <div className="container-principal">
            <div className="container-cabecalho">
                <h1>Resumo</h1>
                <img className='icone-resumo' src={icone}/>
            </div>
            <div className="container-infos">
                <div className="container-info-topo">
                   <h2 className='titulo-flag-resumo'>Período: <span className='flag-periodo'>
                    {dataInicio + " ---- "}{dataFim}</span></h2>
                  <h2 className='titulo-flag-resumo'>Categoria: <sapan className='flag-categoria'>{categoriaSelecionada}</sapan></h2>
                </div>
                    <div className="container-infos-Componentes">
                    <div className="container-info-lojas">
                        <h2 className='titulo-loja-resumo'>Lojas</h2>
                        <CardLojaResumo/>
                    </div>
                    <div className="container-info-produtos">
                        <h2>Produtos</h2>
                        <CardProdutosResumo/>
                    </div>
                </div>
            </div>

        <button>Confirmar</button>    
        </div>
    )
}