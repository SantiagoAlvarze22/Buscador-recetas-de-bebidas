import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

export const ModalContext = createContext()

const ModalProvider = (props) => {

    //State del provider
    const [idreceta, setIdReceta] = useState(null);
    const [inforeceta, setReceta] = useState({});

    //Una vez que tenemos el id de la recer, lamo al API 
    useEffect(() => {
        const obtenerReceta = async () => {
            if (!idreceta) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;

            const resultado = await axios.get(url)

            setReceta(resultado.data.drinks[0])
        }
        obtenerReceta();
    }, [idreceta])

    return (
        <ModalContext.Provider
            value={{
                inforeceta,
                setIdReceta,
                setReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;