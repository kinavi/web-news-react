import {fetchThenDispatch} from '../Actions';

export const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  userId: null,
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
    default:
      return state;
  }
};

export const registerUser = (login, password) => (dispatch)=>{
  fetchThenDispatch(
      dispatch,
      `/api/users/`,
      'POST',
      JSON.stringify({user: {login, password}}),
  );
};

export const loginUser = (login, password) => (dispatch)=>{
  fetchThenDispatch(
      dispatch,
      `/api/users/login`,
      'POST',
      JSON.stringify({user: {login, password}}),
  );
};