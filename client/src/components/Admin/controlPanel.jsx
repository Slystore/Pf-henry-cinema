import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    container:{
        width: '500px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
     title: {
 		display: 'flex',
 		justifyContent: 'center'
 	},
     button: {
        background: 'linear-gradient(180deg, #424242 30%, #000000 90%)',
 	}
})

function ControlPanel() {

    const classes = useStyle();

    return (
        <div className={ classes.container }>

            <h1 className="">Admin Panel</h1>
                <Grid sx={{border: '1px solid', height: '200px'}}
                    container
                    direction="column"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={3}
                >

                    <Grid >
                        <Grid 
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            
                        >
                        <Box sx={{ margin: 1 }}>
                            <Button className={ classes.button } variant="contained" href={`/`}>
                                    Home
                            </Button>
                        </Box>
                        <Box sx={{ margin: 1 }}>
                            <Button className={ classes.button } variant="contained" href={`/admin/editMovie`}>
                                    Editar una pelicula
                            </Button>
                        </Box>

                        <Box sx={{ margin: 1 }}>
                            <Button className={ classes.button } variant="contained"  href={`/admin/createMovie`}>
                                Agregar Película
                            </Button>
                        </Box>

                        <Box sx={{ margin: 1}}>
                            <Button className={ classes.button } variant="contained" href={`/admin/orders`}>
                                Ordenes de Usuarios
                            </Button>
                        </Box>

                    
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}

export default ControlPanel

