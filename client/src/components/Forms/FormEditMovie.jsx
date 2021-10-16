import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, ModalBody, ModalHeader, ModalFooter, Input } from "reactstrap";
import { useState } from "react";
import { putMovie } from "../../redux/movies/moviesAction";

function FormEditMovie() {
  const movies = useSelector((state) => state.moviesReducer.movies);
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
    cinemas: 0,
    sala: 0,
    funcion: 0,
  });

  const seleccionarMovie = (elemento, caso) => {
    setData(movies);

    console.log("esta es mi elemento dsp del set ", elemento.id);
    setMovieSeleccionado({
      id: elemento.id,
    });
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("este es mi handlechange", e.value);
    setMovieSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const editar = async () => {
    console.log("esta es mi data dsp del set ", data);
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
        movie.genre = movieSeleccionado.genre;
        movie.cinemas = movieSeleccionado.cinemas;
        movie.sala = movieSeleccionado.sala;
        movie.funcion = movieSeleccionado.funcion;
        const x = dispatch(putMovie(movieSeleccionado));
      }
    });
    setData(dataNueva);
    console.log("esta es mi data nueva ", dataNueva);
    setModalEditar(false);
  };

  const eliminar = () => {
    setData(data.filter((movie) => movie.id !== movieSeleccionado.id));
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
              onChange={(e) => {
                handleChange(e);
              }}
              rows={5}
            />
            <br />
            <label>Actors</label>
            <Input
              className="form-control"
              type="text"
              name="actors"
              value={movieSeleccionado && movieSeleccionado.actors}
              onChange={(e) => {
                handleChange(e);
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
            <label>usersRating</label>
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
            <label>votes</label>
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
            <label>Image</label>
            <Input
              className="form-control"
              type="text"
              name="image"
              value={movieSeleccionado && movieSeleccionado.image}
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
            <label>Genero</label>
            <Input
              className="form-control"
              type="text"
              name="genre"
              value={movieSeleccionado && movieSeleccionado.genre}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />
            <label>Cine</label>
            <Input
              className="form-control"
              type="text"
              name="cinemas"
              value={movieSeleccionado && movieSeleccionado.cinemas}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />
            <label>Sala</label>
            <Input
              className="form-control"
              type="text"
              name="sala"
              value={movieSeleccionado && movieSeleccionado.sala}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />
            <label>Funcion</label>
            <Input
              className="form-control"
              type="text"
              name="funcion"
              value={movieSeleccionado && movieSeleccionado.funcion}
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
          Estás Seguro que deseas eliminar el país{" "}
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
  //   const movies = useSelector((state) => state.moviesReducer.movies);
  //   console.log("estas son mis movies", movies);

  //   const [data, setData] = useState(movies);
  //   const [modalEditar, setModalEditar] = useState(false);
  //   const [movieSeleccionado, setMovieSeleccionado] = useState({
  //     title: "",
  //     rating: 0,
  //     description: "u",
  //     actors: [],
  //     director: "",
  //     usersRating: 0,
  //     votes: 0,
  //     availability: true,
  //     price: "0",
  //     image: "",
  //     runTime: "",
  //     genre: 0,
  //     cinema: 0,
  //     sala: 0,
  //     funcion: 0,
  //   });
  //   const handleCharge = () => {
  //     setData(movies);
  //     console.log(data);
  //   };

  //   return (
  //     <div>
  //       <div>Seleccione una pelicula para editar</div>
  //       {movies &&
  //         movies.map((el, i) => {
  //           return (
  //             <div key={el.id}>
  //               <div>{el.title}</div>
  //               <button >Editar</button>
  //               <Modal isOpen={modalEditar}>
  //                 <ModalHeader>
  //                   <div>
  //                     <h3>Editar País</h3>
  //                   </div>
  //                 </ModalHeader>
  //                 <ModalBody>
  //                   <div className="form-group">
  //                     <label>title</label>
  //                     <input
  //                       className="form-control"
  //                       readOnly
  //                       type="title"
  //                       name="id"
  //                       value={movieSeleccionado && movieSeleccionado.title}
  //                     />
  //                     <br />

  //                     <label>rating</label>
  //                     <input
  //                       className="form-control"
  //                       type="text"
  //                       name="rating"
  //                       value={movieSeleccionado && movieSeleccionado.rating}
  //                     />
  //                     <br />

  //                     <label>description</label>
  //                     <input
  //                       className="form-control"
  //                       type="text"
  //                       name="description"
  //                       value={movieSeleccionado && movieSeleccionado.description}
  //                     />
  //                     <br />
  //                   </div>
  //                 </ModalBody>
  //                 <ModalFooter>
  //                   <button className="btn btn-primary" >
  //                     Actualizar
  //                   </button>
  //                   <button
  //                     className="btn btn-danger"
  //                     onClick={() => setModalEditar(false)}
  //                   >
  //                     Cancelar
  //                   </button>
  //                 </ModalFooter>
  //               </Modal>
  //             </div>
  //           );
  //         })}
  //     </div>
  //   );
}

export default FormEditMovie;
