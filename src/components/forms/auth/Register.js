import React, {useRef, useContext, useEffect} from 'react';
import {connect} from 'react-redux';

import {registerUser, loginUser} from '../../../store/Redusers/AuthRedusers';
import {allDone} from '../../../store/Redusers/FormRedusers';

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

const Register = ({setDone, switchForm, setRegister, isLogin, isPassword}) =>{
  const inputLogin = useRef(null);
  const inputPassword = useRef(null);
  const inputSave = useRef(null);

  useEffect(()=>{
    setDone();
  }, []);

  const handlerClickSubmit = (e) =>{
    const loginValue = inputLogin.current.value;
    const loginPassword = inputPassword.current.value;
    setRegister(loginValue, loginPassword);
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
        <FormInput type='password' refInput={inputPassword} required={isPassword}/>
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
  setDone() {
    dispatch(allDone());
  },
});

export default connect( mapStateToProps, mapDispatchToProps)(Register);
