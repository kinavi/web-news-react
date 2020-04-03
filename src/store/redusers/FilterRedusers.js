import {fetchThenDispatch} from '../fetchs';
export const VIEW_LIST_AUTHOR = 'VIEW_LIST_AUTHOR';
export const SET_AUTHOR = 'SET_AUTHOR';
export const DROPPING_FILTER = 'DROPPING_FILTER';

const initialState = {
  currentAuthor: 'all',
  authors: [],
};

export const FilterRedusers = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_LIST_AUTHOR:
      return {
        ...state,
        authors: action.data,
      };
    case SET_AUTHOR:
      return {
        ...state,
        currentAuthor: action.author,
      };
    case DROPPING_FILTER:
      return {
        currentAuthor: 'all',
        ...state,
      };
    default:
      return state;
  }
};

export const droppingFilterAC = () =>({
  type: DROPPING_FILTER,
});

export const setAuthorAC = (author) =>({
  type: SET_AUTHOR,
  author,
});

export const viewListAuthorAC = (data) =>({
  type: VIEW_LIST_AUTHOR,
  data,
});

export const getAuthors = () => (dispatch) =>
  fetchThenDispatch(
      dispatch,
      '/api/filter/author',
      'GET',
  );
