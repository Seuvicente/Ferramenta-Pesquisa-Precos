import SeletorPeriodo from './Componentes/SeletorPeriodo/index'
import './App.css'
import CardLojas from './Componentes/CardLojas'
import CardProdutos from './Componentes/CardProdutos'
import CardResumo from './Componentes/CardResumo'
import TituloPesquisa from './Componentes/TituloPesquisa'
import imagem1 from './img/logo.png'

function App() {
  

  return (
    <div className='pageView'>
      <div className='cabecalho'>
        <img className='imgLogo'src={imagem1} alt="logo pesquisa" />
       
      </div>
      <section className='container'>
        <div className='container-montagem'>
             <div className="selecao-periodo">
                <TituloPesquisa/>
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
