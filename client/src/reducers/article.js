import { FETCH_ARTICLE } from '../constants/article'

const INITIAL_STATE = {
    article: null
}
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_ARTICLE:
            return {
                ...state,
                article: action.payload.data
            };
        default:
            return state;
    }
}