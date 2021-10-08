import React from 'react'
import Img from '../../assets/404.png';
import Button from '@mui/material/Button';
import './PageNotFound.css'

function PageNotFound() {
    return (
        <div className="PageContainer">
            <img className="NotFound" src={Img} alt="404" />
            <Button variant="contained" 
                sx={{ 
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', 
                    boxShadow: '0 5px 15px #00000070',
                    marginTop: '20vh',
                    marginLeft: '48vw'
                 }} 
                 href="/">Volver</Button>
            
        </div>
    )
}

export default PageNotFound
