import React from 'react';
import { BiCameraMovie } from "react-icons/bi"
import { BiMoviePlay } from "react-icons/bi"
import { MdLocalMovies } from "react-icons/md"
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineMail } from "react-icons/ai"
import { BiLogIn,BiLogOut } from "react-icons/bi"
import { BsBook } from "react-icons/bs"
import { GiMailbox } from "react-icons/gi"

const SidebarData = [
    {
        title2: 'Cines',
        title: 'Cines',
        path2: '/',
        path: '/',
        icon2: <BiCameraMovie />,
        icon: <BiCameraMovie />,
        cName: 'nav-text'
    },
    {
        title2: 'Estrenos',
        title: 'Estrenos',
        path: '/',
        path2: '/',
        icon2: <BiMoviePlay />,
        icon: <BiMoviePlay />,
        cName: 'nav-text'
    },
    {
        title2: 'Todas las peliculas',
        title: 'Todas las peliculas',
        path: '/admin/CreateMovie',
        path2: '/admin/CreateMovie',
        icon: <MdLocalMovies />,
        icon2: <MdLocalMovies />,
        cName: 'nav-text'
    },
    {
        title2:"Cine en casa",
        title: 'Cine en Casa',
        path: '/',
        path2: '/',
        icon: <AiOutlineHome />,
        icon2: <AiOutlineHome />,
        cName: 'nav-text'
    },
    {
        title2:"Loug Out",
        title: 'Login',
        path: '/login',
        path2:"/",
        icon2:<BiLogOut/>,
        icon: <BiLogIn />,
        cName: 'nav-text'
    },
    {
        title2:"Contacto",
        title: 'Contacto',
        path: '/',
        path2: '/',
        icon: <AiOutlineMail />,
        icon2: <AiOutlineMail />,
        cName: 'nav-text'
    },
    {
        title2:"Terminos y condiciones",
        title: 'Terminos y condiciones',
        path: '/',
        path2: '/',
        icon: <BsBook />,
        icon2: <BsBook />,
        cName: 'nav-text'
    },
    {
        title2:"Buzon de quejas y sugerencias",
        title: 'Buzon de quejas y sugerencias',
        path: '/',
        path2: '/',
        icon: <GiMailbox/>,
        icon2: <GiMailbox/>,
        cName: 'nav-text'
    },
];
export default SidebarData;