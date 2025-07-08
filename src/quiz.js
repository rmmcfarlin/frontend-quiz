import { useState } from "react"
import quizData from "./data.json"
import incorrectIcon from "./assets/images/icon-incorrect.svg"
import correctIcon from "./assets/images/icon-correct.svg"


const Quiz = ({theme, title}) => {

    const [i, setI] = useState(0)
    const [answerValue, setAnswerValue] = useState("")
    const [selectedAnswer, setSelectedAnswer] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(null)
    const [correctIndex, setCorrectIndex] = useState(null)
    const options = ["A", "B", "C", "D"]
    
    let questionNumber = i + 1
    let selectedQuiz = quizData.quizzes.find(q => q.title === title)
    let current = selectedQuiz.questions[i]
    let currQuestion = current.question
    let currQuestionOptions = current.options
    let correctAnswer = current.answer

    const getCorrectIndex = () => {

        for (let i = 0; i < 4; i++) {
            if (currQuestionOptions[i] === correctAnswer) {
                setCorrectIndex(i)
            }
        }
    }

    const selectAnswer = (index) => {
        setSelectedAnswer(currQuestionOptions[index])
        setSelectedIndex(index)
        getCorrectIndex()
    }

    const handleSubmit = () => {
        selectedAnswer === correctAnswer ? setAnswerValue("correct") : setAnswerValue("incorrect")
        setIsSubmitted(true)
        getClass(selectedAnswer)
    }

    let answerIcon = null 
    if (answerValue !== "") {
        answerValue === "correct" ? answerIcon = correctIcon : answerIcon = incorrectIcon}
    

    
    
    const getClass = (index) => {
        let className = `quizbutton ${theme}`

        if (isSubmitted) {
            if (index === correctIndex) {
                className += " correct"
            } else if (index === selectedIndex) {
                className += " incorrect"
            } else {
                className = `quizbutton ${theme}`
            }
        }
         return className
    }

    const getIcon = (index) => {
         let answerIcon = null
         
          if (isSubmitted) {
            if (index === correctIndex) {
                answerIcon = correctIcon
            } else if (index === selectedIndex) {
                answerIcon = incorrectIcon
            } else {
                return
            }
        }
         return answerIcon

    }

    return (
    <>
        <div className="menutext">
           <p id="questionnumber">Question {questionNumber} of 10.</p>
           <p id="quizquestion">{currQuestion}</p>
        </div>
        <div className="quizbuttons">
            {options.map((option, index) => {
                
                const classNames = getClass(index)
                const ansIcon = getIcon(index)

                return (
                    <>
                    <button option={option} key={index} className={classNames} onClick={() => selectAnswer(index)}>
                        <p className={`quizbuttonicon ${theme}`}>{option}</p>
                        <p>{currQuestionOptions[index]}</p>
                        <img src={ansIcon} style={{width: "30px", display:"block"}}></img>
                    </button>
                    </>
                )
            })}
        <button className="submitbutton" onClick={handleSubmit}>Submit Answer</button>
        </div>
    </>
    )
}

export default Quiz