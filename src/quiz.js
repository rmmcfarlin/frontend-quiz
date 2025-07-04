import { useState } from "react"
import quizData from "./data.json"


const Quiz = ({theme, quizTitle}) => {
     

    const [i, setI] = useState(0)

    let questionNumber = i + 1

    let selectedQuiz = quizData.quizzes.find(q => q.title === "HTML")
    let current = selectedQuiz.questions[i]
    let currQuestion = current.question
    let currQuestionOptions = current.options

    const handleSubmit = () => {
        
        setI(i + 1)
    }


    return (
    <>
        <div className="menutext">
           <p id="questionnumber">Question {questionNumber} of 10.</p>
           <p id="quizquestion">{currQuestion}</p>
        </div>
        <div className="quizbuttons">
             <button className={`quizbutton ${theme}`}>
                    <p className="buttonicon">A</p>
                    <p>{currQuestionOptions[0]}</p>
                </button>
                <button className={`quizbutton ${theme}`}>
                    <p className="buttonicon">B</p>
                    <p>{currQuestionOptions[1]}</p>
                </button>
                <button className={`quizbutton ${theme}`}>
                    <p className="buttonicon">C</p>
                    <p>{currQuestionOptions[2]}</p>
                </button>
                <button className={`quizbutton ${theme}`}>
                    <p className="buttonicon">D</p>
                    <p>{currQuestionOptions[3]}</p>
                </button>
                <button className="submitbutton" onClick={handleSubmit}>Submit Answer</button>
        </div>
    </>
    )
}


export default Quiz