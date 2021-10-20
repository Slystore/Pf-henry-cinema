import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { postGenres } from '../../../redux/genres/genresAction';
import swal from 'sweetalert';
import { Grid, Box, Button, Typography, Modal } from '@mui/material';
import NavAdmin from './NavAdmin';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    style: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 100,
        backgroundColor: '#71ADB5',
        boxShadow: 40,
        p: 4,
        borderRadius: 7
    },
    input: {
        border: '1px solid transparent',
        outline: 'none',
        height: 30,
        fontSize: 16,
        borderRadius: 7,
        color: '#00000099',
        paddingLeft: 7
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        padding: 10,
        color: '#00000099'
    }
})

const CreateGenre = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);


    const [input, setInput] = useState({
        name: "",

    });

    function handleChange(e) {
        setInput({
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        dispatch(postGenres(input))
        swal("Genero Creado!", "", "success");

        setInput({
            name: ""
        })
        history.push('/admin/panel')


    };
    return (
        <Grid container spacing={2}>
            <Grid item xs={2.5}>
                <NavAdmin />

            </Grid>

            <Grid item xs={3}>
                <Button type='button' onClick={handleOpen} variant='contained'>Open modal</Button>

                <Modal open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className={classes.style}>
                        <Typography className={classes.title} id="modal-modal-title" variant="h6" component="h2">
                            Crear Genero
                        </Typography>
                        <form onSubmit={e => { handleSubmit(e) }}>
                            <div style={{ textAlign: 'center', }} >
                                <input className={classes.input}
                                    name="name"
                                    value={input.name}
                                    type='text'
                                    placeholder='Escribe un genero'
                                    onChange={(e) => { handleChange(e) }}

                                />
                                <Button type='submit' style={{ backgroundColor: 'orangered', marginLeft: 10, height: 33 }} variant="contained">Crear</Button>
                            </div>
                        </form>
                    </Box>


                </Modal>
            </Grid>
        </Grid >
    );
};

export default CreateGenre;