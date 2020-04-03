import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {FormContainer} from '../../forms/auth';

import './SubMenu.css';
import '../animation/fade.css';

const SubMenu = ({isAuth, visible, children}) =>{
  const [isVisibleLogin, setVisibleLogin] =useState(false);
  const handlerLogin = () =>{
    setVisibleLogin(!isVisibleLogin);
  };
  useEffect(()=>{
    if (isAuth) {
      setVisibleLogin(false);
    }
  }, [isAuth]);
  return (
    <div className='sub-menu'>
      <div className='sub-menu__links-container'>
        {children}
      </div>
      {isAuth?<Link
        to='/cms'
        title='cms'
        className='header__link'>cms</Link>:
      <button className='header__link' onClick={handlerLogin}>Login</button>}
      {isVisibleLogin&&<FormContainer onClose={()=>setVisibleLogin(false)} />}
    </div>
  );
};
const mapStateToProps = (state) =>({
  ...state.Auth,
});
const mapDispatchToProps = (dispatch) =>({

});

export default connect( mapStateToProps, mapDispatchToProps)(SubMenu);
