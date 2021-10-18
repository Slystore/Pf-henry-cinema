import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import image from "../Forms/img/posterForm.jpeg";
import bg from "../Forms/img/bgForm.jpeg";
import paper from "../Forms/img/paperForm.jpg";
import swal from "sweetalert";
import { useStyles } from "./stylesForms";
// import { postMovie } from "../../redux/movies/moviesAction";

const FormMovie = () => {
  const clasess = useStyles();
  const history = useHistory();
  const { genres } = useSelector((state) => state.moviesReducer);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    title: "",
    rating: 0,
    usersRating: 0,
    availability: true,
    price: 0,
    image: "",
    description: "",
    runTime: 0,
    genre: [],
  });

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

  const handleChange = (e) => {
    var objErrors = validate({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors(objErrors);
    console.log(errors);
    setForm((form) => {
      return {
        ...form,
        [e.target.name]: e.target.value,
      };
    });
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

  // const deleteGenero = (e) => {
  //   console.log(e);
  //   setForm((form) => {
  //     return {
  //       ...form,
  //       Genero: form.Genero.filter((genres) => genres !== e),
  //     };
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //se ejecuta action que mande ese form al back
    // if (Object.values(errors).length > 0) {
    //   swal("", "faltan campos por completar", "warning");

    // } else {
      // const x = await postMovie(form)
      // setForm({
      //   title: "",
      //   rating: 0,
      //   usersRating: 0,
      //   availability: true,
      //   price: 0,
      //   image: "",
      //   description: "",
      //   runTime: 0,
      //   genre: "",
      // });

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
                  name="title"
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
                  name="rating"
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
                  name="usersRating"
                  onChange={handleChange}
                />
              </div>

              <div className={clasess.miniBox}>
                <input
                  className={clasess.input}
                  placeholder="Precio"
                  type="number"
                  name="price"
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
                  type="file"
                  name="image"
                  onChange={handleChange}
                />
                {errors.imagen && (
                  <p className={clasess.error}>{errors.imagen}</p>
                )}
              </div>

              <div className={clasess.boxtextarea}>
                <textarea
                  className={clasess.textarea}
                  name="description"
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
                  placeholder="runTime"
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

            <ul className={clasess.render}>
              {/* {form.Genero.map((el, i) => (
                <div key={i}>
                  <div>{el}<button className={clasess.btnX}onClick={() => deleteGenero(el)}>X</button></div>
                </div>
              ))} */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormMovie;