import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

export default createStoreWithMiddleware;