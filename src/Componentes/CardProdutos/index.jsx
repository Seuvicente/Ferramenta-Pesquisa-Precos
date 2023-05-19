import './CardProdutos.css'
import Categorias from './componenteProdutos/Categorias'

export default function CardProdutos(){
        return (
    
            <div className='globalTelaProdutos'>
                <div className='telaProdutos'>
                    <p className='produtosText'>Produtos</p>
                    <div className="styleProduto">
                        <Categorias />
                        
                    </div>
                </div>
            </div>
        )
}