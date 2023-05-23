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
    if (document.getElementById(loja.codigo).checked) {
      setListaLojas([...listaLojas, loja.nomeFilial]);
      setListaIdLojasSelecionadas([...listaIdLojasSelecionadas, loja.codigo]);
    } else {
      setListaLojas(listaLojas.filter((x) => x !== loja.nomeFilial));
      setListaIdLojasSelecionadas(
        listaIdLojasSelecionadas.filter((id) => id !== loja.codigo)
      );
    }
  };

  const handleListItemClick = (loja) => {
    const checkbox = document.getElementById(loja.codigo);
    checkbox.checked = !checkbox.checked;
    handleCheckboxClick(loja);
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
                onClick={() => handleListItemClick(loja)}
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