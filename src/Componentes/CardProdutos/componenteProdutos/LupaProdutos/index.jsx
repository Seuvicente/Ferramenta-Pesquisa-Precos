import { SlMagnifier } from "react-icons/sl";
import './style.css';


function LupaProdutos({ onSearch }) {
  // Função para lidar com a mudança no campo de busca
  const handleSearchChange = (event) => {
    const termoBusca = event.target.value;
    // Chama a função de busca fornecida através da prop "onSearch"
    onSearch(termoBusca);
  };

  // Componente de busca de produtos
  return (
    <div className='LupaProdutos'>
      {/* Ícone de lupa */}
      <SlMagnifier className="LupaIcon" />
      {/* Campo de entrada para o termo de busca */}
      <input className="LupaProdutosInput" placeholder="Digite o produto" type="text" onChange={handleSearchChange} />
    </div>
  );
}
  export default LupaProdutos;

