import "./BotaoEnviarPesquisa.css";
import { useContext, useEffect, useState } from "react";
import { ResumoContexto } from "../../Contexto/Contexto";
import { FcCheckmark } from "react-icons/fc";

export default function BotaoEnviarPesquisa() {
  const {
    pesquisa,
    setListaLojas,
    setDataInicio,
    setDataFim,
    tituloPesquisa,
    setTituloPesquisa,
    listaIdLojasSelecionadas,
    setListaIdLojasSelecionadas,
    dataFimISO,
    setDataFimISO,
    categoriaSelecionada,
    setCategoriaSelecionada,
    produtosSelecionadosArray,
    setProdutosSelecionadosArray,
    dataInicioISO,
    setDataInicioISO
  } = useContext(ResumoContexto);

  const [pesquisaEnviada, setPesquisaEnviada] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const estadosFinais = {
    titulo: tituloPesquisa,
    lojas: listaIdLojasSelecionadas,
    inicio: dataInicioISO,
    final: dataFimISO,
    categoria: categoriaSelecionada,
    produtos: produtosSelecionadosArray,
  };

  useEffect(() => {
    if (!pesquisaEnviada) {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
        setPesquisaEnviada(true);
      }, 2500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [pesquisaEnviada]);

  function validaCampos() {
    for (var chave in estadosFinais) {
      if (estadosFinais[chave] === "" || estadosFinais[chave].length === 0) {
        alert(`Campo ${chave} é obrigatório`);
        return;
      }
    }

    setLoading(true);

    
    setTimeout(() => {
      enviarPesquisa();
      setLoading(false);
    }, 1500);
  }

  function enviarPesquisa() {
    fetch("https://pmenosapi-production-efe6.up.railway.app/Pesquisa/cadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pesquisa),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });

    // Zerar estados
    setPesquisaEnviada(false);
    setTituloPesquisa("");
    setListaIdLojasSelecionadas([]);
    setDataFimISO("");
    setCategoriaSelecionada("");
    setProdutosSelecionadosArray([]);
    setDataInicioISO("");
    setListaLojas([]);
    setDataInicio("");
    setDataFim("");
  }

  return (
    <>
      {pesquisaEnviada ? (
        <button
          className="botao-enviar-pesquisa"
          onClick={() => validaCampos()}
          disabled={isLoading}
        >
          {isLoading ? "Enviando..." : "Enviar"}
        </button>
      ) : (
        <button className="botao-enviar-pesquisa-enviada">
        Pesquisa enviada <FcCheckmark className="check-icon"/>
      </button>
      )}
    </>
  );
}