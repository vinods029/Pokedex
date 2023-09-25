// CSS imports

import PokeminList from '../PokemonList/PokemonList';
import Search from '../Search/Search';
import './Pokedex.css';

function Pokedex(){

    return(
        <div className='pokedex-wrapper'>
            <h1>Pokedex</h1>
            <Search/>
            <PokeminList/>
        </div>
    )

}

export default Pokedex;