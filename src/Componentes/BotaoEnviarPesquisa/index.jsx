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
  const [notificacaoErro,setNotificacaoErro] = useState("")
  const [mostrarErro, setMostrarErro] = useState(false);

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
        if([chave] == "titulo" ){
          setNotificacaoErro(`O campo título é obrigatório!`)
          setTimeout(()=>setNotificacaoErro(""),1800)
        }if([chave] == "lojas"){
          setNotificacaoErro(`O campo lojas é obrigatório!`)
          setTimeout(()=>setNotificacaoErro(""),1800)
        }if([chave] == "inicio"){
          setNotificacaoErro(`A data inicio é obrigatória!`)
          setTimeout(()=>setNotificacaoErro(""),1800)
        }if([chave] == "final"){
          setNotificacaoErro(`A data final  é obrigatória!`)
          setTimeout(()=>setNotificacaoErro(""),1800)
        }if([chave] == "categoria"){
          setNotificacaoErro(`O campo categoria é obrigatório!`)
          setTimeout(()=>setNotificacaoErro(""),1800)
        }if([chave] == "produtos"){
          setNotificacaoErro(`O campo produtos é obrigatório!`)
          setTimeout(()=>setNotificacaoErro(""),1800)
        }
        return;
      }
    }

    setNotificacaoErro("")
    setLoading(true);
    setTimeout(() => {
      enviarPesquisa();
      setLoading(false);
    }, 1500);
  }

  function enviarPesquisa() {
    fetch("https://pmenosapi-production-efe6.up.railway.app/Agile/Cadastrar/Pesquisa", {
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
       <div className="footer-resumo">
       <span className="notificacao-erro">{notificacaoErro}</span>
       {isLoading ? <div className="load"></div> : <button
          className="botao-enviar-pesquisa"
          onClick={() => validaCampos()}
          disabled={isLoading}
        >Enviar
        </button> }
        </div>
      ) : (
        <button className="botao-enviar-pesquisa-enviada">
        Pesquisa enviada <FcCheckmark className="check-icon"/>
      </button>
      )}
    </>
  );
}