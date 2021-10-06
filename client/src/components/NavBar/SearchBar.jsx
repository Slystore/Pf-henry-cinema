import React from 'react';
import {useState } from 'react';
import {useDispatch } from 'react-redux';
import {getMovieName} from '../../actions/index.js';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField'

export default function SearchBar() {
const [name, setName] = useState('');
const dispatch = useDispatch();

function handleInputChange(event){
    event.preventDefault()
   setName(event.target.value)
   console.log(name)
 }

function  handleSubmit(e) {
    e.preventDefault()
    dispatch(getMovieName(name))    
  }
function cleanState(e){
  e.preventDefault()
  window.location.replace('')
}
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  height: 35,
  marginTop: 5,
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '27ch',
    },
  },
}));
return (
   
       <Search>
              <SearchIconWrapper>
               <SearchIcon type='submit' onClick={(e) => handleSubmit(e)}/>
              </SearchIconWrapper>
                <StyledInputBase placeholder="Buscar…" inputProps={{ 'aria-label': 'search' }}/>
               <TextField
               
         onChange={(event) => handleInputChange(event)}
                 
               />  
           </Search>
        /* <input   
        type= 'text'inputProps={{ 'aria-label': 'search' }}
        onChange= {handleInputChange}
        />
    <button type='submit' onClick={(e) => handleSubmit(e)}
    className="" >Buscar</button> */
    // <button type='submit' onClick={(e) => cleanState(e)}
    // className="" >Limpiar</button>
   
     
)
}
