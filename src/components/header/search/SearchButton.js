import React from 'react';

import {IconContext} from 'react-icons';
import {GoSearch} from 'react-icons/go';

export const SearchButton = ({onClick}) =>{
  return (
    <button className='header__btn btn-search' onClick={onClick}>
      <IconContext.Provider value={{size: 30, className: 'header__icon'}}>
        <GoSearch/>
      </IconContext.Provider>
    </button>
  );
};
