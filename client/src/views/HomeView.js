import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
import Slider from '../components/Slider/Slider';
import NavBar from './../components/NavBar';
import NavBarBis from '../components/NavBar/NavBarBis';
import { ThemeProvider } from '@material-ui/core';


import '../App.css';


const HomeView = () => {
    
    return(
        <div className='Container'>
            <ThemeProvider>
                <NavBar/>
                <div className="SliderPrincipal"> <Slider /> </div>
                <Home/>
                <div className="Footer"><Footer/></div>
            </ThemeProvider>
        </div>
    )

}

export default HomeView
