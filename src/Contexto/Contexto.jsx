import { createContext, useState } from "react";

export const ResumoContexto = createContext();

export function ContextoProvider({ children }) {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);
  const [nomesProdutosSelecionados, setNomeProdutosSelecionados] = useState([]);
  const [produtosSelecionadosArray, setProdutosSelecionadosArray] = useState(
    []
  );
  const [listaLojas, setListaLojas] = useState([]);
  const [listaIdLojasSelecionadas, setListaIdLojasSelecionadas] = useState([]);
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [excluiListaGlobal, setExcluiListaGlobal] = useState([]);
  const [produtosFiltradosPorCategoria, setProdutosFiltradosPorCategoria] =
    useState([]);

    const pesquisa = {
      lojas: listaIdLojasSelecionadas,
      dateIni: dataInicio,
      dateFin: dataFim,
      categoria: categoriaSelecionada,
      produtos: produtosSelecionadosArray,
      respostas: [],
    };


  return (
    <ResumoContexto.Provider
      value={{
        pesquisa,
        excluiListaGlobal,
        setExcluiListaGlobal,
        produtosFiltradosPorCategoria, 
        setProdutosFiltradosPorCategoria,
        produtosSelecionadosArray,
        setProdutosSelecionadosArray,
        nomesProdutosSelecionados,
        setNomeProdutosSelecionados,
        listaIdLojasSelecionadas,
        setListaIdLojasSelecionadas,
        dataInicio,
        setDataInicio,
        dataFim,
        setDataFim,
        listaLojas,
        setListaLojas,
        categoriaSelecionada,
        setCategoriaSelecionada,
        produtosSelecionados,
        setProdutosSelecionados,
      }}
    >
      {children}
    </ResumoContexto.Provider>
  );
}
