import { service } from './index'
import { FETCH_ARTICLE, POST_ARTICLE } from '../constants/article'

const urlFetch = '/'

export function fetchArticle() {
    return dispatch => {
        dispatch({
            type: FETCH_ARTICLE,
            payload: service.get(urlFetch)
        })
    }
}
export function postArticle() {
    
}

