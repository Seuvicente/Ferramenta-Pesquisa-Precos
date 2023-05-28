import "./style.css";
import { useEffect, useContext } from "react";
import produtos from "../../../../../produtos.json";
import LupaProdutos from "../LupaProdutos/index";
import { ResumoContexto } from "../../../../Contexto/Contexto";

function Categorias() {
  const {
    categoriaSelecionada,
    setCategoriaSelecionada,
    produtosSelecionados,
    setProdutosSelecionados,
    produtosSelecionadosArray,
    setProdutosSelecionadosArray,
    produtosFiltradosPorCategoria,
    setProdutosFiltradosPorCategoria
  } = useContext(ResumoContexto);

  // Obtém as categorias únicas dos produtos
  const categoriasUnicas = [...new Set(produtos.map((produto) => produto.categoria))];

  // Atualiza a categoria selecionada no estado
  const handleCategoriaChange = (event) => {
    setCategoriaSelecionada(event.target.value);
    setProdutosSelecionadosArray([]);
    setProdutosSelecionados([]);
  };

  // Adiciona ou remove um produto da matriz de produtos selecionados
  const toggleProdutoSelecionado = (produtoId) => {
    const produto = produtos.find((p) => p.id === produtoId);

    if (produtosSelecionados.includes(produtoId)) {
      // Remove o produto da matriz de produtos selecionados
      setProdutosSelecionados(produtosSelecionados.filter((id) => id !== produtoId));

      // Remove o produto da matriz de objetos produtosSelecionadosArray
      setProdutosSelecionadosArray(produtosSelecionadosArray.filter((p) => p.id !== produtoId));
    } else {
      // Adiciona o produto à matriz de produtos selecionados
      setProdutosSelecionados([...produtosSelecionados, produtoId]);

      // Adiciona o objeto completo do produto à matriz de objetos produtosSelecionadosArray
      setProdutosSelecionadosArray([...produtosSelecionadosArray, produto]);
    }
  };

  // Filtra os produtos por categoria selecionada ou produtos selecionados
  useEffect(() => {
    const produtosFiltrados = categoriaSelecionada
      ? produtos.filter((produto) => produto.categoria === categoriaSelecionada)
      : [];
    setProdutosFiltradosPorCategoria(produtosFiltrados);
  }, [categoriaSelecionada, produtosSelecionados]);

  // Manipula a busca de produtos
  const handleSearch = (termoBusca) => {
    const produtosFiltrados = produtos.filter((produto) => {
      if (produto.categoria !== categoriaSelecionada) {
        return false;
      }
      return produto.nome.toLowerCase().includes(termoBusca.toLowerCase());
    });
    setProdutosFiltradosPorCategoria(produtosFiltrados);
  };

  return (
    <div className="Container-Cartegoria">
      <div className="CategoriasProdutos">
        {/* Componente de seleção de categorias */}
        <select
          className="setaCategorias"
          name="cars"
          id="cars"
          value={categoriaSelecionada}
          onChange={handleCategoriaChange}
        >
          <option>Categoria:</option>
          {/* Renderiza as opções de categorias */}
          {categoriasUnicas.map((categoria, index) => (
            <option key={index} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
        <LupaProdutos onSearch={handleSearch} />
      </div>
      {/* Componente de busca */}
      
      <div className="produtos">
        {produtosFiltradosPorCategoria.map((produto) => (
          <div className="corp" 
            key={produto.id} 
            onClick={() => toggleProdutoSelecionado(produto.id)}>
            {produto.nome}
            {/* Checkbox para selecionar/deselecionar o produto */}
            <input
              className="checkBox"
              type="checkbox"
              value={produto.id}
              checked={produtosSelecionados.includes(produto.id)}
              onChange={() => toggleProdutoSelecionado(produto.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categorias;

/*      <ul>
          {produtosSelecionados.map((produtoId) => {
            const produto = produtos.find((p) => p.id === produtoId);
            return produto && (
              <li  key={produto.id}>{produto.nome}</li>
           
            );
          })}
        </ul> */
