import { useContext } from "react";
import { ResumoContexto } from "../../Contexto/Contexto";
import "./SeletorPeriodo.css";

export default function SeletorPeriodo() {
  const { dataInicio, setDataInicio, dataFim, setDataFim } =
    useContext(ResumoContexto);
  const data = new Date();
//   const partes = data.split(" ");
   const ano = data.getFullYear();
   const mes = data.getUTCMonth() +1;
   const dia = data.getDate();
   const dataInvertida = `${ano}-0${mes}-${dia}`;
   const dataInvertida2 = `${ano}-${mes < 10 ? '0' + mes: mes }-${dia + 1}`;

  return (
    <div className="container-datas">
      <div className="dataInicio">
        <input
          type="date"
          min={dataInvertida}
          value={dataInicio}
          id="dataInicio"
          className="input-data"
          onChange={(e) => setDataInicio(e.target.value)}
        />
        <label htmlFor="dataInicio" className="label">
          Inicio Pesquisa
        </label>
      </div>
      <div className="dataFinal">
        <input
          type="date"
          min={dataInvertida2}
          value={dataFim}
          id="dataFinal"
          className="input-data"
          onChange={(e) => setDataFim(e.target.value)}
        />
        <label htmlFor="dataFinal" className="label">
          Fim Pesquisa
        </label>
      </div>
    </div>
  );
}
