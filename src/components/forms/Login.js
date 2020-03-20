import React, {useRef, useContext} from 'react';
import {connect} from 'react-redux';

import {ModalContext} from '../context';
import '../../styles/Login.css';

import {setUserData} from '../../store/Redusers/AuthRedusers';

const Login = ({onLogin}) =>{
  const inputLogin = useRef(null);
  const inputPassword = useRef(null);

  const {setStateModal} = useContext(ModalContext);
  const handlerClick = (e) =>{
    console.log('inputLogin - ', inputLogin.current.value);
    console.log('inputPassword - ', inputPassword.current.value);
    onLogin(inputLogin.current.value, inputPassword.current.value);
    setStateModal(false);
    e.stopPropagation();
  };
  return (
    <div className='login__container'>
      <div className='login__group'>
        <div className='login__label-name '>name</div>
        <input ref={inputLogin} className='login__input-name login___input'/>
      </div>
      <div className='login__group'>
        <div className='login__label-password'>Password</div>
        <input ref={inputPassword} className='login__input-password login___input'/>
      </div>
      <button className='login__btn' onClick={handlerClick}>Login</button>
    </div>

  );
};
const mapDispatchToProps = (dispatch) =>({
  onLogin(login, password) {
    dispatch(setUserData(login, password));
  },

});
// mapDispatchToProps

export default connect( null, mapDispatchToProps)(Login);
