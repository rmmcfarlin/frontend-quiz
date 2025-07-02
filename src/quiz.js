import quizData from "./data.json"


const Quiz = ({quizTitle}) => {
     
    let selectedQuiz = quizData.quizzes.find(q => q.title === quizTitle)

     let questionSet = selectedQuiz.questions

     let currQuestion = questionSet[i].question
     let currQuestionOptions = questionSet[i].options

    return (
    <div>
        <div className="quizquestion">
           <p>Question {questionNumber} of 10.</p>
           <p>{currQuestion}</p>
        </div>
        <div className="quizoptions">
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
        </div>
    </div>
    )
}


Quiz(quizData)