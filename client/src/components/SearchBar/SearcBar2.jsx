import React from 'react';
import {useState } from 'react';
import {  useDispatch } from 'react-redux';
import { getMovieName} from '../../actions/index';


export default function SearchBar() {
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
    <div>
        <input   
        type= 'text'
        placeholder= 'Buscar...'
        onChange= {handleInputChange}
        className= ""
        />
    <button type='submit' onClick={(e) => handleSubmit(e)}
    className="" >Buscar</button>
    <button type='submit' onClick={(e) => cleanState(e)}
    className="" >Limpiar</button>
    </div>
     
)



}