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
               <SeletorPeriodo/>
             </div>
             <div className="cards-montagem">
               <CardLojas/>
               <CardProdutos/>
             </div>
        </div>
        <div className='container-resumo'>
          <CardResumo/>
        </div>
      
      </section>
    </div>
  )
}

export default App
