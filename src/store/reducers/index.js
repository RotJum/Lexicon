import {combineReducers} from 'redux'
import movieReducer from './movieReducer'
import getMovieDReducer from './getMovieDReducer'




export default combineReducers({ 
   movies:movieReducer,
   Mdetail:getMovieDReducer
    
     })