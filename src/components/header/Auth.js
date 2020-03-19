import React, {useContext} from 'react';
import {ModalContext} from '../context';

export const Auth = () =>{
  // const modalState = useContext(ModalContext);
  const {modalState, setStateModal} = useContext(ModalContext);

  const handlerClick =(e) =>{
    setStateModal(!modalState);
    e.stopPropagation();
  };
  return (
    <button className='header__auth header__btn' onClick={handlerClick}>
      <span className='text-center'>
         AUTH
      </span>
    </button>
  // <Link to='/cms' title='main' className='header__auth header__btn'>
  //   <span className='text-center'>
  //     AUTH
  //   </span>
  // </Link>
  );
};
