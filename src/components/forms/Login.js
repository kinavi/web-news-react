import React, {useContext} from 'react';
import {ModalContext} from '../context';
import '../../styles/Login.css';

export const Login = () =>{
  const {setStateModal} = useContext(ModalContext);
  const handlerClick = (e) =>{
    setStateModal(false);
    e.stopPropagation();
  };
  return (
    <div className='login__container'>
      <div className='login__group'>
        <div className='login__label-name '>name</div>
        <input className='login__input-name login___input'/>
      </div>
      <div className='login__group'>
        <div className='login__label-password'>Password</div>
        <input className='login__input-password login___input'/>
      </div>
      <button className='btn login__btn' onClick={handlerClick}>Login</button>
    </div>

  );
};
