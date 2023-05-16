import './App.css'

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
             </div>
             <div className="cards-montagem">
               { /* Insira aqui os componente CardLoja */ }
               { /* Insira aqui os componente CardLoja */ }
             </div>
        </div>
        <div className='container-resumo'>
          {/* Insira aqui o componente Resumo */}
        </div>
      
      </section>
    </div>
  )
}

export default App
