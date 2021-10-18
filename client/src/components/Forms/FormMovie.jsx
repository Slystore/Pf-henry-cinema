import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import image from "../Forms/img/posterForm.jpeg";
import bg from "../Forms/img/bgForm.jpeg";
import paper from "../Forms/img/paperForm.jpg";
import swal from "sweetalert";
import { useStyles } from "./stylesForms";
import FormGenre from "./FormGenre";
import { postMovie } from '../../redux/movies/moviesAction'

const validate = (form) => {
  let errors = {};
  if (!form.Nombre) {
    errors.nombre = "Campo Obligatorio";
  } else if (!form.Puntaje || form.Puntaje <= 0) {
    errors.puntaje = "Campo Obligatorio";
  } else if (!form.Precio || form.Puntaje <= 0) {
    errors.precio = "Campo Obligatorio";
  } else if (!form.Imagen) {
    errors.imagen = "Campo Obligatorio";
  } else if (!form.Resumen) {
    errors.resumen = "Campo Obligatorio";
  } else if (!form.Duracion || form.Duracion <= 1) {
    errors.Duracion = "Campo Obligatorio";
  }
  return errors;
};


const FormMovie = () => {
  const dispatch = useDispatch()
  // dispatch(postMovie())
  const clasess = useStyles();
  const history = useHistory();
  const { genres } = useSelector((state) => state.moviesReducer);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    // Nombre: "",
    // Puntaje: 0,
    // PuntajeUsuario: 0,
    // Disponibilidad: true,
    // Precio: 0,
    // Imagen: "",
    // Resumen: "",
    // Duracion: 0,
    // Genero: [],

    title : "Hola2",
    rating : 7.5,
    description : "una prueba del post, si me sale bien, me voy a dormir",
    actors : ["Hola2", "Chau2"],
    director : "Gabriel Villarroel",
    usersRating : 5.0,
    votes : 1392,
    availability : true,
    price : "99.99",
    image : "no tengo imagen pero puedo ver si mando un texto mas largo, uy, ya lo hice, que genio. :')",
    runTime : "1.45.56",
    genre : "Action",
    cinema: "Kaia",
    sala: "sala_uno",
    funcion: 12
  });

  
  const handleChange = (e) => {
    var objErrors = validate({
      ...form,
      [e.target.name]: e.target.value,
    });
    // setErrors(objErrors);
    console.log(errors);
    // setForm((form) => {
    //   return {
    //     ...form,
    //     [e.target.name]: e.target.value,
    //   };
    // });
  };

  const handleSelect = (e) => {
    setForm((form) => {
      return {
        ...form,
        Disponibilidad: e.target.value,
      };
    });
  };

  const handleSelectGenre = (e) => {
    setForm((form) => {
      return {
        ...form,
        Genero: [...form.Genero, e.target.value],
      };
    });
  };

  const deleteGenero = (e) => {
    console.log(e);
    setForm((form) => {
      return {
        ...form,
        Genero: form.Genero.filter((genres) => genres !== e),
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //se ejecuta action que mande ese form al back
    // if (Object.values(errors).length > 0) {
      // swal("", "faltan campos por completar", "warning");
    // } else {
      dispatch(postMovie())
      console.log('peli creada', form)
      setForm({
        nombre: "",
        Puntaje: 0,
        PuntajeUsuario: 0,
        Disponibilidad: true,
        Precio: 0,
        Imagen: "",
        Resumen: "",
        Duracion: 0,
        Genero: "",
      });

      swal("Pelicula Creada!", "", "success");
      history.push("/"); //hay que poner la ruta de router a donde reenvia
      // window.location.replace('')
    // }
  };

  return (
    <div className="container">
      <img className={clasess.bg} src={bg} alt=""/>
      <div className={clasess.caja}>
        <div>
          <img className={clasess.boxImg} src={image} alt=""/>
        </div>
        <div className={clasess.caja2}>
          <div className={clasess.boxForm}>
            <h2 className={clasess.title}>Post movie</h2>

            <form onSubmit={(e) => handleSubmit(e)}>
              <div className={clasess.miniBox}>
                <input
                  className={clasess.input}
                  placeholder="Nombre"
                  type="text"
                  name="Nombre"
                  onChange={handleChange}
                />
                {errors.nombre && (
                  <p className={clasess.error}>{errors.nombre}</p>
                )}
              </div>
              <div className={clasess.miniBox}>
                <input
                  className={clasess.input}
                  placeholder="Puntaje"
                  type="number"
                  min="0"
                  max="10"
                  name="Puntaje"
                  onChange={handleChange}
                />
                {errors.puntaje && (
                  <p className={clasess.error}>{errors.puntaje}</p>
                )}
              </div>

              <div className={clasess.miniBox}>
                <input
                  className={clasess.input}
                  placeholder="Puntaje Usuario"
                  type="number"
                  min="0"
                  max="10"
                  name="puntajeUsuario"
                  onChange={handleChange}
                />
              </div>

              <div className={clasess.miniBox}>
                <input
                  className={clasess.input}
                  placeholder="Precio"
                  type="number"
                  name="Precio"
                  onChange={handleChange}
                />
                {errors.precio && (
                  <p className={clasess.error}>{errors.precio}</p>
                )}
              </div>

              <div className={clasess.miniBox}>
                <input
                  className={clasess.input}
                  placeholder="Imagen"
                  type="text"
                  name="Imagen"
                  onChange={handleChange}
                />
                {errors.imagen && (
                  <p className={clasess.error}>{errors.imagen}</p>
                )}
              </div>

              <div className={clasess.boxtextarea}>
                <textarea
                  className={clasess.textarea}
                  name="Resumen"
                  placeholder="Resumen"
                  onChange={handleChange}
                />
                {errors.resumen && (
                  <p className={clasess.error}>{errors.resumen}</p>
                )}
              </div>

              <div className={clasess.miniBox}>
                <input
                  className={clasess.input}
                  placeholder="Duracion"
                  type="number"
                  name="Duracion"
                  onChange={handleChange}
                />
                {errors.duracion && (
                  <p className={clasess.error}>{errors.duracion}</p>
                )}
              </div>

              <div className={clasess.boxBtn}>
                <button type="submit" className={clasess.btn}>enviar
                </button>
                <Link to="/admin">
                  <button className={clasess.btn}>Volver</button>
                </Link>
              </div>
            </form>
          </div>
          <div>
            <select className={clasess.disponible} onChange={handleSelect}>
              <option value="true"> Disponible</option>
              <option value="false"> Proximamente</option>
            </select>

            <select onChange={(e) => handleSelectGenre(e)} className={clasess.select}>
              {genres &&
                genres.map((genre) => {
                  return (
                    <option key={genre.id} value={genre.name}>
                      {genre.name}
                    </option>
                  );
                })}
            </select>

            <img src={paper} className={clasess.imgPaper} alt=""/>

           
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormMovie;
