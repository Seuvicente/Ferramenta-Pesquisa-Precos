import "./CardResumo.css";
import icone from "../../assets/vector.png";
import CardLojaResumo from "../CardLojaResumo";
import CardProdutosResumo from "../CardProdutoResumo";
import { useContext } from "react";
import { ResumoContexto } from "../../Contexto/Contexto.jsx";
import BotaoEnviarPesquisa from "../BotaoEnviarPesquisa";
import icon from "../../assets/icon.svg";
import {BsFillTrashFill} from 'react-icons/bs'


export default function CardResumo() {
  const {
    tituloPesquisa,
    setTituloPesquisa,
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
    setDataErro,
    
  } = useContext(ResumoContexto);

  function removeFlagCategoria() {
    setCategoriaSelecionada("");
    setProdutosSelecionados([]);
    setProdutosSelecionadosArray([]);
  }

  function removeFlagDataInicio() {
    setDataInicio("");
    setDataInicioISO("")
  }

  function removeFlagDataFim() {
    setDataFim("");
    setDataFimISO("")
  }

  function inverteDataInicio(data) {
    const partes = data.split("-");
    const ano = partes[0];
    const mes = partes[1];
    const dia = partes[2];
    const dataInvertida = `${dia}/${mes}/${ano}`;
    formataDataInicio(data);
    return dataInvertida;
  }

  function formataDataInicio(data) {
    const dataFormatada = `${data}T12:00:00`;
    setDataInicioISO(dataFormatada);
   
    return dataFormatada;
  }


  function inverteDataFim(data) {
    if (dataFim > dataInicio) {
      const partes = data.split("-");
      const ano = partes[0];
      const mes = partes[1];
      const dia = partes[2];
      const dataInvertida = `${dia}/${mes}/${ano}`;
      formataDataFim(data);
      setDataErro("");
      return dataInvertida;
    }
    setDataFim("");
    setDataErro("Data final inválida !");
  }

  function formataDataFim(data) {
    const dataFormatada = `${data}T23:59:00`;
    setDataFimISO(dataFormatada);
    return dataFormatada;
  }

  function removeFlagTituloResumo(){
    setTituloPesquisa("")
  }

  function limpaCampoProduto() {
    setProdutosSelecionados([]);
    setProdutosSelecionadosArray([]);
  }

  function limpaCampoLoja() {
    setListaLojas([]);
    setListaIdLojasSelecionadas([]);
  }

  return (
    <div className="container-principal">
      <div className="container-cabecalho">
        <h1>Resumo</h1>
        <img className="icone-resumo" src={icone} />
      </div>
      <div className="container-infos">
        <div className="container-info-topo">
          <div
            className="titulo-flag-resumo-titulo"
          > Título pesquisa:{tituloPesquisa ?<><div className="container-titulo-titulo-pesquisa">{tituloPesquisa}
                <button
                    onClick={() => removeFlagTituloResumo()}
                    className="botao-exclui-flag"
                  >
                    x
                  </button></div></>:<></>}
          
          </div>
          <h2 className="titulo-flag-resumo">
            Período:
            {dataInicio ? (
              <>
                <div className="flag-periodo">
                  {inverteDataInicio(dataInicio)}
                  <button
                    onClick={() => removeFlagDataInicio()}
                    className="botao-exclui-flag"
                  >
                    x
                  </button>
                </div>{" "}
              </>
            ) : (
              <>
                <span className="flag-periodo-vazia"></span>
              </>
            )}
            <span className="">até</span>
            {dataFim ? (
              <>
                <div className="flag-periodo">
                  {inverteDataFim(dataFim)}
                  <button
                    onClick={() => removeFlagDataFim()}
                    className="botao-exclui-flag"
                  >
                    x
                  </button>
                </div>
              </>
            ) : (
              <>
                <span className="flag-periodo-vazia"></span>
              </>
            )}
          </h2>

          <h2 className="titulo-flag-resumo">
            Categoria:{" "}
            {categoriaSelecionada ? (
              <>
                <div className="flag-categoria" value={"div"}>
                  {categoriaSelecionada}
                  <button
                    onClick={() => removeFlagCategoria()}
                    className="botao-exclui-flag"
                  >
                    x
                  </button>
                </div>
              </>
            ) : (
              <></>
            )}{" "}
          </h2>
        </div>
        <div className="container-infos-Componentes">
          <div className="container-info-lojas">
            <h2 className="titulo-loja-resumo">Lojas</h2>

            <BsFillTrashFill
              className="botao-limpar-lojas"
              onClick={() => limpaCampoLoja()}
            />
            <CardLojaResumo />
          </div>
          <div className="container-info-produtos">
            <h2 className="titulo-loja-resumo">Produtos</h2>
            <BsFillTrashFill
              className="botao-limpar-produtos"
              onClick={() => limpaCampoProduto()}
            />
            <CardProdutosResumo />
          
          </div>
        </div>
        <BotaoEnviarPesquisa />
      </div>
    </div>
  );
}
