const QuizScore = () => {

    return (
        <>
            <div>
                <p>Quiz Completed!</p>
                <p>You scored...</p>
            </div>
            <div>
                <p>quizName</p>
                <p>score</p>
                <p>out of 10</p>
                <button className={"submitbutton"}>Play Again</button>
                <button className={"submitbutton"}>Menu</button>
            </div>
        </>
    )
}

export default QuizScore