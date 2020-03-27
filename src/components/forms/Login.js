import React, {useRef, useContext, useState} from 'react';
import {connect} from 'react-redux';

import {registerUser, loginUser} from '../../store/Redusers/AuthRedusers';
import {SET_DEFAULT_STATE} from '../../store/Redusers/FormRedusers';

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

const Login = ({Form, onClickInput, onClose, switchForm, onLogin}) =>{
  const inputLogin = useRef(null);
  const inputPassword = useRef(null);
  const inputSave = useRef(null);

  const handlerClickSubmit = (e) =>{
    console.log('inputLogin - ', inputLogin.current.value);
    console.log('inputPassword - ', inputPassword.current.value);
    console.log('inputSave - ', inputSave.current.checked);
    onLogin(inputLogin.current.value, inputPassword.current.value);
    e.stopPropagation();
  };

  return (
    <div className='form__container'>
      <FormTitle value='Login' />
      <FormAlert/>
      <FormGroup>
        <FormLabel value='Login'/>
        <FormInput type='text' refInput={inputLogin}/>
      </FormGroup>
      <FormGroup>
        <FormLabel value='Password'/>
        <FormInput type='password' refInput={inputPassword}/>
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
  Form: state.Form,
});
const mapDispatchToProps = (dispatch) =>({
  onLogin(login, password) {
    dispatch(loginUser(login, password));
  },
  onClickInput() {
    dispatch({
      type: SET_DEFAULT_STATE,
    });
  },

});

export default connect( mapStateToProps, mapDispatchToProps)(Login);


