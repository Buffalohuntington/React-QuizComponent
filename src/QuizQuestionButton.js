import React, { Component } from 'react'

 class QuizQuestionButton extends Component {
  render() {
    return (
      <div>
        <li><button>{this.props.button_text}</button></li>
      </div>
    )
  }
}

export default QuizQuestionButton