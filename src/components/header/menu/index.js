import React from 'react';
import {IconContext} from 'react-icons';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdClose} from 'react-icons/md';

import './Menu.css';
import SubMenu from './SubMenu';

const CloseState = () =>
  <IconContext.Provider
    value={{size: 30, className: 'header__icon'}}>
    <GiHamburgerMenu/>
  </IconContext.Provider>;

const OpenState = () =>
  <IconContext.Provider
    value={{size: 30, className: 'header__icon'}}>
    <MdClose/>
  </IconContext.Provider>;

const Menu = ({onClick, visible}) =>{
  return (
    <button className='menu header__btn' onClick={onClick}>
      {visible?<OpenState/>:<CloseState/>}
    </button>
  );
};

export {Menu, SubMenu};
