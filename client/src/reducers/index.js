import { combineReducers } from 'redux'

//reducers import
import articleReducer from './article'

//combine multi reducer
const rootReducer = combineReducers({
    articles: articleReducer
});

export default rootReducer;