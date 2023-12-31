// css imports

import './PokeminList.css'
import Pokemon from '../Pokemon/Pokemon';
import usePokemonList from '../../hooks/usePokemonList';



function PokemonList(){
    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon"

    const[pokemonListState,setPokemonListState] = usePokemonList(DEFAULT_URL);


    return (
        <div className='pokemon-List-Wrapper'>
            <div>
            <h1>Pokemon List</h1>
            </div>
            <div className='page-controls'>
            {pokemonListState.prevUrl !== null ? (<button  onClick={()=>setPokemonListState({...pokemonListState, pokedexUrl: pokemonListState.prevUrl})}>Previous</button>): null}
            {pokemonListState.nextUrl == null ? null : <button onClick={()=> setPokemonListState({...pokemonListState, pokedexUrl: pokemonListState.nextUrl})}>Next</button> }
                
            </div>
            <div className='pokemon-list'>
            {pokemonListState.pokemonList.map(pokemon=><Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} id= {pokemon.id} />)}
            </div>

        </div>
    )
      
        
}

export default PokemonList;