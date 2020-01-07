import { App_R } from './Redusers/App_R'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const clientLogger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

const serverLogger = store => next => action => {
    console.log('\n dispatching server action\n')
    console.log(action)
    console.log('\n')
    return next(action)
}

const middleware = server =>[
    (server) ? serverLogger : clientLogger,
    thunk
]
    
// const composeEnhancers =
//   typeof window !== 'undefined'
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : compose; // eslint-disable-line

// let state;
// if (typeof window !== 'undefined') {
//   state = window.__PRELOADED_STATE__;
//   delete window.__PRELOADED_STATE__;
// }


const storeFactory = (server = false, initialState = {}) =>
    applyMiddleware(...middleware(server))(createStore)(
        App_R,
        initialState
    )

export default storeFactory