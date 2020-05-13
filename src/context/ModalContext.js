import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

export const ModalContext = createContext()

const ModalProvider = (props) => {

    //State del provider
    const [idreceta, setIdReceta] = useState(null)

    return (
        <ModalContext.Provider
            value={{
                setIdReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;