
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
// import { getGenres, createGenre } from '../actions';

export default function FormGenre() {
    //   const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState({});
    //   const Genres = useSelector((state) => state.genres)

    const [input, setInput] = useState({
        name: "",
        disabled: true
    })
    function validate(input) {
        let errors = {};
        if (!input.name) {
            errors.name = 'Nombre es requerido';
        } else if (/[^A-Za-z0-9_]/.test(input.name) || /[0-9]/.test(input.name)) {
            errors.name = 'Nombre invalido, solo letras';
        }
        return errors;
    };
    //   useEffect(() => {
    //     dispatch(getGenres())
    //   }, [dispatch]);
    function onInputChange(e) {
        var objErrors = validate({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(objErrors);
        setInput({
            ...input,
            [e.target.name]: e.target.value,
            disabled: errors.name ? true : false
        })

    }

    function handleSubmit(e) {
        e.preventDefault();
        if (Object.values(errors).length > 0) {
            alert("Faltan datos a completar")
        } else {
            //   dispatch(createGenre(input))
            alert("Género creado correctamente");
            setInput({
                name: "",
                disabled: true
            })
            history.push('/')
            window.location.replace('')
        }
    }

    return (
        <div >

            <h1>Crear Género</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div>

                    <label >Nombre: </label>
                    <input
                        name="name"
                        type="text"
                        onChange={onInputChange}
                        value={input.name} />

                    {errors.name && (
                        <p className="danger">{errors.name}</p>
                    )}
                </div>
                <button type='submit' disabled={input.disabled}  >
                    Crear Género</button>
            </form >
            <Link to="/admin" ><button >Volver</button></Link>
        </div >

    )

}