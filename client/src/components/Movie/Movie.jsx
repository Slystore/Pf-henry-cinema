import * as React from "react";
import { useStyle } from "./movieStyles.js";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import Rating from "@mui/material/Rating";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 770,
  height: 380,
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

function Movie({
  image,
  name,
  availability,
  genre,
  rating,
  description,
}) {
  const classes = useStyle();
  const [value, setValue] = React.useState(2);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Card className={classes.root} elevation={5}>
        <CardActionArea>
          <CardHeader
            className={classes.rate}
            elevation={5}
            avatar={
              <Avatar
                sx={{
                  background:
                    "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                  border: "thin dotted #f00",
                }}
                aria-label="recipe"
              >
                {rating}
              </Avatar>
            }
          />
          <CardMedia className={classes.media} image={image} />
          <CardContent>
            <Typography
              variant="h6"
              align="center"
              className={classes.name}
              aria-label="name"
            >
              {name}
            </Typography>

            <Typography
              align="center"
              sx={{ color: "#00000060", fontSize: 14 }}
            >
              Accion | Suspenso | Aventura
            </Typography>
          </CardContent>
          <Button onClick={handleOpen} className={classes.boton}>
            Detalles
          </Button>
        </CardActionArea>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              width: 260,
              height: 380,
              border: "thin dotted #ccc",
              float: "left",
            }}
          >
            <CardMedia className={classes.media2} image={image} />
          </Box>
          <Box sx={{ width: 500, height: 380, float: "left" }}>
            <CardContent>
              <Box sx={{ width: 480, height: 40 }}>
                <Typography
                  variant="h5"
                  align="left"
                  sx={{ fontWeight: "bold" }}
                >
                  {name}
                </Typography>
              </Box>

              <Box sx={{ width: 400, height: 30 }}>
                <Typography
                  align="left"
                  sx={{ color: "#ff0000", fontSize: 16 }}
                >
                  Accion | Suspenso | Aventura
                </Typography>
              </Box>

              <Box sx={{ width: 100, height: 30, float: "left" }}>
                <Typography
                  align="left"
                  sx={{
                    color: "#00000060",
                    fontSize: 16,
                    height: 30,
                    width: 80,
                  }}
                >
                  1h 46min
                </Typography>
              </Box>

              <Box sx={{ width: 100, height: 30, float: "left" }}>
                <Typography
                  align="left"
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    fontSize: 16,
                    height: 20,
                    width: 50,
                    borderRadius: 1,
                    lineHeight: 1.3,
                    paddingLeft: 1,
                  }}
                >
                  PG-13
                </Typography>
              </Box>

              <Box sx={{ width: 480, height: 30, clear: "both", marginTop: 5 }}>
                <Typography align="left" sx={{ fontWeight: "bold" }}>
                  SINOPSIS
                </Typography>

                <Typography
                  align="left"
                  sx={{ color: "#000000", fontSize: 18 }}
                  variant="paraghrap"
                >
                  {description}
                </Typography>
              </Box>

              <Box
                sx={{ width: 100, height: 30, float: "left", marginTop: 13 }}
              >
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>

              <Box
                sx={{ width: 160, height: 40, float: "right", marginTop: 23 }}
              >
                <Button variant="contained" startIcon={<MovieFilterIcon />}>
                  Quiero verla
                </Button>
              </Box>
            </CardContent>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default Movie;
