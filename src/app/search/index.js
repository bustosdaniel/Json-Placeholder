import React from 'react';
import { SearchWrapper,SearchImage } from './styles';

function Search () {
  return(
    <SearchWrapper>
      <SearchImage>
        <img src="/lupa.jpg" alt="" />
      </SearchImage>
      <input placeholder='Search Exposition' type='text' value=''/>
    </SearchWrapper>
  );
}

export {Search};