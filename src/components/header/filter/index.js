import React from 'react';

import {IconContext} from 'react-icons';
import {MdFilterList} from 'react-icons/md';

import {Select} from './Select';
import SubFilter from './SubFilter';

const Filter = ({onClick}) =>{
  return (
    <button onClick={onClick} className='header__btn header__search'>
      <IconContext.Provider value={{size: 30, className: 'header__icon'}}>
        <MdFilterList/>
      </IconContext.Provider>
    </button>
  );
};
export {Filter, Select, SubFilter};
