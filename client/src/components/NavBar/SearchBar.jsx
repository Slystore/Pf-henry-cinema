import React from 'react';
import {useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovieName} from '../../redux/movies/moviesAction';
import SearchIcon from '@mui/icons-material/Search';
import { useStyle, Search, SearchIconWrapper, StyledInputBase } from './SearchBarStyles.js'


export default function SearchBar() {

  const classes = useStyle();

  const [name, setName] = useState('');
  const dispatch = useDispatch();

  function handleInputChange(e){
      e.preventDefault()
    setName(e.target.value)
  }

  function  handleSubmit(e) {
      e.preventDefault()
      dispatch(getMovieName(name))    
      // dispatch(cleanAction())
  }

  function cleanState(e){
    e.preventDefault()
    window.location.replace('')
  }

  return (
      <Search>

        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase placeholder="Buscar…" inputProps={{ 'aria-label': 'search' }} onChange= {handleInputChange}/>
        <button 
            type='submit' 
            onClick={(e) => handleSubmit(e)} 
            className={ classes.boton } >
            Buscar
        </button>

        <button 
            type='submit' 
            onClick={(e) => cleanState(e)} 
            className={ classes.boton } >
              Limpiar
        </button> 
        
      </Search>
  )
}



    
    {/* <input   
      type= 'text'
      placeholder= 'Buscar...'
      onChange= {handleInputChange}
      className= ""
    />
   
   */}