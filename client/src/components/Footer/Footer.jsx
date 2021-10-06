import React from 'react'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import LogoWhite from '../../assets/Logo_White.png';

import './Footer.css'

function Footer() {
    return (
        <div class="ContainerFooter">

            <Box sx={{ height: 200, bgcolor: 'black', display: 'flex', justifyContent: 'center' }} >

                <Box sx={{ width:250, height: 100, marginTop: 7 }}>

                    <Typography variant="h5" align="center" sx={{color: 'white', marginTop: 4}}>
                        CinemAPP
                    </Typography>

                </Box>

                <Box sx={{ width:250, height: 100, marginTop: 7 }}>

                    <div><Link class="Link" to="/" > Cines </Link></div>
                    <div><Link class="Link" to="/" > Estrenos </Link></div>
                    <div><Link class="Link" to="/" > Todas las películas </Link></div>
                    <div><Link class="Link" to="/" > Cine en casa </Link></div>

                </Box>

                <Box sx={{ width:250, height: 100, marginTop: 7 }}>

                    <div><Link class="Link" to="/" > Login </Link></div>
                    <div><Link class="Link" to="/" > Contacto </Link></div>
                    <div><Link class="Link" to="/" > Términos y Condiciones </Link></div>
                    <div><Link class="Link" to="/" > Buzón de Quejas y Sugerencias</Link></div>

                </Box>

            </Box>

            
        </div>
    )
}

export default Footer








{/* <div class="Section">
    
    <img className="LogoWhite" src={LogoWhite} alt="" height="120"/> 

</div>

<div class="Section">

    <div class="ContainerLinks">

    </div>

</div>

<div class="Section">
    <div class="ContainerLinks">    

    </div>
</div> */}