import {fetchThenDispatch} from '../fetchs';

import {NewsRedusers} from './NewsRedusers';

// const SORT_BY_AUHTHOR = 'SORT_BY_AUHTHOR';
// const SEARCH_BY_TITLE = 'SEARCH_BY_TITLE';
const VIEW_ALL_NEWS = 'VIEW_ALL_NEWS';
const ADD_NEWS = 'ADD_NEWS';
const VIEW_FILTER_NEWS = 'VIEW_FILTER_NEWS';
const LOAD_PART_NEWS = 'LOAD_PART_NEWS';
const CLEAR_VIEW_LIST = 'CLEAR_VIEW_LIST';

const SEARCH_BY_TITLE = 'SEARCH_BY_TITLE';

const initialState = {
  news: [],
  isLeft: false,
  // length: 0,
//   filter: {},
};

export const ViewRedusers = (state = initialState, action) =>{
  switch (action.type) {
    case CLEAR_VIEW_LIST:
      return {
        news: [],
        isLeft: false,
      };
    case LOAD_PART_NEWS:
      return {
        news: [...state.news, ...action.data],
        isLeft: action.isLeft,
        // length: state.news.length + action.data.length
      };
    case VIEW_FILTER_NEWS:
      return {
        news: action.data,
        isLeft: action.isLeft,
        // length: action.data.length,
        // index: action.data.length;
      };
    case SEARCH_BY_TITLE:
      return {
        news: action.data,
        isLeft: false,
      }
    // case ADD_NEWS:
    //   return {
    //     news: NewsRedusers(state.news, action),
    //     ...state,
    //   };
    default: return state;
  }
};

export const searchByTitleAC = (data) => ({
  type: SEARCH_BY_TITLE,
  data,
});

export const searchByTitle = (value) => (dispatch) =>
  fetchThenDispatch(
      dispatch,
      '/api/view/search',
      'POST',
      JSON.stringify({value}),
  );

export const droppingViewListAC = () => (dispatch) => {
  dispatch(clearViewListAC());
  dispatch(getPartNews(0, 6));
};

export const clearViewListAC = () =>({
  type: CLEAR_VIEW_LIST,
});

export const viewNewsAC = (data, isLeft) =>({
  type: VIEW_FILTER_NEWS,
  data,
  isLeft,
});
export const loadPartNewsAC = (data, isLeft) => ({
  type: LOAD_PART_NEWS,
  data,
  isLeft,
});

export const getNewsByAuthor = (author) => (dispatch) =>
  fetchThenDispatch(
      dispatch,
      '/api/view/author',
      'POST',
      JSON.stringify({author}),
  );

export const getPartNews = (length, size) => (dispatch) =>
  fetchThenDispatch(
      dispatch,
      '/api/view',
      'POST',
      JSON.stringify({length, size}),
  );

