import {fetchThenDispatch} from '../Actions';

const SET_USER_DATA = 'SET_USER_DATA';

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
        }
      );
    default:
      return state;
  }
};

export const setUserData = (login, password) => (dispatch)=>{
  fetchThenDispatch(
      dispatch,
      `/api/auth`,
      'POST',
      JSON.stringify({login, password}),
  );
};
