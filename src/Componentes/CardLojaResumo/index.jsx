import { useContext, useRef, useEffect} from "react";
import { ResumoContexto } from "../../Contexto/Contexto";
import "./CardLojaResumo.css";

export default function CardLojaResumo() {
  const { listaLojas, setListaLojas ,setListaIdLojasSelecionadas,} = useContext(ResumoContexto);
  const scrollViewRef = useRef(null);
  
  const scroll = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTop = scrollViewRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scroll();
  }, [listaLojas]);

  const removeFlag = (e) => {
    setListaLojas(listaLojas.filter((x) => x != e));
    setListaIdLojasSelecionadas([])
  };

 

  function limitarTexto(string, maxCaracteres) {
    if (string.length <= maxCaracteres) {
      return string;
    } else {
      return string.substring(0, maxCaracteres);
    }
  }

  return (
    <div className="cardlojaresumo" ref={scrollViewRef}>
      {listaLojas ? (
        listaLojas.map((loja) => (
          <>
            <div className="item-loja" key={loja.codigo}>
              {" "}
              {limitarTexto(loja, 5)}
              <button
                onClick={() => removeFlag(loja)}
                className="botao-remove-flag-resumo-loja"
              >
                X
              </button>
            </div>
            
            
          </>
        ))
      ) : (
        <></>
      )}
      
    </div>
  );
}
