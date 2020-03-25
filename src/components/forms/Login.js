import React, {useRef, useContext} from 'react';
import {connect} from 'react-redux';
import {IconContext} from 'react-icons';
import {MdClose} from 'react-icons/md';
import {ModalContext} from '../context';

import {registerUser, loginUser} from '../../store/Redusers/AuthRedusers';

import './Login.css';

const Login = ({onLogin, onClose}) =>{
  const inputLogin = useRef(null);
  const inputPassword = useRef(null);
  const inputSave = useRef(null);
  const {setStateModal} = useContext(ModalContext);
  const handlerClick = (e) =>{
    console.log('inputLogin - ', inputLogin.current.value);
    console.log('inputPassword - ', inputPassword.current.value);
    console.log('inputSave - ', inputSave.current.checked);
    onLogin(inputLogin.current.value, inputPassword.current.value);
    setStateModal(false);
    e.stopPropagation();
  };
  return (
    <div className='login__container'>

      <div className='login__form'>
        <IconContext.Provider 
          value={{size: 30, className: 'cancel__btn'}}>
          <MdClose onClick={onClose}/>
        </IconContext.Provider>
        <div className='login__group'>
          <div className='login__label-name '>name</div>
          <input ref={inputLogin} className='login__input-name login___input'/>
        </div>
        <div className='login__group'>
          <div className='login__label-password'>Password</div>
          <input type='password' ref={inputPassword} className='login__input-password login___input'/>
        </div>
        <label className='login__save'><input ref={inputSave} type="checkbox"/> Save me</label>
        <div className='login__btn-container'>
          <button className='create__btn btn-form' onClick={handlerClick}>Create</button>
          <button className='login__btn btn-form' onClick={handlerClick}>Login</button>
        </div>
      </div>
      <div className='login__layer' onClick={onClose}></div>
    </div>

  );
};
const mapDispatchToProps = (dispatch) =>({
  onLogin(login, password) {
    dispatch(loginUser(login, password));
  },

});

export default connect( null, mapDispatchToProps)(Login);
