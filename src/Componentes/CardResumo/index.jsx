import './CardResumo.css'
import icone from '../../assets/vector.png'
import CardLojaResumo from '../CardLojaResumo'
import CardProdutosResumo from '../CardProdutoResumo'
import { useContext } from 'react'
import { ResumoContexto } from '../../Contexto/Contexto.jsx'
import BotaoEnviarPesquisa from '../BotaoEnviarPesquisa'

export default function CardResumo(){
    const {
        categoriaSelecionada,
        setProdutosSelecionados,
        setProdutosSelecionadosArray,
        setCategoriaSelecionada,
        setListaLojas,
        setListaIdLojasSelecionadas,
        dataInicio,
        dataFim,
        setDataInicio,
        setDataFim
      } = useContext(ResumoContexto);


    function removeFlagCategoria(){
        setCategoriaSelecionada("") 
        setProdutosSelecionados([])
        setProdutosSelecionadosArray([])
    
    }

    function removeFlagDataInicio(){
        setDataInicio("")
    }

    function removeFlagDataFim(){
        setDataFim("")
    }

    function inverteData(data){
        const partes = data.split('-');
        const ano = partes[0];
        const mes = partes[1];
        const dia = partes[2];
        const dataInvertida = `${dia}/${mes}/${ano}`;
        return dataInvertida;
          
    }

    function limpaCampoProduto(){
        setProdutosSelecionados([])
        setProdutosSelecionadosArray([])
    }

    function limpaCampoLoja(){
        setListaLojas([])
        setListaIdLojasSelecionadas([])
    }
    
    

    return(
        <div className="container-principal">
            <div className="container-cabecalho">
                <h1>Resumo</h1>
                <img className='icone-resumo' src={icone}/>
            </div>
            <div className="container-infos">
                <div className="container-info-topo">
                   <h2 className='titulo-flag-resumo'>Período:{dataInicio?(<>
                        <div className='flag-periodo'>
                            {inverteData(dataInicio)}
                            <button onClick={()=> removeFlagDataInicio()} className='botao-exclui-flag' >x</button>
                            </div> </>):
                            <><span className='flag-periodo-vazia'></span></>}
                            <span className=''>até</span> 
                            {dataFim?(<>
                        <div className='flag-periodo'>
                            {inverteData(dataFim)}
                            <button onClick={()=> removeFlagDataFim()} className='botao-exclui-flag' >x</button>
                            </div></>):
                            <><span className='flag-periodo-vazia'></span></>} 
                    </h2>
                  
                  <h2 className='titulo-flag-resumo'>Categoria: {categoriaSelecionada?(<><div className='flag-categoria' value={"div"}>{categoriaSelecionada}
                  <button onClick={()=> removeFlagCategoria()} className='botao-exclui-flag' >x</button>
                  </div></>):<></>} </h2>
                </div>
                    <div className="container-infos-Componentes">
                    <div className="container-info-lojas">
                        <h2 className='titulo-loja-resumo'>Lojas</h2>
                        <button className='botao-limpar-lojas' onClick={()=>limpaCampoLoja()}>Limpar</button>
                        <CardLojaResumo/>
                    </div>
                    <div className="container-info-produtos">
                        <h2 className='titulo-loja-resumo'>Produtos</h2>
                        <button className='botao-limpar-produtos' onClick={()=>limpaCampoProduto()}>Limpar</button>
                        <CardProdutosResumo/>
                    </div>
                </div>
                    <BotaoEnviarPesquisa/>     
            </div>

          
        </div>
    )
}