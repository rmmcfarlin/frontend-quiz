import { useState } from "react"
import quizData from "./data.json"
import incorrectIcon from "./assets/images/icon-incorrect.svg"
import correctIcon from "./assets/images/icon-correct.svg"


const Quiz = ({theme, title}) => {
     console.log(title)

    const [i, setI] = useState(0)
    const [answerValue, setAnswerValue] = useState("")
    const [selectedAnswer, setSelectedAnswer] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    
    let questionNumber = i + 1
    let selectedQuiz = quizData.quizzes.find(q => q.title === title)
    let current = selectedQuiz.questions[i]
    let currQuestion = current.question
    let currQuestionOptions = current.options
    let correctAnswer = current.answer


    const selectAnswer = (id) => {
        setSelectedAnswer(currQuestionOptions[id])
    }

    const handleSubmit = () => {
        selectedAnswer === correctAnswer ? setAnswerValue("correct") : setAnswerValue("incorrect")
        setIsSubmitted(true)
    }

    let answerIcon = null 
    if (answerValue !== "") {
        answerValue === "correct" ? answerIcon = correctIcon : answerIcon = incorrectIcon}
    

    let classNames = `quizbutton ${theme}`

    return (
    <>
        <div className="menutext">
           <p id="questionnumber">Question {questionNumber} of 10.</p>
           <p id="quizquestion">{currQuestion}</p>
        </div>
        <div className="quizbuttons">
             <button className={`quizbutton ${answerValue} ${theme}`} onClick={() => selectAnswer(0)}>
                    <p className={`quizbuttonicon ${theme}`}>A</p>
                    <p>{currQuestionOptions[0]}</p>
                    {answerIcon && 
                    (<img src={answerIcon} alt="Incorrect Answer Icon, red X" style={{width: "30px", display:"block"}}></img>)}
                </button>
                <button className={`quizbutton ${answerValue} ${theme}`} onClick={() => selectAnswer(1)}>
                    <p className={`quizbuttonicon ${theme}`}>B</p>
                    <p>{currQuestionOptions[1]}</p>
                </button>
                <button className={`quizbutton ${theme}`} onClick={() => selectAnswer(2)}>
                    <p className={`quizbuttonicon ${theme}`}>C</p>
                    <p>{currQuestionOptions[2]}</p>
                </button>
                <button className={`quizbutton ${theme}`} onClick={() => selectAnswer(3)}>
                    <p className={`quizbuttonicon ${theme}`}>D</p>
                    <p>{currQuestionOptions[3]}</p>
                </button>
                <button className="submitbutton" onClick={handleSubmit}>Submit Answer</button>
        </div>
    </>
    )
}


export default Quiz