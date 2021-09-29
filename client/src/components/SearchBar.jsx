import React from 'react';
import { useHistory } from 'react-router-dom';
import { IoSearchCircle } from 'react-icons/io5';
import './SearchBar.css';


function SearchBar({ searchQuery, setSearchQuery }) {
    
    const history = useHistory();

    function onSubmit(e){
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };

    return (
        <form action="/" method="get" autoComplete="off" onSubmit={onSubmit} className="Form">

            <div className="InputSearchContainer">

                <input
                    className="InputSearch"
                    value={searchQuery}
                    onInput={(e) => setSearchQuery(e.target.value)}
                    type="text"
                    id="header-search"
                    placeholder={searchQuery === '' ? '' : 'Buscar Película'}
                    name="s"
                />

            </div>

            <div className="ButtonSubmitSearchContainer">

                <button type="submit" className="ButtonSubmitSearch"><IoSearchCircle className="IconSearch" /></button>

            </div>

        </form>
    );
};

export default SearchBar;