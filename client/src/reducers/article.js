import { FETCH_ARTICLE, POST_ARTICLE } from '../constants/article'

const initialState = {
    article:[],
    fetching: false,
    fetched: false,
    error: null,

}
export default function (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_ARTICLE_FULFILLED': {
            return {
                ...state,
                fetching: true,
                article: action.payload.data
            };
        }
        // case 'FETCH_ARTICLE_REJECTED': {
        //     return {
        //         ...state,
        //         fetching: false,
        //         error: action.payload
        //     }
        // }
        // case 'FETCH_ARTICLE_FULFILLED': {
        //     return {
        //         ...state,
        //         fetching: false,
        //         fetched: true,
        //         tweets: action.payload,
        //     }
        // }
        default:
            return state;
    }
}