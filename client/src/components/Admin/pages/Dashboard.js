import React from 'react';
import { Grid, Paper, Stack } from '@mui/material';
import styled from '@mui/material/node/styles/styled';
import graphic from '../../Forms/img/graphic-1.png'
import pie from "../../Forms/img/pie-1.png"
import pie2 from "../../Forms/img/pie-2.svg"
import NavAdmin from './NavAdmin';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

const dashboard = () => {
    return (
        <Grid container spacing={3} >
            <Grid item xs={2.5}>
                <NavAdmin />
            </Grid>

            <Grid item xs={2.1}>
                <Item style={{ paddingBottom: 23 }}>

                    <Stack spacing={4.5} style={{ width: 200 }}>
                        <Item >
                            <h4 style={{ fontSize: '20px', margin: '10px 10px' }}>Clientes</h4>
                            <p style={{ fontSize: 25, margin: '10px 10px', fontWeight: 600 }}>36.254</p>
                            <span style={{ color: '#80ED99' }}>+5.7%</span>

                        </Item>

                        <Item>
                            <h4 style={{ fontSize: '20px', margin: '10px 10px' }}>Visitas</h4>
                            <p style={{ fontSize: 25, margin: '10px 10px', fontWeight: 600 }}>1.254</p>
                            <span style={{ color: '#FF0000' }}> -10%</span>

                        </Item>

                        <Item>
                            <h4 style={{ fontSize: '20px', margin: '10px 10px' }}>Ganacias</h4>
                            <p style={{ fontSize: 25, margin: '10px 10px', fontWeight: 600 }}>$1200</p>
                            <span style={{ color: '#80ED99' }}> +20%</span>

                        </Item>
                        <Item>
                            <h4 style={{ fontSize: '20px', margin: '10px 10px' }}>Ordenes</h4>
                            <p style={{ fontSize: 25, margin: '10px 10px', fontWeight: 600 }}>55</p>
                            <span style={{ color: '#80ED99' }} > +5%</span>

                        </Item>
                    </Stack>
                </Item>

            </Grid>


            <Grid item xs={7.4}>
                <Item style={{ marginTop: 10 }}>
                    <img src={graphic} style={{ width: 700 }} alt='img not found' />
                </Item>

                <Item style={{ display: 'flex', justifyContent: 'space-around', marginTop: 10, padding: '10px 0px' }}>
                    <img src={pie} style={{ width: 240, }} alt='img not found' />

                    <img src={pie2} style={{ width: 240 }} alt='img not found' />
                </Item>
                <Item style={{ marginTop: 10 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: 10, height: 10, backgroundColor: 'orangered', marginRight: 10, marginTop: 5 }}></div>
                            <p style={{ margin: 0, marginRight: 10 }}>Accion</p>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: 10, height: 10, backgroundColor: '#A2D2FF', marginRight: 10, marginTop: 5 }}></div>
                            <p style={{ margin: 0, marginRight: 10 }}>Aventura</p>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: 10, height: 10, backgroundColor: '#5C7AEA', marginRight: 10, marginTop: 5 }}></div>
                            <p style={{ margin: 0, marginRight: 10 }}>Ciencia Ficcion</p>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: 10, height: 10, backgroundColor: '#6ECB63', marginRight: 10, marginTop: 5 }}></div>
                            <p style={{ margin: 0, marginRight: 10 }}>Horror</p>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: 10, height: 10, backgroundColor: '#E02401', marginRight: 10, marginTop: 5 }}></div>
                            <p style={{ margin: 0, marginRight: 10 }}>Misterio</p>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: 10, height: 10, backgroundColor: '#5C7AEA', marginRight: 10, marginTop: 5 }}></div>
                            <p style={{ margin: 0, marginRight: 10 }}>Fantasy</p>
                        </div>

                    </div>

                </Item>


            </Grid>




        </Grid >
    );
};

export default dashboard;