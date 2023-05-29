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
  const [dataInicioISO,setDataInicioISO] = useState("");
  const [dataFimISO, setDataFimISO] = useState("");
  const [excluiListaGlobal, setExcluiListaGlobal] = useState([]);
  const [produtosFiltradosPorCategoria, setProdutosFiltradosPorCategoria] =useState([]);
  const [erroData, setDataErro] = useState("")
  const [tituloPesquisa,setTituloPesquisa]= useState("")
  const [modal, setModal] = useState(false);
  const [modalProdutos, setModalProdutos] = useState(false);

    const pesquisa = {
      titulo: tituloPesquisa,
      lojas: listaIdLojasSelecionadas,
      dateIni: dataInicioISO,
      dateFin: dataFimISO,
      categoria: categoriaSelecionada,
      produtos: produtosSelecionadosArray,
      respostas: [],
    };

  return (
    <ResumoContexto.Provider
      value={{
        modalProdutos, 
        setModalProdutos,
        modal,
        setModal,
        tituloPesquisa,
        setTituloPesquisa,
        pesquisa,
        excluiListaGlobal,
        setExcluiListaGlobal,
        setDataFimISO,
        dataFimISO,
        setDataInicioISO,
        dataInicioISO,
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
        erroData, 
        setDataErro
      }}
    >
      {children}
    </ResumoContexto.Provider>
  );
}
