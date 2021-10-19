import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, ModalBody, ModalHeader, ModalFooter, Input } from "reactstrap";
import { useState } from "react";
import { deleteMovie, putMovie } from "../../redux/movies/moviesAction";
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormEditMovie.css'

function FormEditMovie() {

  const movies = useSelector((state) => state.moviesReducer.movies);
  const genres = useSelector((state) => state.moviesReducer.genres);
  const { cinema } = useSelector((state) => state.moviesReducer);
  const { cinemaRooms } = useSelector((state) => state.moviesReducer);
  const { screenings } = useSelector((state) => state.moviesReducer);


  const dispatch = useDispatch();

  const [data, setData] = useState();
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);

  const [movieSeleccionado, setMovieSeleccionado] = useState({
    id: "",
    title: "",
    rating: 0,
    description: "",
    actors: [],
    director: "",
    usersRating: 0,
    votes: 0,
    availability: true,
    price: "0",
    image: "",
    runTime: "",
    genre: [],
    cinema: 0,
    sala: 0,
    funcion: 0,
  });

  const [formData, setFormData] = useState({
    genre: [],
  })

  const seleccionarMovie = (elemento, caso) => {
    setData(movies);
    //console.log("esta es mi elemento dsp del set ", elemento.id);
    setMovieSeleccionado({
      id: elemento.id,
    });
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };

  function handleSelect(e) {
    setFormData((prevState) => {
        return{
            ...prevState,
            genre : [ ...prevState.genre, e.target.value ]
        }
    })
    //console.log(formData.genre)
  }

  function Delete(genre) {
    setFormData((prevState) => {
        return{
            ...prevState,
            genre:  prevState.genre.filter(c => c !== genre)
          
        }
    })
  }
  
  function handleChange(e) {
    setMovieSeleccionado((prevState) => {
        return{
            ...prevState,
            [e.target.name] : parseInt(e.target.value)?parseInt(e.target.value):e.target.value
        }
    })
  }

  function handleChangeActors(e) {
    let input = e.target.value
    e.target.name === 'actors'?  input = e.target.value.split(','):console.log("no estás en actores")
    console.log("este es el array", input);
    setMovieSeleccionado((prevState) => {
        return{
            ...prevState,
            actors: input
        }
    })
  }


  const editar = async () => {
   // console.log("esta es mi data dsp del set ", data);
    var dataNueva = data;
    console.log("estoy entrando y esto es mi data nueva", dataNueva);
    dataNueva.map((movie) => {
      if (movie.id === movieSeleccionado.id) {
        console.log('esto es movieSeleccionado',movieSeleccionado)
        console.log("esta es la movie seleccionada", movie);
        movie.rating = movieSeleccionado.rating;
        movie.title = movieSeleccionado.title;
        movie.description = movieSeleccionado.description;
        movie.actors = movieSeleccionado.actors;
        movie.director = movieSeleccionado.director;
        movie.usersRating = movieSeleccionado.usersRating;
        movie.votes = movieSeleccionado.votes;
        movie.availability = movieSeleccionado.availability;
        movie.price = movieSeleccionado.price;
        movie.image = movieSeleccionado.image;
        movie.runTime = movieSeleccionado.runTime;
        movie.genre = formData.genre;
        movie.cinema = movieSeleccionado.cinema;
        movie.sala = movieSeleccionado.sala;
        movie.funcion = movieSeleccionado.funcion;
        const x = dispatch(putMovie(movie));
      }
    });
    setData(dataNueva);
    console.log("esta es mi data nueva ", dataNueva);
    setModalEditar(false);
  };

  const eliminar = async() => {
    setData(data.filter((movie) => movie.id !== movieSeleccionado.id));
    console.log('este es mi estado de movieSeleccionado ',movieSeleccionado)
    const x = await deleteMovie(movieSeleccionado.id)
    setModalEliminar(false);
  };

  return (
    <div className="App">
      <h2>Editar y eliminar peliculas</h2>
      <br />
      <br />
      <br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Rating</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((elemento) => (
            <tr key={elemento.id}>
              <td>{elemento.id}</td>
              <td>{elemento.title}</td>
              <td>{elemento.rating}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => seleccionarMovie(elemento, "Editar")}
                >
                  Editar
                </button>{" "}
                {"   "}
                <button
                  className="btn btn-danger"
                  onClick={() => seleccionarMovie(elemento, "Eliminar")}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal size="lg" isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Pelicula</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <Input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={movieSeleccionado && movieSeleccionado.id}
            />
            <br />

            <label>Title</label>
            <Input
              className="form-control"
              type="text"
              name="title"
              value={movieSeleccionado && movieSeleccionado.title}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />

            <label>Rating</label>
            <Input
              className="form-control"
              type="text"
              name="rating"
              value={movieSeleccionado && movieSeleccionado.rating}
              onChange={(e) => {handleChange(e)}}
            />
            <br />

            <label>Users Rating</label>
            <Input
              className="form-control"
              type="text"
              name="usersRating"
              value={movieSeleccionado && movieSeleccionado.usersRating}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />

            <label>Description</label>
            <Input
              id="unmountOnClose"
              className="form-control"
              type="textarea"
              name="description"
              value={movieSeleccionado && movieSeleccionado.description}
              onChange={(e) => {handleChange(e);}}
              rows={5}
              style={{resize:'none'}}
    
            />
            <br />
            <label>Actors <i style={{ fontSize: 14, color: 'gray'}}>(Utiliza comas para separar los actores)</i></label>
            <Input
              className="form-control"
              type="text"
              name="actors"
              value={movieSeleccionado && movieSeleccionado.actors}
              onChange={(e) => {
                handleChangeActors(e)
              }}
            />
            <br />
            <label>Director</label>
            <Input
              className="form-control"
              type="text"
              name="director"
              value={movieSeleccionado && movieSeleccionado.director}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />

            <label>Votes</label>
            <Input
              className="form-control"
              type="text"
              name="votes"
              value={movieSeleccionado && movieSeleccionado.votes}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />
            
            <div className="SelectContainer">
              <select className="Select" name="genre"  onChange={e => handleSelect(e)}>
                  <option value="">Género</option>
                    {
                        genres && genres.map((genre,index) => {
                            return (
                              <option key={genre.id} value={genre.id}>
                               {
                                 index < 9 ? '0' + (index + 1) + ' -- ' + genre.name : (index + 1) + ' -- ' + genre.name
                               } 
                              </option>
                            );
                        })
                    }
              </select>  
            </div>
            <div className="GenresSeleccionados" name="genres">
                    {
                        formData.genre.map((g,index) => {
                            return(
                                <div className="GenreSelected"  key={index} >
                                    <div className="GenreId">{g}</div>
                                    <div className="Close"  onClick={() => Delete(g)} ><p>x</p></div>
                                </div>
                            )
                        })
                    }
            </div>
           

             <div className="SelectContainer">
              <select className="Select" name="cinema" onChange={e => handleChange(e)}>
                <option value=""> Cinema</option>
                    {
                        cinema && cinema.map((cinema) => {
                            return (
                              <option key={cinema.id} value={cinema.id}>
                                {cinema.name}
                              </option>
                            );
                        })
                    }
                </select>
           </div>
          
           <div className="SelectContainer">
              <select className="Select" name="sala" onChange={e => handleChange(e)}>
                <option value="">Sala</option>
                    {
                        cinemaRooms && cinemaRooms.map((sala, index) => {
                            
                            return (
                              <option key={index} value={sala.id}>
                                {sala.name} 
                              </option>
                            );
                        })
                    }
              </select>
            </div>
            <div className="SelectContainer">
              <select className="Select" name="funcion" onChange={e => handleChange(e)}>
                <option value="">Función</option>
                    {
                        screenings && screenings.map((funcion, index) => {
                            
                            return (
                              <option key={index} value={funcion.id}>
                                {funcion.time} 
                              </option>
                            );
                        })
                    }
              </select>
            </div>

            <label>Availability</label>
            <Input
              className="form-control"
              type="checkbox" 
              name="availability"
              value={movieSeleccionado && movieSeleccionado.availability}
              onChange={(e) => {
                handleChange(e);
              }}
              />
            <br />

            <label>Price</label>
            <Input
              className="form-control"
              type="text"
              name="price"
              value={movieSeleccionado && movieSeleccionado.price}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />

            <label>RunTime</label>
            <Input
              className="form-control"
              type="text"
              name="runTime"
              value={movieSeleccionado && movieSeleccionado.runTime}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />

            <label>Image</label>
            <Input
              className="form-control"
              type="file"
              name="image"
              value={movieSeleccionado && movieSeleccionado.image}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />
            
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => editar()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Estás Seguro que deseas eliminar la pelicula{" "}
          {movieSeleccionado && movieSeleccionado.title}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={() => eliminar()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default FormEditMovie;