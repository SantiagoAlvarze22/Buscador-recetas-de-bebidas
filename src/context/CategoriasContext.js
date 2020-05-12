import React, { createContext, useState } from 'react';
import CategoriasProvider from './context/CategoriasContext'

//Crear el context
export const CategoriasContext = createContext();

//provider donde se encuentran (de donde salen) las funciones y state (datos )
const CategoriasProvider = (props) => {

    //crear el state del Context 
    const [categorias, setcategorias] = useState([])
    return (
        <CategoriasContext.Provider
            value={{

            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider; 