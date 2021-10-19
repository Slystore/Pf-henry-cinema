import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import image from "../Forms/img/posterForm.jpeg";
import bg from "../Forms/img/bgForm.jpeg";
import paper from "../Forms/img/paperForm.jpg";
import swal from "sweetalert";
import { useStyles } from "./stylesForms";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import { postMovie } from "../../redux/movies/moviesAction";

const FormMovie = () => {

  const clasess = useStyles();
  const history = useHistory();

  const { genres } = useSelector((state) => state.moviesReducer);
  const { cinemas } = useSelector((state) => state.moviesReducer);
  const { cinemaRooms } = useSelector((state) => state.moviesReducer);

  console.log("cinemas",cinemas)
  console.log("géneros",genres)
  console.log("salas",cinemaRooms)

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

    if (!form.title) {
      errors.nombre = "Campo Obligatorio";

    } else if (!form.price || form.price === '0') {
      errors.precio = "Campo Obligatorio";

    } else if (!form.rating || form.rating === '0') {
      errors.rating ="Campo Obligatorio"    

    } else if (!form.usersRating || form.usersRating === '0') {
      errors.usersRating = "Campo Obligatorio";
      
    } else if (!form.runTime || form.runTime === '0') {
      errors.runTime = "Campo Obligatorio";
      
    } else if (!form.votes || form.votes === '0') {
      errors.votes = "Campo Obligatorio";
    
    } else if (!form.actors){
      errors.actors ="Campo Obligatorio"

    }else if (!form.directors){
      errors.directors ="Campo Obligatorio"

    } else if (!form.description) {
      errors.description = "Campo Obligatorio";
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

  function cambiar(){
    var pdrs = document.getElementById('fileUpload').files[0].name;
    document.getElementById('info').innerHTML = pdrs;
  }

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

            <div className={clasess.imgLeft}>
                <img className={clasess.boxImg} src={image} alt=""/>
            </div>

            <div className={clasess.caja2}>

                <div className={clasess.titleContainer}>
                    <h2 className={clasess.title}>Post movie</h2>
                </div>

                <form onSubmit={(e) => handleSubmit(e)} encType='multipart/form-data' method='post'>

                    <div className={clasess.boxForm}>
                        <div className={clasess.miniBox}>
                            <input
                                className={clasess.input}
                                placeholder="Título"
                                type="text"
                                name="title"
                                onChange={handleChange}
                            />
                             {errors.nombre && (
                                   <p className={clasess.error}>{errors.nombre}</p>
                            )}
                        </div>

                        <div className={clasess.miniBox2}>
                            <input
                                className={clasess.input2}
                                placeholder="Precio"
                                type="number"
                                min="0"
                                name="price"
                                onChange={handleChange}
                            />
                            {errors.precio && (
                              <p className={clasess.error}>{errors.precio}</p>
                            )}
                        </div>

                        <div className={clasess.miniBox2}>
                            <input
                                className={clasess.input2}
                                placeholder="Puntaje"
                                type="number"
                                min="0"
                                max="10"
                                name="rating"
                                onChange={handleChange}
                            />
                            {errors.rating && (
                                  <p className={clasess.error}>{errors.rating}</p>
                            )}
                        </div>
                    </div>

                    <div className={clasess.boxForm}>
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
                            {errors.usersRating && (
                                  <p className={clasess.error}>{errors.usersRating}</p>
                            )}
                        </div>

                        <div className={clasess.miniBox2}>
                            <input
                                className={clasess.input2}
                                placeholder="Run Time"
                                type="number"
                                name="runTime"
                                onChange={handleChange}
                            />
                            {errors.runTime && (
                              <p className={clasess.error}>{errors.runTime}</p>
                            )}
                          
                        </div>

                        <div className={clasess.miniBox2}>
                            <input
                                className={clasess.input2}
                                placeholder="Votos"
                                type="number"
                                name="votes"
                                onChange={handleChange}
                            />
                            {errors.votes && (
                              <p className={clasess.error}>{errors.votes}</p>
                            )}

                        </div>

                        
                    </div>

                    <div className={clasess.boxForm}>
                        <input
                            className={clasess.input3}
                            placeholder="Actores"
                            type="text"
                            name="actors"
                            onChange={handleChange}
                        />
                        {errors.actors && (
                          <p className={clasess.error}>{errors.actors}</p>
                        )}
                    </div>
                       
                    <div className={clasess.boxForm}>  
                        <input
                            className={clasess.input3}
                            placeholder="Directores"
                            type="text"
                            name="directors"
                            onChange={handleChange}
                        />
                        {errors.directors && (
                          <p className={clasess.error}>{errors.directors}</p>
                        )}
                    </div>

                    <div className={clasess.boxForm2}>
                        <textarea
                            className={clasess.textarea}
                            name="description"
                            placeholder="Descripción"
                            onChange={handleChange}
                        />
                        {errors.description && (
                          <p className={clasess.error}>{errors.description}</p>
                        )}

                    </div>

                    <div className={clasess.boxForm}>
                        <div className={clasess.miniBox3}>
                            <select onChange={(e) => handleSelectGenre(e)} className={clasess.select}>
                                <option value="">Género</option>
                                  {
                                      genres && genres.map((genre) => {
                                          return (
                                            <option key={genre.id} value={genre.id}>
                                              {genre.name}
                                            </option>
                                          );
                                      })
                                  }
                            </select> 
                        </div>
                        <div className={clasess.miniBox3}>
                            <select className={clasess.select} onChange={handleSelect}>
                              <option value=""> Cinema</option>
                                  {
                                      cinemas && cinemas.map((cinema) => {
                                          return (
                                            <option key={cinema.id} value={cinema.id}>
                                              {cinema.name}
                                            </option>
                                          );
                                      })
                                  }
                            </select>
                        </div>
                        <div className={clasess.miniBox3}>
                            <select className={clasess.select} onChange={handleSelect}>
                              <option value=""> Sala</option>
                                  {
                                      cinemaRooms && cinemaRooms.map((sala, index) => {
                                          let cinema = index === 0 || index === 3 || index === 6? 'Kaia': index === 1 || index === 4 || index === 7? 'Leta' : 'Clark'
                                          return (
                                            <option key={index} value={sala.id}>
                                              {sala.name} - Cinema {cinema}
                                            </option>
                                          );
                                      })
                                  }
                            </select>
                        </div>
                    </div>

                    <div className={clasess.boxForm}>
                        <div className={clasess.miniBox3}>
                            <select className={clasess.select} onChange={handleSelect}>
                                <option value=""> Disponibilidad</option>
                                <option value="true"> Disponible</option>
                                <option value="false"> Proximamente</option>
                            </select>
                        </div>
                        <div className={clasess.miniBox3}>
                            <select className={clasess.select} onChange={handleSelect}>
                                <option value=""> Función</option>
                                <option value="false">20:00</option>
                          </select>
                        </div>
                        <div className={clasess.miniBox4}>
                            <div className={clasess.boxBtn}>
                                <button type="submit" className={clasess.btn}>crear</button>  
                            </div>
                            <div className={clasess.boxBtn}>
                                <Link to="/admin">
                                  <button className={clasess.btn}>Volver</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={clasess.boxForm3}>
                       
                            <label htmlFor="file-upload" className={ clasess.subir}>
                                <CloudUploadIcon sx={{ fontSize: 20, marginBottom: 0.4 }}/> Subir Poster
                            </label>
                            <input
                                id="fileUpload"
                                name="fileUpload"
                                className={clasess.file}  
                                type="file"
                                name="poster"
                                onChange={cambiar}
                            />
                            <div id="info" className={clasess.info}></div>  
                       
                    </div>

                </form>
            </div>
        </div>

       
          {/*

             
            </form>
          </div> */}
          {/* <div>
            
            <img src={paper} className={clasess.imgPaper} alt=""/>

            <ul className={clasess.render}>
               {form.Genero.map((el, i) => (
                <div key={i}>
                  <div>{el}<button className={clasess.btnX}onClick={() => deleteGenero(el)}>X</button></div>
                </div>
              ))} 
            </ul>
          </div> */}
        {/* </div>
      </div> */}
    </div>
  );
};
export default FormMovie;
