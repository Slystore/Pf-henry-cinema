import React from 'react';
import {useState } from 'react';
import {  useDispatch } from 'react-redux';
import { getMovieName} from '../../actions/index';
import { IoSearchCircle } from 'react-icons/io5';
import './SearchBar.css';

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
  }
function cleanState(e){
  e.preventDefault()
  window.location.replace('')
}
return (
  <form action="/" method="get" autoComplete="off" onSubmit={handleSubmit} className="Form">
    <div className="InputSearchContainer">
        <input   
        type= 'text'
        placeholder= 'Buscar...'
        onChange= {handleInputChange}
        className= "InputSearch"
        />
 
    <button type='submit' onClick={(e) => cleanState(e)}
    className="" >Limpiar</button>
    </div>
    <div className="ButtonSubmitSearchContainer">

<button type="submit" className="ButtonSubmitSearch"><IoSearchCircle className="IconSearch" /></button>

</div>

</form>
     
)



}