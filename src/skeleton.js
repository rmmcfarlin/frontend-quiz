
const AppSkeleton = ({theme: theme, content: Content, onClick: onClick}) => {

   

    return (
        <div className="appcontainer">
            <Content theme={theme} onClick={onClick}/>
        </div>
    )
}

export default AppSkeleton