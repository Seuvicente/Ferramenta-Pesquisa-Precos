import "./BotaoEnviarPesquisa.css";
import { useContext } from "react";
import { ResumoContexto } from "../../Contexto/Contexto";


export default function BotaoEnviarPesquisa() {
  
    const {
    pesquisa
  } = useContext(ResumoContexto);

  

  
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
    <button className="botao-enviar-pesquisa" onClick={() => enviarPesquisa()}>
      Enviar
    </button>
  );

}