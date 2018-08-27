import axios from 'axios';
import { FETCH_ARTICLE } from '../constants/article'

const service = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3001/article',
  });
  
  const errHandler = err => {
    console.error(err);
    throw err;
  };
  
  
  export function fetchArticle(){
      return function(dispatch){
          return service.get('/')
        .then(response=>{
            console.log("iniii",response)
        dispatch({
            type: FETCH_ARTICLE,
            payload:"hello"
        })
        })
    }
}
  
