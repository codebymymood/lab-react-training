

 function BoxColor(props) {
    
    let divStyle = {
        // backgroundColor: 'blue',
        backgroundColor: `rgb(${props.r}, ${props.g} , ${props.b})`,
        height: 100,
        width: 400,
        margin: 10,
        border: 'black',
    }

    
    return (
        <div style={divStyle}>
           RGB( {props.r}, {props.g},{props.b})          
              
        </div>
    )
}
export default BoxColor