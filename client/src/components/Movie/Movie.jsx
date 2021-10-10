import * as React from 'react';
import { styled } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import Rating from '@mui/material/Rating';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { useStyle } from './movieStyles.js'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 770,
  height: 550,
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};


function Movie({altImage, key, id, image, name, availability, genres, rating, description, addToCart}) {

    const classes = useStyle();
    const [value, setValue] = React.useState(2);
    const [expanded, setExpanded] = React.useState(false);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

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

                <Typography variant="h6" align="center" className={ classes.name } aria-label="name">
                  {name}
                </Typography>

                <Typography  align="center" sx={{ color: "#00000060", fontSize: 14 }} >
                  {/* {genres} */}
                  Accion | Suspenso | Aventura
                </Typography>

            </CardContent>

            <Button onClick={handleOpen} className={ classes.boton }>Detalles</Button>

          </CardActionArea>

        </Card>

        <Modal
        open={ open }
        onClose={ handleClose }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        {/* border: 'thin dotted #ccc' */}

        <Box sx={ style }>

          <Box sx={{ width: 260, height: 524, marginTop: 2, float:'left' }}>
            <CardMedia className={ classes.media2 } image={ image } />
          </Box>

          <Box sx={{ width: 500, height: 380, float:'left' }}>

            <CardContent>

              <Box sx={{ width: 500, height: 40 }}>

                <Typography variant="h5" align="left" sx={{ fontWeight: "bold" }}>
                  { name } 
                </Typography>

              </Box>

              <Box sx={{ width: 500, height: 30, }}>

                  <Typography  align="left" sx={{ color: "#ff0000", fontSize: 16 }}>
                    Accion | Suspenso | Aventura
                  </Typography>

              </Box>

              <Box sx={{ width: 500, height: 30 }}>
                
                  <Box sx={{ width: 80, height: 30, float: 'left' }}>

                      <Typography  align="left" sx={{ bgcolor: "black", color: "white", fontSize: 16, height:10, width:50, borderRadius: 1, lineHeight: 0.7, padding: 1 }}>
                        PG-13
                      </Typography>

                  </Box>

                  <Box sx={{ width: 90, height: 30, float: 'left' }}>

                      <Typography  align="left" sx={{ color: "#00000060", fontSize: 16, height:30, width:80, lineHeight: 1.7 }}>
                        1h 46min
                      </Typography>

                  </Box>

                  <Box sx={{ width: 200, height: 30, float: 'left' }}>

                      <Rating readOnly name="simple-controlled" value={userRate} 
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
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

                     <Box sx={{ width: 390, height: 20, float: 'left'  }}> 

                      <Typography  align="left" sx={{ width:150, fontSize: 16 }} variant="paraghrap">
                        Rami Malek, Ana De Armas, Daniel Craig
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
                        Cary Joji Fukunaga
                      </Typography>

                     </Box>
                    
                  </Box>

              </Box>

              <Box sx={{ width: 500, height: 40, marginTop: 3 }}>

                  <Box sx={{ width: 165, height: 40, float: 'left', }}>
                      <Button variant="contained" startIcon={<LiveTvIcon />}  sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}>
                        Ver Trailer
                      </Button>
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


// import * as React from 'react';
// import { styled } from '@mui/material/styles';

// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import { CardActionArea } from '@mui/material';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';

// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';

// import MovieFilterIcon from '@mui/icons-material/MovieFilter';
// import Rating from '@mui/material/Rating';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import LiveTvIcon from '@mui/icons-material/LiveTv';
// import { useStyle } from './movieStyles.js'


// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 770,
//   height: 550,
//   bgcolor: 'background.paper',
//   borderRadius: 3,
//   boxShadow: 24,
//   p: 4,
// };

// function Movie({altImage, image, name, availability, genres, rating, description, addToCart}) {

//     const classes = useStyle();
//     const [value, setValue] = React.useState(2);
//     const [expanded, setExpanded] = React.useState(false);

//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     const handleExpandClick = () => {
//       setExpanded(!expanded);
//     };

//     var userRate = parseInt(rating,10) / 2
  
//     return (
//       <div>
//         <Card className={ classes.root } elevation="5">
        
//           <CardActionArea>
//               <CardHeader className={ classes.rate } 
//               avatar={
//                 <Avatar sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//                 boxShadow: '0 10px 10px #00000080' }} aria-label="recipe">
//                 {rating}</Avatar>}/>
          
//             <CardMedia className={classes.media} image={image} />
          
//               <CardMedia className={ classes.media } image={ image } />

//               <CardContent>
//                 <Typography variant="h6" align="center" className={ classes.name } aria-label="name">
//                   {name}
//                 </Typography>

//                 <Typography  align="center" sx={{ color: "#00000060", fontSize: 14 }} >
//                   {/* {genres} */}
//                   Accion | Suspenso | Aventura
//                 </Typography>
//               </CardContent>

