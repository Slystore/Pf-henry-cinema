import React from 'react'

function MovieDetail() {
    return (
        <div>
            
        </div>
    )
}

export default MovieDetail


// import React from "react";

// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getMovieDetails, cleanDetail } from "../../actions/index";
// import { NavLink } from "react-router-dom";
// // import loading from "../assets/Loading.jpeg";
// import './MovieDetail.css'
// import axios from "axios";
// import { IoPeopleCircleSharp } from "react-icons/io5";

// export default function MovieDetail(props) {

//   const defIm = 'https://es.web.img3.acsta.net/c_310_420/pictures/21/06/14/11/47/2960546.jpg'

//   const { id } = props.match.params;
//   console.log(typeof id, '*****este es el id que viene por params', id)
//   // console.log()
//   // axios.get(`http://18.216.130.223:3001/api/movies/${id}`).then(data => console.log(data))
//   const dispatch = useDispatch();


//   useEffect(() => {
//     dispatch( getMovieDetails(id) );
//     return () => dispatch(cleanDetail(id))
//   }, [dispatch, id]);

//   const pelis = useSelector(state => state.moviesDetails);

//   console.log('esto es lo que carga el reducer en DETAILS', pelis)
//   console.log(Array.isArray( pelis))

//   // linea 45 no me funca el toUpperCase()

//   return (
//     <div className="">
    
//       {pelis ? (
//         <div>
//           <img
//             src={pelis.image ? IoPeopleCircleSharp.image : defIm}
//             alt="not found"
//             width="200px"
//             height="250px"
//           />
//           <h1 className=""> { pelis.title } </h1> 

//           {/* <h2 className="">
//             {" "}
//             Género:{" "}
//             {movieDetail[0].genre.map((el) => {
//               return <div>{el}</div>;
//             })}
//           </h2> */}
//           <h3>Sinopsis: {pelis.description}</h3>
//           <h4>Duración: {pelis.runTime}</h4>
//         </div>
//       ) : (
//         <div>
//           {/* <img src={loading} alt="Not found" width="300px" height="300px" /> */}
//           <p className="">Loading...</p>
//         </div>
//       )}
//       <NavLink to="/">
//         <button className="">Volver</button>
//       </NavLink>
//     </div>
//   );
// }

// const movieDetail= [ { 
//   id: '1', 
//   name: 'After Almas Perdidas',
//   sinopsis: 'Cuando Tessa toma la decisión más importante de su vida, todo cambia. Los secretos que salen a la luz sobre su familia, y también sobre la de Hardin, ponen en peligro su relación y su futuro juntos. La vida de Tessa empieza a desmoronarse, nada es como ella creía que sería. Nunca ha sentido algo así por nadie, pero empieza a cuestionarse si vale la pena. Antes el amor bastaba para mantenerlos juntos, pero ahora ya no está claro lo que dictan sus corazones... Con más de mil millones de impactos, After se ha convertido en el mayor fenómeno de la historia de la plataforma Wattpad.',
//   rating: 5,
//   availability: true,
//   image: '../../assets/moviesPosters/after_almas_perdidas.jpg'
// }]