import React, {Component} from 'react';
import Movies from './Movies'
import Header from './layout/Header'
class App extends Component {

 
 
  render(){
  
    return(
      <div>
        <Header/>
        <div className="ui container grid">
         <div className="ui row">
        <div className="column eight wide">
      <Movies />
           </div>
           <div className="column eight wide">
   
       </div>
         </div>
         </div>
        </div>
    )
}
}


export default App
