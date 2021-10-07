import React from 'react';
import { BiCameraMovie } from "react-icons/bi"
import { BiMoviePlay } from "react-icons/bi"
import { MdLocalMovies } from "react-icons/md"
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineMail } from "react-icons/ai"
import { BiLogIn } from "react-icons/bi"
import { BsBook } from "react-icons/bs"
import { GiMailbox } from "react-icons/gi"

const SidebarData = [
    {
        title: 'Cines',
        path: '/',
        icon: <BiCameraMovie />,
        cName: 'nav-text'
    },
    {
        title: 'Estrenos',
        path: '/',
        icon: <BiMoviePlay />,
        cName: 'nav-text'
    },
    {
        title: 'Todas las peliculas',
        path: '/admin/CreateMovie',
        icon: <MdLocalMovies />,
        cName: 'nav-text'
    },
    {
        title: 'Cine en Casa',
        path: '/',
        icon: <AiOutlineHome />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/',
        icon: <BiLogIn />,
        cName: 'nav-text'
    },
    {
        title: 'Contacto',
        path: '/',
        icon: <AiOutlineMail />,
        cName: 'nav-text'
    },
    {
        title: 'Terminos y condiciones',
        path: '/',
        icon: <BsBook />,
        cName: 'nav-text'
    },
    {
        title: 'Buzon de quejas y sugerencias',
        path: '/',
        icon: <GiMailbox />,
        cName: 'nav-text'
    },
];
export default SidebarData;