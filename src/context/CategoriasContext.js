import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

//Crear el context
export const CategoriasContext = createContext();

//provider donde se encuentran (de donde salen) las funciones y state (datos )
const CategoriasProvider = (props) => {

    //crear el state del Context 
    const [categorias, setcategorias] = useState([])

    //ejecutar el llamado a la API 
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`

            const categorias = await axios.get(url)

            setcategorias(categorias.data.drinks)
        }
        obtenerCategorias();
    }, [])

    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider; 