import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';
import Error from './Error';

const Formulario = () => {

    const { categorias } = useContext(CategoriasContext);
    const { setBuscarReceta, setConsultar } = useContext(RecetasContext);

    const [busqueda, setGuardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    const [error, setError] = useState(false)

    const { nombre, categoria } = busqueda;

    const obtenerDatosReceta = e => {
        setGuardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const cargarFormulario = e => {
        e.preventDefault();

        //Verificar formulario 
        if (nombre === '' || categoria === '') {
            setError(true)
            return;
        }
        setError(false)

        setBuscarReceta(busqueda)
        setConsultar(true)
    }

    return (
        <form
            className="col-12"
            onSubmit={e => cargarFormulario(e)}
        >
            {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
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
        </form >
    );
}

export default Formulario;