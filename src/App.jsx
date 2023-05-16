import SeletorPeriodo from './Componentes/SeletorPeriodo/index'
import './App.css'
import CardLojas from './Componentes/CardLojas'
import CardProdutos from './Componentes/CardProdutos'
import CardResumo from './Componentes/CardResumo'

function App() {
  

  return (
    <div className='pageView'>
      <div className='cabecalho'>
        <p className='cabecalho-titulo'>Pesquisa</p>
      </div>
      <section className='container'>
        <div className='container-montagem'>
             <div className="selecao-periodo">
               {/* Insira aqui o componente de selecao de periodo */}
               <SeletorPeriodo/>
             </div>
             <div className="cards-montagem">
               { /* Insira aqui os componente CardLoja */ }
               <CardLojas/>
               { /* Insira aqui os componente CardLoja */ }
               <CardProdutos/>
             </div>
        </div>
        <div className='container-resumo'>
          {/* Insira aqui o componente Resumo */}
          <CardResumo/>
        </div>
      
      </section>
    </div>
  )
}

export default App