//             <Button onClick={handleOpen} className={ classes.boton }>Detalles</Button>

//           </CardActionArea>

//         </Card>

//         <Modal
//         open={ open }
//         onClose={ handleClose }
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//         >

//         {/* border: 'thin dotted #ccc' */}

//         <Box sx={ style }>

//           <Box sx={{ width: 260, height: 524, marginTop: 2, float:'left' }}>
//             <CardMedia className={ classes.media2 } image={ image } />
//           </Box>

//           <Box sx={{ width: 500, height: 380, float:'left' }}>

//             <CardContent>

//               <Box sx={{ width: 500, height: 40 }}>

//                 <Typography variant="h5" align="left" sx={{ fontWeight: "bold" }}>
//                   { name } 

//                 </Typography>

//               </Box>

//               <Box sx={{ width: 500, height: 30, }}>

//                   <Typography  align="left" sx={{ color: "#ff0000", fontSize: 16 }}>
//                     Accion | Suspenso | Aventura
//                   </Typography>

//               </Box>

//               <Box sx={{ width: 500, height: 30 }}>
                
//                   <Box sx={{ width: 80, height: 30, float: 'left' }}>

//                       <Typography  align="left" sx={{ bgcolor: "black", color: "white", fontSize: 16, height:10, width:50, borderRadius: 1, lineHeight: 0.7, padding: 1 }}>
//                         PG-13
//                       </Typography>

//                   </Box>

//                   <Box sx={{ width: 90, height: 30, float: 'left' }}>

//                       <Typography  align="left" sx={{ color: "#00000060", fontSize: 16, height:30, width:80, lineHeight: 1.7 }}>
//                         1h 46min
//                       </Typography>

//                   </Box>

//                   <Box sx={{ width: 200, height: 30, float: 'left' }}>

//                       <Rating readOnly name="simple-controlled" value={userRate} 
//                         onChange={(event, newValue) => {
//                           setValue(newValue);
//                         }}
//                       />

//                   </Box>

//               </Box>

//               <Box sx={{ width: 500, height: 180, marginTop: 3 }}>

//                   <Typography  align="left" sx={{ fontWeight: 'bold' }}>
//                     SINOPSIS
//                   </Typography>
                
//                   <Typography  align="left" sx={{ color: "#000000", fontSize: 18 }} variant="paraghrap">
//                     {description}
//                   </Typography>
//                 <Typography
//                   align="left"
//                   sx={{ color: "#000000", fontSize: 18 }}
//                   variant="paraghrap"
//                 >
//                   {description}
//                 </Typography>
//               </Box>


//               <Box sx={{ width: 500, height: 100, marginTop: 5 }}>

//                   <Typography  align="left" sx={{ fontWeight: 'bold' }}>
//                    CRÉDITO Y REPARTO
//                   </Typography>

//                   <Box sx={{ width: 500, height: 20, marginTop: 1 }}>

//                      <Box sx={{ width: 110, height: 20, float: 'left'  }}> 

//                       <Typography align="left" sx={{ fontWeight: 'bold' }} >
//                         ACTORES :
//                       </Typography>

//                      </Box>

//                      <Box sx={{ width: 390, height: 20, float: 'left'  }}> 

//                       <Typography  align="left" sx={{ width:150, fontSize: 16 }} variant="paraghrap">
//                         Rami Malek, Ana De Armas, Daniel Craig
//                       </Typography>

//                      </Box>
                    
//                   </Box>

//                   <Box sx={{ width: 500, height: 0 }}>

//                      <Box sx={{ width: 110, height: 20, float: 'left'  }}> 

//                       <Typography  sx={{ fontWeight: 'bold' }} >
//                         DIRECTORES :
//                       </Typography>

//                      </Box>

//                      <Box sx={{ width: 390, height: 20, float: 'left'  }}> 

//                       <Typography  align="left" sx={{ width:150, fontSize: 16 }} variant="paraghrap">
//                         Cary Joji Fukunaga
//                       </Typography>

//                      </Box>
                    
//                   </Box>

//               </Box>

//               <Box sx={{ width: 500, height: 40, marginTop: 3 }}>

//                   <Box sx={{ width: 165, height: 40, float: 'left', }}>
//                       <Button variant="contained" startIcon={<LiveTvIcon />}  sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}>
//                         Ver Trailer
//                       </Button>
//                   </Box>

//                   <Box sx={{ width: 165, height: 40, float: 'left', }}>
//                       <Button variant="contained" startIcon={<AddShoppingCartIcon />}  sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}>
//                         Agregarla
//                       </Button> 
//                   </Box>

//                   <Box sx={{ width: 165, height: 40, float: 'left', }}>
//                       <Button variant="contained" startIcon={<MovieFilterIcon />}  sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}>
//                       Quiero verla
//                       </Button> 
//                   </Box>

//               </Box>

//             </CardContent>

//           </Box>
         
//         </Box>
//       </Modal>

//       </div>
//     );
// }

// export default Movie;
