import * as React from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import Rating from '@mui/material/Rating';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const useStyle = makeStyles({
  root: {
    minWidth: 230,
    height: 480,
    marginRight: 10,
    marginLeft: 10,
  },
  boton: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 10,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 20,
    left: 79,
    bottom: 3,
    fontSize: 12,
    // padding: "0 30px",
  },
  title:{
      fontWeight: 'bold',
      fontSize: 20
  },
  media:{
    height: 330,
    position: 'relative',
    top: 10,
  },
  media2:{
    width: 260,
    height: 380,
  },
  rate:{
    position: 'absolute',
    top: 30,
    right: 15,
  },
  name:{
    height: 60, 
    fontWeight: "bold", 
    lineHeight: 1, 
    // border: 'thin dotted #ccc',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: 16,
  }
  });

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 770,
    height: 380,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
  };


function Movie({altImage, image, name, availability, genre, rating, description}) {

    const classes = useStyle();
    const [value, setValue] = React.useState(2);
    const [expanded, setExpanded] = React.useState(false);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <div>
        <Card className={ classes.root } elevation="5">
        
          <CardActionArea>

            <CardHeader className={ classes.rate}  elevation="5"
            avatar={
              <Avatar sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',  border: 'thin dotted #f00', }} aria-label="recipe">
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
        <Box sx={ style }>

          <Box sx={{ width: 260, height: 380, border: 'thin dotted #ccc', float:'left' }}>
          <CardMedia className={ classes.media2 } image={ image } />

          </Box>
          <Box sx={{ width: 500, height: 380, float:'left' }}>

            <CardContent>

              <Box sx={{ width: 480, height: 40 }}>
                <Typography variant="h5" align="left" sx={{ fontWeight: "bold" }}>
                  { name } 
                </Typography>
              </Box>

              <Box sx={{ width: 400, height: 30 }}>
                
                  <Typography  align="left" sx={{ color: "#ff0000", fontSize: 16 }}>
                    Accion | Suspenso | Aventura
                  </Typography>

              </Box>

              <Box sx={{ width: 100, height: 30, float: 'left' }}>

                  <Typography  align="left" sx={{ color: "#00000060", fontSize: 16, height:30, width:80 }}>
                    1h 46min
                  </Typography>

              </Box>

              <Box sx={{ width: 100, height: 30, float: 'left' }}>

                  <Typography  align="left" sx={{ bgcolor: "black", color: "white", fontSize: 16, height:20, width:50, borderRadius: 1, lineHeight: 1.3, paddingLeft: 1 }}>
                    PG-13
                  </Typography>

              </Box>

              <Box sx={{ width: 480, height: 30, clear: 'both', marginTop: 5}}>

                  <Typography  align="left" sx={{ fontWeight: 'bold' }}>
                    SINOPSIS
                  </Typography>
                
                  <Typography  align="left" sx={{ color: "#000000", fontSize: 18 }} variant="paraghrap">
                    {description}
                    {/* Tras ser envenenada sin solución, una implacable asesina tiene 24 horas para averiguar quién ordenó su muerte y vengarse. Durante la búsqueda, se forma un vínculo inesperado con la hija de una de sus víctimas. */}
                  </Typography>

              </Box>

              <Box sx={{ width: 100, height: 30, float: 'left', marginTop: 13 }}>

                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />

              </Box>

              <Box sx={{ width: 160, height: 40, float: 'right', marginTop: 23, }}>

                  <Button variant="contained" startIcon={<MovieFilterIcon />}>
                    Quiero verla
                  </Button>

              </Box>



            </CardContent>

          </Box>


          {/* <Card elevation="0">
            <CardActionArea>


            </CardActionArea>
            
          

          </Card> */}
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>

        
      {/* <Card className={classes.root} sx={{ maxWidth: 270, fontSize: 20 }} elevation="10">
        <CardHeader  
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
             7.9
            </Avatar>
          }
          
          title="Akira" 
          // subheader="September 14, 2016"
          />
          
        <CardMedia className={classes.media}
          component="img"
          height="194"
          image="../../assets/moviesPosters/akira.jpg"
          alt="Akira"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> 
           <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            
          </CardContent>
        </Collapse>
      </Card> */}

      

        </div>
    );
}

export default Movie
