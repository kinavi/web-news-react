// import fetch from 'isomorphic-fetch';

// const parseResponse = (response) => response.json();

// const logError = (error) => console.error(error);

// export const fetchThenDispatch = (dispatch, url, method, body) =>
//   fetch(url, {method, body, headers: {'Content-Type': 'application/json'}, credentials: 'include'})
//       .then(parseResponse)
//       .then(dispatch)
//       .catch(logError);

// export const onlyFetch = ( url, method, body )=>
//   fetch(url, {method, body})
//       .then(parseResponse)
//       .catch(logError);

// export const addNews = (title, description, fileName) => (dispatch) =>
//   fetchThenDispatch(
//       dispatch,
//       '/api/cms',
//       'POST',
//       JSON.stringify({title, description, fileName}),
//   );

// export const loadFile = (data) =>
//   onlyFetch(
//       '/api/cms/upload',
//       'POST',
//       data,
//   );

// export const removeNews = (id) => (dispatch) =>
//   fetchThenDispatch(
//       dispatch,
//       `/api/cms`,
//       'DELETE',
//       JSON.stringify({id}),
//   );

// export const editNews = (id, title, description, fileName) => (dispatch) =>
//   fetchThenDispatch(
//       dispatch,
//       `/api/cms`,
//       'PUT',
//       JSON.stringify({id, title, description, fileName}),
//   );

// export const loadDataAll = ()=> async (dispatch) =>{
//   const news = await News.find({});
//   console.log('news - ', news);

//   dispatch({
//     type: ActionsNews.LOAD_DATA_ALL,
//     news,
//   });

//   // fetch('http://localhost:3000/api/users/current', {method: 'POST', body: {}, headers: {'Content-Type': 'application/json'}})
//   //     .then(parseResponse)
//   //     .then(dispatch)
//   //     .catch(logError);

//   // fetchThenDispatch(
//   //     dispatch,
//   //     '/api/users/current',
//   //     'GET',
//   // );
// };

// // export const checkAuth = () => async (dispatch) =>{

// // }
// // fetchThenDispatch(
// //     dispatch,
// //     '/api/',
// //     'GET',
// // );
