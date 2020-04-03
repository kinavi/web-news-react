import {fetchThenDispatch} from '../fetchs';

const GET_NEWS_BY_ID = 'GET_NEWS_BY_ID';

const initialState = {
//   news: null,
};

export const NewsRedusers = (state = null, action) =>{
  switch (action.type) {
    case GET_NEWS_BY_ID:
      return {
        ...action.news,
      };
    default:
      return state;
  }
};

export const getNewsByIdAC = (news) =>({
  type: GET_NEWS_BY_ID,
  news,
});

export const getNewsById = (newsId) => (dispatch) =>
  fetchThenDispatch(
      dispatch,
      '/api/news',
      'POST',
      JSON.stringify({newsId}),
  );
