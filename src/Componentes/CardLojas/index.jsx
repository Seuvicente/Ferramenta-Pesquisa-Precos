// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import lojas from '../../../lojas.json';
import { SlMagnifier } from "react-icons/sl";
import './CardLojas.css'

export default function CardLojas() {
  const [busca, setBusca] = useState(''); // // Definindo um estado para a busca


  const [lojasSelecionadas, setLojasSelecionadas] = useState([]);
  const lowerBusca = busca.toLowerCase();
  const lojasFiltradas = lojas.filter((loja) => loja.nomeFilial.toLocaleLowerCase().includes(lowerBusca));
  const [listaLojas, setListaLojas] = useState([]);
  //checkbox
  const handleCheckboxClick = (loja) => { // checkbox;

    if (document.getElementById(loja.codigo).checked) {
      setListaLojas([...listaLojas, loja.codigo])

    } else if (listaLojas.includes(loja.codigo)) {
      setListaLojas(listaLojas.filter(x => x != loja.codigo))
    } else {
      const indiceLojaSelecionada = lojasSelecionadas.findIndex((l) => l.codigo === loja.codigo);

      if (indiceLojaSelecionada > 0) { //verificando se a loja selecionada está no array 
        const newLojasSelecionadas = [...lojasSelecionadas];
        newLojasSelecionadas.splice(indiceLojaSelecionada, 1);
        setLojasSelecionadas(newLojasSelecionadas);
        console.log(lojasSelecionadas)

      }
    }
  }
  return (
    <div className='Loja_toda'>
       <h1 className='TextLoja'>Lojas</h1>
        <div className='container-lojas'>
          <div className='buscas'>
            <SlMagnifier className='lupa' />
            <input type="text"
              value={busca}
              placeholder='Buscar loja'
              onChange={(evento) => setBusca(evento.target.value)}
              className='busca'
            />
          </div>

          <div className='caixa'>
            <ul className='lista-lojas'>
              {lojasFiltradas.map((loja) => (
                <li className='lista-lojas__item' key={loja.codigo}>
                  <input type="checkbox" className='lista-lojas__checkbox'
                    onClick={() => handleCheckboxClick(loja)} id={loja.codigo}
                    checked={listaLojas.includes(loja.codigo)} />
                  {loja.nomeFilial}
                </li>
              ))}
            {console.log(listaLojas)}
          </ul>
          </div>
        </div>
      </div>
  );
}