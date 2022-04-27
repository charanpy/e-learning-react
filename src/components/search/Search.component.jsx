import React from 'react';
import SearchSVG from '../../components/shared/svg/Search.svg';
import './search.css';

const Search = () => {
  return (
    <div className='searchContainer flex-row align'>
      <SearchSVG className='searchIcon' />
      <input className='searchInput' type='text' placeholder='Search...' />
    </div>
  );
};

export default Search;
