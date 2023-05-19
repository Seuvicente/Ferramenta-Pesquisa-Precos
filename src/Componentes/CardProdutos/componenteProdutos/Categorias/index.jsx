import './style.css'
import React, { useState, useEffect } from 'react';
import produtos from '../../../../../produtos.json';
import LupaProdutos from '../LupaProdutos/index';

function Categorias() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);
  const [produtosFiltradosPorCategoria, setProdutosFiltradosPorCategoria] = useState([]);

  // Obtém as categorias únicas dos produtos
  const categoriasUnicas = [...new Set(produtos.map((produto) => produto.categoria))];

  // Atualiza a categoria selecionada no estado
  const handleCategoriaChange = (event) => {
    setCategoriaSelecionada(event.target.value);
  };

  // Manipula a mudança de seleção/deseleção de um produto
  const handleProdutoCheckboxChange = (event, produtoId) => {
    const isChecked = event.target.checked;
    const produto = produtos.find((p) => p.id === produtoId);

    if (isChecked) {
      setProdutosSelecionados([...produtosSelecionados, produtoId]);
      setCategoriaSelecionada(produto.categoria);
    } else {
      setProdutosSelecionados(produtosSelecionados.filter((id) => id !== produtoId));

      const produtosDaCategoriaSelecionada = produtos.filter((p) => p.categoria === produto.categoria);
      const todosDesmarcados = produtosDaCategoriaSelecionada.every((p) => !produtosSelecionados.includes(p.id));

      if (todosDesmarcados) {
        setCategoriaSelecionada('');
      }
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
  const handleSearch = (termoBusca, categoria) => {
    const produtosFiltrados = produtos.filter((produto) => {
      if (categoria && produto.categoria !== categoria) {
        return false;
      }
      return produto.nome.toLowerCase().includes(termoBusca.toLowerCase());
    });
    setProdutosFiltradosPorCategoria(produtosFiltrados);
  };

  // Ordena os produtos filtrados com base nos produtos selecionados
  const produtosOrdenados = [...produtosFiltradosPorCategoria].sort((produtoA, produtoB) => {
    const isSelectedA = produtosSelecionados.includes(produtoA.id);
    const isSelectedB = produtosSelecionados.includes(produtoB.id);
    if (isSelectedA && !isSelectedB) {
      return -1;
    }
    if (!isSelectedA && isSelectedB) {
      return 1;
    }
    return 0;
  });

  return (
    <div>
      <div className='CategoriasProdutos'>
        {/* Componente de seleção de categorias */}
        <label className="categoriasText" htmlFor="cars">Categorias</label>
        <select className='setaCategorias' name="cars" id="cars" value={categoriaSelecionada} onChange={handleCategoriaChange}>
          <option>Selecione</option>
          {/* Renderiza as opções de categorias */}
          {categoriasUnicas.map((categoria, index) => (
            <option key={index} value={categoria}>{categoria}</option>
          ))}
        </select>
      </div>
      {/* Componente de busca */}
      <LupaProdutos onSearch={handleSearch} />
      <div className="produtos">
        {/* Renderiza os produtos filtrados e ordenados */}
        {produtosOrdenados.map((produto) => (
          <div className='corp' key={produto.id}>
            {produto.nome}
            {/* Checkbox para selecionar/deselecionar o produto */}
            <input
              className='checkBox'
              type="checkbox"
              value={produto.id}
              checked={produtosSelecionados.includes(produto.id)}
              onChange={(event) => handleProdutoCheckboxChange(event, produto.id)}
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