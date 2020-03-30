import React, {useRef, useContext, useState, useEffect} from 'react';
import {connect} from 'react-redux';

import {registerUser, loginUser} from '../../../store/Redusers/AuthRedusers';
import {allDone} from '../../../store/Redusers/FormRedusers';

import {
  FormTitle,
  FormAlert,
  FormGroup,
  FormInput,
  FormLabel,
  FormCheckbox,
  FormButton,
  FormGroupButton,
} from './elements';

const Login = ({setDone, switchForm, setLogin, isLogin, isPassword}) =>{
  const inputLogin = useRef(null);
  const inputPassword = useRef(null);
  const inputSave = useRef(null);

  useEffect(()=>{
    setDone();
  }, []);
  const handlerClickSubmit = (e) =>{
    const loginValue = inputLogin.current.value;
    const loginPassword = inputPassword.current.value;
    setLogin(loginValue, loginPassword);
  };

  return (
    <div className='form__container'>
      <FormTitle value='Login' />
      <FormAlert/>
      <FormGroup>
        <FormLabel value='Login'/>
        <FormInput type='text' refInput={inputLogin} required={isLogin}/>
      </FormGroup>
      <FormGroup>
        <FormLabel value='Password'/>
        <FormInput type='password' refInput={inputPassword} required={isPassword}/>
      </FormGroup>
      <FormCheckbox refInput={inputSave} text='Save me'/>
      <FormGroupButton>
        <FormButton
          text='Register'
          onClick={switchForm}/>
        <FormButton
          text='Submit'
          onClick={handlerClickSubmit}/>
      </FormGroupButton>
    </div>
  );
};
const mapStateToProps = (state) =>({
  ...state.Form,
});
const mapDispatchToProps = (dispatch) =>({
  setLogin(login, password) {
    dispatch(loginUser(login, password));
  },
  setDone() {
    dispatch(allDone());
  },
});

export default connect( mapStateToProps, mapDispatchToProps)(Login);


