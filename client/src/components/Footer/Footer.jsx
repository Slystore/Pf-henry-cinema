import React from 'react'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import './Footer.css'

function Footer() {
    return (
        <div className="ContainerFooter">

            <Box sx={{ height: 200, bgcolor: 'black', display: 'flex', justifyContent: 'center' }} >

                <Box sx={{ width:250, height: 100, marginTop: 7 }}>

                    <Typography variant="h5" align="center" sx={{color: 'white', marginTop: 4}}>
                        CinemAPP
                    </Typography>

                </Box>

                <Box sx={{ width:250, height: 100, marginTop: 7 }}>

                    <div><Link className="Link" to="/" > Cines </Link></div>
                    <div><Link className="Link" to="/" > Estrenos </Link></div>
                    <div><Link className="Link" to="/" > Todas las películas </Link></div>
                    <div><Link className="Link" to="/" > Cine en casa </Link></div>

                </Box>

                <Box sx={{ width:250, height: 100, marginTop: 7 }}>

                    <div><Link className="Link" to="/login" > Login </Link></div>
                    <div><Link className="Link" to="/" > Contacto </Link></div>
                    <div><Link className="Link" to="/" > Términos y Condiciones </Link></div>
                    <div><Link className="Link" to="/admin" > Administrador</Link></div>

                </Box>

            </Box>

            
        </div>
    )
}

export default Footer