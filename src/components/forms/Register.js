import React, {useRef, useContext} from 'react';
import {connect} from 'react-redux';

import {registerUser, loginUser} from '../../store/Redusers/AuthRedusers';

const Register = ({onClose, onOpenRegister, onRegister}) =>{
  const inputLogin = useRef(null);
  const inputPassword = useRef(null);
  // const inputSave = useRef(null);

  const handlerSibmitButtonClick = (e) =>{
    console.log('inputLogin - ', inputLogin.current.value);
    console.log('inputPassword - ', inputPassword.current.value);
    // console.log('inputSave - ', inputSave.current.checked);
    onRegister(inputLogin.current.value, inputPassword.current.value);
    onClose();
    e.stopPropagation();
  };
  return (
    <div className='form__login'>
      <div className='login__title'>Register</div>
      <div className='login__group'>
        <div className='login__label-name '>name</div>
        <input ref={inputLogin} className='login__input-name login___input'/>
      </div>
      <div className='login__group'>
        <div className='login__label-password'>Password</div>
        <input type='password' ref={inputPassword} className='login__input-password login___input'/>
      </div>
      {/* <label className='login__save'><input ref={inputSave} type="checkbox"/> Save me</label> */}
      <div className='login__btn-container'>
        <button className='register__btn btn-form' onClick={onOpenRegister}>Login</button>
        <button className='login__btn btn-form' onClick={handlerSibmitButtonClick} >Sibmit</button>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) =>({
  onRegister(login, password) {
    dispatch(registerUser(login, password));
  },
});

export default connect( null, mapDispatchToProps)(Register);
