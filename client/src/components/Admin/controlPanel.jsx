import { Grid, Button } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core';

import React from "react";
import { Link } from "react-router-dom";
import theme from "../../Utils/theme";

// const useStyles = makeStyles((theme)=>({
//     title: {
// 		display: 'flex',
// 		justifyContent: 'center'
// 	},
//     button: {
// 		display: 'block',
// 		marginTop: theme.spacing(2),
// 	}
// }))

function ControlPanel() {
    // const style = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <h1 className="">Admin Panel</h1>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        
        spacing={1}
      >
        <Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Link to="/admin/createMovie">
              <Button className="" variant="body2" color="secondary">
              Agregar Película
              </Button>
            </Link>
            <Link to="/admin/createGenre">
              <Button className="" variant="body2" color="secondary">
              Agregar Género
              </Button>
            </Link>
            <Link to="/">
              <Button className="" variant="body2" color="secondary">
              Home
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

/* onClick={preventDefault} */

export default ControlPanel;