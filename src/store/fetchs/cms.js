import {fetchThenDispatch, onlyFetch} from '.';

export const addNews = (userId, author, title, description, fileName) => (dispatch) =>
  fetchThenDispatch(
      dispatch,
      '/api/cms/add',
      'POST',
      JSON.stringify({userId, author, title, description, fileName}),
  );

export const loadFile = (data) =>
  onlyFetch(
      '/api/cms/upload',
      'POST',
      data,
  );

export const removeNews = (id) => (dispatch) =>
  fetchThenDispatch(
      dispatch,
      `/api/cms/remove`,
      'DELETE',
      JSON.stringify({id}),
  );

export const editNews = (id, title, description, fileName) => (dispatch) =>
  fetchThenDispatch(
      dispatch,
      `/api/cms/edit`,
      'PUT',
      JSON.stringify({id, title, description, fileName}),
  );