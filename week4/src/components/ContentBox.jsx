const ContentBox = ({value}) => {
    return(
        <div className="content_box">{!value ? "ContentBox": value} {value}</div>

    )
}

export default ContentBox;