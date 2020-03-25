import React, {useState} from 'react';

import {SearchButton} from './SearchButton';

import './Search.css';

import {IconContext} from 'react-icons';
import {GoSearch} from 'react-icons/go';
import {MdClose} from 'react-icons/md';

const Search = ({title='world web news'}) =>{
  const [isVisibilityBtn, setVisibilityBtn] = useState(true);

  const handlerClickButton = () =>{
    setVisibilityBtn(!isVisibilityBtn);
  };

  return (
    <div className='search__container'>
      <div className='search__title'>{title}</div>
      <SearchButton onClick={handlerClickButton}/>
      {isVisibilityBtn||<div className='search__layer'>
        <div className='search__icon'>
          <IconContext.Provider value={{color: '#786428', size: 25, className: 'header__icon'}}>
            <GoSearch/>
          </IconContext.Provider>
        </div>
        <input className='search__input' type='text' placeholder='site search'/>
        <div className='search__icon'>
          <IconContext.Provider value={{color: '#706F6F', size: 25, className: 'header__icon active'}}>
            <MdClose onClick={handlerClickButton}/>
          </IconContext.Provider>
        </div>
      </div>}
    </div>
  );
};

export {Search, SearchButton};
