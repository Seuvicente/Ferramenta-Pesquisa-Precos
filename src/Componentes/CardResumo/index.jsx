import './CardResumo.css'
import icone from '../../assets/vector.png'

export default function CardResumo(){
    return(
        <div className="container-principal">
            <div className="container-cabecalho">
                <h1>Resumo</h1>
                <img className='icone-resumo' src={icone}/>
            </div>
            <div className="container-infos">
                <div className="container-info-topo">
                    <p>Período: 17/05/2023 a 17/05/2023</p>
                    <p>Categoria:   Categoria</p>
                </div>
                <div className="container-info-lojas">
                    <h2>Lojas</h2>
                </div>
                <div className="container-info-produtos">
                    <h2>Produtos</h2>
                </div>
            </div>

        <button>Confirmar</button>    
        </div>
    )
}