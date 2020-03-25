import React, {useState} from 'react';
import Login from '../../forms/Login';

import './SubMenu.css';
import '../animation/fade.css';

import {CSSTransition} from 'react-transition-group';

export const SubMenu = ({visible, children}) =>{
  const [isVisibleLogin, setVisibleLogin] =useState(false);
  const handlerLogin = () =>{
    setVisibleLogin(!isVisibleLogin);
  };
  return (
    <div className='sub-menu'>
        <div className='sub-menu__links-container'>
          {children}
        </div>
        <button className='header__link' onClick={handlerLogin}>Login</button>
      {isVisibleLogin&&<Login onClose={()=>setVisibleLogin(false)} />}


    </div>
  );
};
