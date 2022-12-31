import "./info.css"

const Info = (props)=>{
    return(
        <>
        <div className="counter">
            <p className="number">{props.number}</p>
            <h3 className="titleh2">{props.title}</h3>
        </div>
        </>
    )
}

export default Info