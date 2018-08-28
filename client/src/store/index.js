import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducer from '../reducers/index'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(promise(), thunk, logger)
)

export default store;