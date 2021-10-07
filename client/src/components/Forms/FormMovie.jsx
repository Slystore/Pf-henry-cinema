import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import image from "../Forms/img/posterForm.jpeg"
import bg from "../Forms/img/bgForm.jpeg"
import paper from "../Forms/img/paperForm.jpg"
import swal from "sweetalert"
const useStyles = makeStyles({
    container: {
        margin: 0,
        padding: 0
    },
    bg: {
        position: 'relative',
        width: '100vw',
        height: '98vh',
        filter: 'blur(5px)'
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        textTransform: 'uppercase',
        textAlign: 'right',
        marginBottom: 10
    },
    caja: {
        display: 'flex',
        width: 920,
        margin: 'auto',
        borderRadius: 7,
        overflow: 'hidden',
        position: 'absolute',
        top: '10%',
        left: '15%',
        boxShadow: '0 10px 10px rgb(0, 0, 0, .40)'
    },
    caja2: {
        display: 'flex',
        backgroundColor: '#fff'

    },
    boxImg: {
        width: 350,
        height: '100%',
        backgroundPosition: 'center',
    },
    boxForm: {
        textAlign: 'center',
        width: '100%',
    },

    miniBox: {
        height: 55
    },
    input: {
        width: 250,
        outline: 'none',
        height: 30,
        paddingLeft: 5,
        marginBottom: 13,

    },
    boxtextarea: {
        height: 82
    },
    textarea: {
        width: 256,
        height: 55,
        marginBottom: 13,
        outline: 'none',
        resize: 'none'
    },
    select: {
        width: 250,
        height: 33,
        outline: 'none',
        marginRight: 20
    },
    disponible: {
        marginTop: 75,
        width: 250,
        height: 33,
        outline: 'none',
        marginBottom: 22


    },
    render: {
        position: 'absolute',
        top: 153,
        right: 105,
        listStyle: 'none'
    },
    list: {

    },
    imgPaper: {
        height: 290,
        borderRadius: 10,
        position: 'relative',
        top: 15,
        left: 15,

    },
    boxBtn: {
        width: 300,
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 20,
        textAlign: 'center'
    },
    btn: {
        width: 100,
        height: 30,
        marginLeft: 10,
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        textTransform: 'uppercase',
        fontWeight: '600',
        borderRadius: 3,
        transition: '0.3s ease-out',
        '&:hover': {
            background: "#ea5103",
            color: 'white',
        },
    },
    btnX: {
        marginLeft: 7,
        backgroundColor: 'transparent',
        border: 'none',
        color: '#fff',
        fontSize: 13,
        '&:hover': {
            color: 'red',
        },

    },
    error: {
        color: 'red',
        fontSize: 14,
        fontWeight: '600',
        position: 'relative',
        bottom: 13


    }


})


const FormMovie = () => {

    const clasess = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const { genres } = useSelector(state => state)



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
        if (!form.Nombre) errors.nombre = 'Campo Obligatorio';
        else if (!form.Puntaje || form.Puntaje <= 0) errors.puntaje = 'Campo Obligatorio';
        else if (!form.Precio || form.Puntaje <= 0) errors.precio = 'Campo Obligatorio';
        else if (!form.Imagen) errors.imagen = 'Campo Obligatorio';
        else if (!form.Resumen) errors.resumen = 'Campo Obligatorio';
        else if (!form.Duracion || form.Duracion <= 1) errors.Duracion = 'Campo Obligatorio';
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
        setForm((form) => {
            return {
                ...form,
                [e.target.name]: e.target.value
            }
        })
    }




    const handleSelect = (e) => {
        setForm((form) => {
            return {
                ...form,
                Disponibilidad: e.target.value
            }
        })
    }

    const handleSelectGenre = (e) => {
        setForm((form) => {
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
        console.log(e)
        setForm((form) => {
            return {
                ...form,
                Genero: form.Genero.filter(genres => genres !== e)
            }
        })


    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //se ejecuta action que mande ese form al back
        if (Object.values(errors).length > 0) {

            swal("", "faltan campos por completar", "warning");

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

            swal("Pelicula Creada!", "", "success");
            history.push("/") //hay que poner la ruta de router a donde reenvia
            // window.location.replace('')
        }
    }


    return (
        <div className="container" >
            <img className={clasess.bg} src={bg} />
            <div className={clasess.caja}>
                <div>
                    <img className={clasess.boxImg} src={image} />
                </div>
                <div className={clasess.caja2}>
                    <div className={clasess.boxForm}>
                        <h2 className={clasess.title}>Post movie</h2>

                        <form onSubmit={e => handleSubmit(e)}>
                            <div className={clasess.miniBox}>
                                <input className={clasess.input} placeholder="Nombre" type='text' name='Nombre' onChange={handleChange} />
                                {errors.nombre && (<p className={clasess.error}>{errors.nombre}</p>)}

                            </div>
                            <div className={clasess.miniBox}>
                                <input className={clasess.input} placeholder="Puntaje" type='number' min="0" max="10" name='Puntaje' onChange={handleChange} />
                                {errors.puntaje && (<p className={clasess.error}>{errors.puntaje}</p>)}
                            </div>

                            <div className={clasess.miniBox}>
                                <input className={clasess.input} placeholder="Puntaje Usuario" type='number' min="0" max="10" name='puntajeUsuario' onChange={handleChange} />


                            </div>

                            <div className={clasess.miniBox}>
                                <input className={clasess.input} placeholder="Precio" type='number' name='Precio' onChange={handleChange} />
                                {errors.precio && (<p className={clasess.error}>{errors.precio}</p>)}

                            </div>

                            <div className={clasess.miniBox}>
                                <input className={clasess.input} placeholder="Imagen" type='text' name='Imagen' onChange={handleChange} />
                                {errors.imagen && (<p className={clasess.error}>{errors.imagen}</p>)}

                            </div>

                            <div className={clasess.boxtextarea}>
                                <textarea className={clasess.textarea} name='Resumen' placeholder="Resumen" onChange={handleChange} />
                                {errors.resumen && (<p className={clasess.error}>{errors.resumen}</p>)}

                            </div>

                            <div className={clasess.miniBox}>
                                <input className={clasess.input} placeholder="Duracion" type='number' name='Duracion' onChange={handleChange} />
                                {errors.duracion && (<p className={clasess.error}>{errors.duracion}</p>)}

                            </div>

                            <div className={clasess.boxBtn}>
                                <button type='submit' className={clasess.btn}> enviar </button>
                                <Link to="/admin" ><button className={clasess.btn}>Volver</button></Link>

                            </div>

                        </form>
                    </div>
                    <div >
                        <select className={clasess.disponible} onChange={handleSelect}>
                            <option value='true'> Disponible</option>
                            <option value='false'> Proximamente</option>
                        </select>
                        <select onChange={e => handleSelectGenre(e)} className={clasess.select}>
                            <option selected >Géneros</option>
                            {genres && genres.map((genre) => {

                                return <option key={genre.id} value={genre.name}>{genre.name}</option>
                            })}
                        </select>

                        <img src={paper} className={clasess.imgPaper} />

                        <ul className={clasess.render}>
                            {form.Genero.map((el, i) =>
                                <div key={i}>
                                    <li >{el}
                                        <button className={clasess.btnX} onClick={() => deleteGenero(el)}> X </button>
                                    </li>

                                </div>
                            )}

                        </ul>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default FormMovie