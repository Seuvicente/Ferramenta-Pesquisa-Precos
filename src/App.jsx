import SeletorPeriodo from "./Componentes/SeletorPeriodo/index";
import "./App.css";
import CardLojas from "./Componentes/CardLojas";
import CardProdutos from "./Componentes/CardProdutos";
import CardResumo from "./Componentes/CardResumo";
import TituloPesquisa from "./Componentes/TituloPesquisa";
import imagem1 from "./img/logo.png";
import {  useContext } from "react";
import { ResumoContexto } from "./Contexto/Contexto";

function App() {
  const {
    modal,
    listaLojas,
    setListaLojas,
    setModal,
    produtosSelecionadosArray,
    setProdutosSelecionadosArray,
    setProdutosSelecionados,
    produtosSelecionados,
    modalProdutos,
    setModalProdutos,
  } = useContext(ResumoContexto);

  const removeFlag = (e) => {
    setListaLojas(listaLojas.filter((x) => x != e));
  };
  const fechar = () => {
    setModal(false);
    setModalProdutos(false);
  };
  const removeFlagProdutos = (e) => {
    setProdutosSelecionados(produtosSelecionados.filter((x) => x != e.id));
    setProdutosSelecionadosArray(
      produtosSelecionadosArray.filter((x) => x.id != e.id)
    );
  };

  return (
    <div className="pageView">
      <div>
        {modal == true ? (
          <div className="modalLoja">
            <div>
              <div onClick={() => fechar()}>x</div>
              {listaLojas.map((x) => (
                <div key={x}>
                  {x}
                  <button
                    onClick={() => removeFlag(x)}
                    className="botao-remove-flag-resumo-loja"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div>
        {modalProdutos == true ? (
          <div className="modalLoja">
            <div>
              <div onClick={() => fechar()}>x</div>
              {produtosSelecionadosArray.map((x) => (
                <div key={x}>
                  {x.nome}
                  <button
                    onClick={() => removeFlagProdutos(x)}
                    className="botao-remove-flag-resumo-loja"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="cabecalho">
        <img className="imgLogo" src={imagem1} alt="logo pesquisa" />
      </div>
      <section className="container">
        <div className="container-montagem">
          <div className="selecao-periodo">
            <TituloPesquisa />
            <SeletorPeriodo />
          </div>
          <div className="cards-montagem">
            <CardLojas />
            <CardProdutos />
          </div>
        </div>
        <div className="container-resumo">
          <CardResumo />
        </div>
      </section>
    </div>
  );
}

export default App;
