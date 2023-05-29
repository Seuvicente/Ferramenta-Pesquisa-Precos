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

    const pesquisa = {
      titulo: tituloPesquisa,
      lojas: listaIdLojasSelecionadas,
      dateIni: dataInicioISO,
      dateFin: dataFimISO,
      categoria: categoriaSelecionada,
      produtos: produtosSelecionadosArray,
      respostas: [],
    };

    const camposVazio = []

    for (const chave in pesquisa){
      if(pesquisa.hasOwnProperty(chave) && pesquisa[chave] == "" ){
        camposVazio.push(chave)
        console.log(camposVazio)
      }
    }

  return (
    <ResumoContexto.Provider
      value={{
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
