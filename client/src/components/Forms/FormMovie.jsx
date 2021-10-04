import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';


const FormMovie = () => {

    const history = useHistory()

    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        Nombre: '',
        Puntaje: 0,
        PuntajeUsuario: 0,
        Disponibilidad: true,
        Precio: 0,
        Imagen: '',
        Resumen: '',
        Duracion: 0,
        Genero: []
    })
    const validate = (form) => {
        let errors = {}
        if(!form.Nombre) errors.nombre = 'Es obligatorio ingresar un nombre';
        else if(!form.Puntaje || form.Puntaje <= 0) errors.puntaje = 'Es obligatorio fijar un puntaje';
        else if(!form.Precio || form.Puntaje <= 0) errors.precio = 'Es obligatorio fijar un precio';
        else if(!form.Imagen) errors.imagen = 'Es obligatorio establecer una imagen';
        else if(!form.Resumen) errors.resumen = 'Es obligatorio describir la pelicula';
        else if(!form.Duracion || form.Duracion <= 1) errors.Duracion = 'Es obligatorio ingresar la duracion del pelicula';
        // else if(!form.Genero.length) errors.Genero = 'Es obligatorio introducir al menos un genero';
        return errors
    }
    
    
    const handleChange = (e) => {
        var objErrors = validate({
            ...form,
            [e.target.name]: e.target.value
          })
          setErrors(objErrors);
          console.log(errors)
        setForm( (form) => {
            return {
                ...form,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSelect = (e) => {
        setForm( (form) => {
            return {
                ...form,
                Disponibilidad: e.target.value
            }
        })
    }

    const handleSelectGenre = (e) => {
        setForm( (form) => {
            return {
                ...form,
                Genero: [ 
                    ...form.Genero, 
                    e.target.value
                ]
            }
        })
    }
    
    const deleteGenero = (e) => {
        setForm( (form) => {
            return {
                ...form,
                Genero: form.Genero.filter(e => e !== e.target.value)
            }
        })
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //se ejecuta action que mande ese form al back
        if (Object.values(errors).length > 0) {
            alert("Faltan datos a completar")
          } else {
        setForm({
            nombre: '',
            Puntaje: 0,
            PuntajeUsuario: 0,
            Disponibilidad: true,
            Precio: 0,
            Imagen: '',
            Resumen: '',
            Duracion: 0,
            Genero: ''
        })
        alert('done!')
        history.push("/") //hay que poner la ruta de router a donde reenvia
        window.location.replace('')
    }}


    return(
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <label> Nombre <input type='text' name='Nombre' onChange={handleChange}/></label>
                {errors.nombre && (<p>{errors.nombre}</p>)}
                <label> Puntaje <input type='number' name='Puntaje' onChange={handleChange}/></label>
                {errors.puntaje && (<p>{errors.puntaje}</p>)}
                <label> Puntaje Usuario <input type='number' name='puntajeUsuario' onChange={handleChange}/></label>
                <select onChange={handleSelect}>
                    <option value='true'> True</option>
                    <option value='false'> False </option>
                </select>
                <label> Precio <input type='number' name='Precio' onChange={handleChange}/></label>
                {errors.precio && (<p>{errors.precio}</p>)}
                <label> Imagen <input type='text' name='Imagen' onChange={handleChange}/></label>
                {errors.imagen && (<p>{errors.imagen}</p>)}
                <label> Resumen <textarea name='Resumen' onChange={handleChange}/></label>
                {errors.resumen && (<p>{errors.resumen}</p>)}
                <label> Duracion <input type='number' name='Duracion' onChange={handleChange}/></label>
                {errors.duracion && (<p>{errors.duracion}</p>)}
                {/* <select onChange={handleSelectGenre}> */}
                    { /* Aca deberia venir un map del estado de redux de "generos" para que se despleguen los generos*/ }
                {/* </select> */}
                <button type='submit'> enviar </button>
            </form>

            {/* <div>
                {
                    form.Genero.map(el => {
                    return(
                        <div>
                            <p> {el} </p>
                            <button onClick={ () => deleteGenero(el) }> X </button>
                        </div>
                    )})
                }
            </div> */}
            <Link to="/admin" ><button >Volver</button></Link>
        </div>
    )
}
export default FormMovie