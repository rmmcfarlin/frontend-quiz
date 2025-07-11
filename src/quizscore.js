import QuizID from "./quizID"
import HTMLIcon from "./assets/images/icon-html.svg"
import CSSIcon from "./assets/images/icon-css.svg"
import JavaScriptIcon from "./assets/images/icon-js.svg"
import AccessibilityIcon from "./assets/images/icon-accessibility.svg"

const QuizScore = ({theme, quizName, score, setQuizName, setQuizCompleted, setScore}) => {

    const iconMap = {
        HTML: HTMLIcon,
        CSS: CSSIcon,
        JavaScript: JavaScriptIcon,
        Accessibility: AccessibilityIcon
    }

    const bgColors = {
        HTML: "#FFF5ED",
        CSS: "#E0FDEF",
        JavaScript: "#EBF0FF",
        Accessibility: "#F6E7FF"
    }

   const handleClick = (option) => {
    setQuizName(option)
    setQuizCompleted(false);
    setScore(0)
   }

    return (
        <>
            <div className="menutext">
                <p id="completed">Quiz Completed!</p>
                <p id="scored">You scored...</p>
            </div>
            <div className="quizbuttons">
                <div className={`scoreoutput ${theme}`}>
                    <QuizID quizName={quizName}/>
                    <p>{score}</p>
                    <p>out of 10</p>
                </div>
                <div className="scorebuttons">
                    <button className={"submitbutton halfbutton"} onClick={() => handleClick(quizName)}>Play Again</button>
                    <button className={"submitbutton halfbutton"} onClick={() => handleClick(null)}>Menu</button>
                </div>
            </div>
        </>
    )
}

export default QuizScore