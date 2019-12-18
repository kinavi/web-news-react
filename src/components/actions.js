import fetch from 'isomorphic-fetch'

const parseResponse = response => response.json()

const logError = error => console.error(error)

const fetchThenDispatch = (dispatch, url, method, body) =>
    fetch(url, {method, body, headers: { 'Content-Type': 'application/json' }})
        .then(parseResponse)
        .then(dispatch)
        .catch(logError)

const onlyFetch = ( url, method, body, )=>
    fetch(url, {method, body})
        .then(parseResponse)
        .catch(logError)

export const addNews = (title, description, fileName) => dispatch =>
    fetchThenDispatch(
        dispatch,
        '/api/news',
        'POST',
        JSON.stringify({title, description, fileName})
    )

export const loadFile = (data) => 
    onlyFetch(
        '/api/upload',
        'POST',
        data
    )

export const removeNews = id => dispatch =>
    fetchThenDispatch(
        dispatch,
        `/api/news`,
        'DELETE',
        JSON.stringify({id})
    )

export const editNews = (id, title, description) => dispatch =>
    fetchThenDispatch(
        dispatch,
        `/api/news`,
        'PUT',
        JSON.stringify({id, title, description})
    )
