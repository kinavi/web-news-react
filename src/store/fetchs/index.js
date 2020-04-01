import fetch from 'isomorphic-fetch';

const parseResponse = (response) => response.json();

const logError = (error) => console.error(error);

export const fetchThenDispatch = (dispatch, url, method, body) =>
  fetch(url, {
    method,
    body,
    headers: {'Content-Type': 'application/json'},
    credentials: 'include',
  })
      .then(parseResponse)
      .then(dispatch)
      .catch(logError);

export const onlyFetch = ( url, method, body )=>
  fetch(url, {
    method,
    body,
  })
      .then(parseResponse)
      .catch(logError);


