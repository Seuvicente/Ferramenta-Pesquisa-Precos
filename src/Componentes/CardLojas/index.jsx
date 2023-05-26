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

    if (listaLojas.includes(loja.nomeFilial)) {
      setListaLojas(listaLojas.filter((x) => x !== loja.nomeFilial));

      setListaIdLojasSelecionadas(
        listaIdLojasSelecionadas.filter((x) => x != loja.codigo)
      );
    } else {
      setListaLojas([...listaLojas, loja.nomeFilial]);
      setListaIdLojasSelecionadas([...listaIdLojasSelecionadas, loja.codigo]);
      //  setLojasSelecionadas([...lojasSelecionadas, loja]); // Adiciona a loja selecionada ao estado de lojas selecionadas;
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
          <div className="lista-lojas">
            {lojasFiltradas.map((loja) => (
              <div
                className="lista-lojas__item"
                key={loja.codigo}
                onClick={() => handleCheckboxClick(loja)}
              >
                {loja.nomeFilial}
                <input
                  type="checkbox"
                  className="lista-lojas__checkbox"
                  onChange={() => handleCheckboxClick(loja)}
                  id={loja.codigo}
                  checked={
                    listaLojas.includes(loja.nomeFilial) &&
                    listaIdLojasSelecionadas.includes(loja.codigo)
                  }
                />
              </div>
            ))}
          </div>
        </div>{console.log(listaLojas)}
      </div>
    </div>
  );
}
