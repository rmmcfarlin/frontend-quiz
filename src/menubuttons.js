
import htmlIcon from "./assets/images/icon-html.svg"
import cssIcon from "./assets/images/icon-css.svg"
import jsIcon from "./assets/images/icon-js.svg"
import acessibilityIcon from "./assets/images/icon-accessibility.svg"

const QuizSelection = ({theme}) => {

    return (
            <div className="quizbuttons">
                <button className={`menubutton ${theme}`} >
                    <img src={htmlIcon} style={{backgroundColor:"#FFF5ED"}} className="buttonicon" alt="html icon"></img>
                    <p>HTML</p>
                </button>
                <button className={`menubutton ${theme}`}>
                    <img src={cssIcon} style={{backgroundColor:"#E0FDEF"}} className="buttonicon" alt="css icon"></img>
                    <p>CSS</p>
                </button>
                <button className={`menubutton ${theme}`}>
                    <img src={jsIcon} style={{backgroundColor:"#EBF0FF"}} className="buttonicon" alt="javascript icon"></img>
                    <p>Javascript</p>
                </button>
                <button className={`menubutton ${theme}`}>
                    <img src={acessibilityIcon} style={{backgroundColor:"#F6E7FF"}} className="buttonicon" alt="accessibility icon"></img>
                    <p>Accessibility</p>
                </button>

            </div>
    )
}

export default QuizSelection