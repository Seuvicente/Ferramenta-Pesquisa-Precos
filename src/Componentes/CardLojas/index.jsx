// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { ResumoContexto } from "../../Contexto/Contexto";
import lojas from "../../../lojas.json";
import { SlMagnifier } from "react-icons/sl";
import "./CardLojas.css";

export default function CardLojas() {
  const [busca, setBusca] = useState("");

  const [lojasSelecionadas, setLojasSelecionadas] = useState([]);
  const lowerBusca = busca.toLowerCase();
  const lojasFiltradas = lojas.filter((loja) =>
    loja.nomeFilial.toLocaleLowerCase().includes(lowerBusca)
  );
  const {
    listaLojas,
    setListaLojas,
    listaIdLojasSelecionadas,
    setListaIdLojasSelecionadas,
  } = useContext(ResumoContexto);

  const handleCheckboxClick = (loja) => {
    // checkbox;

    if (document.getElementById(loja.codigo).checked) {
      setListaLojas([...listaLojas, loja.nomeFilial]);

      setListaIdLojasSelecionadas([...listaIdLojasSelecionadas, loja.codigo]);
    } else if (listaLojas.includes(loja.nomeFilial)) {
      setListaLojas(listaLojas.filter((x) => x != loja.nomeFilial));

      //  setLojasSelecionadas([...lojasSelecionadas, loja]); // Adiciona a loja selecionada ao estado de lojas selecionadas;
    } else {
      const indiceLojaSelecionada = lojasSelecionadas.findIndex(
        (l) => l.codigo === loja.codigo
      ); //metodo findIndex para encontrar o índice do primeiro elemento no array. erifica se o código da loja atual é igual ao código da loja passada como argumento.

      if (indiceLojaSelecionada > 0) {
        //verifican se a loja selecionada está no array
        const newLojasSelecionadas = [...lojasSelecionadas];
        newLojasSelecionadas.splice(indiceLojaSelecionada, 1);
        setLojasSelecionadas(newLojasSelecionadas);
        console.log(lojasSelecionadas);
        lojasSelecionadas;
      }
    }
  };
  return (
    <div className="Loja_toda">
      <h1 className="TextLoja">Lojas</h1>
      <div className="container-lojas">
        <div className="buscas">
          <SlMagnifier className="lupa" />
          <input
            type="text"
            value={busca}
            placeholder="Buscar loja"
            onChange={(evento) => setBusca(evento.target.value)}
            className="busca"
          />
        </div>
        <div className="caixa">
          <ul className="lista-lojas">
            {lojasFiltradas.map((loja) => (
              <li
                className="lista-lojas__item"
                key={loja.codigo}
                onClick={()=> handleCheckboxClick(loja)}
              >
                {loja.nomeFilial}
                <input
                  type="checkbox"
                  className="lista-lojas__checkbox"
                  onClick={() => handleCheckboxClick(loja)}
                  id={loja.codigo}
                  checked={listaLojas.includes(loja.nomeFilial)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}