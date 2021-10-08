import React from 'react'

import Slider from '../components/Slider/Slider';
import Home from '../components/Home/Home';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import PageNotFound from '../components/404/PageNotFound';


function HomeView() {
    return (
        <div className='Container'>
            <NavBar />
            <Slider />
            <Home/>
            <Footer />
            <div style={{ display: 'none' }}>
                <PageNotFound />
            </div>
        </div>
    )
}

export default HomeView






// import NavBar2 from './../components/NavBar2/NavBar2.jsx'

// // import { ThemeProvider } from '@material-ui/core';
// import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

// import '../App.css';


// const HomeView = () => {
    
//     return(
//         <div className='Container'>
//             <ThemeProvider>
//                 <NavBar />
//                 {/* <NavBar2 /> */}
//                 <Slider /> 
//                 <Home/>
//                 <div className="Footer"><Footer/></div>
//             </ThemeProvider>
//         </div>
//     )

// }

// export default HomeView

