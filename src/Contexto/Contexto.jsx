import { createContext, useState } from "react";

export const ResumoContexto = createContext();

export function ContextoProvider({children}){

  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);

    return(
        <ResumoContexto.Provider value={{categoriaSelecionada, setCategoriaSelecionada,produtosSelecionados, setProdutosSelecionados}}>
            {children}
        </ResumoContexto.Provider>
    )
}