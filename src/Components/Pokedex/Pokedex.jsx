// CSS imports

import { useState } from 'react';
import PokeminList from '../PokemonList/PokemonList';
import Search from '../Search/Search';
import './Pokedex.css';
import PokemonDetails from '../PokemonDetails/PokemonDetails';

function Pokedex(){

    const [searchTerm, setSearchTerm] = useState('')

    return(
        <div className='pokedex-wrapper'>
            <h1>Pokedex</h1>
            <Search updateSearchTerm={setSearchTerm}/>
            {searchTerm ? <PokemonDetails pokemonName={searchTerm}/>: <PokeminList/>}
        </div>
    )

}

export default Pokedex;