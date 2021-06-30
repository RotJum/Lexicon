import api from '../../api/movieapi'
import {GET_MOVIE_DETAIL,FETCH_MOVIES} from './types'
import axios from 'axios'
import _ from 'lodash'
//This fetches all movies from filmworld

export const fetchMovie =()=> async dispatch =>{ 
    const response = await api;
  dispatch({type:FETCH_MOVIES, payload:response.data})
  
  }
//get the detail of each filmword movie by Id

export const GetMovieDtail =(ID)=> async dispatch =>{ 
    const response = await axios.get(`https://challenge.lexicondigital.com.au/api/filmworld/movie/${ID}`,{
       headers:{
           "x-api-key": "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7",
      }
     });
  dispatch({type: GET_MOVIE_DETAIL, payload:response.data})
  
  }

  






/*

const fetchMovie =(movie=null,action)=>{
    axios.get("https://challenge.lexicondigital.com.au/api/filmworld/movies",{
     headers:{
         "x-api-key": "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7",
    }
   })
   if(action.type==='MOVIE_SELECTED') {
     return action.payload;
   }
   return movie;
 }

 */