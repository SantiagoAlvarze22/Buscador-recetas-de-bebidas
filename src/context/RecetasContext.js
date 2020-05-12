import React, { createContext, useState } from 'react';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [recetas, setRecetas] = useState([])
    const [buscarReceta, setBuscarReceta] = useState({
        nombre: '',
        categoria: '',
    })

    return (
        <RecetasContext.Provider
            value={{
                setBuscarReceta
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}

export default RecetasProvider;

