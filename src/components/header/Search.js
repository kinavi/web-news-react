import React from 'react';

import {IconContext} from 'react-icons';
import {GoSearch} from 'react-icons/go';

export const Search = () =>{
  return (
    <button className='header__btn header__search'>
      <IconContext.Provider value={{size: 30, className: 'header__icon'}}>
        <GoSearch/>
      </IconContext.Provider>
    </button>
  );
};
