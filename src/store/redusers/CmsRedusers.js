import {fetchThenDispatch} from '../fetchs';
import {ListNewsRedusers} from './ListNewsRedusers';

const LOAD_NEWS_BY_ID = 'LOAD_NEWS_BY_ID';
const ADD_NEWS = 'ADD_NEWS';
const EDIT_NEWS = 'EDIT_NEWS';
const REMOVE_NEWS = 'REMOVE_NEWS';

const initialState = {
  news: [],
};

export const CmsRedusers = (state = initialState, action) =>{
  switch (action.type) {
    case LOAD_NEWS_BY_ID:
      return {news: [...action.data]};
    case ADD_NEWS:
      return {news: ListNewsRedusers(state.news, action)};
    case EDIT_NEWS:
      return {news: ListNewsRedusers(state.news, action)};
    case REMOVE_NEWS:
      return {news: ListNewsRedusers(state.news, action)};
    default: return state;
  }
};

export const loadNewsByIdAC = (data) =>({
  type: LOAD_NEWS_BY_ID,
  data,
});

export const getNewsById = (id) => (dispatch) =>
  fetchThenDispatch(
      dispatch,
      '/api/cms',
      'POST',
      JSON.stringify({userId: id}),
  );
