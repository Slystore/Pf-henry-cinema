import axios from "axios";
export const GET_CINEMAS = "GET_CINEMAS";
export const ADD_CINEMA = "ADD_CINEMA";

//const awsPort = process.env.REACT_APP_AWS_PORT_CINEMAS;

export function getCinemas() {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/cinemas`);
    console.log("data cinemas",data)
    return await dispatch({
      type: GET_CINEMAS,
      payload: data,
    });
  };
}
// export function getCinemaRooms() {
//   return async (dispatch) => {
//     const { data } = await axios.get(`/api/cinemas`);
//     console.log("data cinemas",data)
//     return await dispatch({
//       type: GET_CINEMAS,
//       payload: data,
//     });
//   };
// }

