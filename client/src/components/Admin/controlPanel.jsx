import React from 'react'

function controlPanel() {
    return (
        <div>
            
        </div>
    )
}

export default controlPanel




// import { Grid, Button } from "@material-ui/core";
// import { ThemeProvider } from '@material-ui/core';
// import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';

// import React from "react";
// import { Link } from "react-router-dom";
// import theme from "../../utils/theme.js";

// // const useStyles = makeStyles((theme)=>({
// //     title: {
// // 		display: 'flex',
// // 		justifyContent: 'center'
// // 	},
// //     button: {
// // 		display: 'block',
// // 		marginTop: theme.spacing(2),
// // 	}
// // }))

// function ControlPanel() {
//     // const style = useStyles();
//   return (
//     <ThemeProvider theme={theme}>
//       <h1 className="">Admin Panel</h1>
//       <Grid sx={{border: '1px solid'}}
//         container
//         direction="row"
//         justifyContent="space-around"
//         alignItems="center"
        
//         spacing={1}
//       >
//         <Grid sx={{border: '2px solid #f00'}}>
//           <Grid sx={{border: '1px solid'}}
//             container
//             direction="column"
//             justifyContent="center"
//             alignItems="center"
//           >
//             <Link to="/admin/createMovie">
//               <Button className="" variant="body2" color="secondary">
//               Agregar Película
//               </Button>
//             </Link>
//             <Link to="/admin/createGenre">
//               <Button className="" variant="body2" color="secondary">
//               Agregar Género
//               </Button>
//             </Link>
//             <Link to="/">
//               <Button className="" variant="body2" color="secondary">
//               Home
//               </Button>
//             </Link>
//           </Grid>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }

// /* onClick={preventDefault} */

// export default ControlPanel;