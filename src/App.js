import React, { Component } from 'react'
import './App.css'
import Quiz  from './Quiz.js'


class App extends Component {
  render() {
    return <Quiz />  
    /*
    // apparently spacing matters

    return <Quiz / > // works
    return ( < Quiz / > ) // works
    return 
        ( <Quiz /> ) // fails
    return 
         <Quiz /> // fails
    */
    
  }
}

export default App