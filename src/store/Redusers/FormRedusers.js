import {fetchThenDispatch} from '../Actions';

export const ALERT = 'SET_ALERT';
export const LOGIN_ALERT = 'LOGIN_ALERT';
export const PASSWORD_ALERT = 'PASSWORD_ALERT';
export const LOGIN_DONE = 'LOGIN_DONE';
export const PASSWORD_DONE = 'PASSWORD_DONE';
export const DONE= 'DONE';

// const typeAler = {
//   LOGIN: 'LOGIN',
//   PASSWORD: 'PASSWORD',
// };

const initialState = {
  isAlert: null,
  isLogin: null,
  isPassword: null,
  alertMessage: null,
};

export const FormRedusers = (state = initialState, action) =>{
  switch (action.type) {
    case ALERT:
      return (
        {
          isAlert: true,
          isLogin: true,
          isPassword: true,
          alertMessage: action.alertMessage,
        }
      );
    case LOGIN_ALERT:
      return (
        {
          ...state,
          isLogin: true,
          alertMessage: action.alertMessage,
        }
      );
    case PASSWORD_ALERT:
      return (
        {
          ...state,
          isPassword: true,
          alertMessage: action.alertMessage,
        }
      );
    case LOGIN_DONE:
      return (
        {
          ...state,
          isLogin: false,
          alertMessage: null,
        }
      );
    case PASSWORD_DONE:
      return (
        {
          ...state,
          isPassword: false,
          alertMessage: null,
        }
      );
    case DONE:
      return (
        {
          isAlert: null,
          isLogin: null,
          isPassword: null,
          alertMessage: null,
        }
      );
    default:
      return state;
  }
};

export const alertLogin = (message) =>({
  type: LOGIN_ALERT,
  alertMessage: message,
});

export const alertPassword = (message) =>({
  type: PASSWORD_ALERT,
  alertMessage: message,
});

export const doneLogin = () =>({
  type: LOGIN_DONE,
});

export const donePassword = () =>({
  type: PASSWORD_DONE,
});

export const done = () =>({
  type: DONE,
});

export const alert = (message) => ({
  type: ALERT,
  alertMessage: message,
});
