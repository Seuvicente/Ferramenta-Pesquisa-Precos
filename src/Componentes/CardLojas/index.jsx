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
  const [listaLojas, setListaLojas]= useState([]);

  const handleCheckboxClick = (loja) => { // checkbox;
    // Se o checkbox foi marcado

    
   if (document.getElementById(loja.codigo).checked) { 
      setListaLojas([...listaLojas, loja.codigo])
     
     }else if(listaLojas.includes(loja.codigo)) {
        setListaLojas(listaLojas.filter(x => x != loja.codigo))
    
    
    //  setLojasSelecionadas([...lojasSelecionadas, loja]); // Adiciona a loja selecionada ao estado de lojas selecionadas;
   } else { 
     const indiceLojaSelecionada  = lojasSelecionadas.findIndex((l) => l.codigo === loja.codigo); //metodo findIndex para encontrar o índice do primeiro elemento no array. erifica se o código da loja atual é igual ao código da loja passada como argumento.
    
     if (indiceLojaSelecionada  > 0) { //verifican se a loja selecionada está no array 
       const newLojasSelecionadas = [...lojasSelecionadas];
       newLojasSelecionadas.splice(indiceLojaSelecionada , 1);
       setLojasSelecionadas(newLojasSelecionadas);
       console.log(lojasSelecionadas)
       lojasSelecionadas
     }
   }
 }
  return (
    <div className='App'>
      <div className='container-lojas'>
        <h1>Lojas</h1>

        <div className='buscas'>
        <SlMagnifier className='lupa'/>
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
                <input type="checkbox" className='lista-lojas__checkbox' onClick={() => handleCheckboxClick(loja)} id={loja.codigo} />
                {loja.nomeFilial}
              </li>
            ))}
          </ul>{console.log(listaLojas)}
        </div>
      </div>
    </div>
  );
}