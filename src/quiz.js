import { useState } from "react"
import quizData from "./data.json"
import incorrectIcon from "./assets/images/icon-incorrect.svg"
import correctIcon from "./assets/images/icon-correct.svg"
import RenderButton from "./actionbutton"
import QuizID from "./quizID"


const Quiz = ({theme, title, setQuizCompleted, setScore, score, quizName}) => {

    const [i, setI] = useState(0)
    const [answerValue, setAnswerValue] = useState("")
    const [selectedAnswer, setSelectedAnswer] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(null)
    const [correctIndex, setCorrectIndex] = useState(null)
    const [errorMsg, setErrorMsg] = useState(false)
    

    const options = ["A", "B", "C", "D"]
    
    let questionNumber = i + 1
    let selectedQuiz = quizData.quizzes.find(q => q.title === title)
    let current = selectedQuiz.questions[i]
    let currQuestion = current.question
    let currQuestionOptions = current.options
    let correctAnswer = current.answer

    console.log(score)

    const ErrorMessage = () => {
        return (
            <div className="errormessage">
             <img src={incorrectIcon} style={{width:"30px", display:"inline", marginRight:"0.5rem"}}></img>
             <span>Please select an answer</span> 
            </div>
        )
    }

    const getCorrectIndex = () => {

        for (let j = 0; j < 4; j++) {
            if (currQuestionOptions[j] === correctAnswer) {
                setCorrectIndex(j)
            }
        }
    }

    const selectAnswer = (index) => {
        setSelectedAnswer(currQuestionOptions[index])
        setSelectedIndex(index)
        getCorrectIndex()
        setErrorMsg(false)
    }

    const handleSubmit = () => {

        if (selectedAnswer === "") {
            setErrorMsg(true)
        } else {
                if (selectedAnswer === correctAnswer) {
                    setAnswerValue("correct")
                    setScore(score + 1)
                } else {
                    setAnswerValue("incorrect")
                }
             setIsSubmitted(true)
             getClass(selectedAnswer)
        }
    }

    const nextQuestion = () => {
        setI(i + 1)
        setAnswerValue("")
        setIsSubmitted(false)
        setSelectedAnswer("")
        setSelectedIndex(null)
        setCorrectIndex(null)
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
                    <button option={option} key={index} className={classNames} onClick={() => selectAnswer(index)} disabled={isSubmitted}>
                        <p className={`quizbuttonicon ${theme}`}>{option}</p>
                        <p>{currQuestionOptions[index]}</p>
                        <img src={ansIcon} style={{width: "30px", display:"block"}}></img>
                    </button>
                    </>
                )
            })}
            <RenderButton i={i} isSubmitted={isSubmitted} nextQuestion={nextQuestion} handleSubmit={handleSubmit} setQuizCompleted={setQuizCompleted}/>
            {errorMsg ? 
            (<ErrorMessage />)
            : (<></>)}
        </div>
    </>
    )
}

export default Quiz