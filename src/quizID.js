import HTMLIcon from "./assets/images/icon-html.svg"
import CSSIcon from "./assets/images/icon-css.svg"
import JavaScriptIcon from "./assets/images/icon-js.svg"
import AccessibilityIcon from "./assets/images/icon-accessibility.svg"


const QuizID = ({quizName, className}) => {
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

    return (
        <div className={`scoreID ${className}`}>
                        <img src={iconMap[quizName]} style={{width:"40px", display:"block", backgroundColor:bgColors[quizName], borderRadius:"8px"}}></img>
                        <p>{quizName}</p>
                    </div>
    )
}

export default QuizID