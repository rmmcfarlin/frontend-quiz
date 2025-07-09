const RenderButton = ({i, isSubmitted, nextQuestion, handleSubmit, setQuizCompleted}) => {

    const viewScore = () => {
        setQuizCompleted(true)
    }

    {if (isSubmitted) {
      if (i < 9) {
            return (<button onClick={nextQuestion} className={"submitbutton"}>Next Question</button>)
        } else {
            return (<button className={"submitbutton"} onClick={viewScore}>View Score</button>)
        }
    } else {
            return (<button className="submitbutton" onClick={handleSubmit}>Submit Answer</button>)}
           }
}

export default RenderButton