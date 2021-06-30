import React,{Component} from 'react'

import {connect} from 'react-redux'
import {GetMovieDtail} from '../store/actions'

class MovieDetail extends Component {

    componentDidMount(){
        this.props.GetMovieDtail(this.props.ID);
    }

  render(){
      console.log(this.props.movDetail)
   const mvDetail = this.props.movDetail.find((id)=>id.ID ===this.props.ID);
   if(!mvDetail){
      return ( <div>        
          Loading...
              </div>)
   }
   else
        return ( 
            
                        <div>
               <div>
                 <h6>Actors</h6>         
               <small><i>{mvDetail.Actors}</i></small>
               </div>
               <div>
                 <h6>Year</h6>         
               <small><i>{mvDetail.Year}</i></small>
               </div>

               <div>
                 <h6>Runtime</h6>         
               <small><i>{mvDetail.Runtime}</i></small>
               </div>



        </div>
        
    )
 
    }
}

const mapStateToProps =(state)=>{
    console.log(state)
    return {
      movDetail:state.Mdetail
    }
}

export default connect(mapStateToProps,{GetMovieDtail})(MovieDetail)