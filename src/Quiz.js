import React, { Component } from 'react';

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = { quiz_position: 1 }
    }
    render() {
     
        return (
            <div>
                <div className="QuizQuestion">{quizData.quiz_questions[0].instruction_text}</div>
                
            </div>
        )

        /**
         * <div className="QuizQuestions">
                <ol>
                        <li>{quizData.quiz_questions[0].instruction_text}</li>
                        <li>{quizData.quiz_questions[1].instruction_text}</li>
                  
                    </ol>
                </div>
         */


    }
}

export default Quiz;