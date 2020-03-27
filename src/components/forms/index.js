import React, {useRef, useContext, useState} from 'react';
import {SwitchTransition, CSSTransition} from 'react-transition-group';

import {IconContext} from 'react-icons';
import {MdClose} from 'react-icons/md';

import AddNews from './AddNews';
import EditNews from './EditNews';
import Login from './Login';
import Register from './Register';

import './Form.css';
import '../header/animation/scale.css';
import '../header/animation/fade.css';

const ScaleTransition = (props) => {
  return (
    <CSSTransition {...props} classNames="fade">
      {props.children}
    </CSSTransition>
  );
};

const FormContainer = ({onClose}) =>{
  const [isLogin, setLogin] = useState(true);

  const handlerOpenRegister = () =>{
    setLogin(false);
  };

  const handlerOpenLogin = () =>{
    setLogin(true);
  };

  return (
    <div>
      <div className='form'>
        <IconContext.Provider
          value={{size: 30, className: 'form__btn-cancel'}}>
          <MdClose onClick={onClose}/>
        </IconContext.Provider>
        <SwitchTransition mode='out-in'>
          <ScaleTransition key={isLogin} timeout={200}>
            {isLogin?
              <Login onClose={onClose} switchForm={handlerOpenRegister}/>:
              <Register onClose={onClose} switchForm={handlerOpenLogin}/>
            }
          </ScaleTransition>
        </SwitchTransition>
      </div>
      <div className='form__layer' onClick={onClose}></div>
    </div>
  );
};
export {
  AddNews,
  EditNews,
  Login,
  Register,
  FormContainer,
};

