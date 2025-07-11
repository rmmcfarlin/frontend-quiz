

const ProgressBar = ({theme, progress}) => {

    let progressPercent = (progress - 1) * 10

     const root = document.documentElement;
        root.style.setProperty('--progress', `${progressPercent}%`)

    return (
        <input type="range" min="1" max="10" id="progressbar" value={progress} className={theme} disabled></input>
    )
}

export default ProgressBar