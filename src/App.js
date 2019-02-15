import React, { Component } from 'react'
import './App.css'
import Quiz  from './Quiz.js'

 /* NOTES: 
 ----------------------------
    // apparently spacing matters

    return <Quiz / > // works
    return ( < Quiz / > ) // works
    return 
        ( <Quiz /> ) // fails
    return 
         <Quiz /> // fails
    */
class App extends Component {
  render() {
    return <Quiz />  
   
    
  }
}

export default App