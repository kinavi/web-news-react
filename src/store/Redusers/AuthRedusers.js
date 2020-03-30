import {fetchThenDispatch} from '../Actions';
import {alertLogin, alertPassword, alert} from './FormRedusers';
import fetch from 'isomorphic-fetch';
const parseResponse = (response) => response.json();

const logError = (error) => console.error(error);

export const SET_USER_DATA = 'SET_USER_DATA';
export const NULL_USER_DATA = 'NULL_USER_DATA';
const initialState = {
  id: null,
  login: null,
  isAuth: false,

};

export const AuthRedusers = (state = initialState, action) =>{
  switch (action.type) {
    case SET_USER_DATA:
      return (
        {
          ...state,
          ...action.data,
          isAuth: true,
        }
      );
    case NULL_USER_DATA:
      return (
        {
          id: null,
          login: null,
          isAuth: false,
        }
      );
    default:
      return state;
  }
};

export const setUserData = (data) =>({
  type: SET_USER_DATA,
  data,
});

export const nullUserData = () =>({
  type: NULL_USER_DATA,
});

export const registerUser = (login, password) => (dispatch)=>{
  if (cheackData(login, password, dispatch)) {
    fetchThenDispatch(
        dispatch,
        `/api/users/`,
        'POST',
        JSON.stringify({user: {login, password}}),
    );
  }
};

export const loginUser = (login, password) => (dispatch)=>{
  if (cheackData(login, password, dispatch)) {
    fetchThenDispatch(
        dispatch,
        `/api/users/login`,
        'POST',
        JSON.stringify({user: {login, password}}),
    );
  }
};

export const getUser = () => (dispatch)=> {
  fetch(`/api/users/current`, {method: 'POST', headers: {'Content-Type': 'application/json'}, credentials: 'include'})
      .then(parseResponse)
      .then(dispatch)
      .catch(logError);
  // fetchThenDispatch(
  //     dispatch,
  //     ,
  //     'GET',
  // );
};

// fetch(url, {method, body, headers: {'Content-Type': 'application/json'}})
//     .then(parseResponse)
//     .then(dispatch)
//     .catch(logError);

const cheackData = (login, password, dispatch) =>{
  if (!login&&!password) {
    dispatch(alert('Input login and password'));
    return false;
  }
  if (!login) {
    dispatch(alertLogin('Input login'));
    return false;
  }
  if (!password) {
    dispatch(alertPassword('Input password'));
    return false;
  }
  return true;
};
