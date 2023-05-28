// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { ResumoContexto } from "../../Contexto/Contexto";
import lojas from "../../../lojas.json";
import { SlMagnifier } from "react-icons/sl";
import "./CardLojas.css";
import { useEffect } from "react";

export default function CardLojas() {
  const [busca, setBusca] = useState("");
  const [mostraArray, setMostraArray] = useState([]);
  const lowerBusca = busca.toLowerCase();
  const lojasFiltradas = lojas.filter((loja) =>
    loja.nomeFilial.toLocaleLowerCase().includes(lowerBusca)
  );
  const lojasFiltradasOrganizadas = lojasFiltradas.sort((loja1, loja2) =>
  loja1.nomeFilial > loja2.nomeFilial
    ? 1
    : loja1.nomeFilial < loja2.nomeFilial
    ? -1
    : 0
);;

  const {
    listaLojas,
    setListaLojas,
    listaIdLojasSelecionadas,
    setListaIdLojasSelecionadas,
  } = useContext(ResumoContexto);

  useEffect(() => {
    mostraArray.length > 0
      ? setMostraArray(
          mostraArray.sort((loja1, loja2) =>
            loja1.nomeFilial > loja2.nomeFilial
              ? 1
              : loja1.nomeFilial < loja2.nomeFilial
              ? -1
              : 0
          )
        )
      : setMostraArray(lojasFiltradasOrganizadas);
  });

  const array = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "X",
    "Z",
  ];

  const mostraMenuAaz = (letra) => {
    setMostraArray(
      mostraArray.filter(
        (loja) => loja.nomeFilial.charAt(0).toLocaleUpperCase() === letra
      )
    );

    // selecionaGlossario.map(element => {
    //   handleCheckboxClick(element)
    // });
  };

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
            onChange={(e) => setBusca(e.target.value)}
            className="busca"
          />
        </div>
        <div className="container-menu-caixa">
          <div className="container-lista">
            <ul className="lista-menu">
              {array.map((x) => (
                <button
                  className="buttonLetras"
                  onClick={() => mostraMenuAaz(x)}
                >
                  {x}
                </button>
              ))}
            </ul>
          </div>

          <div className="caixa">
            <div className="lista-lojas">
              {mostraArray.map((loja) => (
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
          </div>
        </div>
      </div>
    </div>
  );
}
