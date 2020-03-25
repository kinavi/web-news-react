import React, {useState} from 'react';
import Login from '../../forms/Login';

import './SubMenu.css';

export const SubMenu = ({children}) =>{
  const [isVisibleLogin, setVisibleLogin] =useState(false);
  const handlerLogin = () =>{
    setVisibleLogin(!isVisibleLogin);
  };
  return (
    <div className='sub-menu'>
      <div className='sub-menu__links-container'>
        {children}
      </div>
      <button className='header__link' onClick={handlerLogin} >Login</button>
      {isVisibleLogin&&<Login onClose={()=>setVisibleLogin(false)} />}
    </div>
  );
};
