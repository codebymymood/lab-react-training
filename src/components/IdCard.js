
 function IdCard(props) {
    return (
        <div>
           First Name: {props.firstName} <br/>
           Last Name:{props.lastName} <br/>          
           Gender:{props.gender}<br/>
           Height:{props.height} <br/>
           Birthday:{props.birth.toLocaleDateString()}<br/>
           Profile Image: <img src={props.picture}></img>
           
        </div>
    )
}

export default IdCard