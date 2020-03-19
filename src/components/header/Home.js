import React from 'react';
import {Link} from 'react-router-dom';
import {IconContext} from 'react-icons';
import {TiHome} from 'react-icons/ti';

export const Home = () =>{
  return (
    <Link to='/' title='main' className='header__home header__btn'>
      <IconContext.Provider
        value={{size: 30, className: 'header__icon'}}>
        <TiHome/>
      </IconContext.Provider>
    </Link>
  );
};
