import { toast } from "react-toastify";
import {FETCH_MOVIES} from '../actions/types'
export default (state=[],action)=>{
    switch (action.type){
        case FETCH_MOVIES:
          toast("I fetched  your Movie..");
      return action.payload;
     default:
       return state;
      }
    }