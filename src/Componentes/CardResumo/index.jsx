import './CardResumo.css'
import icone from '../../assets/vector.png'
import CardLojaResumo from '../CardLojaResumo'
import CardProdutosResumo from '../CardProdutoResumo'
import { useContext } from 'react'
import { ResumoContexto } from '../../Contexto/Contexto.jsx'
import BotaoEnviarPesquisa from '../BotaoEnviarPesquisa'
import { useState } from 'react'


export default function CardResumo(){
    const {
        tituloPesquisa,
        categoriaSelecionada,
        setProdutosSelecionados,
        setProdutosSelecionadosArray,
        setCategoriaSelecionada,
        setListaLojas,
        setListaIdLojasSelecionadas,
        dataInicio,
        dataFim,
        setDataInicioISO,
        dataInicioISO,
        setDataFimISO,
        dataFimISO,
        setDataInicio,
        setDataFim,
        erroData, 
        setDataErro,
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

    function inverteDataInicio(data){
        const partes = data.split('-');
        const ano = partes[0];
        const mes = partes[1];
        const dia = partes[2];
        const dataInvertida = `${dia}/${mes}/${ano}`;
        formataDataInicio(data)
        return dataInvertida;  
    }
    function formataDataInicio(data){
        const dataFormatada = `${data}T12:00:00`
        setDataInicioISO(dataFormatada)
        console.log(dataInicioISO)
        return dataFormatada
    }

    // const dataIniNum = Num(dataInicio)
    // const dataFimNum = Num(dataFim)


    function inverteDataFim(data){
        if(dataFim > dataInicio){
        const partes = data.split('-');
        const ano = partes[0];
        const mes = partes[1];
        const dia = partes[2];
        const dataInvertida = `${dia}/${mes}/${ano}`;
        formataDataFim(data)
        setDataErro("")
        return dataInvertida;
        }
        setDataFim("")
        setDataErro("Data final inválida !")
    }

    function formataDataFim(data){
        const dataFormatada = `${data}T23:59:00`
        setDataFimISO(dataFormatada)
        console.log(dataFimISO)
        return dataFormatada;
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
                   <h2 className='titulo-flag-resumo-titulo' placeholder='Título da Pesquisa'>{tituloPesquisa ? tituloPesquisa: `Título Pesquisa`}</h2>
                   <h2 className='titulo-flag-resumo'>Período:{dataInicio?(<>
                        <div className='flag-periodo'>
                            {inverteDataInicio(dataInicio)}
                            <button onClick={()=> removeFlagDataInicio()} className='botao-exclui-flag' >x</button>
                            </div> </>):
                            <><span className='flag-periodo-vazia'></span></>}
                            <span className=''>até</span> 
                            {dataFim?(<>
                        <div className='flag-periodo'>
                            {inverteDataFim(dataFim)}
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