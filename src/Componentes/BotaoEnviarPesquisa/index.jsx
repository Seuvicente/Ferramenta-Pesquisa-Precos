import "./BotaoEnviarPesquisa.css";
import { useContext } from "react";
import { ResumoContexto } from "../../Contexto/Contexto";


export default function BotaoEnviarPesquisa() {
  
    const {
    pesquisa,
    tituloPesquisa,
    listaIdLojasSelecionadas,
    dataFimISO,
    categoriaSelecionada,
    produtosSelecionadosArray,
    dataInicioISO,
  } = useContext(ResumoContexto);

  const estadosFinais = {
    titulo:tituloPesquisa,
    lojas:listaIdLojasSelecionadas,
    inicio:dataInicioISO,
    final:dataFimISO,
    categoria:categoriaSelecionada,
    produtos:produtosSelecionadosArray,
  }
    
  function validaCampos() {
    for (var chave in estadosFinais) {
      if (estadosFinais[chave] == "" || estadosFinais[chave] == []) {
        alert(`Campo ${chave} é obrigatório`);
        return; 
      }
    }
    enviarPesquisa();
  }
   
      
  function enviarPesquisa() {

    fetch('https://pmenosapi-production-efe6.up.railway.app/Pesquisa/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pesquisa)
      })
      .then(res => res.json())
      .then(data => {
        console.log( data);
      })
      .catch(error => {
        console.error('Erro:', error);
      });
    }



  return (
    <button className="botao-enviar-pesquisa" onClick={() => validaCampos()}>
      Enviar
    </button>
  );
}
