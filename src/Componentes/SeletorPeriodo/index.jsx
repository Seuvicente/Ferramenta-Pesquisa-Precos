import  { useContext } from 'react';
import { ResumoContexto } from '../../Contexto/Contexto';
import './SeletorPeriodo.css';

export default function SeletorPeriodo() {
  const { dataInicio, setDataInicio, dataFim, setDataFim } = useContext(ResumoContexto);

  const handleDataInicioChange = (e) => {
    const selectedDataInicio = e.target.value;
    if (selectedDataInicio <= dataFim) {
      setDataInicio(selectedDataInicio);
    } else {
      // Aqui você pode exibir um erro ou realizar alguma ação quando a data de início for maior que a data final
      alert('A data de início deve ser menor ou igual à data final');
    }
  };

  const handleDataFimChange = (e) => {
    const selectedDataFim = e.target.value;
    if (selectedDataFim >= dataInicio) {
      setDataFim(selectedDataFim);
    } else {
      // Aqui você pode exibir um erro ou realizar alguma ação quando a data final for menor que a data de início
      alert('A data final deve ser maior ou igual à data de início');
    }
  };

  return (
    <div className="container-datas">
      <div className="dataInicio">
        <input
          type="date"
          value={dataInicio}
          id="dataInicio"
          className="input-data"
          onChange={handleDataInicioChange}
        />
        <label htmlFor="dataInicio" className="label">
          Inicio Pesquisa
        </label>
      </div>
      <div className="dataFinal">
        <input
          type="date"
          value={dataFim}
          id="dataFinal"
          className="input-data"
          onChange={handleDataFimChange}
        />
        <label htmlFor="dataFinal" className="label">
          Fim Pesquisa
        </label>
      </div>
    </div>
  );
}
