import axios from 'axios';
import { FETCH_ARTICLE } from '../constants/article'

const service = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3001/article',
  });
  
//   const errHandler = err => {
//     console.error(err);
//     throw err;
//   };
  
  export function fetchArticle(){
      return function(dispatch){
          return service.get('/')
        .then(response=>{
            const articleObj = response.data[0]
            const data = {
                id: articleObj.id,
                content : articleObj.content,
                comment : articleObj.comment
                
            }
            console.log("iniii",response)
        dispatch({
            type: FETCH_ARTICLE,
            payload:{
                data
            }
        })
        
        })
    }
}
  
