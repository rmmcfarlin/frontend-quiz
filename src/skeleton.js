
const AppSkeleton = ({theme: theme, leftContent: LeftContent, rightContent: RightContent}) => {

   

    return (
        <div className="appcontainer">
            <div className="leftcontent">
                <LeftContent theme={theme} />
            </div>
            <div className="rightcontent">
                <RightContent theme={theme} />
            </div >
        </div>
    )
}

export default AppSkeleton