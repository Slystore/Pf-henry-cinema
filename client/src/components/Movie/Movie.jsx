import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import Rating from '@mui/material/Rating';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { useStyle, style } from './movieStyles.js'

import ReactPlayer from 'react-player'

function ChildModal({name, trailer}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" startIcon={<LiveTvIcon />}  sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }} onClick={handleOpen}>Ver Trailer</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 600, height:450 }}>
          <h2 id="child-modal-title">Trailer de {name}</h2>
          <p id="child-modal-description">
            <ReactPlayer url={trailer} width='590px' height='370px' />
          </p>
          <Button onClick={handleClose} sx={{ position: 'absolute', right: 0, top: 5, fontSize: 20, fontWeight: 'bold', color: 'red'}}>x</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}


function Movie({altImage, key, id, image, name, availability, genres, rating, description, addToCart, trailer, actors, runTime, director, classification, usersRating}) {

    const classes = useStyle();

    const [value, setValue] = React.useState(2);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const handleExpandClick = () => {
    //   setExpanded(!expanded);
    // };

    var userRate = parseInt(rating,10) / 2

    return (
      <div>
        <Card className={ classes.root } elevation="5">

          <CardActionArea>

            <CardHeader className={ classes.rate }
              avatar={
                <Avatar sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', boxShadow: '0 10px 10px #00000080' }} aria-label="recipe">
                {rating}
                </Avatar>
              }
            />

            <CardMedia className={ classes.media } image={ image } />

            <CardContent>

                <Typography variant="h6" align="center" className={ classes.name } aria-label="name" sx={{lineHeight: 1}}>
                  {name}
                </Typography>

                <Typography  align="center" sx={{ color: "#00000060", fontSize: 13.5 }} >
                    {
                      genres && genres.map((g,index) => {
                        let nameShort = ''
                        g.name === 'Science Fiction' ? nameShort = 'S. Fiction' : nameShort = g.name
                        return( 
                          index === 0? nameShort : index === 2 ?  ' | ' + nameShort : ' | ' + nameShort
                        )})
                    }
                </Typography>

            </CardContent>

            <Button onClick={handleOpen} className={ classes.boton } sx={{color: 'white'}}>Detalles</Button>

          </CardActionArea>

        </Card>

        <Modal
            open={ open }
            onClose={ handleClose }
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

        <Box sx={ style }>

          <Box sx={{ width: 260, height: 524, marginTop: 2, float:'left' }}>
            <CardMedia className={ classes.media2 } image={ image } />
          </Box>

          <Box sx={{ width: 500, height: 380, float:'left' }}>

            <CardContent>

              <Box sx={{ width: 500, height: 40 }}>

                <Typography variant="h5" align="left" className={ classes.name } aria-label="name">
                  { name }
                </Typography>

              </Box>

              <Box sx={{ width: 500, height: 30, }}>

                  <Typography  align="left" sx={{ color: "#ff0000", fontSize: 16 }}>
                      {
                        genres && genres.map((g,index) => {
                          return( 
                            index === 0?  g.name : ' | ' + g.name 
                          )})
                      }
                  </Typography>

              </Box>

              <Box sx={{ width: 500, height: 30 }}>

                  <Box sx={{ width: 80, height: 30, float: 'left' }}>

                      <Typography  align="left" sx={{ bgcolor: "black", color: "white", fontSize: 16, height:10, width:50, borderRadius: 1, lineHeight: 0.7, padding: 1, textAlign: "center" }}>
                        { classification }
                      </Typography>

                  </Box>

                  <Box sx={{ width: 90, height: 30, float: 'left' }}>

                      <Typography  align="left" sx={{ color: "#00000060", fontSize: 16, height:30, width:80, lineHeight: 1.7 }}>
                          {
                             runTime && runTime.map((r,index) =>{
                              return (
                                index === 0? r + "hr ": index === 1 && r !== 0 ? r + "min" : ''
                              )
                             })
                          }
                      </Typography>

                  </Box>
 
                  <Box sx={{ width: 200, height: 30, float: 'left'}}>

                      <Rating readOnly name="simple-controlled" value={ Math.round(usersRating / 2) } 
                        // onChange={(event, newValue) => {
                        //   setValue(newValue);
                        // }}
                      />

                  </Box>

              </Box>

              <Box sx={{ width: 500, height: 180, marginTop: 3 }}>

                  <Typography  align="left" sx={{ fontWeight: 'bold' }}>
                    SINOPSIS
                  </Typography>

                  <Typography  align="left" sx={{ color: "#000000", fontSize: 18 }} variant="paraghrap">
                    {description}
                  </Typography>

              </Box>

              <Box sx={{ width: 500, height: 100, marginTop: 5 }}>

                  <Typography  align="left" sx={{ fontWeight: 'bold' }}>
                   CRÉDITO Y REPARTO
                  </Typography>

                  <Box sx={{ width: 500, height: 20, marginTop: 1 }}>

                     <Box sx={{ width: 110, height: 20, float: 'left'  }}>

                      <Typography align="left" sx={{ fontWeight: 'bold' }} >
                        ACTORES :
                      </Typography>

                     </Box>

                     <Box sx={{ width: 390, height: 'auto !important', float: 'left'  }}>

                      <Typography  align="left" sx={{ width:150, fontSize: 16 }} variant="paraghrap">
                          {
                            actors && actors.map((act,index)=>{
                              var size = actors.length-1
                              return (
                                index === size? act + "." : act + ", "
                              )
                            })
                          }
                      </Typography>

                     </Box>

                  </Box>

                  <Box sx={{ width: 500, height: 0 }}>

                     <Box sx={{ width: 110, height: 20, float: 'left'  }}>

                      <Typography  sx={{ fontWeight: 'bold' }} >
                        DIRECTORES :
                      </Typography>

                     </Box>

                     <Box sx={{ width: 390, height: 20, float: 'left'  }}>

                      <Typography  align="left" sx={{ width:150, fontSize: 16 }} variant="paraghrap">
                        {director}
                      </Typography>

                     </Box>

                  </Box>

              </Box>

              <Box sx={{ width: 500, height: 40, marginTop: 3 }}>

                  <Box sx={{ width: 165, height: 40, float: 'left', }}>
                    <ChildModal name={name} trailer={trailer}/>
                      {/* <Button variant="contained" startIcon={<LiveTvIcon />}  sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}>
                        Ver Trailer
                      </Button> */}
                  </Box>

                  <Box sx={{ width: 165, height: 40, float: 'left', }}>
                      <Button variant="contained" startIcon={<AddShoppingCartIcon />}  sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }} onClick={() => addToCart(id)}>
                        Agregarla
                      </Button>
                  </Box>

                  <Box sx={{ width: 165, height: 40, float: 'left', }}>
                      <Button variant="contained" startIcon={<MovieFilterIcon />}  sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}>
                      Quiero verla
                      </Button>
                  </Box>

          </Box>

            </CardContent>



          </Box>

        </Box>
      </Modal>

      </div>
    );
}

export default Movie
