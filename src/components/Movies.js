import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchMovie} from '../store/actions'
import MovieDetail from './MovieDetail'
//import {GetMovieDtail} from '../store/actions'

 class Movies extends Component {

       componentDidMount(){
           this.props.fetchMovie();
          // this.props.GetMovieDtail()
       }
       renderList=()=>{
if(!this.props.Movies)
        return (

            <div className="ui segment">
            <div className="ui active dimmer">
              <div className="ui indeterminate text loader">Preparing Files</div>
            </div>
            <p></p>
          </div>
        )
        
        else

        { this.props.Movies.map(movie =>{ 
           return( 
             <div className="item" key={movie.ID}>
              <div className="right floated content">
               <button className="ui button primary"
                
               >Select
               </button>
               </div>
          <div className=" content">
               {movie.Title}
              </div>
               <div className=" content">
               {movie.Type}
              </div>
              <div className=" content">
              <img src= {movie.Poster} height="150px" width="150px"/>
              </div>
             </div>
     )
          });}
      }

    render() {
        console.log(this.props.Provider.Provider)
        if(!this.props.Movies)
        return (

            <div className="ui segment">
            <div className="ui active dimmer">
              <div className="ui indeterminate text loader">Preparing Files</div>
            </div>
            <p></p>
          </div>
        )
        
        else
        return (
                        <div>
                           {this.props.Movies.map(movie =>
                            
                <table className="ui celled table" key={movie.ID} >
    <thead>
    <tr>
      <th>Title</th>
      <th>Type</th>
      <th>Poster</th>
      <th>Movie Detail</th>
    </tr>
    </thead>
    <tbody>
     
    <tr>
      <td>{movie.Title}</td>
      <td>{movie.Type}</td>
                           <td>
                             <img width="150px" height="220px" src={movie.Poster}/>
                             </td>
                           <td><MovieDetail ID={movie.ID}/></td>
    </tr>
    
    </tbody>
    </table>
    )}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{ 
    console.log(state)
    return{
        Provider:state.movies,
        Movies:state.movies.Movies,
        //MovieDetail:state.Mdetail
    }
     
 }
export default connect(mapStateToProps,{fetchMovie})(Movies)