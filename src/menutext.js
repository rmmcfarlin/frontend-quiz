
const MenuText = ({theme}) => {

    return (
        <div className="startmenu">
            <div className={`menutext ${theme}`}>
                <p>Welcome to the</p>
                <p><b>Frontend Quiz</b></p>
                <p>Pick a subject to get started.</p>
            </div>
        </div>
    )
}

export default MenuText