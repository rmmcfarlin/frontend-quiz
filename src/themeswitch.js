import "./switchstyle.css"
import { useTheme } from './themeprovider'
import sunLight from './assets/images/icon-sun-light.svg'
import sunDark from './assets/images/icon-sun-dark.svg'
import moonLight from './assets/images/icon-moon-light.svg'
import moonDark from './assets/images/icon-moon-dark.svg'

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme();

    return(
       <div className="themeswitch">
         

        <label className="switch">
            <img src={sunLight} style={{display: theme === "light" ? "none" : "block"}} className="sun"></img>
            <img src={sunDark} style={{display: theme === "light" ? "block" : "none"}} className="sun"></img>
            <input
              type="checkbox"
              checked={theme === "light"}
              onChange={toggleTheme}/>
            <span className="slider round" />
            <img src={moonLight} style={{display: theme === "light" ? "none" : "block"}} className="moon"></img>
            <img src={moonDark} style={{display: theme === "light" ? "block" : "none"}} className="moon"></img>
        </label>

        

       </div>
    )
}

export default ThemeSwitch