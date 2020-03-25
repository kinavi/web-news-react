import React from 'react';

import {IconContext} from 'react-icons';
import {GoSearch} from 'react-icons/go';
import {MdClose} from 'react-icons/md';

import './Search.css';

export const Search = ({isSearch, setSearch}) =>{
  return (
    <button className='header__btn header__search' onClick={()=>setSearch(!isSearch)}>
      {isSearch?
      <IconContext.Provider value={{size: 30, className: 'header__icon'}}>
        <GoSearch/>
      </IconContext.Provider>:
      <IconContext.Provider value={{size: 30, className: 'header__icon'}}>
        <MdClose/>
      </IconContext.Provider>
      }

    </button>
  );
};
