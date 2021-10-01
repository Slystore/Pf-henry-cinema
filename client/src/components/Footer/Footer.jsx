import React from 'react';
import { Link } from 'react-router-dom';
import LogoWhite from '../../assets/Logo_White.png';
import './Footer.css';

export default function Footer() {
    return (
        <div class="ContainerFooter">

            <div class="Section">
                
                <img class="LogoWhite" src={LogoWhite} />

            </div>

            <div class="Section">

                <div class="ContainerLinks">

                    <div><Link class="Link" to="/" > Cines </Link></div>
                    <div><Link class="Link" to="/" > Estrenos </Link></div>
                    <div><Link class="Link" to="/" > Todas las películas </Link></div>
                    <div><Link class="Link" to="/" > Cine en casa </Link></div>

                </div>

            </div>

            <div class="Section">
                <div class="ContainerLinks">    

                <div><Link class="Link" to="/" > Login </Link></div>
                <div><Link class="Link" to="/" > Contacto </Link></div>
                <div><Link class="Link" to="/" > Términos y Condiciones </Link></div>
                <div><Link class="Link" to="/" > Buzón de Quejas y Sugerencias</Link></div>

                </div>
            </div>
            
        </div>
    )
}
