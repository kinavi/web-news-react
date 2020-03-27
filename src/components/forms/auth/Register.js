import React, {useRef, useContext} from 'react';
import {connect} from 'react-redux';

import {registerUser, loginUser} from '../../../store/Redusers/AuthRedusers';
import {done} from '../../../store/Redusers/FormRedusers';

import {
  FormTitle,
  FormAlert,
  FormGroup,
  FormLabel,
  FormInput,
  FormCheckbox,
  FormGroupButton,
  FormButton,

} from './elements';

const Register = ({switchForm, setRegister, isLogin, isPassword}) =>{
  const inputLogin = useRef(null);
  const inputPassword = useRef(null);
  const inputSave = useRef(null);

  const handlerClickSubmit = (e) =>{
    const loginValue = inputLogin.current.value;
    const loginPassword = inputPassword.current.value;
    setRegister(loginValue, loginPassword);
    // onClose();
    e.stopPropagation();
  };
  return (
    <div className='form__container'>
      <FormTitle value='Register'/>
      <FormAlert/>
      <FormGroup>
        <FormLabel value='Login'/>
        <FormInput type='text' refInput={inputLogin} required={isLogin}/>
      </FormGroup>
      <FormGroup>
        <FormLabel value='Password'/>
        <FormInput type='password' refInput={inputPassword} required={isLogin}/>
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
  ...state.Form,
});
const mapDispatchToProps = (dispatch) =>({
  setRegister(login, password) {
    dispatch(registerUser(login, password));
  },
});

export default connect( mapStateToProps, mapDispatchToProps)(Register);
