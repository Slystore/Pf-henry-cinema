import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { 
    ADD_TO_CART,
    REMOVE_ALL_ONE_CART,
    REMOVE_ALL_FROM_CART,
    CLEAR_CART
} from './cartsActions';

export const initialState = {
    cart: [],
    movies: [
        {
            id: "94e8a526-b223-4937-877b-2e88da50a3fc",
            title: "Free Guy",
            rating: 7.9,
            description: "Un cajero de banco llamado Guy se da cuenta de que es un personaje secundario en un videojuego de mundo abierto llamado Free City que pronto se desconectará.",
            actors: [
                        "Ryan Reynolds",
                        "Jodie Corner",
                        "Lil Rel Howery",
                        "Taika Waititi",
                        "Joe Keery",
                        "Utkarsh Ambudkar"
                    ],
            director: "Shawn Levy",
            price: 99.99,
            image: "https://i.postimg.cc/RC8YLHhr/free-guy.jpg",
        },
        {
            id: "67a16438-6605-4c3c-b682-a3bb9cda904b",
            title: "Snake Eyes: G.I. Joe Origins",
            rating: 7.9,
            description: "Después de salvar la vida de su heredero aparente, el tenaz y solitario Snake Eyes es bienvenido en un antiguo clan japonés llamado Arashikage, donde se le enseña los caminos del guerrero ninja. Pero, cuando se revelen los secretos de su pasado, se pondrá a prueba el honor y la lealtad de Snake Eyes, incluso si eso significa perder la confianza de los más cercanos a él.",
            actors: [
                        "Henry Golding",
                        "Andrew Koji",
                        "Iko Uwuais",
                        "Ursula Corbero",
                        "Samara Weaving",
                        "Peter Mensah"
                    ],
            director: "Robert Schwentke",
            price: 99.99,
            image: "https://i.postimg.cc/hGLnH0J7/snake-eye-gi-joe-origins.jpg",
   
        },
        {
            id: "a6a8a798-2dd9-4e1c-82fc-70fc9669cb20",
            title: "Old",
            rating: 6.7,
            description: "Un grupo de familias en unas vacaciones tropicales descubren que la playa apartada donde se hospedan de alguna manera los hace envejecer rápidamente, reduciendo sus vidas enteras a un solo día.",
            actors: [
                        "Gael Garcia Bernal",
                        "Vicky Krieps",
                        "Rufus Sewel"
                    ],
            director: "M. Night Shyamalan",
            price: 99.99,
            image: "https://i.postimg.cc/9FDhW2R2/old.jpg",
        },
        {
            id: "ed8ceea2-c01d-4cc2-be7c-67a7ea32242e",
            title: "Shang-Chi and the Legend of the Ten Rings",
            rating: 7.8,
            description: "Shang-Chi debe enfrentarse al pasado que pensó que había dejado atrás cuando se ve atraído por la red de la misteriosa organización de los Diez Anillos.",
            actors: [
                        "Simu Liu",
                        "Awkwafina",
                        "Toni Leung",
                        "Fala Chen"
                    ],
            director: "Destin Daniel Cretton",
            price: 99.99,
            image: "https://i.postimg.cc/d0PvHf0Y/shang-chi.jpg",
        }
    ]
  };

  
function cartReducer(state = initialState, action) {



    switch (action.type) {
        
        case ADD_TO_CART: 
           
            let newItem = state.movies.find((movie) => movie.id == action.payload);
          let iteminCart = state.cart.find((item) => item.id == newItem.id)
           
            return iteminCart?{
                ...state,
                cart: state.cart.map((item) => item.id == newItem.id?
                {...item, quantity: item.quantity +1}: item)
                }
                :{
                    ...state,
                    cart: [...state.cart, {...newItem, quantity: 1}]
                }
        

        case REMOVE_ALL_ONE_CART: {
            return{
                cart: action.payload
            }
        }

        case REMOVE_ALL_FROM_CART: {
            return{
                cart: action.payload
            }
        }

        case CLEAR_CART: {
            return{
                cart: action.payload
            }
        }

        default: 
            return state

    }

}

export default cartReducer;