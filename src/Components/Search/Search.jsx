// CSS imports

import useDebounce from '../../hooks/useDebounce';
import './Search.css';

function Search({updateSearchTerm}){
    const debounceUpdateSearch = useDebounce((e)=> updateSearchTerm(e.target.value));
    return(
        <input 
        id= 'Search-pokemon'
        type='text' placeholder='Which pokemon you are looking for'
        onChange={debounceUpdateSearch}
        ></input>
    )

}

export default Search;