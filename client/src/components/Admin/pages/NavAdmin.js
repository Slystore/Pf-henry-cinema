import React from 'react';
import { Grid, Paper } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from '@mui/material/node/styles/styled';
import { Avatar } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import { deepOrange } from '@mui/material/colors';

const useStyles = makeStyles({
    hover: {
        '&:hover': {
            backgroundColor: "#D6E6F2"
        },
        height: 40,
        textAlign: 'left',
        paddingTop: 12,
        color: '#000',
        textDecoration: 'none',
        fontSize: 20,
        paddingLeft: 40,
        marginBottom: 20,
        textTransform: 'uppercase',

    },
    active: {
        backgroundColor: '#D6E6F2'
    },

})
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));





const NavAdmin = () => {

    const classes = useStyles();


    return (
        <Grid container spacing={2} style={{ display: 'flex' }} >
            <div style={{ width: 300 }}>
                <Item style={{ backgroundColor: '#71ADB5' }}>

                    <div style={{ paddingTop: 10, paddingBottom: 40, display: 'flex', marginLeft: 10, }}>
                        {/* <Item><FaUserAlt style={{ fontSize: 80 }} /></Item> */}
                        <Avatar sx={{ backgroundColor: 'oranged', width: 100, height: 100, fontSize: 40, bgcolor: deepOrange[400] }}>JG</Avatar>
                        <h2 style={{ alignSelf: 'center', marginLeft: '20px' }}>JOSÉ DE GOUVEIA</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', }}>
                        <NavLink className={classes.hover} activeClassName={classes.active} exact to={`/admin/panel`}>Panel</NavLink>
                        <NavLink className={classes.hover} activeClassName={classes.active} exact to={`/`}>Peliculas</NavLink>
                        <NavLink className={classes.hover} activeClassName={classes.active} exact to={`/admin/createGenre`}>Generos</NavLink>
                        <NavLink className={classes.hover} activeClassName={classes.active} exact to={`/admin/users`}>Usuarios</NavLink>
                        <NavLink className={classes.hover} activeClassName={classes.active} exact to={`/`}>Stock</NavLink>
                        <NavLink className={classes.hover} activeClassName={classes.active} exact to={`/admin/ordenes`}>Ordenes</NavLink>
                        <NavLink className={classes.hover} activeClassName={classes.active} exact to={`/`}>Home</NavLink>
                    </div >
                </Item>
            </div >


        </Grid >

    );
};

export default NavAdmin;