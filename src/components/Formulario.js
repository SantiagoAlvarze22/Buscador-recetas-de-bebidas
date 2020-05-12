import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';

const Formulario = () => {

    const { categorias } = useContext(CategoriasContext);

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    const obtenerDatosReceta = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form
            className="col-12"
        >
            <fieldset className="text-center">
                <legend>Bebidas por Categoria o Ingrediente</legend>
            </fieldset>

            <div className="row">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingrediente"
                        onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatosReceta}
                    >
                        <option value="">Selecciona Categorias</option>
                        {categorias.map(categoria => (
                            <option
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
    );
}

export default Formulario;