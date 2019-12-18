import {TypeActions} from '../../TypeActions'

// export const AddNew = (title, color) =>
//     (dispatch, getState) => {
//         setTimeout(() =>
//             dispatch({
//                 type:TypeActions.ADD_NEWS,
//                 id,
//                 title,
//                 description
//             }),
//             2000
//         )
//     }

export const AddNew = (id, title, description) =>({
    type:TypeActions.ADD_NEWS,
    id,
    title,
    description
})


// import fetch from 'isomorphic-fetch'
// const parseResponse = response => response.json()
// const logError = error => console.error(error)
// const fetchThenDispatch = (dispatch, url, method, body) =>
//     fetch(
//     url,
//         {
//             method,
//             body,
//             headers: { 'Content-Type': 'application/json' }
//         }
//     ).then(parseResponse)
//     .then(dispatch)
//     .catch(logError)