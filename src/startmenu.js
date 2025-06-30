import htmlIcon from "./assets/images/icon-html.svg"
import cssIcon from "./assets/images/icon-css.svg"
import jsIcon from "./assets/images/icon-js.svg"
import acessibilityIcon from "./assets/images/icon-accessibility.svg"


const StartMenu = () => {

    return (

        <div className="startmenu">
            <div className="menutext">
                <p>Welcome to the</p>
                <p><b>Frontend Quiz</b></p>
                <p>Pick a subject to get started.</p>
            </div>
            <div className="quizbuttons">
                <button className="menubutton">
                    <img src={htmlIcon} style={{backgroundColor:"#FFF5ED"}} className="menubuttonicon" alt="html icon"></img>
                    <p>HTML</p>
                </button>
                <button className="menubutton">
                    <img src={cssIcon} style={{backgroundColor:"#E0FDEF"}} className="menubuttonicon" alt="css icon"></img>
                    <p>CSS</p>
                </button>
                <button className="menubutton">
                    <img src={jsIcon} style={{backgroundColor:"#EBF0FF"}} className="menubuttonicon" alt="javascript icon"></img>
                    <p>Javascript</p>
                </button>
                <button className="menubutton">
                    <img src={acessibilityIcon} style={{backgroundColor:"#F6E7FF"}} className="menubuttonicon" alt="accessibility icon"></img>
                    <p>Accessibility</p>
                </button>

            </div>
        </div>
    )
}

export default StartMenu