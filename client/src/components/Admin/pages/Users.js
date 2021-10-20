import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Grid, Modal, Box } from '@mui/material';
import swal from 'sweetalert';
import styled from '@mui/material/node/styles/styled';
import NavAdmin from './NavAdmin'
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/styles';
import { putUser } from '../../../redux/users/usersAction';


const useStyles = makeStyles({
    box: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: 24,
        p: 4,
        width: 400,
        height: 470,
        borderRadius: 8,
        backgroundColor: '#71ADB5'

    },
    input: {
        border: '1px solid #ccc',
        outline: 'none',
        backgroundColor: '#fff',
        width: '70%',
        height: 30,
        borderRadius: 6,
        margin: '10px auto',
        color: '#00000099'


    },

    title: {
        fontSize: 25,
        textAlign: 'center',
        color: '#00000099'

    },
    select: {
        border: 'none',
        outline: 'none',
        height: 36,
        width: '70%',
        margin: '10px auto',
        borderRadius: 6,
        color: '#00000099'

    },
})

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));





const users = () => {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()

    const { users } = useSelector((state) => state.usersReducer);

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const [input, setInput] = useState({
        id: "",
        name: "",
        surname: "",
        mail: "",
        password: "",
        usertype: "",
    });


    const seleccionarUser = (elemento, caso) => {
        setInput({
            id: elemento.id
        })
        //console.log("esta es mi elemento dsp del set ", elemento.id);
        if (caso === "Editar") {
            handleOpen()
        } else {
            handleClose()
        }


    };


    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });

    }
    function handleSelect(e) {
        setInput({
            ...input,
            userType: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(putUser(input))

        swal("Editado!", "", "success");
        console.log(input)

        setInput({
            id: "",
            name: "",
            surname: "",
            mail: "",
            password: "",
            usertype: "",
        })
        history.push('/admin/panel')
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={2.5}>
                <NavAdmin />
            </Grid>

            <Grid item xs={9.5} style={{ overflow: 'scroll', overflowX: 'hidden', height: '100vh' }}>
                <Item >
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell align="left">Nombre</TableCell>
                                    <TableCell align="left">Apellido</TableCell>
                                    <TableCell align="left">Email</TableCell>
                                    <TableCell align="left">Tipo</TableCell>
                                    <TableCell align="left">Actualizar</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    users && users.map(el => {
                                        return (
                                            <TableRow
                                                key={el.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {el.id}
                                                </TableCell>
                                                <TableCell align="left">{el.name}</TableCell>
                                                <TableCell align="left">{el.surname}</TableCell>
                                                <TableCell align="left">{el.mail}</TableCell>
                                                <TableCell align="left">{el.userType}</TableCell>
                                                <TableCell align="left">
                                                    <Button variant="contained" onClick={() => { seleccionarUser(el, "Editar") }} >Editar</Button>


                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Item>
            </Grid>
            <div>4
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className={classes.box}>
                        <h2 className={classes.title}>
                            Editar Usuario
                        </h2>
                        <form onSubmit={e => { handleSubmit(e) }} style={{ width: 400, height: 385, textAlign: 'center' }}>

                            <div classname={classes.bar}>
                                <input className={classes.input}
                                    readOnly
                                    placeholder='ID'
                                    type="text"
                                    name='id'
                                    value={input.id}
                                    onChange={e => { handleChange(e) }} />
                            </div>
                            <div classname={classes.bar}>
                                <input className={classes.input}
                                    placeholder='Nombre'
                                    Type="text"
                                    name='name'
                                    value={input.name}
                                    onChange={e => { handleChange(e) }} />

                            </div>
                            <div classname={classes.bar}>
                                <input className={classes.input}
                                    placeholder='Apellido'
                                    Type="text"
                                    name='surname'
                                    value={input.surname}
                                    onChange={e => { handleChange(e) }} />


                            </div>
                            <div classname={classes.bar}>
                                <input className={classes.input}
                                    placeholder='Email'
                                    Type="text"
                                    name='mail'
                                    value={input.mail}
                                    onChange={e => { handleChange(e) }} />

                            </div>
                            <div classname={classes.bar}>
                                <input className={classes.input}
                                    placeholder='Contraseña'
                                    Type="password"
                                    name='password'
                                    value={input.password}
                                    onChange={e => { handleChange(e) }} />

                            </div>
                            <select onChange={e => { handleSelect(e) }} className={classes.select}>
                                <option name='userType' disabled>Admin</option>
                                <option value='user' name='userType'>user</option>
                                <option value='banned' name='userType'>Banned</option>
                                <option value='disabled' name='userType'>Disabled</option>

                            </select>
                            <div>
                                <Button type='submit' variant='container' style={{ backgroundColor: 'orangered', textAlign: 'center', color: 'white' }}>Guardar</Button>
                            </div>
                        </form>

                    </Box>

                </Modal>
            </div>
        </Grid >

    )
}


export default users;


