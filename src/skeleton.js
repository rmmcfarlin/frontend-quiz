
const AppSkeleton = ({theme, children}) => {
    
    

    return (
        <div className={`appcontainer ${theme}`}>
            {children}
        </div>
    )
}

export default AppSkeleton