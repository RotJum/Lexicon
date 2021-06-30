import { toast } from "react-toastify";
import {GET_MOVIE_DETAIL} from '../actions/types'
export default (state=[],action)=>{
    switch (action.type){
        case GET_MOVIE_DETAIL:
          toast("I got  your Movie detail..");
      return [...state,action.payload]
     default:
       return state;
      }
    }