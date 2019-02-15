import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = { quiz_position: 1 }
    }
    render() {
     
        return (
            <div>
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position-1]} />
                
            </div>
        )

    }
}

/**
 * <div className="QuizQuestions">
        <ol>
                <li>{quizData.quiz_questions[0].instruction_text}</li>
                <li>{quizData.quiz_questions[1].instruction_text}</li>
          
            </ol>
        </div>
 */
export default Quiz;