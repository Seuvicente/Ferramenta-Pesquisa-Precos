import SeletorPeriodo from './Componentes/SeletorPeriodo/index'
import './App.css'
import CardLojas from './Componentes/CardLojas'
import CardProdutos from './Componentes/CardProdutos'
import CardResumo from './Componentes/CardResumo'
import imagem1 from './img/logo.png'

function App() {
  

  return (
    <div className='pageView'>
      <div className='cabecalho'>
        <div className='imgLogo'><img src={imagem1} alt="logo pesquisa" /></div>
       
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
