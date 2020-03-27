import React, {useRef, useContext} from 'react';
import {connect} from 'react-redux';

import {registerUser, loginUser} from '../../store/Redusers/AuthRedusers';
import {SET_DEFAULT_STATE} from '../../store/Redusers/FormRedusers';

import {
  FormTitle,
  FormAlert,
  FormGroup, 
  FormLabel,
  FormInput,
FormCheckbox,
FormGroupButton,
FormButton

} from './elements'

const Register = ({Form, onClickInput, onClose, switchForm, onRegister}) =>{
  const inputLogin = useRef(null);
  const inputPassword = useRef(null);
  const inputSave = useRef(null);

  const handlerClickSubmit = (e) =>{
    console.log('inputLogin - ', inputLogin.current.value);
    console.log('inputPassword - ', inputPassword.current.value);
    // console.log('inputSave - ', inputSave.current.checked);
    onRegister(inputLogin.current.value, inputPassword.current.value);
    // onClose();
    e.stopPropagation();
  };
  return (
    <div className='form__container'>
      <FormTitle value='Register'/>
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
          text='Login'
          onClick={switchForm}
        />
        <FormButton
          text='Submit'
          onClick={handlerClickSubmit}
        />
      </FormGroupButton>
    </div>
  );
};
const mapStateToProps = (state) =>({
  Form: state.Form,
});
const mapDispatchToProps = (dispatch) =>({
  onRegister(login, password) {
    dispatch(registerUser(login, password));
  },
  onClickInput() {
    dispatch({
      type: SET_DEFAULT_STATE,
    });
  },
});

export default connect( mapStateToProps, mapDispatchToProps)(Register);
